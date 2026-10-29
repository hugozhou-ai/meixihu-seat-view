import test from 'node:test';
import assert from 'node:assert/strict';
import { beginGesture, moveGesture, finishGesture, viewportPoint } from '../src/viewport-gestures.js';
const t = (x, y) => ({ clientX: x, clientY: y });

test('touch selection tolerates hand jitter but never selects after a drag', () => {
  const tap = beginGesture([t(300, 100)]);
  moveGesture(tap, [t(303, 102)]);
  assert.deepEqual(finishGesture(tap, [t(303, 102)]), { x: 303, y: 102 });
  const drag = beginGesture([t(300, 100)]);
  moveGesture(drag, [t(320, 100)]);
  moveGesture(drag, [t(300, 100)]);
  assert.equal(finishGesture(drag, [t(300, 100)]), null);
});

test('pinch uses a distance ratio and suppresses rotation and selection until all fingers lift', () => {
  const gesture = beginGesture([t(10, 10)]);
  assert.equal(moveGesture(gesture, [t(10, 10), t(110, 10)]).scale, 1);
  assert.equal(moveGesture(gesture, [t(10, 10), t(210, 10)]).scale, 2);
  assert.equal(moveGesture(gesture, [t(15, 10)]), null);
  assert.equal(finishGesture(gesture, [t(15, 10)]), null);
  assert.equal(finishGesture(null, [t(15, 10)]), null);
});

test('native seat raycasting accounts for landscape controls and safe-area offsets', () => {
  const rect = { left: 303, top: 48, width: 486, height: 226 };
  assert.deepEqual(viewportPoint(546, 161, rect), { x: 0, y: 0 });
  assert.deepEqual(viewportPoint(303, 48, rect), { x: -1, y: 1 });
  assert.deepEqual(viewportPoint(789, 274, rect), { x: 1, y: -1 });
});

test('WeChat CanvasTouch local coordinates are translated once to page coordinates', async () => {
  const { canvasTouches } = await import('../src/viewport-gestures.js');
  const rect = { left: 303, top: 48 };
  assert.deepEqual(canvasTouches([{ x: 100, y: 50 }], rect), [{ clientX: 403, clientY: 98 }]);
  assert.deepEqual(canvasTouches([{ clientX: 403, clientY: 98 }], rect), [{ clientX: 403, clientY: 98 }]);
});
