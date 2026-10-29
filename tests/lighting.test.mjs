import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { VENUES } from '../src/venues.js';
import { loadStageActors } from '../src/stage-actors.js';

await loadStageActors(async () => {
  const data = await readFile(new URL('../public/models/stage-actors.bin', import.meta.url));
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
});

function activeLights(group) {
  const lights = [];
  group.traverseVisible(object => { if (object.isLight) lights.push(object); });
  return lights;
}

for (const venue of VENUES) {
  test(`${venue.id}: switching house lights off preserves stage illumination and restores house lights`, () => {
    const theatre = venue.build(venue.makeLayout());
    const stage = theatre.root.getObjectByName('Stage_Lighting');
    const house = theatre.root.getObjectByName('House_Lighting');
    const reflected = theatre.root.getObjectByName('Reflected_Light');
    const describe = light => ({ intensity: light.intensity, color: light.color.getHex(),
      position: light.position.toArray(), target: light.target.position.toArray(),
      angle: light.angle, distance: light.distance, penumbra: light.penumbra });
    const stageLights = activeLights(stage);
    const before = stageLights.map(describe);
    const ambientIntensity = reflected.intensity;
    assert.equal(stageLights.length, 2);
    assert.ok(stageLights.every(light => light.isSpotLight && light.intensity > 0));
    assert.equal(activeLights(house).length, 2);
    for (let cycle = 0; cycle < 2; cycle++) {
      theatre.setLighting('show');
      assert.equal(activeLights(house).length, 0);
      assert.deepEqual(activeLights(stage).map(describe), before);
      assert.equal(reflected.intensity, ambientIntensity);
      // The dimmable house lights do not supply the actors' primary illumination.
      for (const actor of theatre.actor.children) {
        for (const light of house.children) {
          assert.ok(light.position.distanceTo(actor.position) > light.distance);
        }
      }
      theatre.setLighting('house');
      assert.equal(activeLights(house).length, 2);
      assert.deepEqual(activeLights(stage).map(describe), before);
    }
    theatre.root.traverse(object => {
      object.geometry?.dispose();
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) material?.dispose();
    });
  });
}
