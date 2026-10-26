import { icon } from "./icons.js";
import * as THREE from "three";
import { OrbitControls } from "../vendor/OrbitControls.js";
import { GLTFExporter } from "../vendor/GLTFExporter.js";
import { seatEye, labelSeat, rowsFor } from "./layout.js";
import { VENUES, getVenue } from "./venues.js";
const venue = getVenue(
  new URL(location.href).searchParams.get("theatre") || "meixihu",
);
const {
  stage: STAGE,
  levels: LEVELS,
  provenance: PROVENANCE,
  version: MODEL_VERSION,
} = venue;
const DEFAULT_FOV = 75;
const $ = (s) => document.querySelector(s);
const seats = venue.makeLayout();
const seatById = new Map(
  seats.map((s, i) => [s.seatId, { seat: s, index: i }]),
);
const state = {
  mode: "seat",
  floor: "1F",
  selected: null,
  height: 1.16,
  fov: DEFAULT_FOV,
  lighting: "house",
  pit: true,
  yaw: 0,
  pitch: 0,
  frames: 0,
  ready: false,
  errors: [],
};
function log(event, data = {}) {
  console.info("[THEATRE_VIEW]", JSON.stringify({ event, ...data }));
}
function reportError(event, error) {
  const message = error?.message || String(error);
  state.errors.push({ event, message });
  console.error(
    "[THEATRE_VIEW]",
    JSON.stringify({ event, message, stack: error?.stack }),
  );
}
window.addEventListener("error", (e) =>
  reportError("runtime-error", e.error || e.message),
);
window.addEventListener("unhandledrejection", (e) =>
  reportError("promise-error", e.reason),
);
const viewport = $("#viewport");
let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true,
  });
} catch (e) {
  reportError("renderer-init-failed", e);
  $("#loading").innerHTML =
    "<b>当前设备无法启动三维渲染</b><small>请启用浏览器硬件加速后重新打开。</small>";
  throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
renderer.setSize(viewport.clientWidth, viewport.clientHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
viewport.appendChild(renderer.domElement);
renderer.domElement.setAttribute("aria-label", venue.name + "内部三维画面");
renderer.domElement.tabIndex = 0;
const scene = new THREE.Scene();
scene.background = new THREE.Color("#171b16");
const camera = new THREE.PerspectiveCamera(
  state.fov,
  viewport.clientWidth / viewport.clientHeight,
  0.055,
  180,
);
camera.name = "Seated_Eye_Camera";
const theatre = venue.build(seats);
scene.add(theatre.root);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;
controls.target.set(0, 3, 16);
controls.minDistance = 13;
controls.maxDistance = 85;
controls.maxPolarAngle = Math.PI * 0.48;
controls.minPolarAngle = 0.13;
controls.enableDamping = true;
controls.dampingFactor = 0.08;
const raycaster = new THREE.Raycaster(),
  pointer = new THREE.Vector2();
let transition = null,
  toastTimer,
  renderLast = performance.now(),
  fps = 0,
  lastRenderMs = 0;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("visible"), 2300);
}
function applyAngles() {
  camera.quaternion.setFromEuler(
    new THREE.Euler(state.pitch, state.yaw, 0, "YXZ"),
  );
}
function setAnglesFromCamera() {
  const e = new THREE.Euler().setFromQuaternion(camera.quaternion, "YXZ");
  state.pitch = e.x;
  state.yaw = e.y;
}
function cameraDestination(seat) {
  const position = new THREE.Vector3(...seatEye(seat, state.height));
  const temp = new THREE.PerspectiveCamera();
  temp.position.copy(position);
  temp.lookAt(...STAGE.target);
  return { position, quaternion: temp.quaternion.clone() };
}
function goToSeat(seat, { animate = true, updateUrl = true } = {}) {
  camera.fov = state.fov;
  camera.updateProjectionMatrix();
  const previous = state.selected;
  state.selected = seat;
  state.floor = seat.level;
  state.mode = "seat";
  controls.enabled = false;
  theatre.setOverview(false);
  const destination = cameraDestination(seat);
  if (animate && !reducedMotion && previous) {
    transition = {
      started: performance.now(),
      duration: 620,
      fromPos: camera.position.clone(),
      fromQuat: camera.quaternion.clone(),
      toPos: destination.position,
      toQuat: destination.quaternion,
    };
  } else {
    transition = null;
    camera.position.copy(destination.position);
    camera.quaternion.copy(destination.quaternion);
    setAnglesFromCamera();
  }
  theatre.marker.position.set(
    seat.position[0],
    seat.position[1] + 0.045,
    seat.position[2],
  );
  updateInfo();
  updateMode();
  updateFloorTabs();
  fillFormFromSeat();
  renderMaps();
  if (updateUrl) {
    const u = new URL(location.href);
    u.searchParams.set("theatre", venue.id);
    u.searchParams.set("seat", seat.seatId);
    history.replaceState(null, "", u);
  }
  log("seat-selected", {
    seatId: seat.seatId,
    position: seat.position,
    eye: seatEye(seat, state.height),
  });
}
function updateInfo() {
  const s = state.selected;
  $("#selected-label").textContent = labelSeat(s);
  $("#seat-distance").textContent =
    `${Math.hypot(s.position[0], s.position[2]).toFixed(1)} m`;
  $("#seat-elevation").textContent =
    `${seatEye(s, state.height)[1].toFixed(2)} m`;
  $("#seat-id").textContent = s.seatId + " · 重建编号";
}
function updateMode() {
  for (const mode of ["seat", "overview"]) {
    $("#mode-" + mode).classList.toggle("active", state.mode === mode);
    $("#mode-" + mode).setAttribute(
      "aria-pressed",
      String(state.mode === mode),
    );
  }
  $("#viewer-hint").innerHTML =
    state.mode === "seat"
      ? `${icon("move-horizontal")} 拖动转头 · 自然观演视角`
      : `${icon("move-horizontal")} 拖动旋转 · 滚轮缩放 · 点击座椅入座`;
}
function setOverview() {
  transition = null;
  state.mode = "overview";
  theatre.setOverview(true);
  controls.enabled = true;
  camera.fov = 47;
  camera.updateProjectionMatrix();
  camera.position.set(37, 37, 47);
  controls.target.set(0, 4, 15);
  controls.update();
  updateMode();
  log("overview-opened");
}
function updateFloorTabs() {
  for (const b of document.querySelectorAll("[data-floor]"))
    b.setAttribute("aria-selected", String(b.dataset.floor === state.floor));
  const n = seats.filter(
    (s) => s.level === state.floor && (state.pit || s.zone !== "P"),
  ).length;
  $("#floor-count").textContent =
    `${LEVELS.find((l) => l.id === state.floor).label} · ${n} 个位置`;
}
function options(el, list, current) {
  el.innerHTML = "";
  for (const [value, label] of list) {
    const o = document.createElement("option");
    o.value = value;
    o.textContent = label;
    el.append(o);
  }
  if (current !== undefined) el.value = String(current);
}
function fillFormFromSeat() {
  const s = state.selected;
  const zones = [
    ...new Set(
      seats
        .filter((a) => a.level === state.floor && (state.pit || a.zone !== "P"))
        .map((a) => a.zone),
    ),
  ];
  options(
    $("#zone-select"),
    zones.map((z) => [
      z,
      {
        M: state.floor === "1F" ? "池座" : "中区",
        L: "左侧楼座",
        R: "右侧楼座",
        P: "乐池",
        BL: "左侧包厢",
        BR: "右侧包厢",
      }[z],
    ]),
    s.zone,
  );
  fillRows(s.row, s.number);
}
function fillRows(row, number) {
  const zone = $("#zone-select").value;
  const rows = rowsFor(seats, state.floor, zone);
  options(
    $("#row-select"),
    rows.map((r) => [r, zone.startsWith("B") ? `${r}号包厢` : `${r}排`]),
    rows.includes(Number(row)) ? row : rows[0],
  );
  fillNumbers(number);
}
function fillNumbers(number) {
  const arr = seats.filter(
    (s) =>
      s.level === state.floor &&
      s.zone === $("#zone-select").value &&
      s.row === Number($("#row-select").value),
  );
  options(
    $("#number-select"),
    arr.map((s) => [s.number, `${s.number}座`]),
    arr.some((s) => s.number === Number(number))
      ? number
      : arr[Math.floor(arr.length / 2)]?.number,
  );
}
function mapSvg() {
  const arr = seats.filter(
    (s) => s.level === state.floor && (state.pit || s.zone !== "P"),
  );
  const minX = Math.min(...arr.map((s) => s.mapPosition[0])),
    maxX = Math.max(...arr.map((s) => s.mapPosition[0])),
    minY = Math.min(...arr.map((s) => s.mapPosition[1])),
    maxY = Math.max(...arr.map((s) => s.mapPosition[1]));
  const scale = Math.min(288 / (maxX - minX + 12), 220 / (maxY - minY + 10));
  const centre = (minX + maxX) / 2;
  const r = Math.min(1.72, scale * 2.25);
  const circle = arr
    .map((s) => {
      const x = 160 + (s.mapPosition[0] - centre) * scale,
        y = 40 + (s.mapPosition[1] - minY) * scale,
        label = labelSeat(s) + "，重建编号";
      return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${r}" data-seat="${s.seatId}" data-zone="${s.zone}" role="button" tabindex="${s.seatId === state.selected?.seatId ? 0 : -1}" aria-label="${label}" class="${s.seatId === state.selected?.seatId ? "selected" : ""}"><title>${label}</title></circle>`;
    })
    .join("");
  const bottom = 40 + (maxY - minY) * scale + 10;
  return `<svg class="seatmap" viewBox="0 0 320 ${Math.max(220, bottom)}" role="group" aria-label="${LEVELS.find((l) => l.id === state.floor).label}选座图"><path class="stage" d="M99 8H221L216 19H104Z"/><text class="stage-label" x="160" y="31" text-anchor="middle">舞 台</text>${circle}</svg>`;
}
function renderMaps() {
  $("#seatmap-container").innerHTML = mapSvg();
  if ($("#map-dialog").open) {
    $("#expanded-seatmap").innerHTML = mapSvg();
    $("#expanded-map-title").textContent =
      LEVELS.find((l) => l.id === state.floor).label + " · 点击入座";
  }
}
function onMapClick(e) {
  const circle = e.target.closest("[data-seat]");
  if (!circle) return;
  const entry = seatById.get(circle.dataset.seat);
  if (entry) {
    if ($("#map-dialog").open) $("#map-dialog").close();
    goToSeat(entry.seat);
  }
}
$("#seatmap-container").addEventListener("click", onMapClick);
$("#expanded-seatmap").addEventListener("click", onMapClick);
function keyboardSeat(e) {
  const circle = e.target.closest("[data-seat]");
  if (!circle) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onMapClick(e);
    return;
  }
  if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
    moveSeat(e.key === "ArrowRight" ? 1 : -1);
    const node = e.currentTarget.querySelector(
      `[data-seat="${state.selected.seatId}"]`,
    );
    node?.focus();
  }
}
$("#seatmap-container").addEventListener("keydown", keyboardSeat);
$("#expanded-seatmap").addEventListener("keydown", keyboardSeat);
for (const tab of document.querySelectorAll("[data-floor]"))
  tab.addEventListener("click", () => {
    const level = tab.dataset.floor;
    const arr = seats.filter((s) => s.level === level && s.zone === "M");
    const middle = arr.reduce(
      (best, s) =>
        Math.abs(s.position[0]) + Math.abs(s.row - venue.middleRows[level]) <
        Math.abs(best.position[0]) +
          Math.abs(best.row - venue.middleRows[level])
          ? s
          : best,
      arr[0],
    );
    goToSeat(middle);
  });
