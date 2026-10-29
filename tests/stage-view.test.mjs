import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { readFile } from "node:fs/promises";
import { stageViewpoints, stageViewEye } from "../src/stage-view.js";
import { STAGE_ACTORS, buildStageActors, loadStageActors } from "../src/stage-actors.js";
import { STAGE } from "../src/layout.js";
import { POLY_STAGE } from "../src/poly-layout.js";

await loadStageActors(async () => {
  const bytes = await readFile(new URL("../public/models/stage-actors.bin", import.meta.url));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
});

for (const [name, stage] of [
  ["meixihu", STAGE],
  ["poly", POLY_STAGE],
]) {
  test(`${name}: typical stage positions stay on stage with standing eyes`, () => {
    const points = stageViewpoints(stage);
    assert.equal(points.length, 5);
    assert.equal(new Set(points.map((p) => p.id)).size, 5);
    for (const point of points) {
      const [x, y, z] = stageViewEye(point);
      assert.ok(Math.abs(x) < stage.width / 2);
      assert.equal(y, 1.65);
      assert.ok(z < stage.front && z > stage.front - stage.depth);
    }
    assert.ok(points.find((p) => p.id === "left").position[0] > 0);
    assert.ok(points.find((p) => p.id === "right").position[0] < 0);
  });

  test(`${name}: open-source stage actor ensemble has detailed meshes and organic dramatic blocking`, () => {
    assert.equal(STAGE_ACTORS.length, 6);
    assert.equal(new Set(STAGE_ACTORS.map((a) => a.id)).size, 6);
    const group = buildStageActors(stage);
    assert.equal(group.name, "Stage_Scale_Reference");
    assert.equal(group.children.length, 6);
    group.updateMatrixWorld(true);

    const viewpoints = stageViewpoints(stage);
    const xs = [];
    const zs = [];

    for (const mesh of group.children) {
      assert.ok(mesh.isMesh);
      assert.equal(mesh.userData.license, "CC0-1.0");
      assert.ok(mesh.userData.sourceModel.includes("Quaternius CC0"));
      assert.ok(mesh.geometry.attributes.position.count > 2500);
      assert.ok(mesh.geometry.attributes.color);
      assert.ok(mesh.geometry.attributes.normal);
      assert.ok(mesh.geometry.index.count / 3 > 5000);

      const box = new THREE.Box3().setFromObject(mesh);
      const size = new THREE.Vector3();
      box.getSize(size);
      assert.ok(Math.abs(box.min.y) < 0.002, `${mesh.name} feet on stage datum`);
      assert.ok(size.y >= 1.64 && size.y <= 1.82, `${mesh.name} realistic height ${size.y}`);

      const { x, y, z } = mesh.position;
      assert.equal(y, 0);
      assert.ok(Math.abs(x) < stage.width / 2 - 1.5);
      assert.ok(z < stage.front - 2.0 && z > stage.front - stage.depth + 2.0);
      xs.push(x);
      zs.push(z);

      for (const vp of viewpoints) {
        const d = Math.hypot(x - vp.position[0], z - vp.position[2]);
        assert.ok(d > 0.75, `${mesh.name} stays clear of stage viewpoint ${vp.id}`);
      }
    }

    // Blocking is organic and staggered: distinct X and Z coordinates, varied pairwise spacing.
    const sortedX = [...xs].sort((a, b) => a - b);
    for (let i = 1; i < sortedX.length; i++) {
      assert.ok(sortedX[i] - sortedX[i - 1] >= 0.8, "actors staggered across width without eclipsing");
    }
    assert.equal(new Set(zs.map((z) => z.toFixed(2))).size, 6);

    const pairDistances = [];
    for (let i = 0; i < group.children.length; i++) {
      for (let j = i + 1; j < group.children.length; j++) {
        const a = group.children[i].position;
        const b = group.children[j].position;
        const d = Math.hypot(a.x - b.x, a.z - b.z);
        assert.ok(d > 1.0, "actors do not collide");
        pairDistances.push(d);
      }
    }
    assert.ok(Math.min(...pairDistances) < 1.5, "has close conversational grouping");
    assert.ok(Math.max(...pairDistances) > 7.5, "spans across the stage");

    group.traverse((o) => {
      o.geometry?.dispose();
      o.material?.dispose();
    });
  });
}
