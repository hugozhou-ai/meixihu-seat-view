import test from 'node:test';
import assert from 'node:assert/strict';
import { mapTransform, clampMapView, zoomMapView, seatAtMapPoint } from '../src/seat-map-viewport.js';

const size = { width: 640, height: 220 };
const seat = { seatId: 'centre' };
const map = { viewWidth: 320, viewHeight: 220, points: [{ x: 160, y: 110, seat }] };
const initial = { zoom: 1, x: 0, y: 0 };

test('map hit testing uses canvas pixels, including letterboxing and zoom', () => {
  assert.equal(seatAtMapPoint({ x: 320, y: 110 }, size, map, initial), seat);
  assert.equal(seatAtMapPoint({ x: 160, y: 110 }, size, map, initial), null);
  const view = { zoom: 4, x: 60, y: -20 };
  assert.equal(seatAtMapPoint({ x: 380, y: 90 }, size, map, view), seat);
});

test('pinch keeps the touched point stationary and clamps pan to visible map bounds', () => {
  const focus = { x: 350, y: 130 };
  const view = zoomMapView(initial, 4, focus, size, map);
  const before = mapTransform(size, map, initial);
  const after = mapTransform(size, map, view);
  const mapX = (focus.x - before.x) / before.scale;
  const mapY = (focus.y - before.y) / before.scale;
  assert.equal(mapX * after.scale + after.x, focus.x);
  assert.equal(mapY * after.scale + after.y, focus.y);
  const reset = clampMapView({ zoom: 1, x: 1000, y: -1000 }, size, map);
  assert.ok(reset.x === 0 && reset.y === 0 && reset.zoom === 1);
  assert.equal(clampMapView({ zoom: 99, x: 0, y: 0 }, size, map).zoom, 8);
});