$("#zone-select").addEventListener("change", () => fillRows());
$("#row-select").addEventListener("change", () => fillNumbers());
$("#go-seat").addEventListener("click", () => {
  const s = seats.find(
    (s) =>
      s.level === state.floor &&
      s.zone === $("#zone-select").value &&
      s.row === Number($("#row-select").value) &&
      s.number === Number($("#number-select").value),
  );
  if (s) goToSeat(s);
});
function moveSeat(direction) {
  const current = state.selected;
  const sameRow = seats.filter(
    (s) =>
      s.level === current.level &&
      s.zone === current.zone &&
      s.row === current.row,
  );
  let i = sameRow.findIndex((s) => s.seatId === current.seatId) + direction;
  if (i < 0 || i >= sameRow.length) {
    toast(
      direction > 0 ? "已经是这一排的最后一个位置" : "已经是这一排的第一个位置",
    );
    return;
  }
  goToSeat(sameRow[i]);
}
$("#seat-prev").addEventListener("click", () => moveSeat(-1));
$("#seat-next").addEventListener("click", () => moveSeat(1));
$("#random-seat").addEventListener("click", () => {
  const available = seats.filter((s) => state.pit || s.zone !== "P");
  goToSeat(available[Math.floor(Math.random() * available.length)]);
});
$("#mode-overview").addEventListener("click", setOverview);
$("#mode-seat").addEventListener("click", () => goToSeat(state.selected));
function restoreNaturalView() {
  camera.zoom = 1;
  setFov(DEFAULT_FOV);
  goToSeat(state.selected);
  toast("已恢复自然视角");
}
$("#reset-view").addEventListener("click", restoreNaturalView);
$("#look-back").addEventListener("click", () => {
  if (state.mode === "overview") goToSeat(state.selected, { animate: false });
  transition = null;
  camera.lookAt(0, 11.5, 36);
  setAnglesFromCamera();
  toast("回望观众厅 · 拖动可继续环顾");
});
$("#lighting-toggle").addEventListener("click", () => {
  state.lighting = state.lighting === "house" ? "show" : "house";
  theatre.setLighting(state.lighting);
  $("#lighting-toggle").setAttribute(
    "aria-pressed",
    String(state.lighting === "show"),
  );
  $("#lighting-toggle span").textContent =
    state.lighting === "show" ? "演出灯光" : "观众厅灯光";
  toast(state.lighting === "show" ? "已切换演出灯光" : "已切换观众厅灯光");
});
$("#fullscreen").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (e) {
    reportError("fullscreen-unavailable", e);
    toast("当前浏览器未允许全屏，可使用系统全屏功能");
  }
});
$("#panel-toggle").addEventListener("click", () => {
  const collapsed = $(".seat-panel").classList.toggle("collapsed");
  document.body.classList.toggle("panel-collapsed", collapsed);
  $("#panel-toggle").innerHTML = icon(collapsed ? "plus" : "minus");
  $("#panel-toggle").setAttribute("aria-expanded", String(!collapsed));
  $("#panel-toggle").setAttribute(
    "aria-label",
    collapsed ? "展开选座面板" : "收起选座面板",
  );
});
const dialogMap = {
  "#settings-open": "#settings-dialog",
  "#reference-open": "#reference-dialog",
  "#info-open": "#info-dialog",
  "#provenance-open": "#info-dialog",
  "#map-expand": "#map-dialog",
};
for (const [button, dialog] of Object.entries(dialogMap))
  $(button).addEventListener("click", () => {
    $(dialog).showModal();
    if (dialog === "#map-dialog") renderMaps();
  });
