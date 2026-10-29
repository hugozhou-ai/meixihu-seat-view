import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Slider, Switch, Canvas } from "@tarojs/components";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { seatEye, labelSeat, rowsFor } from "../../layout.js";
import { stageViewpoints, stageViewEye } from "../../stage-view.js";
import { loadStageActors } from "../../stage-actors.js";
import { assetUrl, stageActorDataUrl } from "../../assets.js";
import { VENUES, getVenue } from "../../venues.js";
import {
  LucideIcon,
  SegmentedTabs,
  PickerSelect,
  ModalDialog,
} from "../../components/ui.jsx";
import { SeatMapCanvas } from "../../components/SeatMapCanvas.jsx";
import { MiniControls } from "../../components/MiniControls.jsx";
import { beginGesture, moveGesture, finishGesture, viewportPoint, canvasTouches } from "../../viewport-gestures.js";

function readMiniWindow() {
  const info = Taro.getWindowInfo();
  const menu = Taro.getMenuButtonBoundingClientRect();
  return {
    width: info.windowWidth, height: info.windowHeight,
    left: info.safeArea.left,
    right: Math.max(0, info.windowWidth - info.safeArea.right),
    bottom: Math.max(0, info.windowHeight - info.safeArea.bottom),
    header: Math.max(48, menu.bottom + 8),
    menuLeft: menu.left,
  };
}

const DEFAULT_FOV = 75;
const ZONE_LABELS = {
  M: "中间区",
  L: "左侧区",
  R: "右侧区",
  P: "乐池活动区",
  BL: "左包厢",
  BR: "右包厢",
};

function getInitialQueryParams() {
  try {
    const inst = Taro.getCurrentInstance?.();
    if (inst?.router?.params && Object.keys(inst.router.params).length > 0) {
      return inst.router.params;
    }
  } catch {}
  if (typeof window !== "undefined" && window.location) {
    const searchStr =
      window.location.search ||
      (window.location.hash.includes("?")
        ? window.location.hash.slice(window.location.hash.indexOf("?"))
        : "");
    const sp = new URLSearchParams(searchStr);
    return {
      theatre: sp.get("theatre") || undefined,
      seat: sp.get("seat") || undefined,
      stage: sp.get("stage") || undefined,
      view: sp.get("view") || undefined,
    };
  }
  return {};
}

function logEvent(event, data = {}) {
  console.info("[THEATRE_VIEW]", JSON.stringify({ event, ...data }));
}

