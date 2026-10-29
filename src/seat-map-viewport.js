export function mapTransform(size, map, view) {
  const scale = Math.min(size.width / map.viewWidth, size.height / map.viewHeight) * view.zoom;
  return {
    scale,
    x: (size.width - map.viewWidth * scale) / 2 + view.x,
    y: (size.height - map.viewHeight * scale) / 2 + view.y,
  };
}

export function clampMapView(view, size, map) {
  const zoom = Math.max(1, Math.min(8, view.zoom));
  const scale = Math.min(size.width / map.viewWidth, size.height / map.viewHeight) * zoom;
  const limitX = Math.max(0, (map.viewWidth * scale - size.width) / 2);
  const limitY = Math.max(0, (map.viewHeight * scale - size.height) / 2);
  return { zoom, x: Math.max(-limitX, Math.min(limitX, view.x)), y: Math.max(-limitY, Math.min(limitY, view.y)) };
}

export function zoomMapView(view, ratio, focus, size, map) {
  const zoom = Math.max(1, Math.min(8, view.zoom * ratio));
  const factor = zoom / view.zoom;
  return clampMapView({
    zoom,
    x: focus.x - size.width / 2 - (focus.x - size.width / 2 - view.x) * factor,
    y: focus.y - size.height / 2 - (focus.y - size.height / 2 - view.y) * factor,
  }, size, map);
}

export function seatAtMapPoint(point, size, map, view, radius = 14) {
  const transform = mapTransform(size, map, view);
  let nearest = null;
  let distance = radius;
  for (const candidate of map.points) {
    const dx = candidate.x * transform.scale + transform.x - point.x;
    const dy = candidate.y * transform.scale + transform.y - point.y;
    const d = Math.hypot(dx, dy);
    if (d < distance) { nearest = candidate.seat; distance = d; }
  }
  return nearest;
}