for (const b of document.querySelectorAll("[data-close]"))
  b.addEventListener("click", () => b.closest("dialog").close());
for (const d of document.querySelectorAll("dialog"))
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const rect = d.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      )
        d.close();
    }
  });
$("#reference-title").textContent = "对照真实的" + venue.name;
$(".reference-tabs").innerHTML = venue.references
  .map(
    (r, i) =>
      `<button data-reference="${r.file}" class="${i === 0 ? "active" : ""}">${r.label}</button>`,
  )
  .join("");
function showReference(file) {
  const ref = venue.references.find((r) => r.file === file);
  $("#reference-image").src = new URL(
    "../reference/" + ref.file,
    import.meta.url,
  ).href;
  $("#reference-image").alt = venue.name + " · " + ref.label;
  $("#reference-caption").textContent = ref.caption;
  for (const b of document.querySelectorAll("[data-reference]"))
    b.classList.toggle("active", b.dataset.reference === file);
}
for (const b of document.querySelectorAll("[data-reference]"))
  b.addEventListener("click", () => showReference(b.dataset.reference));
showReference(venue.references[0].file);
$("#model-form-note").textContent = venue.formNote;
$("#model-seat-note").textContent = venue.seatNote;
$("#model-size-note").textContent = venue.sizeNote;
$("#venue-name").textContent = venue.name + " · 主剧场";
$("#current-theatre-name").textContent = venue.name + " · YOUR SEAT";
$("#venue-select").innerHTML = VENUES.map(
  (v) => `<option value="${v.id}">${v.name}</option>`,
).join("");
$("#venue-select").value = venue.id;
$("#venue-select").addEventListener("change", (e) => {
  const u = new URL(location.href);
  u.searchParams.set("theatre", e.target.value);
  u.searchParams.delete("seat");
  location.assign(u.href);
});
document.title = venue.name + " · 剧场座位视角";
function setEyeHeight(value) {
  state.height = value;
  $("#eye-height").value = String(Math.round(value * 100));
  $("#eye-output").textContent = `${Math.round(value * 100)} cm`;
  if (state.mode === "seat") {
    transition = null;
    camera.position.set(...seatEye(state.selected, state.height));
  }
  updateInfo();
}
function setFov(value) {
  state.fov = value;
  camera.fov = value;
  camera.updateProjectionMatrix();
  $("#fov").value = String(Math.round(value));
  $("#fov-output").textContent = `${Math.round(value)}°`;
}
$("#eye-height").addEventListener("input", (e) =>
  setEyeHeight(Number(e.target.value) / 100),
);
$("#fov").addEventListener("input", (e) => setFov(Number(e.target.value)));
$("#actor-toggle").addEventListener(
  "change",
  (e) => (theatre.actor.visible = e.target.checked),
);
function setPit(visible) {
  state.pit = visible;
  theatre.setPitVisible(visible);
  if (!visible && state.selected.zone === "P")
    goToSeat(
      seats.find(
        (s) =>
          s.level === "1F" && s.zone === "M" && s.row === 1 && s.number === 22,
      ),
    );
  updateFloorTabs();
  renderMaps();
  log("pit-configuration-changed", { visible });
}
$("#pit-toggle").addEventListener("change", (e) => setPit(e.target.checked));
$("#settings-reset").addEventListener("click", () => {
  setEyeHeight(1.16);
  camera.zoom = 1;
  setFov(DEFAULT_FOV);
  $("#actor-toggle").checked = true;
  theatre.actor.visible = true;
  $("#pit-toggle").checked = true;
  setPit(true);
  toast("已恢复默认视角参数");
});
$("#source-links").innerHTML = PROVENANCE.sources
  .map(
    (s) =>
      `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title} ${icon("external-link")}</a>`,
  )
  .join("");
