export const meixihuReferences = [
  ["auditorium-front.jpg", "舞台望向观众席"],
  ["auditorium-back.jpg", "观众厅与顶棚"],
  ["section-long.jpg", "纵剖面"],
  ["plan-2f.jpg", "建筑平面"],
  ["seating-all.jpg", "全厅座位图"],
].map(([file, label]) => ({
  file,
  label,
  caption: file.startsWith("auditorium")
    ? "实景摄影 © Virgile Simon Bertrand / ZHA · 公开发表资料，模型未实测校准。"
    : file.startsWith("seating")
      ? "湖南湘江集团 · 2017年历史座位图。"
      : "图纸 © Zaha Hadid Architects / ArchDaily · 公开发表图纸，非竣工图。",
}));
export const polyReferences = [
  ["auditorium-panorama.jpg", "观众厅全景"],
  ["seating-1f.png", "一层与乐池"],
  ["seating-2f.png", "二层与包厢"],
  ["seating-3f.jpg", "三层与包厢"],
].map(([file, label]) => ({
  file: "shenzhen-poly/" + file,
  label,
  caption:
    "深圳保利剧院演出资讯 · 2020年公开资料，图像版权归原作者；座椅配置和尺寸仍需现场核实。",
}));