async function requestAssetBuffer(url) {
  if (process.env.TARO_ENV === "weapp") {
    const response = await Taro.request({ url, responseType: "arraybuffer", timeout: 30000 });
    if (response.statusCode !== 200) throw new Error(`舞台人物资源请求失败：HTTP ${response.statusCode}`);
    return response.data;
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error(`舞台人物资源请求失败：HTTP ${response.status}`);
  return response.arrayBuffer();
}

export default function IndexPage() {
  const isWeapp = process.env.TARO_ENV === "weapp";
  const [miniWindow, setMiniWindow] = useState(() => isWeapp ? readMiniWindow() : null);
  const initialParams = useMemo(() => getInitialQueryParams(), []);
  const initialVenueId = useMemo(() => {
    const candidate = initialParams.theatre || "meixihu";
    return VENUES.some((v) => v.id === candidate) ? candidate : "meixihu";
  }, [initialParams]);

  const [venueId, setVenueId] = useState(initialVenueId);
  const venue = useMemo(() => getVenue(venueId), [venueId]);
  const seats = useMemo(() => venue.makeLayout(), [venue]);
  const seatById = useMemo(
    () => new Map(seats.map((s, i) => [s.seatId, { seat: s, index: i }])),
    [seats],
  );
  const stagePoints = useMemo(() => stageViewpoints(venue.stage), [venue]);

  const defaultSeatObj = useMemo(
    () => seatById.get(venue.defaultSeat)?.seat || seats[0],
    [seatById, venue, seats],
  );

  const [selectedSeat, setSelectedSeat] = useState(() => {
    const fromParam = initialParams.seat && seatById.get(initialParams.seat)?.seat;
    return fromParam || defaultSeatObj;
  });
  const [stagePoint, setStagePoint] = useState(() => {
    const fromParam =
      initialParams.stage && stagePoints.find((p) => p.id === initialParams.stage);
    return fromParam || stagePoints[0];
  });
  const [mode, setMode] = useState(() => {
    if (initialParams.view === "overview") return "overview";
    if (initialParams.stage && stagePoints.some((p) => p.id === initialParams.stage))
      return "stage";
    return "seat";
  });
  const [perspective, setPerspective] = useState(() =>
    initialParams.stage && stagePoints.some((p) => p.id === initialParams.stage)
      ? "stage"
      : "seat",
  );
  const [floor, setFloor] = useState(() => selectedSeat?.level || "1F");
  const [eyeHeight, setEyeHeight] = useState(1.16);
  const [fov, setFovState] = useState(DEFAULT_FOV);
  const [lighting, setLighting] = useState("house");
  const [pitVisible, setPitVisibleState] = useState(true);
  const [actorVisible, setActorVisible] = useState(true);
  const [panelCollapsed, setPanelCollapsed] = useState(false);

  // Cascading form state
  const [zoneValue, setZoneValue] = useState(() => selectedSeat?.zone || "M");
  const [rowValue, setRowValue] = useState(() => selectedSeat?.row || 1);
  const [numberValue, setNumberValue] = useState(() => selectedSeat?.number || 1);

  // Dialog states
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [referenceOpen, setReferenceOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [activeRefFile, setActiveRefFile] = useState(
    () => venue.references[0]?.file || "",
  );
  const modalOpen = settingsOpen || referenceOpen || infoOpen || mapOpen;
  const [exportStatus, setExportStatus] = useState("");
  const [exportingGlb, setExportingGlb] = useState(false);

  // Runtime status & toast
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [renderStatus, setRenderStatus] = useState("正在加载场景");
  const [toastMsg, setToastMsg] = useState("");
  const toastTimerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMsg(""), 2300);
  }, []);

  const engineRef = useRef({
    renderer: null,
    scene: null,
    camera: null,
    theatre: null,
    rafId: null,
    canvasNode: null,
    width: 1280,
    height: 720,
    yaw: 0,
    pitch: 0,
    orbitTarget: new THREE.Vector3(0, 3, 16),
    orbitRadius: 42,
    orbitTheta: -0.58,
    orbitPhi: 1.08,
    transition: null,
    frames: 0,
    fps: 0,
    lastRenderMs: 0,
    errors: [],
    drag: null,
    touchGesture: null,
    viewportRect: null,
    venue,
    seats,
    seatById,
    stagePoints,
    selectedSeat,
    stagePoint,
    mode,
    perspective,
    floor,
    eyeHeight: 1.16,
    fov: DEFAULT_FOV,
    lighting: "house",
    pitVisible: true,
    actorVisible: true,
    ready: false,
  });

  Object.assign(engineRef.current, {
    venue,
    seats,
    seatById,
    stagePoints,
    selectedSeat,
    stagePoint,
    mode,
    perspective,
    floor,
    eyeHeight,
    fov,
    lighting,
    pitVisible,
    actorVisible,
    ready,
    modalOpen: isWeapp && modalOpen,
  });

  const viewportHostRef = useRef(null);

  const availableZones = useMemo(() => {
    const order = ["M", "L", "R", "BL", "BR", "P"];
    const zones = order.filter(
      (z) =>
        (pitVisible || z !== "P") &&
        seats.some((s) => s.level === floor && s.zone === z),
    );
    return zones.map((z) => ({
      value: z,
      label: z === "M" && floor === "1F" ? "池座正中" : ZONE_LABELS[z],
    }));
  }, [seats, floor, pitVisible]);

  const availableRows = useMemo(() => {
    const rList = rowsFor(seats, floor, zoneValue);
    const isBox = zoneValue.startsWith("B");
    return rList.map((r) => {
      const sample = seats.find(
        (s) => s.level === floor && s.zone === zoneValue && s.row === r,
      );
      return {
        value: r,
        label: isBox ? `${sample?.box ?? r}号包厢` : `第 ${r} 排`,
      };
    });
  }, [seats, floor, zoneValue]);

  const availableNumbers = useMemo(() => {
    const arr = seats.filter(
      (s) =>
        s.level === floor &&
        s.zone === zoneValue &&
        Number(s.row) === Number(rowValue),
    );
    return arr.map((s) => ({
      value: s.number,
      label: `${s.number} 座`,
    }));
  }, [seats, floor, zoneValue, rowValue]);

  const syncAnglesFromCamera = useCallback(() => {
    const cam = engineRef.current.camera;
    if (!cam) return;
    const e = new THREE.Euler().setFromQuaternion(cam.quaternion, "YXZ");
    engineRef.current.pitch = e.x;
    engineRef.current.yaw = e.y;
  }, []);

  const applyCameraAngles = useCallback(() => {
    const cam = engineRef.current.camera;
    if (!cam) return;
    cam.quaternion.setFromEuler(
      new THREE.Euler(engineRef.current.pitch, engineRef.current.yaw, 0, "YXZ"),
    );
  }, []);

  const applyOrbitCamera = useCallback(() => {
    const eng = engineRef.current;
    const cam = eng.camera;
    if (!cam) return;
    const r = THREE.MathUtils.clamp(eng.orbitRadius, 13, 85);
    const phi = THREE.MathUtils.clamp(eng.orbitPhi, 0.13, Math.PI * 0.48);
    const theta = eng.orbitTheta;
    const sinPhi = Math.sin(phi);
    cam.position.set(
      eng.orbitTarget.x + r * sinPhi * Math.sin(theta),
      eng.orbitTarget.y + r * Math.cos(phi),
      eng.orbitTarget.z + r * sinPhi * Math.cos(theta),
    );
    cam.lookAt(eng.orbitTarget);
  }, []);

  const syncUrlParams = useCallback(
    (nextVenueId, nextSeatId, nextStageId) => {
      if (
        isWeapp ||
        typeof window === "undefined" ||
        !window.history?.replaceState
      )
        return;
      try {
        const u = new URL(window.location.href);
        u.searchParams.set("theatre", nextVenueId);
        if (nextStageId) {
          u.searchParams.set("stage", nextStageId);
          u.searchParams.delete("seat");
        } else if (nextSeatId) {
          u.searchParams.set("seat", nextSeatId);
          u.searchParams.delete("stage");
        }
        window.history.replaceState(null, "", u);
      } catch {}
    },
    [isWeapp],
  );

  const goToSeat = useCallback(
    (seat, { animate = true, updateUrl = true } = {}) => {
      if (!seat) return;
      const eng = engineRef.current;
      const cam = eng.camera;
      const previous = eng.selectedSeat;

      eng.selectedSeat = seat;
      eng.floor = seat.level;
      eng.mode = "seat";
      eng.perspective = "seat";

      setSelectedSeat(seat);
      setFloor(seat.level);
      setMode("seat");
      setPerspective("seat");
      setZoneValue(seat.zone);
      setRowValue(seat.row);
      setNumberValue(seat.number);

      if (eng.theatre) {
        eng.theatre.setOverview(false);
        eng.theatre.actor.visible = eng.actorVisible;
        eng.theatre.marker.position.set(
          seat.position[0],
          seat.position[1] + 0.045,
          seat.position[2],
        );
      }

      if (cam) {
        cam.fov = eng.fov;
        cam.updateProjectionMatrix();
        const destPos = new THREE.Vector3(...seatEye(seat, eng.eyeHeight));
        const temp = new THREE.PerspectiveCamera();
        temp.position.copy(destPos);
        temp.lookAt(...eng.venue.stage.target);
        const destQuat = temp.quaternion.clone();

        if (animate && previous && previous.seatId !== seat.seatId) {
          eng.transition = {
            started: Date.now(),
            duration: 620,
            fromPos: cam.position.clone(),
            fromQuat: cam.quaternion.clone(),
            toPos: destPos,
            toQuat: destQuat,
          };
        } else {
          eng.transition = null;
          cam.position.copy(destPos);
          cam.quaternion.copy(destQuat);
          syncAnglesFromCamera();
        }
      }

      if (updateUrl) {
        syncUrlParams(eng.venue.id, seat.seatId, null);
      }
      logEvent("seat-selected", {
        seatId: seat.seatId,
        position: seat.position,
        eye: seatEye(seat, eng.eyeHeight),
      });
    },
    [syncAnglesFromCamera, syncUrlParams],
  );

  const goToStage = useCallback(
    (point, { updateUrl = true } = {}) => {
      if (!point) return;
      const eng = engineRef.current;
      const cam = eng.camera;
      eng.transition = null;
      eng.stagePoint = point;
      eng.mode = "stage";
      eng.perspective = "stage";

      setStagePoint(point);
      setMode("stage");
      setPerspective("stage");

      if (eng.theatre) {
        eng.theatre.setOverview(false);
        eng.theatre.actor.visible = false;
      }

      if (cam) {
        cam.fov = eng.fov;
        cam.updateProjectionMatrix();
        cam.position.set(...stageViewEye(point));
        cam.lookAt(point.position[0], cam.position.y, eng.venue.stage.front + 20);
        syncAnglesFromCamera();
      }

      if (updateUrl) {
        syncUrlParams(eng.venue.id, null, point.id);
      }
      logEvent("stage-selected", {
        point: point.id,
        eye: stageViewEye(point),
      });
    },
    [syncAnglesFromCamera, syncUrlParams],
  );

  const setOverview = useCallback(() => {
    const eng = engineRef.current;
    eng.transition = null;
    eng.mode = "overview";
    setMode("overview");

    if (eng.theatre) {
      eng.theatre.setOverview(true);
      eng.theatre.actor.visible = eng.actorVisible;
    }
    if (eng.camera) {
      eng.camera.fov = 48;
      eng.camera.updateProjectionMatrix();
      eng.orbitTarget.set(0, 3, 16);
      const offset = new THREE.Vector3(-26, 19, 23);
      eng.orbitRadius = offset.length();
      eng.orbitPhi = Math.acos(offset.y / eng.orbitRadius);
      eng.orbitTheta = Math.atan2(offset.x, offset.z);
      applyOrbitCamera();
    }
  }, [applyOrbitCamera]);

  const handleVenueChange = useCallback(
    async (nextId) => {
      if (nextId === venueId) return;
      try {
        await loadStageActors(requestAssetBuffer, stageActorDataUrl(process.env.TARO_ENV));
      } catch (error) {
        showToast(`剧场加载失败：${error.message}`);
        return;
      }
      const nextVenue = getVenue(nextId);
      const nextSeats = nextVenue.makeLayout();
      const nextSeatById = new Map(
        nextSeats.map((s, i) => [s.seatId, { seat: s, index: i }]),
      );
      const nextStagePoints = stageViewpoints(nextVenue.stage);
      const nextDefaultSeat =
        nextSeatById.get(nextVenue.defaultSeat)?.seat || nextSeats[0];

      const eng = engineRef.current;
      if (eng.scene && eng.theatre) {
        eng.scene.remove(eng.theatre.root);
        eng.theatre.root.traverse((o) => {
          o.geometry?.dispose?.();
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose?.());
          else o.material?.dispose?.();
        });
      }

      const nextTheatre = nextVenue.build(nextSeats);
      nextTheatre.setLighting(eng.lighting);
      nextTheatre.setPitVisible(eng.pitVisible);
      nextTheatre.actor.visible = eng.actorVisible;
      if (eng.scene) {
        eng.scene.add(nextTheatre.root);
      }

      eng.venue = nextVenue;
      eng.seats = nextSeats;
      eng.seatById = nextSeatById;
      eng.stagePoints = nextStagePoints;
      eng.theatre = nextTheatre;

      setVenueId(nextId);
      setActiveRefFile(nextVenue.references[0]?.file || "");
      setExportStatus("");
      if (typeof document !== "undefined") {
        document.title = `${nextVenue.name} · 剧场座位视角`;
      }
      goToSeat(nextDefaultSeat, { animate: false, updateUrl: true });
      showToast(`已切换至${nextVenue.name}`);
    },
    [venueId, goToSeat, showToast],
  );

  const registerDiagnostics = useCallback(() => {
    const api = {
      getState() {
        const eng = engineRef.current;
        const cam = eng.camera;
        const target = new THREE.Vector3(0, 0, -1)
          .applyQuaternion(cam ? cam.quaternion : new THREE.Quaternion())
          .multiplyScalar(20)
          .add(cam ? cam.position : new THREE.Vector3());
        return {
          theatreId: eng.venue.id,
          venueName: eng.venue.name,
          ready: eng.ready,
          frames: eng.frames,
          fps: eng.fps,
          mode: eng.mode,
          perspective: eng.perspective,
          stagePoint: eng.stagePoint?.id,
          floor: eng.floor,
          lighting: eng.lighting,
          pitVisible: eng.pitVisible,
          eyeHeight: eng.eyeHeight,
          fov: eng.fov,
          zoom: cam ? cam.zoom : 1,
          selected: eng.selectedSeat,
          camera: {
            position: cam ? cam.position.toArray() : [0, 0, 0],
            target: target.toArray(),
            fov: cam ? cam.fov : eng.fov,
            near: cam ? cam.near : 0.055,
            far: cam ? cam.far : 180,
          },
          counts: {
            total: eng.seats.length,
            fixed: eng.seats.filter((s) => s.zone !== "P").length,
            pit: eng.seats.filter((s) => s.zone === "P").length,
            visibleOnFloor: eng.seats.filter(
              (s) => s.level === eng.floor && (eng.pitVisible || s.zone !== "P"),
            ).length,
          },
          errors: eng.errors,
          renderer: {
            lastRenderMs: eng.lastRenderMs,
            calls: eng.renderer?.info?.render?.calls ?? 0,
            triangles: eng.renderer?.info?.render?.triangles ?? 0,
          },
          dimensions: {
            width: eng.width,
            height: eng.height,
          },
          modelVersion: eng.venue.version,
        };
      },
      listSeats() {
        return engineRef.current.seats;
      },
      selectSeat(id, animate = false) {
        const e = engineRef.current.seatById.get(id);
        if (!e) throw new Error("Unknown seat " + id);
        goToSeat(e.seat, { animate });
      },
      listStagePoints() {
        return engineRef.current.stagePoints;
      },
      selectStage(id) {
        const point = engineRef.current.stagePoints.find((p) => p.id === id);
        if (!point) throw new Error("Unknown stage point " + id);
        goToStage(point);
      },
      overview: setOverview,
      switchVenue: handleVenueChange,
      inspectAllSeatCameras() {
        const eng = engineRef.current;
        const probe = new THREE.PerspectiveCamera(
          eng.fov,
          eng.width / Math.max(1, eng.height),
          0.055,
          180,
        );
        const target = new THREE.Vector3(...eng.venue.stage.target);
        const failures = [];
        const eyePositions = new Set();
        for (const s of eng.seats) {
          const eye = seatEye(s, eng.eyeHeight);
          probe.position.set(...eye);
          probe.lookAt(target);
          probe.updateMatrixWorld(true);
          const p = target.clone().project(probe);
          const key = eye.map((v) => v.toFixed(4)).join(",");
          if (eyePositions.has(key))
            failures.push({ id: s.seatId, reason: "duplicate-eye" });
          eyePositions.add(key);
          if (
            !eye.every(Number.isFinite) ||
            Math.abs(p.x) > 1e-5 ||
            Math.abs(p.y) > 1e-5 ||
            p.z <= -1 ||
            p.z >= 1
          )
            failures.push({
              id: s.seatId,
              reason: "invalid-eye-or-stage-projection",
              p: p.toArray(),
            });
        }
        return {
          checked: eng.seats.length,
          uniqueEyes: eyePositions.size,
          failures,
        };
      },
      projectSeat(id) {
        const eng = engineRef.current;
        const e = eng.seatById.get(id);
        if (!e || !eng.camera) return null;
        const p = new THREE.Vector3(...e.seat.position);
        p.y += 0.75;
        eng.camera.updateMatrixWorld();
        p.project(eng.camera);
        return {
          x: ((p.x + 1) / 2) * eng.width,
          y: ((1 - p.y) / 2) * eng.height,
          z: p.z,
        };
      },
      inspectSeatGeometry(id) {
        const eng = engineRef.current;
        const entry = eng.seatById.get(id);
        if (!entry || !eng.theatre) return null;
        const { seat, index } = entry;
        const matrices = eng.theatre.chairs.map((m) => {
          const matrix = new THREE.Matrix4();
          m.getMatrixAt(index, matrix);
          return { part: m.name, matrix: matrix.toArray() };
        });
        return { seat, eye: seatEye(seat, eng.eyeHeight), matrices };
      },
      inspectStageVisibility(ids) {
        const eng = engineRef.current;
        const ray = new THREE.Raycaster();
        const results = [];
        eng.theatre.root.updateMatrixWorld(true);
        const target = new THREE.Vector3(...eng.venue.stage.target);
        const occluders = [];
        eng.theatre.architecture.traverse((o) => {
          if (o.isMesh && o.parent !== eng.theatre.actor) occluders.push(o);
        });
        for (const id of ids) {
          const s = eng.seatById.get(id).seat;
          const eye = new THREE.Vector3(...seatEye(s, eng.eyeHeight));
          const dir = target.clone().sub(eye);
          ray.set(eye, dir.clone().normalize());
          ray.near = 0.025;
          ray.far = dir.length() - 0.1;
          const hits = ray.intersectObjects(
            [...eng.theatre.chairs, ...occluders],
            false,
          );
          results.push({
            id,
            blocked: !!hits.length,
            first: hits[0]
              ? {
                  name: hits[0].object.name,
                  distance: hits[0].distance,
                  seatId:
                    hits[0].instanceId === undefined
                      ? null
                      : eng.seats[hits[0].instanceId].seatId,
                }
              : null,
          });
        }
        return results;
      },
      inspectFloorSupport(start = 0, limit = 100) {
        const eng = engineRef.current;
        const down = new THREE.Raycaster();
        const failures = [];
        const floorMeshes = [];
        eng.theatre.architecture.traverse((o) => {
          if (
            o.isMesh &&
            o.userData.parts?.some((p) =>
              /Tread|Foundation|Orchestra_Pit_Floor/.test(p),
            )
          )
            floorMeshes.push(o);
        });
        eng.theatre.root.updateMatrixWorld(true);
        const sample = eng.seats.slice(start, start + limit);
        for (const s of sample) {
          down.set(
            new THREE.Vector3(s.position[0], s.position[1] + 0.1, s.position[2]),
            new THREE.Vector3(0, -1, 0),
          );
          down.far = 2;
          const hits = down.intersectObjects(floorMeshes, false);
          if (!hits.length || Math.abs(hits[0].point.y - s.position[1]) > 0.055)
            failures.push({
              id: s.seatId,
              floorY: s.position[1],
              hitY: hits[0]?.point.y ?? null,
              geometry: hits[0]?.object.name ?? null,
            });
        }
        return { start, checked: sample.length, failures };
      },
      getSceneBounds() {
        const eng = engineRef.current;
        return new THREE.Box3()
          .setFromObject(eng.theatre.root)
          .getSize(new THREE.Vector3())
          .toArray();
      },
    };
    globalThis.__THEATRE_VIEW__ = api;
    if (typeof window !== "undefined") {
      window.__THEATRE_VIEW__ = api;
    }
    try {
      const app = Taro.getApp?.();
      if (app) app.__THEATRE_VIEW__ = api;
    } catch {}
  }, [goToSeat, goToStage, setOverview, handleVenueChange]);

  // Initialize Three.js Scene & Renderer
  useEffect(() => {
    let disposed = false;

    function setupThreeWithRenderer(
      renderer,
      width,
      height,
      dpr,
      requestFrame,
      cancelFrame,
    ) {
      const eng = engineRef.current;
      eng.renderer = renderer;
      eng.width = width;
      eng.height = height;

      renderer.setPixelRatio(Math.min(dpr || 1, 1.25));
      renderer.setSize(width, height, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#171b16");
      const camera = new THREE.PerspectiveCamera(
        eng.fov,
        width / Math.max(1, height),
        0.055,
        180,
      );
      camera.name = "Seated_Eye_Camera";

      const theatre = eng.venue.build(eng.seats);
      scene.add(theatre.root);

      eng.scene = scene;
      eng.camera = camera;
      eng.theatre = theatre;

      if (eng.mode === "overview") {
        setOverview();
      } else if (eng.mode === "stage") {
        goToStage(eng.stagePoint, { updateUrl: false });
      } else {
        goToSeat(eng.selectedSeat, { animate: false, updateUrl: false });
      }

      registerDiagnostics();

      let lastTime = Date.now();
      function animateLoop() {
        if (disposed) return;
        eng.rafId = requestFrame(animateLoop);
        const now = Date.now();
        const dt = Math.max(1, now - lastTime);
        lastTime = now;
        eng.fps = Math.round(1000 / dt);

        if (eng.transition && eng.camera) {
          const u = Math.min(
            1,
            (now - eng.transition.started) / eng.transition.duration,
          );
          const ease = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
          eng.camera.position.lerpVectors(
            eng.transition.fromPos,
            eng.transition.toPos,
            ease,
          );
          eng.camera.quaternion.slerpQuaternions(
            eng.transition.fromQuat,
            eng.transition.toQuat,
            ease,
          );
          if (u >= 1) {
            eng.transition = null;
            syncAnglesFromCamera();
          }
        }

        if (eng.modalOpen) return;
        const t0 = Date.now();
        renderer.render(scene, camera);
        eng.lastRenderMs = Date.now() - t0;
        eng.frames += 1;

        if (!eng.ready) {
          eng.ready = true;
          setReady(true);
          setRenderStatus(
            `三维场景就绪 · ${eng.seats.length} 个可选座位（含 ${eng.seats.filter((s) => s.zone === "P").length} 乐池位）`,
          );
          logEvent("scene-ready", {
            seats: eng.seats.length,
            triangles: renderer.info.render.triangles,
            calls: renderer.info.render.calls,
          });
        }
      }

      eng.rafId = requestFrame(animateLoop);
      return () => {
        if (eng.rafId) cancelFrame(eng.rafId);
      };
    }

    let cleanupLoop = null;
    let resizeHandler = null;
    let resizeObserver = null;

    if (isWeapp) {
      const timer = setTimeout(() => {
        const query = Taro.createSelectorQuery();
        query
          .select("#theatre-webgl")
          .fields({ node: true, size: true, rect: true })
          .exec(async (res) => {
            if (disposed) return;
            const item = res?.[0];
            if (!item || !item.node) {
              setLoadError("当前小程序环境未能获取 WebGL 画布节点");
              return;
            }
            engineRef.current.viewportRect = item;
            const canvas = item.node;
            const sys = Taro.getSystemInfoSync();
            const width = item.width || sys.windowWidth || 375;
            const height = item.height || sys.windowHeight || 667;
            const dpr = sys.pixelRatio || 2;

            canvas.width = width * Math.min(dpr, 1.25);
            canvas.height = height * Math.min(dpr, 1.25);
            if (!canvas.style) canvas.style = {};
            canvas.clientWidth = width;
            canvas.clientHeight = height;
            if (!canvas.addEventListener) canvas.addEventListener = () => {};
            if (!canvas.removeEventListener) canvas.removeEventListener = () => {};

            try {
              await loadStageActors(requestAssetBuffer, stageActorDataUrl(process.env.TARO_ENV));
              if (disposed) return;
              const gl =
                canvas.getContext("webgl", {
                  antialias: true,
                  preserveDrawingBuffer: true,
                }) ||
                canvas.getContext("experimental-webgl", {
                  antialias: true,
                  preserveDrawingBuffer: true,
                });
              logEvent("renderer-context", {
                target: "weapp",
                three: THREE.REVISION,
                webgl: gl?.getParameter(gl.VERSION),
              });
              const renderer = new THREE.WebGLRenderer({
                canvas,
                context: gl,
                antialias: true,
                powerPreference: "high-performance",
                preserveDrawingBuffer: true,
              });
              engineRef.current.canvasNode = canvas;
              cleanupLoop = setupThreeWithRenderer(
                renderer,
                width,
                height,
                dpr,
                canvas.requestAnimationFrame.bind(canvas),
                canvas.cancelAnimationFrame.bind(canvas),
              );
            } catch (err) {
              const msg = err?.message || String(err);
              logEvent("renderer-init-failed", { target: "weapp", three: THREE.REVISION, message: msg });
              engineRef.current.errors.push({
                event: "renderer-init-failed",
                message: msg,
              });
              setLoadError(msg);
            }
          });
      }, 60);

      return () => {
        disposed = true;
        clearTimeout(timer);
        if (cleanupLoop) cleanupLoop();
      };
    } else {
      // H5 initialization: full-screen immersive view
      const timer = setTimeout(async () => {
        if (disposed) return;
        const container =
          document.getElementById("viewport") || viewportHostRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect?.();
        const width =
          Math.round(rect?.width) ||
          container.clientWidth ||
          window.innerWidth ||
          1280;
        const height =
          Math.round(rect?.height) ||
          container.clientHeight ||
          window.innerHeight ||
          720;

        try {
          await loadStageActors(requestAssetBuffer, stageActorDataUrl(process.env.TARO_ENV));
          if (disposed) return;
          const renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: true,
          });
          renderer.domElement.setAttribute(
            "aria-label",
            `${engineRef.current.venue.name}内部三维画面`,
          );
          renderer.domElement.tabIndex = 0;
          container.appendChild(renderer.domElement);

          cleanupLoop = setupThreeWithRenderer(
            renderer,
            width,
            height,
            window.devicePixelRatio || 1,
            window.requestAnimationFrame.bind(window),
            window.cancelAnimationFrame.bind(window),
          );

          resizeHandler = () => {
            const eng = engineRef.current;
            const r = container.getBoundingClientRect?.();
            const w =
              Math.round(r?.width) ||
              container.clientWidth ||
              window.innerWidth;
            const h =
              Math.round(r?.height) ||
              container.clientHeight ||
              window.innerHeight;
            if (!w || !h) return;
            eng.width = w;
            eng.height = h;
            if (eng.camera && eng.renderer) {
              eng.camera.aspect = w / Math.max(1, h);
              eng.camera.updateProjectionMatrix();
              eng.renderer.setSize(w, h, false);
            }
          };
          window.addEventListener("resize", resizeHandler);
          if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(() => resizeHandler());
            resizeObserver.observe(container);
          }
        } catch (err) {
          const msg = err?.message || String(err);
          logEvent("renderer-init-failed", { target: "h5", three: THREE.REVISION, message: msg });
          engineRef.current.errors.push({
            event: "renderer-init-failed",
            message: msg,
          });
          setLoadError(msg);
        }
      }, 20);

      return () => {
        disposed = true;
        clearTimeout(timer);
        if (resizeHandler) window.removeEventListener("resize", resizeHandler);
        if (resizeObserver) resizeObserver.disconnect();
        if (cleanupLoop) cleanupLoop();
      };
    }
  }, []);

  useEffect(() => {
    if (!isWeapp) return;
    const onResize = () => setMiniWindow(readMiniWindow());
    Taro.onWindowResize(onResize);
    return () => Taro.offWindowResize(onResize);
  }, [isWeapp]);

  useEffect(() => {
    if (!isWeapp || modalOpen) return;
    let disposed = false;
    Taro.nextTick(() => {
      Taro.createSelectorQuery().select("#theatre-webgl")
        .fields({ node: true, size: true, rect: true }).exec(res => {
          if (disposed) return;
          const rect = res?.[0];
          const eng = engineRef.current;
          if (!rect?.width || !rect?.height || !eng.renderer) return;
          eng.viewportRect = rect;
          eng.width = rect.width;
          eng.height = rect.height;
          eng.camera.aspect = rect.width / rect.height;
          eng.camera.updateProjectionMatrix();
          eng.renderer.setSize(rect.width, rect.height, false);
          logEvent("viewport-resized", { width: rect.width, height: rect.height, left: rect.left, top: rect.top, panelCollapsed });
        });
    });
    return () => { disposed = true; };
  }, [isWeapp, miniWindow, panelCollapsed, modalOpen, ready]);

  // Touch & Mouse Pointer Interaction on 3D Viewport
  const raycastChairAt = useCallback(
    (clientX, clientY) => {
      const eng = engineRef.current;
      if (!eng.camera || !eng.theatre || eng.mode !== "overview") return;
      let rectLeft = eng.viewportRect?.left || 0;
      let rectTop = eng.viewportRect?.top || 0;
      let rectWidth = eng.width;
      let rectHeight = eng.height;
      if (!isWeapp && eng.renderer?.domElement?.getBoundingClientRect) {
        const r = eng.renderer.domElement.getBoundingClientRect();
        rectLeft = r.left;
        rectTop = r.top;
        rectWidth = r.width || eng.width;
        rectHeight = r.height || eng.height;
      }
      const { x: nx, y: ny } = viewportPoint(clientX, clientY, {
        left: rectLeft, top: rectTop, width: rectWidth, height: rectHeight,
      });
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(nx, ny), eng.camera);
      const occluders = [];
      eng.theatre.architecture.traverseVisible((o) => {
        if (o.isMesh) occluders.push(o);
      });
      const hit = raycaster.intersectObjects(
        [...eng.theatre.chairs, ...occluders],
        false,
      )[0];
      if (
        hit?.instanceId !== undefined &&
        (eng.pitVisible || eng.seats[hit.instanceId].zone !== "P")
      ) {
        goToSeat(eng.seats[hit.instanceId]);
      }
    },
    [goToSeat, isWeapp],
  );

  const viewportTouches = touches => isWeapp
    ? canvasTouches(touches || [], engineRef.current.viewportRect)
    : (touches || []);

  const handleViewportTouchStart = (e) => {
    const eng = engineRef.current;
    if (!eng.ready) return;
    eng.touchGesture = beginGesture(viewportTouches(e.touches));
    if (eng.mode !== "overview") {
      eng.transition = null;
      syncAnglesFromCamera();
    }
  };

  const handleViewportTouchMove = (e) => {
    const eng = engineRef.current;
    if (!eng.touchGesture) return;
    const motion = moveGesture(eng.touchGesture, viewportTouches(e.touches));
    if (!motion) return;
    if (motion.kind === "pinch") {
      if (eng.mode === "overview") {
        eng.orbitRadius = THREE.MathUtils.clamp(eng.orbitRadius / motion.scale, 13, 85);
        applyOrbitCamera();
      }
    } else if (eng.mode === "overview") {
      eng.orbitTheta -= motion.dx * 0.0055;
      eng.orbitPhi = THREE.MathUtils.clamp(eng.orbitPhi - motion.dy * 0.005, 0.13, Math.PI * 0.48);
      applyOrbitCamera();
    } else {
      eng.yaw -= motion.dx * 0.0038;
      eng.pitch = THREE.MathUtils.clamp(eng.pitch - motion.dy * 0.0033, -1.3, 1.3);
      applyCameraAngles();
    }
  };

  const handleViewportTouchEnd = (e) => {
    const eng = engineRef.current;
    if (!eng.touchGesture) return;
    if (e.touches?.length) return;
    const tap = finishGesture(eng.touchGesture, viewportTouches(e.changedTouches));
    eng.touchGesture = null;
    if (tap && eng.mode === "overview") raycastChairAt(tap.x, tap.y);
  };

  const handleViewportTouchCancel = () => {
    engineRef.current.touchGesture = null;
  };

  const handleMouseDown = (e) => {
    if (isWeapp || e.button !== 0) return;
    const eng = engineRef.current;
    eng.drag = {
      x: e.clientX,
      y: e.clientY,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
    };
    if (eng.mode !== "overview") {
      eng.transition = null;
      syncAnglesFromCamera();
    }
  };

  const handleMouseMove = (e) => {
    if (isWeapp) return;
    const eng = engineRef.current;
    if (!eng.drag) return;
    const dx = e.clientX - eng.drag.x;
    const dy = e.clientY - eng.drag.y;
    if (Math.hypot(e.clientX - eng.drag.startX, e.clientY - eng.drag.startY) > 4) {
      eng.drag.moved = true;
    }
    if (eng.mode === "overview") {
      eng.orbitTheta -= dx * 0.0055;
      eng.orbitPhi = THREE.MathUtils.clamp(
        eng.orbitPhi - dy * 0.005,
        0.13,
        Math.PI * 0.48,
      );
      applyOrbitCamera();
    } else {
      eng.yaw -= dx * 0.0038;
      eng.pitch = THREE.MathUtils.clamp(eng.pitch - dy * 0.0033, -1.3, 1.3);
      applyCameraAngles();
    }
    eng.drag.x = e.clientX;
    eng.drag.y = e.clientY;
  };

  const handleMouseUp = (e) => {
    if (isWeapp) return;
    const eng = engineRef.current;
    if (!eng.drag) return;
    const moved =
      eng.drag.moved ||
      Math.hypot(e.clientX - eng.drag.startX, e.clientY - eng.drag.startY) > 5;
    eng.drag = null;
    if (!moved && eng.mode === "overview") {
      raycastChairAt(e.clientX, e.clientY);
    }
  };

  const handleWheel = (e) => {
    if (isWeapp) return;
    const eng = engineRef.current;
    if (eng.mode === "overview") {
      eng.orbitRadius = THREE.MathUtils.clamp(
        eng.orbitRadius + (e.deltaY > 0 ? 2.5 : -2.5),
        13,
        85,
      );
      applyOrbitCamera();
    }
  };

  const handleFloorChange = (nextFloor) => {
    const arr = seats.filter((s) => s.level === nextFloor && s.zone === "M");
    const targetRow = venue.middleRows[nextFloor] || 8;
    const middle = arr.reduce(
      (best, s) =>
        Math.abs(s.position[0]) + Math.abs(s.row - targetRow) <
        Math.abs(best.position[0]) + Math.abs(best.row - targetRow)
          ? s
          : best,
      arr[0],
    );
    if (middle) goToSeat(middle);
  };

  const handleZoneChange = (nextZone) => {
    setZoneValue(nextZone);
    const rList = rowsFor(seats, floor, nextZone);
    const nextRow = rList.includes(Number(rowValue))
      ? Number(rowValue)
      : (rList[Math.floor(rList.length / 2)] ?? rList[0] ?? 1);
    setRowValue(nextRow);
    const nums = seats
      .filter(
        (s) => s.level === floor && s.zone === nextZone && s.row === nextRow,
      )
      .map((s) => s.number);
    const nextNum = nums.includes(Number(numberValue))
      ? Number(numberValue)
      : (nums[Math.floor(nums.length / 2)] ?? nums[0] ?? 1);
    setNumberValue(nextNum);
  };

  const handleRowChange = (nextRowVal) => {
    const nextRow = Number(nextRowVal);
    setRowValue(nextRow);
    const nums = seats
      .filter(
        (s) => s.level === floor && s.zone === zoneValue && s.row === nextRow,
      )
      .map((s) => s.number);
    const nextNum = nums.includes(Number(numberValue))
      ? Number(numberValue)
      : (nums[Math.floor(nums.length / 2)] ?? nums[0] ?? 1);
    setNumberValue(nextNum);
  };

  const handleGoSeat = () => {
    const s = seats.find(
      (item) =>
        item.level === floor &&
        item.zone === zoneValue &&
        Number(item.row) === Number(rowValue) &&
        Number(item.number) === Number(numberValue),
    );
    if (s) goToSeat(s);
  };

  const moveSeat = (direction) => {
    const current = selectedSeat;
    if (!current) return;
    const sameRow = seats.filter(
      (s) =>
        s.level === current.level &&
        s.zone === current.zone &&
        s.row === current.row,
    );
    const idx =
      sameRow.findIndex((s) => s.seatId === current.seatId) + direction;
    if (idx < 0 || idx >= sameRow.length) {
      showToast(
        direction > 0
          ? "已经是这一排的最后一个位置"
          : "已经是这一排的第一个位置",
      );
      return;
    }
    goToSeat(sameRow[idx]);
  };

  const handleRandomSeat = () => {
    const available = seats.filter((s) => pitVisible || s.zone !== "P");
    const picked = available[Math.floor(Math.random() * available.length)];
    if (picked) goToSeat(picked);
  };

  const updateEyeHeight = (cmValue) => {
    const metres = Number(cmValue) / 100;
    setEyeHeight(metres);
    engineRef.current.eyeHeight = metres;
    if (engineRef.current.mode === "seat" && engineRef.current.camera) {
      engineRef.current.transition = null;
      engineRef.current.camera.position.set(
        ...seatEye(engineRef.current.selectedSeat, metres),
      );
    }
  };

  const updateFov = (degValue) => {
    const deg = Number(degValue);
    setFovState(deg);
    engineRef.current.fov = deg;
    if (engineRef.current.camera && engineRef.current.mode !== "overview") {
      engineRef.current.camera.fov = deg;
      engineRef.current.camera.updateProjectionMatrix();
    }
  };

  const restoreNaturalView = () => {
    if (engineRef.current.camera) {
      engineRef.current.camera.zoom = 1;
    }
    updateFov(DEFAULT_FOV);
    if (perspective === "stage") goToStage(stagePoint);
    else goToSeat(selectedSeat);
    showToast("已恢复自然视角");
  };

  const handleLookBack = () => {
    if (mode === "overview") {
      if (perspective === "stage") goToStage(stagePoint);
      else goToSeat(selectedSeat, { animate: false });
    }
    const eng = engineRef.current;
    eng.transition = null;
    if (eng.camera) {
      eng.camera.lookAt(0, 11.5, 36);
      syncAnglesFromCamera();
    }
    showToast("回望观众厅 · 拖动可继续环顾");
  };

  const handleLightingToggle = () => {
    const next = lighting === "house" ? "show" : "house";
    setLighting(next);
    engineRef.current.lighting = next;
    engineRef.current.theatre?.setLighting(next);
    logEvent("house-lighting-changed", { houseLightsOn: next === "house", stageLightsOn: true });
    showToast(next === "show" ? "观众厅灯光已关闭，舞台照明保持开启" : "观众厅灯光已打开");
  };

  const handlePitToggle = (checked) => {
    setPitVisibleState(checked);
    engineRef.current.pitVisible = checked;
    engineRef.current.theatre?.setPitVisible(checked);
    if (!checked && selectedSeat?.zone === "P") {
      const fallback =
        seatById.get(venue.defaultSeat)?.seat ||
        seats.find((s) => s.zone !== "P");
      if (fallback) goToSeat(fallback);
    }
  };

  const handleActorToggle = (checked) => {
    setActorVisible(checked);
    engineRef.current.actorVisible = checked;
    if (engineRef.current.theatre) {
      engineRef.current.theatre.actor.visible =
        engineRef.current.mode !== "stage" && checked;
    }
  };

  const handleSettingsReset = () => {
    updateEyeHeight(116);
    updateFov(DEFAULT_FOV);
    handleActorToggle(true);
    handlePitToggle(true);
    showToast("已恢复默认参数");
  };

  const saveOrDownloadFile = async (
    filename,
    content,
    mimeType,
    isBinary = false,
  ) => {
    if (isWeapp) {
      try {
        const fs = Taro.getFileSystemManager();
        const filePath = `${Taro.env.USER_DATA_PATH}/${filename}`;
        fs.writeFileSync(filePath, content, isBinary ? "binary" : "utf8");
        if (Taro.shareFileMessage) {
          try {
            await Taro.shareFileMessage({ filePath, fileName: filename });
            return `已导出并分享：${filename}`;
          } catch {}
        }
        showToast(`已保存至小程序本地：${filename}`);
        return `已保存至小程序沙盒目录：${filePath}`;
      } catch (e) {
        return `保存失败：${e?.message || String(e)}`;
      }
    } else {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return `已下载：${filename}`;
    }
  };

  const handleExportSeatData = async () => {
    const json = JSON.stringify(
      {
        theatreId: venue.id,
        theatreName: venue.name,
        modelVersion: venue.version,
        units: "metres",
        axes: { x: "stage-left-positive", y: "up", z: "stage-to-auditorium" },
        origin: "stage-front-centre",
        provenance: venue.provenance,
        seats,
      },
      null,
      2,
    );
    const msg = await saveOrDownloadFile(
      `${venue.slug}-seats.json`,
      json,
      "application/json",
      false,
    );
    setExportStatus(msg);
  };

  const handleExportModel = async () => {
    if (exportingGlb || !engineRef.current.theatre) return;
    setExportingGlb(true);
    setExportStatus("正在打包三维模型，请稍候…");
    try {
      const eng = engineRef.current;
      const g = new THREE.Group();
      g.name = `${venue.slug}_Interior_Reconstruction`;
      g.userData = {
        theatreId: venue.id,
        provenance: venue.provenance,
        modelVersion: venue.version,
        units: "metres",
        seatIdentity: "inferred",
      };
      g.add(eng.theatre.architecture.clone(true));
      for (const source of eng.theatre.chairs) {
        for (let i = 0; i < seats.length; i++) {
          if (!pitVisible && seats[i].zone === "P") continue;
          const m = new THREE.Mesh(source.geometry, source.material);
          m.name = `${seats[i].seatId}_${source.name}`;
          m.userData = { seatId: seats[i].seatId, confidence: "inferred" };
          source.getMatrixAt(i, m.matrix);
          m.matrix.decompose(m.position, m.quaternion, m.scale);
          g.add(m);
        }
      }
      g.traverse((o) => {
        if (o.name === "Ceiling" || o.name === "Auditorium_Walls")
          o.visible = true;
      });
      const exporter = new GLTFExporter();
      const data = await exporter.parseAsync(g, {
        binary: true,
        onlyVisible: true,
      });
      const msg = await saveOrDownloadFile(
        `${venue.slug}-interior.glb`,
        data,
        "model/gltf-binary",
        true,
      );
      setExportStatus(`${msg}（包含重建几何与座位标识）`);
      logEvent("model-exported", { bytes: data.byteLength });
    } catch (e) {
      setExportStatus(`导出失败：${e?.message || String(e)}`);
    } finally {
      setExportingGlb(false);
    }
  };

  const currentFloorCount = useMemo(
    () =>
      seats.filter(
        (s) => s.level === floor && (pitVisible || s.zone !== "P"),
      ).length,
    [seats, floor, pitVisible],
  );
  const currentFloorMeta = useMemo(
    () => venue.levels.find((l) => l.id === floor) || venue.levels[0],
    [venue, floor],
  );
  const activeReference = useMemo(
    () =>
      venue.references.find((r) => r.file === activeRefFile) ||
      venue.references[0],
    [venue, activeRefFile],
  );

  const cardTitle =
    mode === "stage" ? stagePoint?.label : labelSeat(selectedSeat);
  const cardDistance =
    mode === "stage"
      ? `${Math.abs((stagePoint?.position?.[2] ?? 0) - venue.stage.front).toFixed(1)} m`
      : `${Math.hypot(selectedSeat?.position?.[0] ?? 0, selectedSeat?.position?.[2] ?? 0).toFixed(1)} m`;
  const cardElevation =
    mode === "stage"
      ? `${stageViewEye(stagePoint)[1].toFixed(2)} m`
      : `${seatEye(selectedSeat, eyeHeight)[1].toFixed(2)} m`;
  const cardSub =
    mode === "stage"
      ? "舞台站位 · 站姿眼高 1.65 m · 默认正对观众"
      : `${selectedSeat?.seatId ?? ""} · 重建编号`;

  const onStage = perspective === "stage";
  const isBoxZone = zoneValue.startsWith("B");
  const referenceImgUrl = activeReference
    ? assetUrl(`reference/${activeReference.file}`)
    : "";

  return (
    <View
      id="app"
      style={isWeapp ? {
        "--safe-left": `${miniWindow.left}px`, "--safe-right": `${miniWindow.right}px`,
        "--safe-bottom": `${miniWindow.bottom}px`, "--header-height": `${miniWindow.header}px`,
        "--menu-left": `${miniWindow.menuLeft}px`, "--panel-width": panelCollapsed ? "0px" : "248px",
      } : undefined}
      className={`app-shell ${panelCollapsed ? "panel-collapsed" : ""} ${isWeapp ? "mini-layout" : ""}`.trim()}
    >
      {/* 3D Viewport */}
      <View
        id="viewport"
        ref={viewportHostRef}
        className="viewport-container"
        aria-label="主剧场三维视图"
        onTouchStart={isWeapp ? undefined : handleViewportTouchStart}
        onTouchMove={isWeapp ? undefined : handleViewportTouchMove}
        onTouchEnd={isWeapp ? undefined : handleViewportTouchEnd}
        onTouchCancel={handleViewportTouchCancel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        {isWeapp ? (
          <Canvas
            type="webgl"
            id="theatre-webgl"
            canvasId="theatre-webgl"
            className="webgl-canvas"
            style={{ display: modalOpen || loadError ? "none" : "block" }}
            onTouchStart={handleViewportTouchStart}
            onTouchMove={handleViewportTouchMove}
            onTouchEnd={handleViewportTouchEnd}
            onTouchCancel={handleViewportTouchCancel}
            disableScroll
          />
        ) : null}

        {!ready ? (
          <View id="loading" className="loading-overlay">
            {loadError ? (
              <>
                <Text className="loading-title">剧场加载失败</Text>
                <Text className="loading-sub">{loadError}</Text>
              </>
            ) : (
              <>
                <View className="loader-orbit" />
                <Text className="loading-title">正在点亮剧场</Text>
                <Text className="loading-sub">加载座位与室内模型</Text>
              </>
            )}
          </View>
        ) : null}
      </View>

      {isWeapp ? <MiniControls
        venues={VENUES} venueId={venueId} onVenueChange={handleVenueChange}
        panelCollapsed={panelCollapsed} togglePanel={() => setPanelCollapsed(v => !v)}
        perspective={perspective} mode={mode}
        onPerspectiveChange={v => v === "stage" ? goToStage(stagePoint) : goToSeat(selectedSeat)}
        onModeChange={v => v === "overview" ? setOverview() : perspective === "stage" ? goToStage(stagePoint) : goToSeat(selectedSeat)}
        floor={floor} onFloorChange={handleFloorChange} floorCount={currentFloorCount}
        zoneOptions={availableZones} rowOptions={availableRows} numberOptions={availableNumbers}
        zone={zoneValue} row={rowValue} number={numberValue}
        onZoneChange={handleZoneChange} onRowChange={handleRowChange} onNumberChange={v => setNumberValue(Number(v))}
        onGoSeat={handleGoSeat} stagePoints={stagePoints} stagePoint={stagePoint}
        onStageChange={id => goToStage(stagePoints.find(p => p.id === id))}
        onOpenMap={() => setMapOpen(true)} onMoveSeat={moveSeat}
        cardTitle={cardTitle} cardDistance={cardDistance} ready={ready}
        onReset={restoreNaturalView} onLookBack={handleLookBack} onLighting={handleLightingToggle}
        lighting={lighting} onSettings={() => setSettingsOpen(true)}
        onReference={() => setReferenceOpen(true)} onInfo={() => setInfoOpen(true)} toast={toastMsg}
      /> : <>
      {/* Top Navigation Bar */}
      <View className="topbar">
        <View
          className="brand"
          role="button"
          aria-label="剧场座位视角首页"
          onClick={restoreNaturalView}
        >
          <LucideIcon name="theater" size={34} color="#d5c29d" />
          <View className="brand-text">
            <Text className="brand-title">剧场座位视角</Text>
            <Text className="brand-sub">THEATRE · SEAT VIEW</Text>
          </View>
        </View>

        <View className="header-center">
          <View className="live-dot" />
          <Text id="venue-name">{venue.name} · 主剧场</Text>
        </View>

        <View className="header-actions">
          <View
            id="reference-open"
            role="button"
            className="action-btn subtle-btn"
            onClick={() => setReferenceOpen(true)}
          >
            <LucideIcon name="images" size={15} color="#eee9df" />
            <Text>对照实景</Text>
          </View>
          <View
            id="info-open"
            role="button"
            aria-label="查看模型依据与精度"
            className="icon-circle-btn"
            onClick={() => setInfoOpen(true)}
          >
            <LucideIcon name="info" size={15} color="#eee9df" />
          </View>
        </View>
      </View>

      {/* Seat / Stage Selection Panel */}
      <View
        className={`seat-panel ${panelCollapsed ? "collapsed" : ""}`.trim()}
        aria-label="座位选择"
      >
        <View className="panel-title">
          <PickerSelect
            id="venue-select"
            className="venue-picker"
            label="选择剧场"
            options={VENUES.map((v) => ({ value: v.id, label: v.name }))}
            value={venueId}
            onChange={handleVenueChange}
          />
          <Text className="eyebrow">FIND YOUR PERSPECTIVE</Text>
          <View className="panel-heading-row">
            <Text id="perspective-title" className="panel-h1">
              {onStage ? "从舞台，望向观众。" : "从这里，看见舞台。"}
            </Text>
            <View
              id="panel-toggle"
              role="button"
              aria-label={panelCollapsed ? "展开选座面板" : "收起选座面板"}
              aria-expanded={!panelCollapsed}
              className="panel-collapse-btn"
              onClick={() => setPanelCollapsed((prev) => !prev)}
            >
              <LucideIcon
                name={panelCollapsed ? "plus" : "minus"}
                size={14}
                color="#53644f"
              />
            </View>
          </View>
          <Text id="perspective-description" className="panel-desc">
            {onStage
              ? "选一个站位，感受舞台上的视野。"
              : "选一个座位，走进你的观演位置。"}
          </Text>
        </View>

        {!panelCollapsed ? (
          <View id="panel-body" className="panel-body">
            <SegmentedTabs
              className="perspective-tabs"
              ariaLabel="选择视角"
              value={perspective}
              options={[
                { value: "seat", label: "观众视角" },
                { value: "stage", label: "舞台视角" },
              ]}
              onChange={(val) => {
                if (val === "stage") goToStage(stagePoint);
                else goToSeat(selectedSeat);
              }}
            />

            {onStage ? (
              <View
                id="stage-position-panel"
                className="stage-position-picker"
                aria-label="舞台位置选择"
              >
                <Text className="stage-picker-h2">选择舞台站位</Text>
                <Text className="stage-picker-p">
                  站在舞台上看观众席，默认正对观众。左右以面向观众为准。
                </Text>
                <SegmentedTabs
                  className="stage-grid-tabs"
                  ariaLabel="典型站位"
                  value={stagePoint?.id}
                  options={stagePoints.map((pt) => ({
                    value: pt.id,
                    label: pt.label,
                  }))}
                  onChange={(ptId) => {
                    const found = stagePoints.find((p) => p.id === ptId);
                    if (found) goToStage(found);
                  }}
                />
                <Text className="stage-picker-p">
                  站姿眼高 1.65 m · 拖动画面可环顾
                </Text>
              </View>
            ) : (
              <View id="audience-position-panel" aria-label="观众位置选择">
                <SegmentedTabs
                  className="floor-tabs"
                  ariaLabel="观众席楼层"
                  value={floor}
                  options={[
                    { id: "floor-1F", value: "1F", label: "一层", sub: "池座" },
                    { id: "floor-2F", value: "2F", label: "二层", sub: "楼座" },
                    { id: "floor-3F", value: "3F", label: "三层", sub: "楼座" },
                  ]}
                  onChange={handleFloorChange}
                />

                <View className="map-heading">
                  <Text id="floor-count">
                    {currentFloorMeta?.label} · {currentFloorCount} 座
                  </Text>
                  <View
                    id="map-expand"
                    role="button"
                    className="text-btn"
                    onClick={() => setMapOpen(true)}
                  >
                    <Text>放大选座图</Text>
                    <LucideIcon name="expand" size={12} color="#4d7161" />
                  </View>
                </View>

                <View className="audience-middle-grid">
                  <View id="seatmap-container" className="seatmap-container">
                    <SeatMapCanvas
                      canvasId="seatmap-inline"
                      seats={seats}
                      floor={floor}
                      pit={pitVisible}
                      selectedSeat={selectedSeat}
                      floorLabel={currentFloorMeta?.label}
                      onSelectSeat={(s) => goToSeat(s)}
                    />
                  </View>

                  <View className="map-legend">
                    <View className="legend-item">
                      <View className="dot available" />
                      <Text>可选座位</Text>
                    </View>
                    <View className="legend-item">
                      <View className="dot selected" />
                      <Text>当前座位</Text>
                    </View>
                    <View className="legend-item">
                      <LucideIcon name="arrow-up" size={11} color="#8b917f" />
                      <Text>舞台方向</Text>
                    </View>
                  </View>

                  <View className="seat-form">
                    <PickerSelect
                      id="zone-select"
                      label="区域"
                      options={availableZones}
                      value={zoneValue}
                      onChange={handleZoneChange}
                    />
                    <PickerSelect
                      id="row-select"
                      label={isBoxZone ? "包厢" : "排"}
                      options={availableRows}
                      value={rowValue}
                      onChange={handleRowChange}
                    />
                    <PickerSelect
                      id="number-select"
                      label="座"
                      options={availableNumbers}
                      value={numberValue}
                      onChange={(v) => setNumberValue(Number(v))}
                    />
                  </View>
                </View>

                <View
                  id="go-seat"
                  role="button"
                  className="primary-btn"
                  onClick={handleGoSeat}
                >
                  <View className="primary-btn-left">
                    <LucideIcon name="crosshair" size={15} color="#eff5e8" />
                    <Text>查看这个座位的视角</Text>
                  </View>
                  <LucideIcon name="arrow-right" size={15} color="#eff5e8" />
                </View>

                <Text className="numbering-note">
                  当前使用重建编号 · 票面座号尚待核对
                </Text>

                <View className="panel-footer">
                  <Text>探索其他位置</Text>
                  <View className="panel-footer-actions">
                    <View
                      id="seat-prev"
                      role="button"
                      aria-label="上一个座位"
                      className="footer-icon-btn"
                      onClick={() => moveSeat(-1)}
                    >
                      <LucideIcon name="arrow-left" size={13} color="#53644f" />
                    </View>
                    <View
                      id="seat-next"
                      role="button"
                      aria-label="下一个座位"
                      className="footer-icon-btn"
                      onClick={() => moveSeat(1)}
                    >
                      <LucideIcon name="arrow-right" size={13} color="#53644f" />
                    </View>
                    <View
                      id="random-seat"
                      role="button"
                      className="text-btn"
                      onClick={handleRandomSeat}
                    >
                      <Text>随机入座</Text>
                      <LucideIcon name="shuffle" size={12} color="#4d7161" />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        ) : null}
      </View>

      {/* View Mode Tabs (Perspective vs Overview) */}
      <SegmentedTabs
        className="view-tabs"
        ariaLabel="视图模式"
        value={mode === "overview" ? "overview" : "perspective"}
        options={[
          {
            id: "mode-seat",
            value: "perspective",
            icon: "crosshair",
            label: onStage ? "舞台视角" : "观众视角",
          },
          {
            id: "mode-overview",
            value: "overview",
            icon: "box",
            label: "剧场总览",
          },
        ]}
        onChange={(val) => {
          if (val === "overview") setOverview();
          else if (perspective === "stage") goToStage(stagePoint);
          else goToSeat(selectedSeat);
        }}
      />

      {/* Current Seat / Stage Info Card */}
      <View
        className="seat-card"
        aria-label="当前位置视角信息"
        aria-live="polite"
      >
        <Text id="current-theatre-name" className="eyebrow">
          {venue.name} · YOUR SEAT
        </Text>
        <Text id="selected-label" className="seat-card-h2">
          {cardTitle}
        </Text>
        <View className="seat-metrics">
          <Text className="metric-item">
            距台口 <Text className="metric-strong">{cardDistance}</Text>
          </Text>
          <Text className="metric-item">
            眼点标高 <Text className="metric-strong">{cardElevation}</Text>
          </Text>
        </View>
        <Text id="seat-id" className="seat-id">
          {cardSub}
        </Text>
      </View>

      {/* Right-side Floating Viewer Tools */}
      <View className="viewer-tools">
        <View
          id="reset-view"
          role="button"
          aria-label={
            mode === "stage"
              ? "恢复自然视角并面向观众"
              : "恢复自然视角并面向舞台"
          }
          className="tool-button"
          onClick={restoreNaturalView}
        >
          <LucideIcon name="rotate-ccw" size={18} color="#eee9df" />
        </View>
        <View
          id="look-back"
          role="button"
          aria-label="回望观众厅"
          className="tool-button"
          onClick={handleLookBack}
        >
          <LucideIcon name="armchair" size={18} color="#eee9df" />
        </View>
        <View
          id="lighting-toggle"
          role="button"
          aria-label={lighting === "show" ? "打开观众厅灯光" : "关闭观众厅灯光，保留舞台照明"}
          aria-pressed={lighting === "house"}
          className="tool-button"
          onClick={handleLightingToggle}
        >
          <LucideIcon name="sun" size={18} color="#eee9df" />
        </View>
        <View
          id="settings-open"
          role="button"
          aria-label="打开视角设置"
          className="tool-button"
          onClick={() => setSettingsOpen(true)}
        >
          <LucideIcon name="settings-2" size={18} color="#eee9df" />
        </View>
        <View
          id="fullscreen"
          role="button"
          aria-label="全屏"
          className="tool-button"
          onClick={async () => {
            if (
              !isWeapp &&
              typeof document !== "undefined" &&
              document.documentElement?.requestFullscreen
            ) {
              try {
                if (document.fullscreenElement) await document.exitFullscreen();
                else await document.documentElement.requestFullscreen();
                return;
              } catch {}
            }
            setPanelCollapsed((prev) => {
              const next = !prev;
              showToast(next ? "已收起面板扩大三维视野" : "已展开选座面板");
              return next;
            });
          }}
        >
          <LucideIcon name="maximize" size={18} color="#eee9df" />
        </View>
      </View>

      {/* Viewer Hint */}
      <View id="viewer-hint" className="viewer-hint">
        <LucideIcon name="move-horizontal" size={13} color="#c3c7b4" />
        <Text>
          {mode !== "overview"
            ? "拖动转头 · 自然观演视角"
            : "拖动旋转 · 滚轮缩放 · 点击座椅入座"}
        </Text>
      </View>

      {/* Bottom Status Bar */}
      <View className="bottom-bar">
        <View
          id="provenance-open"
          role="button"
          className="bottom-provenance-btn"
          onClick={() => setInfoOpen(true)}
        >
          <View className="status-dot" />
          <Text>依据公开资料重建 · 尺寸待校准</Text>
          <LucideIcon name="info" size={11} color="#b2b8a3" />
        </View>
        <Text id="render-status" className="render-status-text">
          {renderStatus}
        </Text>
      </View>

      {/* Toast */}
      <View
        id="toast"
        role="status"
        className={`toast-banner ${toastMsg ? "visible" : ""}`.trim()}
      >
        <Text>{toastMsg}</Text>
      </View>

      </>}

      {/* Settings Dialog */}
      <ModalDialog
        id="settings-dialog"
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title="视角设置"
        className="small-dialog"
      >
        <Text className="dialog-p">
          默认采用 75° 自然视野。可手动调整，所有座位共用相同参数。
        </Text>

        <View className="slider-group">
          <View className="slider-label">
            <Text>坐姿眼高</Text>
            <Text id="eye-output" className="slider-output">
              {Math.round(eyeHeight * 100)} cm
            </Text>
          </View>
          {isWeapp ? (
            <Slider
              id="eye-height"
              min={95}
              max={140}
              step={1}
              value={Math.round(eyeHeight * 100)}
              activeColor="#2b5342"
              backgroundColor="#d2d7c8"
              blockSize={18}
              onChanging={(e) => updateEyeHeight(e.detail.value)}
              onChange={(e) => updateEyeHeight(e.detail.value)}
            />
          ) : (
            <input
              id="eye-height"
              className="taro-h5-range"
              type="range"
              min="95"
              max="140"
              step="1"
              value={Math.round(eyeHeight * 100)}
              onChange={(e) => updateEyeHeight(e.target.value)}
            />
          )}
        </View>

        <View className="slider-group">
          <View className="slider-label">
            <Text>垂直视场角</Text>
            <Text id="fov-output" className="slider-output">
              {Math.round(fov)}°
            </Text>
          </View>
          {isWeapp ? (
            <Slider
              id="fov"
              min={35}
              max={85}
              step={1}
              value={Math.round(fov)}
              activeColor="#2b5342"
              backgroundColor="#d2d7c8"
              blockSize={18}
              onChanging={(e) => updateFov(e.detail.value)}
              onChange={(e) => updateFov(e.detail.value)}
            />
          ) : (
            <input
              id="fov"
              className="taro-h5-range"
              type="range"
              min="35"
              max="85"
              step="1"
              value={Math.round(fov)}
              onChange={(e) => updateFov(e.target.value)}
            />
          )}
        </View>

        <View className="switch-row">
          <Text>显示舞台人物，辅助感知比例</Text>
          {isWeapp ? (
            <Switch
              id="actor-toggle"
              checked={actorVisible}
              color="#2b5342"
              onChange={(e) => handleActorToggle(!!e.detail.value)}
            />
          ) : (
            <input
              id="actor-toggle"
              className="taro-h5-checkbox"
              type="checkbox"
              checked={actorVisible}
              onChange={(e) => handleActorToggle(e.target.checked)}
            />
          )}
        </View>

        <View className="switch-row">
          <Text>显示乐池活动座椅</Text>
          {isWeapp ? (
            <Switch
              id="pit-toggle"
              checked={pitVisible}
              color="#2b5342"
              onChange={(e) => handlePitToggle(!!e.detail.value)}
            />
          ) : (
            <input
              id="pit-toggle"
              className="taro-h5-checkbox"
              type="checkbox"
              checked={pitVisible}
              onChange={(e) => handlePitToggle(e.target.checked)}
            />
          )}
        </View>

        <View className="dialog-note">
          <Text>
            坐姿眼高相对于所在座位地坪；舞台视角固定使用 1.65 m 站姿眼高，并隐藏比例人物。这里展示空场视角，不包含前排观众身体造成的遮挡。
          </Text>
        </View>

        <View
          id="settings-reset"
          role="button"
          className="dialog-subtle-btn"
          onClick={handleSettingsReset}
        >
          <Text>恢复默认参数</Text>
        </View>
      </ModalDialog>

      {/* Reference Dialog */}
      <ModalDialog
        id="reference-dialog"
        open={referenceOpen}
        onClose={() => setReferenceOpen(false)}
        eyebrow="VISUAL REFERENCES"
        title={`对照真实的${venue.name}`}
        className="reference-dialog"
      >
        <View className="reference-tabs">
          {venue.references.map((ref) => (
            <View
              key={ref.file}
              role="button"
              data-reference={ref.file}
              className={`ref-tab-btn ${ref.file === activeReference?.file ? "active" : ""}`.trim()}
              onClick={() => setActiveRefFile(ref.file)}
            >
              <Text>{ref.label}</Text>
            </View>
          ))}
        </View>
        {activeReference ? (
          <>
            <Image
              id="reference-image"
              className="reference-img"
              src={referenceImgUrl}
              mode="aspectFit"
              alt={`${venue.name} · ${activeReference.label}`}
              onClick={() => {
                if (isWeapp && Taro.previewImage) {
                  Taro.previewImage({
                    current: referenceImgUrl,
                    urls: venue.references.map((r) => assetUrl(`reference/${r.file}`)),
                  });
                }
              }}
            />
            <Text id="reference-caption" className="reference-caption">
              {activeReference.caption}
            </Text>
          </>
        ) : null}
      </ModalDialog>

      {/* Info & Provenance Dialog */}
      <ModalDialog
        id="info-dialog"
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        eyebrow="MODEL NOTES"
        title="模型依据与当前精度"
        className="info-dialog"
      >
        <View className="notice">
          <Text>
            这是依据公开图纸与实景照片建立的三维重建模型。座位布局、尺寸和坐姿眼点仍含估算，不能作为真实座位视线的测量证明。
          </Text>
        </View>

        <View className="info-dl">
          <View className="info-row">
            <Text className="info-dt">形态依据</Text>
            <Text id="model-form-note" className="info-dd">
              {venue.formNote}
            </Text>
          </View>
          <View className="info-row">
            <Text className="info-dt">座位依据</Text>
            <Text id="model-seat-note" className="info-dd">
              {venue.seatNote}
            </Text>
          </View>
          <View className="info-row">
            <Text className="info-dt">尺寸依据</Text>
            <Text id="model-size-note" className="info-dd">
              {venue.sizeNote}
            </Text>
          </View>
          <View className="info-row">
            <Text className="info-dt">视角范围</Text>
            <Text className="info-dd">
              相机固定在所选座位的坐姿眼点，可左右转头、抬头、低头；显示模型几何的遮挡，默认不含观众。
            </Text>
          </View>
        </View>

        <View id="source-links" className="source-links">
          {venue.provenance.sources.map((src) => (
            <View
              key={src.url}
              role="link"
              className="source-link-item"
              onClick={() => {
                if (isWeapp) {
                  Taro.setClipboardData({
                    data: src.url,
                    success: () => showToast("来源链接已复制"),
                  });
                } else if (typeof window !== "undefined") {
                  window.open(src.url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <Text>{src.title}</Text>
              <LucideIcon name="external-link" size={12} color="#4a7054" />
            </View>
          ))}
        </View>

        <View className="export-actions">
          <View
            id="export-seat-data"
            role="button"
            className="dialog-subtle-btn"
            onClick={handleExportSeatData}
          >
            <Text>下载当前座位坐标 JSON</Text>
            <LucideIcon name="download" size={13} color="#3a5842" />
          </View>
          <View
            id="export-model"
            role="button"
            className="dialog-subtle-btn"
            onClick={handleExportModel}
          >
            <Text>
              {exportingGlb ? "正在打包 GLB…" : "导出当前三维模型 GLB"}
            </Text>
            <LucideIcon name="download" size={13} color="#3a5842" />
          </View>
        </View>
        {exportStatus ? (
          <Text id="export-status" className="export-note">
            {exportStatus}
          </Text>
        ) : null}
      </ModalDialog>

      {/* Expanded Seat Map Dialog */}
      <ModalDialog
        id="map-dialog"
        open={mapOpen}
        onClose={() => setMapOpen(false)}
        eyebrow="CHOOSE A SEAT"
        title={`${currentFloorMeta?.label} · ${isWeapp ? "轻点入座，双指放大" : "点击入座"}`}
        className="map-dialog"
      >
        <View id="expanded-seatmap" className="expanded-seatmap-box">
          <SeatMapCanvas
            canvasId="seatmap-expanded"
            seats={seats}
            floor={floor}
            pit={pitVisible}
            selectedSeat={selectedSeat}
            floorLabel={currentFloorMeta?.label}
            expanded
            onSelectSeat={(s) => {
              setMapOpen(false);
              goToSeat(s);
            }}
          />
        </View>
        <Text className="dialog-p">{isWeapp ? "双指缩放，单指拖动定位，轻点座位入座。" : "点击任意圆点入座。"}当前标注为重建编号。</Text>
      </ModalDialog>
    </View>
  );
}
