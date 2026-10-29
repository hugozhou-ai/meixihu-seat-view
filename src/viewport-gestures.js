// Touch coordinates are page/client coordinates, independent of the canvas origin.
export function touchPoint(touch) {
  return { x: touch.clientX ?? touch.pageX ?? touch.x, y: touch.clientY ?? touch.pageY ?? touch.y };
}

export function canvasTouches(touches, rect) {
  return touches.map(touch => ({
    clientX: touch.clientX ?? touch.pageX ?? (touch.x + rect.left),
    clientY: touch.clientY ?? touch.pageY ?? (touch.y + rect.top),
  }));
}

export function beginGesture(touches) {
  if (!touches.length) return null;
  const first = touchPoint(touches[0]);
  const distance = touches.length > 1
    ? Math.hypot(first.x - touchPoint(touches[1]).x, first.y - touchPoint(touches[1]).y)
    : 0;
  return { ...first, startX: first.x, startY: first.y, moved: touches.length > 1, multi: touches.length > 1, distance };
}

export function moveGesture(gesture, touches) {
  if (!gesture || !touches.length) return null;
  const point = touchPoint(touches[0]);
  if (touches.length > 1) {
    const other = touchPoint(touches[1]);
    const distance = Math.hypot(point.x - other.x, point.y - other.y);
    const scale = gesture.multi && gesture.distance > 0 ? distance / gesture.distance : 1;
    Object.assign(gesture, { ...point, multi: true, moved: true, distance });
    return { kind: "pinch", scale };
  }
  // Lifting one finger after pinching must not rotate or select a seat.
  if (gesture.multi) return null;
  const delta = { kind: "rotate", dx: point.x - gesture.x, dy: point.y - gesture.y };
  gesture.moved ||= Math.hypot(point.x - gesture.startX, point.y - gesture.startY) > 8;
  Object.assign(gesture, point);
  return delta;
}

export function finishGesture(gesture, changedTouches) {
  if (!gesture || gesture.multi || gesture.moved || !changedTouches.length) return null;
  const point = touchPoint(changedTouches[0]);
  return Math.hypot(point.x - gesture.startX, point.y - gesture.startY) <= 8 ? point : null;
}

export function viewportPoint(clientX, clientY, rect) {
  return {
    x: ((clientX - rect.left) / rect.width) * 2 - 1,
    y: -((clientY - rect.top) / rect.height) * 2 + 1,
  };
}