function downloadBlob(blob, name) {
  const a = document.createElement("a");
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$("#export-seat-data").addEventListener("click", () =>
  downloadBlob(
    new Blob(
      [
        JSON.stringify(
          {
            theatreId: venue.id,
            theatreName: venue.name,
            version: MODEL_VERSION,
            units: "metres",
            axis: "Y-up",
            origin: "stage-front-centre",
            provenance: PROVENANCE,
            seats,
          },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    ),
    venue.slug + "-seats.json",
  ),
);
$("#export-model").addEventListener("click", async () => {
  const b = $("#export-model");
  b.disabled = true;
  $("#export-status").textContent = "正在打包三维模型，请稍候…";
  try {
    const g = new THREE.Group();
    g.name = venue.slug + "_Interior_Reconstruction";
    g.userData = {
      theatreId: venue.id,
      provenance: PROVENANCE,
      modelVersion: MODEL_VERSION,
      units: "metres",
      seatIdentity: "inferred",
    };
    g.add(theatre.architecture.clone(true));
    // Export chairs as regular meshes sharing the same geometry; portable GLB, stable IDs.
    for (const source of theatre.chairs) {
      for (let i = 0; i < seats.length; i++) {
        if (!state.pit && seats[i].zone === "P") continue;
        const m = new THREE.Mesh(source.geometry, source.material);
        m.name = seats[i].seatId + "_" + source.name;
        m.userData = { seatId: seats[i].seatId, confidence: "inferred" };
        source.getMatrixAt(i, m.matrix);
        m.matrix.decompose(m.position, m.quaternion, m.scale);
        g.add(m);
      }
    }
    // Ceiling/wall visibility in overview must not make exported geometry disappear.
    g.traverse((o) => {
      if (o.name === "Ceiling" || o.name === "Auditorium_Walls")
        o.visible = true;
    });
    const exporter = new GLTFExporter();
    const data = await exporter.parseAsync(g, {
      binary: true,
      onlyVisible: true,
    });
    downloadBlob(
      new Blob([data], { type: "model/gltf-binary" }),
      venue.slug + "-interior.glb",
    );
    $("#export-status").textContent =
      "已导出 GLB。文件包含重建几何与座位标识，尺寸仍待校准。";
    log("model-exported", { bytes: data.byteLength });
  } catch (e) {
    reportError("model-export-failed", e);
    $("#export-status").textContent = "导出失败：" + e.message;
  } finally {
    b.disabled = false;
  }
});
// Pointer input: seat mode rotates around a stationary eye point; overview uses OrbitControls.
let drag = null;
renderer.domElement.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  drag = {
    x: e.clientX,
    y: e.clientY,
    startX: e.clientX,
    startY: e.clientY,
    moved: false,
  };
  if (state.mode === "seat") {
    transition = null;
    setAnglesFromCamera();
    renderer.domElement.setPointerCapture(e.pointerId);
  }
});
renderer.domElement.addEventListener("pointermove", (e) => {
  if (!drag || state.mode !== "seat") return;
  const dx = e.clientX - drag.x,
    dy = e.clientY - drag.y;
  if (Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) > 4)
    drag.moved = true;
  state.yaw -= dx * 0.0038;
  state.pitch = THREE.MathUtils.clamp(state.pitch - dy * 0.0033, -1.3, 1.3);
  applyAngles();
  drag.x = e.clientX;
  drag.y = e.clientY;
});
renderer.domElement.addEventListener("pointerup", (e) => {
  if (!drag) return;
  const moved =
    drag.moved ||
    Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) > 5;
  drag = null;
  if (renderer.domElement.hasPointerCapture(e.pointerId))
    renderer.domElement.releasePointerCapture(e.pointerId);
  if (!moved && state.mode === "overview") {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      (-(e.clientY - rect.top) / rect.height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    const occluders = [];
    theatre.architecture.traverseVisible((o) => {
      if (o.isMesh) occluders.push(o);
    });
    const hit = raycaster.intersectObjects(
      [...theatre.chairs, ...occluders],
      false,
    )[0];
    if (
      hit?.instanceId !== undefined &&
      (state.pit || seats[hit.instanceId].zone !== "P")
    )
      goToSeat(seats[hit.instanceId]);
  }
});
renderer.domElement.addEventListener("pointercancel", () => (drag = null));
renderer.domElement.addEventListener(
  "wheel",
  (e) => {
    if (state.mode === "seat") {
      e.preventDefault();
    }
  },
  { passive: false },
);
renderer.domElement.addEventListener("keydown", (e) => {
  if (
    state.mode !== "seat" ||
    !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(e.key)
  )
    return;
  e.preventDefault();
  transition = null;
  if (e.key === "Home") {
    restoreNaturalView();
    return;
  }
  if (e.key === "ArrowLeft") state.yaw += 0.08;
  if (e.key === "ArrowRight") state.yaw -= 0.08;
  if (e.key === "ArrowUp") state.pitch = Math.min(1.3, state.pitch + 0.06);
  if (e.key === "ArrowDown") state.pitch = Math.max(-1.3, state.pitch - 0.06);
  applyAngles();
});
function resize() {
  camera.aspect = viewport.clientWidth / viewport.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(viewport.clientWidth, viewport.clientHeight, false);
}
window.addEventListener("resize", resize);
function frame(now) {
  requestAnimationFrame(frame);
  if (transition) {
    const t = THREE.MathUtils.clamp(
        (now - transition.started) / transition.duration,
        0,
        1,
      ),
      ease = t * t * (3 - 2 * t);
    camera.position.lerpVectors(transition.fromPos, transition.toPos, ease);
    camera.quaternion.slerpQuaternions(
      transition.fromQuat,
      transition.toQuat,
      ease,
    );
    if (t === 1) {
      transition = null;
      setAnglesFromCamera();
    }
  }
  if (state.mode === "overview") controls.update();
  const renderStart = performance.now();
  renderer.render(scene, camera);
  lastRenderMs = performance.now() - renderStart;
  state.frames++;
  if (now - renderLast > 1000) {
    fps = Math.round((state.frames * 1000) / (now - renderLast));
    state.frames = 0;
    renderLast = now;
    $("#render-status").textContent =
      `${venue.name} · ${seats.length.toLocaleString()} 个重建位置`;
  }
}
const queryId = new URL(location.href).searchParams.get("seat");
const initial =
  queryId && seatById.has(queryId)
    ? seatById.get(queryId).seat
    : seatById.get(venue.defaultSeat).seat;
