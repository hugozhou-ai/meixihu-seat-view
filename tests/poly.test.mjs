import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { readFile } from "node:fs/promises";
import { loadStageActors } from "../src/stage-actors.js";
import { makePolyLayout, POLY_ROWS } from "../src/poly-layout.js";
import { seatEye } from "../src/layout.js";
import { buildPolyTheatre } from "../src/poly-theatre.js";
await loadStageActors(async () => {
  const bytes = await readFile(new URL("../public/models/stage-actors.bin", import.meta.url));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
});
const seats = makePolyLayout();
test("Shenzhen published row counts, boxes and pit sum to 1551 independent locations", () => {
  assert.equal(seats.length, 1551);
  assert.equal(new Set(seats.map((s) => s.seatId)).size, 1551);
  assert.deepEqual(
    ["1F", "2F", "3F"].map((l) => seats.filter((s) => s.level === l).length),
    [951, 396, 204],
  );
  assert.equal(seats.filter((s) => s.zone === "P").length, 98);
  assert.equal(seats.filter((s) => s.zone.startsWith("B")).length, 56);
  for (const level of ["1F", "2F", "3F"])
    assert.deepEqual(
      POLY_ROWS[level],
      POLY_ROWS[level].map(
        (_, i) =>
          seats.filter(
            (s) => s.level === level && s.zone === "M" && s.row === i + 1,
          ).length,
      ),
    );
  for (const [number, n] of [
    [1, 8],
    [2, 8],
    [3, 10],
    [4, 10],
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 5],
  ])
    assert.equal(seats.filter((s) => s.box === number).length, n);
  for (const s of seats) {
    assert.ok(seatEye(s).every(Number.isFinite));
    assert.equal(s.ticketIdentityVerified, false);
    assert.equal(s.theatreId, "shenzhen-poly");
  }
});
test("no Shenzhen seat bodies overlap on the same level", () => {
  for (let i = 0; i < seats.length; i++)
    for (let j = i + 1; j < seats.length; j++) {
      const a = seats[i],
        b = seats[j];
      if (a.level === b.level)
        assert.ok(
          Math.hypot(...a.position.map((v, k) => v - b.position[k])) > 0.53,
          `${a.seatId}/${b.seatId}`,
        );
    }
});
test("all Shenzhen chairs stand on their reconstructed floor and pit matrices restore exactly", () => {
  const model = buildPolyTheatre(seats);
  model.root.updateMatrixWorld(true);
  const floors = [];
  model.architecture.traverse((o) => {
    if (
      o.isMesh &&
      o.userData.parts?.some((n) =>
        /Tread|Foundation|Orchestra_Pit_Floor/.test(n),
      )
    )
      floors.push(o);
  });
  const ray = new THREE.Raycaster();
  for (const s of seats) {
    ray.set(
      new THREE.Vector3(s.position[0], s.position[1] + 0.1, s.position[2]),
      new THREE.Vector3(0, -1, 0),
    );
    ray.far = 2;
    const hit = ray.intersectObjects(floors, false)[0];
    assert.ok(hit && Math.abs(hit.point.y - s.position[1]) < 0.055, s.seatId);
  }
  const before = model.chairs.map((c) => c.instanceMatrix.array.slice());
  model.setPitVisible(false);
  model.setPitVisible(true);
  model.chairs.forEach((m, i) =>
    assert.deepEqual(m.instanceMatrix.array, before[i]),
  );
  model.root.traverse((o) => {
    o.geometry?.dispose();
    if (o.material) o.material.dispose();
  });
});
