import * as THREE from "three";
import {
  addSeating,
  setPitVisible,
  batchGroup,
  addBox,
  box,
  surface,
  tube,
} from "./theatre-common.js";
import { POLY_ROWS, polyRowGeometry } from "./poly-layout.js";
export function buildPolyTheatre(seats) {
  const root = new THREE.Group();
  root.name = "Shenzhen_Poly_Theatre_Interior";
  const architecture = new THREE.Group();
  architecture.name = "Architecture";
  root.add(architecture);
  const walls = new THREE.Group();
  walls.name = "Auditorium_Walls";
  architecture.add(walls);
  const overhead = new THREE.Group();
  overhead.name = "Ceiling";
  architecture.add(overhead);
  const mat = (color, roughness = 0.8) =>
    new THREE.MeshStandardMaterial({
      color,
      roughness,
      side: THREE.DoubleSide,
    });
  const grey = mat("#686760"),
    greyLight = mat("#8f8b7d"),
    dark = mat("#242521"),
    gold = mat("#bb7f35", 0.45),
    wood = mat("#b78348"),
    floor = mat("#40362c"),
    red = mat("#a42e26"),
    frame = mat("#ba873c", 0.55),
    black = mat("#101217");
  const strip = new THREE.MeshStandardMaterial({
    color: "#ffe1a2",
    emissive: "#ffb44f",
    emissiveIntensity: 1.8,
    toneMapped: false,
  });
  const put = (parent, w, h, d, material, pos, name) =>
    addBox(parent, box(w, h, d), material, pos, name);
  // A straight 16 m proscenium, grey acoustic towers and a dark performance box.
  put(architecture, 16.4, 0.3, 12, wood, [0, -0.15, -6], "Stage_Floor");
  put(architecture, 16.6, 10.5, 0.2, black, [0, 5.1, -12], "Stage_Backwall");
  for (const side of [-1, 1]) {
    put(
      architecture,
      0.25,
      10.5,
      12,
      black,
      [side * 8.25, 5.1, -6],
      "Stage_Sidewall",
    );
    put(
      architecture,
      3.4,
      17.5,
      1.3,
      grey,
      [side * 10, 7.75, -0.4],
      "Proscenium_Acoustic_Tower",
    );
    put(
      architecture,
      5.1,
      17.5,
      1.2,
      greyLight,
      [side * 14.2, 7.75, 1.2],
      "Stage_Cheek",
    );
    for (let k = 0; k < 5; k++)
      put(
        architecture,
        0.035,
        14,
        0.12,
        dark,
        [side * (8.5 + k * 0.48), 7.5, 0.3],
        "Tower_Vertical_Joint",
      );
  }
  put(
    architecture,
    16.6,
    5.5,
    1.3,
    grey,
    [0, 12.75, -0.4],
    "Proscenium_Header",
  );
  const curtain = [];
  for (let y of [0, 10]) {
    const row = [];
    for (let i = 0; i <= 100; i++)
      row.push([-8 + i * 0.16, y, -11.7 + 0.07 * Math.sin(i * 2.1)]);
    curtain.push(row);
  }
  architecture.add(surface(curtain, red, "Stage_Curtain"));
  for (let x = -7; x <= 7; x += 1.4)
    put(architecture, 0.28, 0.35, 0.45, dark, [x, 9.8, -0.7], "Stage_Lamp");
  // Ground rows share their exact floor function with the seat coordinates.
  put(
    architecture,
    24,
    0.28,
    4.4,
    floor,
    [0, -1.3, 3.1],
    "Orchestra_Pit_Floor",
  );
  for (const level of ["1F", "2F", "3F"]) {
    const arr = seats.filter((s) => s.level === level && s.zone === "M");
    POLY_ROWS[level].forEach((_, r) => {
      const row = arr.filter((s) => s.row === r + 1),
        half = Math.max(...row.map((s) => Math.abs(s.position[0]))) + 0.39;
      const tread = [],
        riser = [],
        underside = [];
      for (let i = 0; i <= 80; i++) {
        const x = -half + (2 * half * i) / 80,
          g = polyRowGeometry(level, r + 1, x);
        tread.push([
          [x, g.y, g.z - 0.44],
          [x, g.y, g.z + 0.44],
        ]);
        riser.push([
          [x, g.y - (level === "1F" ? 0.18 : 0.36), g.z - 0.44],
          [x, g.y, g.z - 0.44],
        ]);
        underside.push([
          [x, g.y - 0.23, g.z - 0.44],
          [x, g.y - 0.23, g.z + 0.44],
        ]);
      }
      architecture.add(surface(tread, floor, `${level}_Row_${r + 1}_Tread`));
      architecture.add(
        surface(
          riser,
          level === "1F" ? dark : gold,
          `${level}_Row_${r + 1}_Riser`,
        ),
      );
      if (level !== "1F")
        architecture.add(
          surface(underside, dark, `${level}_Row_${r + 1}_Soffit`),
        );
      for (const sign of [-1, 1]) {
        const x = sign * (half - 0.1),
          g = polyRowGeometry(level, r + 1, x);
        put(
          architecture,
          0.08,
          0.025,
          0.25,
          strip,
          [x, g.y + 0.02, g.z - 0.28],
          "Aisle_Step_Light",
        );
      }
    });
    if (level === "1F") continue;
    const first = arr.filter((s) => s.row === 1),
      half = Math.max(...first.map((s) => Math.abs(s.position[0]))) + 0.4;
    const lip = [];
    for (let i = 0; i <= 90; i++) {
      const x = -half + (2 * half * i) / 90,
        g = polyRowGeometry(level, 1, x);
      lip.push([x, g.y, g.z - 0.49]);
    }
    // Broad brass balcony fronts, black soffits and small downlights match the photograph.
    architecture.add(
      surface(
        lip.map(([x, y, z]) => [
          [x, y - 0.35, z],
          [x, y + 0.72, z],
        ]),
        gold,
        `${level}_Balcony_Fascia`,
      ),
    );
    architecture.add(
      tube(
        lip.map(([x, y, z]) => [x, y + 0.76, z]),
        0.045,
        frame,
        `${level}_Balcony_Rail`,
      ),
    );
    architecture.add(
      tube(
        lip.map(([x, y, z]) => [x, y - 0.18, z - 0.02]),
        0.024,
        strip,
        `${level}_Balcony_Light_Band`,
      ),
    );
    for (let i = 3; i < lip.length; i += 5) {
      const [x, y, z] = lip[i];
      put(
        architecture,
        0.075,
        0.035,
        0.075,
        strip,
        [x, y - 0.31, z + 0.12],
        "Gallery_Downlight",
      );
    }
    for (const sign of [-1, 1]) {
      const y = (level === "2F" ? 6 : 11) - 0.15;
      put(
        architecture,
        2.25,
        0.28,
        13.2,
        floor,
        [sign * 15.2, y - 0.14, 13.55],
        `${level}_Box_Foundation`,
      );
      put(
        architecture,
        0.16,
        0.9,
        12.5,
        gold,
        [sign * 14.14, y + 0.3, 13.3],
        `${level}_Box_Parapet`,
      );
      put(
        architecture,
        0.09,
        0.06,
        12.5,
        frame,
        [sign * 14.05, y + 0.78, 13.3],
        `${level}_Box_Rail`,
      );
      for (const z of [6.7, 12.5, 19.8])
        put(
          architecture,
          2.25,
          0.9,
          0.13,
          gold,
          [sign * 15.2, y + 0.31, z],
          `${level}_Box_Divider`,
        );
      const end = polyRowGeometry(level, 1, sign * half);
      const bridge = [
        [
          [sign * 14.1, y, 19.8],
          [sign * 16.3, y, 19.8],
        ],
        [
          [sign * half, end.y, end.z - 0.44],
          [sign * (half + 1.4), end.y, end.z + 0.5],
        ],
      ];
      architecture.add(surface(bridge, floor, `${level}_Box_Link_Tread`));
    }
  }
  // Cross aisle after the front seven rows. It spans the real separation in the layout.
  const aisle = [];
  for (let i = 0; i <= 64; i++) {
    const x = -14 + (i * 28) / 64,
      a = polyRowGeometry("1F", 7, x),
      b = polyRowGeometry("1F", 8, x);
    aisle.push([
      [x, a.y, a.z + 0.44],
      [x, b.y, b.z - 0.44],
    ]);
  }
  architecture.add(surface(aisle, floor, "Stalls_Transverse_Aisle"));
  for (const sign of [-1, 1]) {
    put(
      walls,
      0.3,
      19,
      34.2,
      grey,
      [sign * 16.65, 8.2, 17.2],
      "Grey_Side_Wall",
    );
    // Angular grey panels with tall dark joints, rather than Meixihu's flowing wood walls.
    for (let k = 0; k < 12; k++) {
      const panel = put(
        walls,
        0.15,
        16,
        2.7,
        k % 3 === 0 ? greyLight : grey,
        [sign * 16.42, 8.5, 3 + k * 2.75],
        "Faceted_Acoustic_Panel",
      );
      panel.rotation.y = sign * (k % 2 ? 0.035 : -0.035);
      put(
        walls,
        0.12,
        16,
        0.05,
        dark,
        [sign * 16.25, 8.5, 1.63 + k * 2.75],
        "Acoustic_Panel_Reveal",
      );
    }
    for (const [z, y] of [
      [16, 1.3],
      [30, 3.7],
      [30, 8],
      [30, 12],
    ]) {
      put(
        walls,
        0.1,
        2.1,
        1.35,
        black,
        [sign * 16.38, y, z],
        "Auditorium_Exit",
      );
      put(
        walls,
        0.11,
        0.12,
        0.38,
        strip,
        [sign * 16.29, y + 1.03, z],
        "Exit_Indicator",
      );
    }
  }
  put(walls, 33.6, 19, 0.3, grey, [0, 8.2, 34.5], "Rear_Wall");
  put(walls, 4.4, 1.8, 0.12, black, [0, 5.1, 34.25], "Rear_Control_Window");
  // Shallow golden ceiling panels and dark transverse technical slots.
  for (let row = 0; row < 10; row++)
    for (let col = 0; col < 6; col++) {
      const x0 = -16.4 + col * 5.48,
        z0 = -0.2 + row * 3.47;
      const points = [[], []];
      for (let a = 0; a < 2; a++)
        for (let b = 0; b < 2; b++) {
          const x = x0 + b * 5.39,
            z = z0 + a * 3.36;
          points[a].push([
            x,
            18.1 - 0.003 * x * x - 0.022 * z + (row % 2) * 0.13,
            z,
          ]);
        }
      overhead.add(surface(points, wood, "Segmented_Wood_Ceiling"));
      for (let k = 0; k < 3; k++)
        put(
          overhead,
          0.1,
          0.03,
          0.1,
          strip,
          [
            x0 + 1.1 + k * 1.6,
            17.95 - 0.003 * (x0 + 1.1 + k * 1.6) ** 2 - 0.022 * (z0 + 1.5),
            z0 + 1.5,
          ],
          "Ceiling_Downlight",
        );
    }
  for (const z of [9.8, 20.2, 30.6])
    put(
      overhead,
      31,
      0.2,
      0.4,
      dark,
      [0, 17.6 - 0.022 * z, z],
      "Ceiling_Technical_Slot",
    );
  const actor = new THREE.Group();
  actor.name = "Stage_Scale_Reference";
  actor.position.set(0, 0, -4);
  const human = mat("#d1c9b7");
  const torso = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.2, 0.7, 4, 8),
    human,
  );
  torso.position.y = 1;
  actor.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 8), human);
  head.position.y = 1.65;
  actor.add(head);
  for (const sign of [-1, 1]) {
    const leg = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.075, 0.65, 3, 6),
      human,
    );
    leg.position.set(sign * 0.11, 0.38, 0);
    actor.add(leg);
  }
  architecture.add(actor);
  const chairs = addSeating(root, seats, {
    seatMat: red,
    backMat: red,
    darkWood: frame,
  });
  batchGroup(overhead);
  batchGroup(walls);
  batchGroup(architecture);
  const lights = new THREE.Group();
  root.add(lights);
  const ambient = new THREE.HemisphereLight("#ffe5bf", "#4a4641", 2.4),
    key = new THREE.DirectionalLight("#ffdfb0", 2.8),
    fill = new THREE.DirectionalLight("#dce4ee", 1.4);
  key.position.set(0, 15, 4);
  fill.position.set(-12, 12, 25);
  lights.add(ambient, key, fill);
  const stageLight = new THREE.PointLight("#ffdfbc", 80, 32, 2);
  stageLight.position.set(0, 8, -5);
  lights.add(stageLight);
  const marker = new THREE.Mesh(
    new THREE.TorusGeometry(0.4, 0.035, 6, 40),
    new THREE.MeshBasicMaterial({ color: "#64d8c1", depthTest: false }),
  );
  marker.rotation.x = -Math.PI / 2;
  marker.renderOrder = 20;
  root.add(marker);
  return {
    root,
    architecture,
    overhead,
    walls,
    chairs,
    marker,
    actor,
    materials: { wood, strip },
    setPitVisible(v) {
      setPitVisible(chairs, seats, v);
    },
    setOverview(v) {
      overhead.visible = !v;
      walls.visible = !v;
      marker.visible = v;
    },
    setLighting(mode) {
      const show = mode === "show";
      ambient.intensity = show ? 0.65 : 2.4;
      key.intensity = show ? 0.6 : 2.8;
      fill.intensity = show ? 0.5 : 1.4;
    },
  };
}