goToSeat(initial, { animate: false });
setFov(state.fov);
requestAnimationFrame(frame);
$("#loading").remove();
state.ready = true;
log("scene-ready", {
  seats: seats.length,
  levels: LEVELS.map((l) => ({
    id: l.id,
    count: seats.filter((s) => s.level === l.id).length,
  })),
  version: MODEL_VERSION,
});
// Bounded diagnostics expose actual runtime state for acceptance and future calibration.
window.__THEATRE_VIEW__ = {
  getState() {
    return {
      theatreId: venue.id,
      theatreName: venue.name,
      ready: state.ready,
      mode: state.mode,
      floor: state.floor,
      selected: state.selected.seatId,
      eye: camera.position.toArray(),
      expectedEye: seatEye(state.selected, state.height),
      quaternion: camera.quaternion.toArray(),
      fov: camera.fov,
      zoom: camera.zoom,
      height: state.height,
      pit: state.pit,
      errors: state.errors,
      transitioning: !!transition,
      render: {
        fps,
        lastRenderMs,
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
      },
      dimensions: {
        width: viewport.clientWidth,
        height: viewport.clientHeight,
      },
      modelVersion: MODEL_VERSION,
    };
  },
  listSeats() {
    return seats;
  },
  selectSeat(id, animate = false) {
    const e = seatById.get(id);
    if (!e) throw new Error("Unknown seat " + id);
    goToSeat(e.seat, { animate });
    camera.fov = state.fov;
    camera.updateProjectionMatrix();
  },
  overview: setOverview,
  inspectAllSeatCameras() {
    const probe = new THREE.PerspectiveCamera(
      state.fov,
      camera.aspect,
      0.055,
      180,
    );
    const target = new THREE.Vector3(...STAGE.target);
    const failures = [];
    const eyePositions = new Set();
    for (const s of seats) {
      const eye = seatEye(s, state.height);
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
    return { checked: seats.length, uniqueEyes: eyePositions.size, failures };
  },
  projectSeat(id) {
    const e = seatById.get(id);
    if (!e) return null;
    const p = new THREE.Vector3(...e.seat.position);
    p.y += 0.75;
    camera.updateMatrixWorld();
    p.project(camera);
    return {
      x: ((p.x + 1) / 2) * innerWidth,
      y: ((1 - p.y) / 2) * innerHeight,
      z: p.z,
    };
  },
  inspectSeatGeometry(id) {
    const { seat, index } = seatById.get(id);
    const matrices = theatre.chairs.map((m) => {
      const matrix = new THREE.Matrix4();
      m.getMatrixAt(index, matrix);
      return { part: m.name, matrix: matrix.toArray() };
    });
    return { seat, eye: seatEye(seat, state.height), matrices };
  },
  inspectStageVisibility(ids) {
    const ray = new THREE.Raycaster(),
      results = [];
    theatre.root.updateMatrixWorld(true);
    const target = new THREE.Vector3(...STAGE.target);
    const occluders = [];
    theatre.architecture.traverse((o) => {
      if (o.isMesh && o.parent !== theatre.actor) occluders.push(o);
    });
    for (const id of ids) {
      const s = seatById.get(id).seat,
        eye = new THREE.Vector3(...seatEye(s, state.height));
      const dir = target.clone().sub(eye);
      ray.set(eye, dir.clone().normalize());
      ray.near = 0.025;
      ray.far = dir.length() - 0.1;
      const hits = ray.intersectObjects(
        [...theatre.chairs, ...occluders],
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
                  : seats[hits[0].instanceId].seatId,
            }
          : null,
      });
    }
    return results;
  },
  inspectFloorSupport(start = 0, limit = 100) {
    const down = new THREE.Raycaster(),
      failures = [];
    const floorMeshes = [];
    theatre.architecture.traverse((o) => {
      if (
        o.isMesh &&
        o.userData.parts?.some((p) =>
          /Tread|Foundation|Orchestra_Pit_Floor/.test(p),
        )
      )
        floorMeshes.push(o);
    });
    theatre.root.updateMatrixWorld(true);
    const sample = seats.slice(start, start + limit);
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
    return new THREE.Box3()
      .setFromObject(theatre.root)
      .getSize(new THREE.Vector3())
      .toArray();
  },
};
