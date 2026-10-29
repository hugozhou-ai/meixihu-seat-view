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
import { meixihuReferences, polyReferences } from "./references.js";
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
