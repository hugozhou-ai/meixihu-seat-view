import * as THREE from "three";
import { RoundedBoxGeometry } from "../vendor/RoundedBoxGeometry.js";
import { mergeGeometries } from "../vendor/BufferGeometryUtils.js";
import { ROW_COUNTS, BALCONY_PARAMETERS, balconyHeight } from "./layout.js";
const TAU = Math.PI * 2;
function woodTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const c = canvas.getContext("2d");
  c.fillStyle = "#9c6e45";
  c.fillRect(0, 0, 1024, 256);
  let seed = 71;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let j = 0; j < 1100; j++) {
    const y = rand() * 256;
    c.strokeStyle = `rgba(${rand() > 0.5 ? "52,24,12" : "221,181,126"},${0.018 + rand() * 0.07})`;
    c.lineWidth = 0.3 + rand() * 0.8;
    c.beginPath();
    c.moveTo(0, y);
    for (let x = 0; x <= 1024; x += 25)
      c.lineTo(x, y + Math.sin(x * 0.015 + j) * (0.2 + rand() * 2));
    c.stroke();
  }
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(5, 1);
  return t;
}
function addBox(g, geo, mat, pos, name) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(...pos);
  m.name = name || "Architecture";
  g.add(m);
  return m;
}
const box = (x, y, z) => new THREE.BoxGeometry(x, y, z);
function surface(points, mat, name) {
  const p = [],
    ind = [];
  for (const row of points) for (const v of row) p.push(...v);
  const cols = points[0].length;
  for (let i = 0; i < points.length - 1; i++)
    for (let j = 0; j < cols - 1; j++) {
      const a = i * cols + j,
        b = a + cols;
      ind.push(a, b, a + 1, b, b + 1, a + 1);
    }
  const uv = [];
  for (let i = 0; i < points.length; i++)
    for (let j = 0; j < cols; j++)
      uv.push(i / Math.max(1, points.length - 1), j / Math.max(1, cols - 1));
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(p, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(ind);
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat);
  m.name = name;
  return m;
}
function tube(points, r, mat, name) {
  const curve = new THREE.CatmullRomCurve3(
    points.map((p) => new THREE.Vector3(...p)),
  );
  const mesh = new THREE.Mesh(
    new THREE.TubeGeometry(
      curve,
      Math.max(24, Math.round(points.length * 0.65)),
      r,
      r < 0.02 ? 3 : 5,
      false,
    ),
    mat,
  );
  mesh.name = name;
  return mesh;
}
export function buildTheatre(seats) {
  const root = new THREE.Group();
  root.name = "Meixihu_Grand_Theatre_Interior";
  const architecture = new THREE.Group();
  architecture.name = "Architecture";
  root.add(architecture);
  const overhead = new THREE.Group();
  overhead.name = "Ceiling";
  architecture.add(overhead);
  const walls = new THREE.Group();
  walls.name = "Auditorium_Walls";
  architecture.add(walls);
  const tex = woodTexture();
  const wood = new THREE.MeshStandardMaterial({
    color: "#d9c5a7",
    map: tex,
    roughness: 0.72,
    side: THREE.DoubleSide,
  });
  const paleWood = new THREE.MeshStandardMaterial({
    color: "#f0d9b5",
    map: tex,
    roughness: 0.64,
    side: THREE.DoubleSide,
  });
  const darkWood = new THREE.MeshStandardMaterial({
    color: "#80634c",
    map: tex,
    roughness: 0.85,
    side: THREE.DoubleSide,
  });
  const carpet = new THREE.MeshStandardMaterial({
    color: "#452b26",
    roughness: 1,
    side: THREE.DoubleSide,
  });
  const black = new THREE.MeshStandardMaterial({
    color: "#0b1017",
    roughness: 0.95,
    side: THREE.DoubleSide,
  });
  const metal = new THREE.MeshStandardMaterial({
    color: "#303033",
    metalness: 0.55,
    roughness: 0.55,
  });
  const strip = new THREE.MeshStandardMaterial({
    color: "#ffecd0",
    emissive: "#ffe0aa",
    emissiveIntensity: 2.2,
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const stepGlow = new THREE.MeshBasicMaterial({
    color: "#d5ba8b",
    side: THREE.DoubleSide,
  });
  const stageWood = new THREE.MeshStandardMaterial({
    color: "#b19b7b",
    map: tex,
    roughness: 0.94,
  });
  // Main stage and black box. Stage floor is the shared coordinate datum.
  addBox(
    architecture,
    box(17.1, 0.35, 12.5),
    stageWood,
    [0, -0.175, -6.0],
    "Stage_Floor",
  );
  addBox(
    architecture,
    box(17.3, 10.5, 0.25),
    black,
    [0, 5.1, -12.2],
    "Stage_Backwall",
  );
  for (const side of [-1, 1])
    addBox(
      architecture,
      box(0.3, 10.5, 12.5),
      black,
      [side * 8.6, 5.1, -6.0],
      "Stage_Sidewall",
    );
  // Pleated rear curtain behind a consistent stage target.
  const curtain = new THREE.MeshStandardMaterial({
    color: "#19212c",
    roughness: 1,
    side: THREE.DoubleSide,
  });
  const curtainPts = [];
  for (let j = 0; j <= 1; j++) {
    const row = [];
    for (let i = 0; i <= 160; i++) {
      const x = -8.5 + (17 * i) / 160;
      row.push([x, j * 9.6, -11.9 + Math.sin(i * Math.PI * 0.65) * 0.09]);
    }
    curtainPts.push(row);
  }
  architecture.add(surface(curtainPts, curtain, "Stage_Curtain"));
  // Sculpted proscenium keeps the opening genuinely open.
  for (const side of [-1, 1]) {
    addBox(
      architecture,
      box(3.0, 11.3, 1.0),
      wood,
      [side * 10.0, 5.25, -0.5],
      "Proscenium_Pier",
    );
    for (let k = 0; k < 9; k++) {
      const pts = [];
      for (let j = 0; j <= 35; j++) {
        const y = 0.1 + j * 0.3;
        pts.push([
          side * (8.7 + k * 0.18 + 0.12 * Math.sin(y * 0.35)),
          y,
          -0.04,
        ]);
      }
      architecture.add(
        tube(
          pts,
          k === 0 ? 0.023 : 0.013,
          k === 0 ? strip : darkWood,
          "Proscenium_Profile",
        ),
      );
    }
  }
  addBox(
    architecture,
    box(17.1, 2.25, 1.0),
    wood,
    [0, 10.1, -0.5],
    "Proscenium_Header",
  );
  for (let k = 0; k < 7; k++) {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const x = -8.65 + (17.3 * i) / 80;
      pts.push([x, 9.15 + k * 0.16 + 0.08 * Math.cos(x * 0.35), 0.05]);
    }
    architecture.add(
      tube(
        pts,
        k === 0 ? 0.025 : 0.012,
        k === 0 ? strip : darkWood,
        "Proscenium_Header_Profile",
      ),
    );
  }
  // Continuous curved shoulders join the proscenium to the side walls and ceiling.
  for (const sign of [-1, 1]) {
    const points = [];
    for (let j = 0; j <= 48; j++) {
      const row = [],
        y = -1 + (j * 18.2) / 48;
      for (let i = 0; i <= 40; i++) {
        const t = i / 40,
          x = sign * (8.62 + 11.05 * t),
          z =
            0.1 + 3.7 * Math.sin((t * Math.PI) / 2) + 0.12 * Math.sin(y * 0.35);
        row.push([x, y, z]);
      }
      points.push(row);
    }
    architecture.add(surface(points, wood, "Sculpted_Proscenium_Shoulder"));
    for (let k = 0; k < 30; k++) {
      const y = 0.2 + k * 0.52,
        path = [];
      for (let i = 0; i <= 60; i++) {
        const t = i / 60;
        path.push([
          sign * (8.65 + 11.0 * t),
          y + 0.1 * Math.sin(t * Math.PI),
          0.17 + 3.7 * Math.sin((t * Math.PI) / 2) + 0.12 * Math.sin(y * 0.35),
        ]);
      }
      architecture.add(
        tube(
          path,
          k % 9 === 0 ? 0.023 : 0.011,
          k % 9 === 0 ? strip : darkWood,
          "Shoulder_Contour",
        ),
      );
    }
  }
  const archPanel = [];
  for (let j = 0; j <= 24; j++) {
    const y = 9.25 + (j * 8.2) / 24,
      row = [];
    for (let i = 0; i <= 80; i++) {
      const x = -19.65 + (39.3 * i) / 80;
      row.push([
        x,
        y,
        0.15 +
          3.7 * Math.sin(((Math.abs(x) / 19.65) * Math.PI) / 2) +
          0.12 * Math.sin(y * 0.35),
      ]);
    }
    archPanel.push(row);
  }
  architecture.add(surface(archPanel, wood, "Upper_Proscenium_Sculpted_Panel"));
  for (let k = 0; k < 14; k++) {
    const path = [];
    for (let i = 0; i <= 100; i++) {
      const x = -19.5 + (39 * i) / 100,
        y = 9.45 + k * 0.31 + 0.004 * x * x;
      path.push([
        x,
        y,
        0.23 +
          3.7 * Math.sin(((Math.abs(x) / 19.65) * Math.PI) / 2) +
          0.12 * Math.sin(y * 0.35),
      ]);
    }
    architecture.add(
      tube(
        path,
        k < 3 ? 0.026 : 0.012,
        k < 3 ? strip : darkWood,
        "Upper_Proscenium_Contour",
      ),
    );
  }
  // Ground orchestra pit is flat and switchable seating.
  addBox(
    architecture,
    box(28, 0.3, 3.2),
    carpet,
    [0, -1.37, 3.25],
    "Orchestra_Pit_Floor",
  );
  const ground = seats.filter((s) => s.level === "1F" && s.zone === "M");
  for (let r = 0; r < ROW_COUNTS.length; r++) {
    const row = ground.filter((s) => s.row === r + 1),
      floorY = row[0].position[1];
    const halfWidth =
      Math.max(...row.map((s) => Math.abs(s.position[0]))) + 0.36;
    const baseZ = 6.1 + r * 0.91 + (r >= 8 ? 1.25 : 0);
    const tread = [],
      riser = [];
    for (let i = 0; i <= 72; i++) {
      const x = -halfWidth + (2 * halfWidth * i) / 72;
      const z = baseZ + 0.003 * x * x;
      tread.push([
        [x, floorY, z - 0.455],
        [x, floorY, z + 0.455],
      ]);
      riser.push([
        [x, floorY - 0.17, z - 0.455],
        [x, floorY, z - 0.455],
      ]);
    }
    architecture.add(surface(tread, carpet, `Stalls_Row_${r + 1}_Tread`));
    architecture.add(surface(riser, darkWood, `Stalls_Row_${r + 1}_Riser`));
    for (const side of [-1, 1]) {
      const x = side * (halfWidth - 0.12);
      addBox(
        architecture,
        box(0.11, 0.028, 0.25),
        stepGlow,
        [x, floorY + 0.025, baseZ + 0.003 * x * x - 0.28],
        "Aisle_Light",
      );
    }
  }
  // Lower foundation and the transverse aisle do not intrude into curved tread rows.
  addBox(
    architecture,
    box(35, 0.2, 26.5),
    carpet,
    [0, -1.6, 17.1],
    "Stalls_Foundation",
  );
  const crossAisle = [];
  for (let i = 0; i <= 72; i++) {
    const x = -17.0 + (34 * i) / 72;
    crossAisle.push([
      [x, 0.105, 6.1 + 7 * 0.91 + 0.003 * x * x + 0.455],
      [x, 0.27, 6.1 + 8 * 0.91 + 1.25 + 0.003 * x * x - 0.455],
    ]);
  }
  architecture.add(surface(crossAisle, carpet, "Stalls_Transverse_Aisle"));
  addBox(
    architecture,
    box(30, 0.18, 1.5),
    carpet,
    [0, -1.31, 5.1],
    "Orchestra_Cross_Aisle",
  );
  // Reconstruct each asymmetric balcony from the traced seating envelope.
  for (const level of ["2F", "3F"]) {
    const c = BALCONY_PARAMETERS[level],
      arr = seats.filter((s) => s.level === level);
    const thetaMin = Math.min(...arr.map((s) => s.theta)) - 0.025,
      thetaMax = Math.max(...arr.map((s) => s.theta)) + 0.025;
    const envelope = [];
    for (let i = 0; i <= 128; i++) {
      const theta = thetaMin + ((thetaMax - thetaMin) * i) / 128;
      const neighbours = [...arr]
        .sort((a, b) => Math.abs(a.theta - theta) - Math.abs(b.theta - theta))
        .slice(0, 14);
      envelope.push({
        theta,
        near: Math.min(...neighbours.map((s) => s.radialFactor)) - 0.045,
        far: Math.max(...neighbours.map((s) => s.radialFactor)) + 0.045,
      });
    }
    // Smooth the sculpted balcony edge without shrinking the seat-support envelope.
    function smoothEnvelope(key, inner) {
      let values = envelope.map((e) => e[key]);
      for (let pass = 0; pass < 3; pass++) {
        values = values.map((_, i) => {
          let total = 0,
            weight = 0;
          for (let j = -4; j <= 4; j++) {
            const k = Math.max(0, Math.min(values.length - 1, i + j)),
              w = 5 - Math.abs(j);
            total += values[k] * w;
            weight += w;
          }
          return total / weight;
        });
      }
      const margin = Math.max(
        0,
        ...values.map((v, i) =>
          inner ? v - envelope[i][key] : envelope[i][key] - v,
        ),
      );
      return values.map((v) => v + (inner ? -margin : margin));
    }
    const nears = smoothEnvelope("near", true),
      fars = smoothEnvelope("far", false),
      inner = [],
      floor = [];
    for (let i = 0; i < envelope.length; i++) {
      const t = envelope[i].theta,
        near = nears[i],
        far = fars[i];
      const row = [];
      for (let j = 0; j <= 16; j++) {
        const r = near + ((far - near) * j) / 16;
        row.push([
          c.rx * r * Math.sin(t),
          balconyHeight(level, r, t) - 0.025,
          c.zc + c.rz * r * Math.cos(t),
        ]);
      }
      floor.push(row);
      const y = balconyHeight(level, near, t);
      inner.push([
        c.rx * near * Math.sin(t),
        y + 0.7,
        c.zc + c.rz * near * Math.cos(t),
      ]);
    }
    architecture.add(surface(floor, carpet, `${level}_Gallery_Tread_Surface`));
    architecture.add(
      surface(
        inner.map(([x, y, z]) => [
          [x, y - 0.95, z],
          [x, y + 0.08, z],
        ]),
        wood,
        `${level}_Inner_Parapet`,
      ),
    );
    architecture.add(
      tube(
        inner.map(([x, y, z]) => [x, y + 0.09, z]),
        0.045,
        paleWood,
        `${level}_Parapet_Rail`,
      ),
    );
    for (let k = 0; k < 6; k++) {
      const p = inner.map(([x, y, z]) => {
        const direction = new THREE.Vector3(x, 0, z - c.zc).normalize();
        return [
          x - direction.x * 0.022,
          y - 0.69 + k * 0.12,
          z - direction.z * 0.022,
        ];
      });
      architecture.add(
        tube(
          p,
          k === 5 ? 0.019 : 0.009,
          k === 5 ? strip : darkWood,
          `${level}_Flowing_Balcony_Contour`,
        ),
      );
    }
    // Smooth underside follows the same envelope; floor heights are shared with seats.
    architecture.add(
      surface(
        floor.map((row) => row.map(([x, y, z]) => [x, y - 0.26, z])),
        paleWood,
        `${level}_Gallery_Soffit`,
      ),
    );
  }
  // Flowing wood auditorium side walls, following the photography's horizontal grain.
  for (const sign of [-1, 1]) {
    const pts = [];
    for (let j = 0; j <= 32; j++) {
      const row = [];
      const y = -1 + j * 0.61;
      for (let i = 0; i <= 88; i++) {
        const z = -0.2 + i * 0.44;
        const x =
          sign *
          (19.65 -
            0.5 * Math.sin(z * 0.105) +
            0.18 * Math.sin(y * 0.56 + z * 0.16));
        row.push([x, y, z]);
      }
      pts.push(row);
    }
    walls.add(surface(pts, wood, "Sculpted_Side_Wall"));
    for (let k = 0; k < 50; k++) {
      const yBase = 0.2 + k * 0.32;
      const path = [];
      for (let i = 0; i <= 88; i++) {
        const z = 0.3 + i * 0.435;
        const wave =
          0.23 * Math.sin(z * 0.14 + k * 0.055) + 0.08 * Math.sin(z * 0.35);
        path.push([
          sign * (19.32 - 0.46 * Math.sin(z * 0.105)),
          yBase + wave,
          z,
        ]);
      }
      walls.add(
        tube(
          path,
          k % 11 === 0 ? 0.025 : 0.012,
          k % 11 === 0 ? strip : darkWood,
          "Wall_Contour",
        ),
      );
    }
    // Dark doors and reveals provide a human scale.
    for (const [z, y] of [
      [16, 1.1],
      [31, 3.4],
      [28, 7.7],
      [32, 11.4],
    ]) {
      const door = addBox(
        walls,
        box(0.1, 2.25, 1.5),
        black,
        [sign * 19.2, y, z],
        "Auditorium_Exit",
      );
      door.userData.isDoor = true;
    }
  }
  addBox(walls, box(39.4, 18.8, 0.3), wood, [0, 8.3, 37.7], "Rear_Wall");
  for (let k = 0; k < 50; k++) {
    const p = [];
    for (let i = 0; i <= 60; i++) {
      const x = -19.2 + i * 0.64;
      p.push([x, 0.2 + k * 0.32 + 0.2 * Math.cos(x * 0.17), 37.48]);
    }
    walls.add(
      tube(
        p,
        k % 12 === 0 ? 0.025 : 0.012,
        k % 12 === 0 ? strip : darkWood,
        "Rear_Contour",
      ),
    );
  }
  // Sculpted ceiling, with three elongated recessed technical slots and nested light bands.
  const ceilingPts = [];
  for (let zstep = 0; zstep <= 60; zstep++) {
    const z = -0.2 + zstep * 0.64;
    const row = [];
    for (let xstep = 0; xstep <= 70; xstep++) {
      const x = -19.8 + xstep * 0.566;
      const y = 17.3 - 0.0028 * x * x + 0.45 * Math.sin(z * 0.09);
      row.push([x, y, z]);
    }
    ceilingPts.push(row);
  }
  overhead.add(surface(ceilingPts, wood, "Auditorium_Ceiling"));
  function loop(cx, cz, w, len, y, offset = 0) {
    const p = [];
    for (let i = 0; i <= 180; i++) {
      const t = (TAU * i) / 180;
      const co = Math.cos(t),
        si = Math.sin(t);
      const x = cx + (w + offset) * Math.sign(co) * Math.pow(Math.abs(co), 0.6);
      const z =
        cz + (len + offset) * Math.sign(si) * Math.pow(Math.abs(si), 0.72);
      p.push([x, y - 0.0028 * x * x + 0.3 * Math.sin(z * 0.09), z]);
    }
    return p;
  }
  for (const cx of [-11, 0, 11]) {
    const shape = new THREE.Shape();
    const lp = loop(0, 0, 1.25, 11.8, 0);
    shape.moveTo(lp[0][0], lp[0][2]);
    for (const v of lp.slice(1)) shape.lineTo(v[0], v[2]);
    const slot = new THREE.Mesh(new THREE.ShapeGeometry(shape), black);
    slot.rotation.x = Math.PI / 2;
    slot.position.set(cx, 16.7, 18.5);
    slot.name = "Technical_Slot";
    overhead.add(slot);
    for (let ring = 0; ring < 6; ring++) {
      const p = loop(
        cx,
        18.5,
        1.25,
        11.8,
        16.56 - ring * 0.035,
        0.2 + ring * 0.28,
      );
      overhead.add(
        tube(
          p,
          ring < 3 ? 0.028 : 0.018,
          ring < 3 ? strip : paleWood,
          "Ceiling_Ribbon",
        ),
      );
    }
    for (let k = 0; k < 10; k++) {
      const z = 8 + k * 2.1;
      addBox(
        overhead,
        box(0.4, 0.35, 0.45),
        metal,
        [cx, 16.55, z],
        "Ceiling_Spot_Housing",
      );
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 4), strip);
      bulb.position.set(cx, 16.33, z + 0.12);
      overhead.add(bulb);
    }
  }
  // Stage light bridge above the opening.
  for (let k = -7; k <= 7; k += 2) {
    const lamp = addBox(
      architecture,
      box(0.35, 0.38, 0.5),
      metal,
      [k, 8.85, -1.2],
      "Stage_Lamp",
    );
    lamp.rotation.x = 0.35;
  }
  // Stage scale reference, unobtrusive performer at centre.
  const actor = new THREE.Group();
  actor.name = "Stage_Scale_Reference";
  actor.position.set(0, 0, -4);
  const outfit = new THREE.MeshStandardMaterial({
    color: "#c5c0af",
    roughness: 0.8,
  });
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.2, 0.7, 4, 8),
    outfit,
  );
  body.position.y = 1.0;
  actor.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 8), outfit);
  head.position.y = 1.65;
  actor.add(head);
  for (const sign of [-1, 1]) {
    const leg = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.075, 0.65, 3, 6),
      outfit,
    );
    leg.position.set(sign * 0.11, 0.38, 0);
    actor.add(leg);
  }
  architecture.add(actor);
  // Chairs: shared geometry and materials, separate instance per seat component.
  const seatMat = new THREE.MeshStandardMaterial({
    color: "#9c4d36",
    roughness: 0.88,
  });
  const backMat = new THREE.MeshStandardMaterial({
    color: "#b98a68",
    roughness: 0.73,
    map: tex,
  });
  const chairGroup = new THREE.Group();
  chairGroup.name = "Individually_Addressable_Seats";
  root.add(chairGroup);
  const components = [];
  const dummy = new THREE.Object3D();
  const defs = [
    {
      geo: new RoundedBoxGeometry(0.49, 0.095, 0.43, 1, 0.025),
      mat: seatMat,
      pos: [0, 0.46, -0.025],
      rot: 0,
    },
    {
      geo: new RoundedBoxGeometry(0.49, 0.54, 0.095, 1, 0.025),
      mat: backMat,
      pos: [0, 0.72, 0.18],
      rot: -0.1,
    },
    {
      geo: box(0.045, 0.38, 0.3),
      mat: darkWood,
      pos: [-0.265, 0.35, 0.02],
      rot: 0,
    },
    {
      geo: box(0.045, 0.38, 0.3),
      mat: darkWood,
      pos: [0.265, 0.35, 0.02],
      rot: 0,
    },
    {
      geo: box(0.065, 0.065, 0.47),
      mat: backMat,
      pos: [-0.265, 0.57, -0.015],
      rot: 0,
    },
    {
      geo: box(0.065, 0.065, 0.47),
      mat: backMat,
      pos: [0.265, 0.57, -0.015],
      rot: 0,
    },
  ];
  const seatTransform = new THREE.Matrix4(),
    local = new THREE.Matrix4(),
    q = new THREE.Quaternion();
  const axis = new THREE.Vector3(0, 1, 0);
  for (let part = 0; part < defs.length; part++) {
    const d = defs[part],
      mesh = new THREE.InstancedMesh(d.geo, d.mat, seats.length);
    mesh.name = `Seat_Component_${part}`;
    mesh.userData.seatIds = seats.map((s) => s.seatId);
    dummy.position.set(...d.pos);
    dummy.rotation.set(d.rot, 0, 0);
    dummy.updateMatrix();
    local.copy(dummy.matrix);
    seats.forEach((s, i) => {
      q.setFromAxisAngle(axis, s.yaw);
      seatTransform.compose(
        new THREE.Vector3(...s.position),
        q,
        new THREE.Vector3(1, 1, 1),
      );
      seatTransform.multiply(local);
      mesh.setMatrixAt(i, seatTransform);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingBox();
    mesh.computeBoundingSphere();
    chairGroup.add(mesh);
    components.push(mesh);
  }
  // Merge static surfaces by material, separately for the cutaway groups.
  function batchGroup(group) {
    const batches = new Map();
    for (const child of [...group.children]) {
      if (child.isMesh && !child.isInstancedMesh && child !== actor) {
        child.updateMatrix();
        const geometry = child.geometry.index
          ? child.geometry.toNonIndexed()
          : child.geometry.clone();
        geometry.applyMatrix4(child.matrix);
        const key = child.material.uuid;
        if (!batches.has(key))
          batches.set(key, {
            material: child.material,
            geometries: [],
            names: [],
          });
        const b = batches.get(key);
        b.geometries.push(geometry);
        b.names.push(child.name);
        group.remove(child);
      }
    }
    for (const b of batches.values()) {
      const geometry = mergeGeometries(b.geometries, false);
      const mesh = new THREE.Mesh(geometry, b.material);
      mesh.name = group.name + "_Batched";
      mesh.userData.parts = b.names;
      group.add(mesh);
      for (const g of b.geometries) g.dispose();
    }
  }
  batchGroup(overhead);
  batchGroup(walls);
  batchGroup(architecture);
  const lightGroup = new THREE.Group();
  lightGroup.name = "Theatre_Lighting";
  root.add(lightGroup);
  lightGroup.add(new THREE.HemisphereLight("#ffe9da", "#625044", 2.8));
  const key = new THREE.DirectionalLight("#ffddb2", 3.0);
  key.position.set(0, 16, 6);
  lightGroup.add(key);
  const fill = new THREE.DirectionalLight("#b6c9e3", 1.5);
  fill.position.set(-12, 9, -7);
  lightGroup.add(fill);
  for (const [x, y, z, intensity] of [[0, 10, -5, 90]]) {
    const l = new THREE.PointLight("#ffce99", intensity, 38, 2);
    l.position.set(x, y, z);
    lightGroup.add(l);
  }
  // Selected-seat location ring, never an occluder of the seated camera.
  const marker = new THREE.Mesh(
    new THREE.TorusGeometry(0.4, 0.035, 6, 40),
    new THREE.MeshBasicMaterial({ color: "#64d8c1", depthTest: false }),
  );
  marker.rotation.x = -Math.PI / 2;
  marker.renderOrder = 20;
  marker.name = "Selected_Seat_Marker";
  root.add(marker);
  return {
    root,
    architecture,
    overhead,
    walls,
    chairs: components,
    marker,
    actor,
    materials: { wood, strip },
    setOverview(v) {
      overhead.visible = !v;
      walls.visible = !v;
      marker.visible = v;
    },
    setLighting(mode) {
      const isShow = mode === "show";
      key.intensity = isShow ? 0.6 : 3.0;
      fill.intensity = isShow ? 0.5 : 1.5;
      lightGroup.children[0].intensity = isShow ? 0.7 : 2.8;
      strip.emissiveIntensity = isShow ? 3.5 : 2.2;
    },
  };
}
