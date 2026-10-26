import {
  makeLayout,
  STAGE,
  LEVELS,
  PROVENANCE,
  MODEL_VERSION,
} from "./layout.js";
import { buildTheatre } from "./theatre.js";
import {
  makePolyLayout,
  POLY_STAGE,
  POLY_LEVELS,
  POLY_PROVENANCE,
} from "./poly-layout.js";
import { buildPolyTheatre } from "./poly-theatre.js";
const meixihuReferences = [
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
const polyReferences = [
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
export const VENUES = [
  {
    id: "meixihu",
    name: "梅溪湖大剧院",
    version: MODEL_VERSION,
    slug: "meixihu-grand-theatre",
    stage: STAGE,
    levels: LEVELS,
    provenance: PROVENANCE,
    makeLayout,
    build: buildTheatre,
    middleRows: { "1F": 12, "2F": 8, "3F": 8 },
    defaultSeat: "1F-M-12-26",
    references: meixihuReferences,
    formNote: "ZHA公开平面与剖面、观众厅摄影；木色曲线墙顶面、灯带与两层楼座。",
    seatNote:
      "主座区1681个位置由公开座位图逐排描点；另有130个按容量重建的乐池活动位置，共1811个。排号座号为重建编号。",
    sizeNote:
      "台口、剖面层级和照片比例用于建立可调整几何；排距、逐排高程和栏板高度仍需实测校准。",
  },
  {
    id: "shenzhen-poly",
    name: "深圳保利剧院",
    version: "0.1.0",
    slug: "shenzhen-poly-theatre",
    stage: POLY_STAGE,
    levels: POLY_LEVELS,
    provenance: POLY_PROVENANCE,
    makeLayout: makePolyLayout,
    build: buildPolyTheatre,
    middleRows: { "1F": 12, "2F": 4, "3F": 2 },
    defaultSeat: "1F-M-12-22",
    references: polyReferences,
    formNote:
      "依据剧院发布的观众厅全景，重建红色座椅、金色楼座前缘、灰色声学墙面、侧包厢与分块木质顶棚。",
    seatNote:
      "按2020年分层图逐排重建：固定池座853、乐池98、二层396、三层204，共1551个位置，含56个包厢座位。分区座椅中心沿图示曲线重建，编号未逐票核对。",
    sizeNote:
      "尚未取得清晰竣工平剖面与逐排高程；当前台口、排距、层高、栏板和所有三维坐标均为估算。公开座位数量有图示依据，不代表三维尺寸已实测。",
  },
];
export function getVenue(id) {
  const venue = VENUES.find((v) => v.id === id);
  if (!venue) throw new Error("Unknown theatre: " + id);
  return venue;
}
