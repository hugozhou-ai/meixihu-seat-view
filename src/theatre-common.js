import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
export const box = (x, y, z) => new THREE.BoxGeometry(x, y, z);
const originalMatrices = new WeakMap();
export function addSeating(root, seats, { seatMat, backMat, darkWood }) {
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

  for (const mesh of components)
    originalMatrices.set(mesh, mesh.instanceMatrix.array.slice());
  return components;
}
export function setPitVisible(chairs, seats, visible) {
  const zero = new THREE.Matrix4().makeScale(0, 0, 0),
    matrix = new THREE.Matrix4();
  for (const mesh of chairs) {
    const saved = originalMatrices.get(mesh);
    for (let i = 0; i < seats.length; i++)
      if (seats[i].zone === "P")
        mesh.setMatrixAt(i, visible ? matrix.fromArray(saved, i * 16) : zero);
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
  }
}
export function batchGroup(group) {
  const batches = new Map();
  for (const child of [...group.children]) {
    if (child.isMesh && !child.isInstancedMesh) {
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
export function addBox(g, geo, mat, pos, name) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(...pos);
  m.name = name || "Architecture";
  g.add(m);
  return m;
}

export function surface(points, mat, name) {
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
export function tube(points, r, mat, name) {
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
