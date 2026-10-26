// Stage floor uses Y=0; +Z points straight toward the audience.
export function stageViewpoints(stage) {
  return [
    ["front", "台口中央", 0, 0.12],
    ["center", "舞台中央", 0, 0.5],
    ["left", "舞台左侧", 0.3, 0.5],
    ["right", "舞台右侧", -0.3, 0.5],
    ["back", "后区中央", 0, 0.78],
  ].map(([id, label, x, depth]) => ({
    id, label, position: [stage.width * x, 0, stage.front - stage.depth * depth],
  }));
}
export function stageViewEye(point) {
  return [point.position[0], point.position[1] + 1.65, point.position[2]];
}
