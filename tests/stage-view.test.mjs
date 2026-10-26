import test from 'node:test';
import assert from 'node:assert/strict';
import { stageViewpoints, stageViewEye } from '../src/stage-view.js';
import { STAGE } from '../src/layout.js';
import { POLY_STAGE } from '../src/poly-layout.js';
for (const [name, stage] of [['meixihu', STAGE], ['poly', POLY_STAGE]]) {
  test(`${name}: typical stage positions stay on stage with standing eyes`, () => {
    const points = stageViewpoints(stage);
    assert.equal(points.length, 5);
    assert.equal(new Set(points.map(p => p.id)).size, 5);
    for (const point of points) {
      const [x, y, z] = stageViewEye(point);
      assert.ok(Math.abs(x) < stage.width / 2);
      assert.equal(y, 1.65);
      assert.ok(z < stage.front && z > stage.front - stage.depth);
    }
    assert.ok(points.find(p => p.id === 'left').position[0] > 0);
    assert.ok(points.find(p => p.id === 'right').position[0] < 0);
  });
}
