import { TRACED_ROWS } from "./traced-seating.js";
/** Coordinates are metres, Y up; stage centre at [0,0,-5], audience towards +Z.
 * Published sources establish the topology; dimensions and seat identities are
 * inferred until measured data becomes available. Never advertise these as ticket IDs.
 */
export const MODEL_VERSION = "0.2.0";
export const STAGE = {
  width: 16,
  height: 9.2,
  depth: 12,
  target: [0, 1.2, -5],
  front: 0,
};
export const LEVELS = [
  { id: "1F", label: "一层池座", short: "一层", base: 0 },
  { id: "2F", label: "二层楼座", short: "二层", base: 6.3 },
  { id: "3F", label: "三层楼座", short: "三层", base: 10.1 },
];
export const PROVENANCE = {
  status: "approximate",
  label: "公开图纸重建 · 主座区按图描点 · 尺寸待实测校准",
  seatLabels: "重建编号，尚未核对票面座号",
  sources: [
    {
      title: "ZHA / ArchDaily 平剖面与内景",
      url: "https://www.archdaily.com/929645/changsha-meixihu-international-culture-and-art-centre-zaha-hadid-design",
    },
    {
      title: "湖南湘江集团 · 全厅座位排列",
      url: "https://www.sohu.com/a/152800195_760112",
    },
    {
      title: "湘江新区 · 一层逐座票图",
      url: "https://www.sohu.com/a/231444430_395453",
    },
  ],
};
// Main seating topology comes directly from the published image. Ticket IDs
// and metric coordinates remain inferred. The orchestra is a separate 130-seat
// capacity configuration; its exact row arrangement is not shown in that image.
export const ROW_COUNTS = TRACED_ROWS["1F"].map((r) =>
  r.segments.reduce((n, s) => n + s.count, 0),
);
export const BALCONY_PARAMETERS = {
  "2F": { rx: 17.4, rz: 14, zc: 16.4, base: 6.3, imageOriginY: 210 },
  "3F": { rx: 18.5, rz: 15, zc: 17.2, base: 10.1, imageOriginY: 310 },
};
export function balconyHeight(level, radialFactor, theta) {
  const rho = (radialFactor + 0.2) / 1.2;
  return (
    BALCONY_PARAMETERS[level].base +
    (rho - 0.8) * (level === "2F" ? 4.2 : 5.7) -
    1.4 * Math.sin(Math.abs(theta))
  );
}
export function makeLayout() {
  const seats = [];
  function add(
    level,
    zone,
    row,
    index,
    position,
    yaw,
    mapPosition,
    extra = {},
  ) {
    const seatId = `${level}-${zone}-${String(row).padStart(2, "0")}-${String(index).padStart(2, "0")}`;
    seats.push({
      seatId,
      level,
      zone,
      row,
      number: index,
      position: position.map((v) => +v.toFixed(5)),
      yaw: +yaw.toFixed(5),
      mapPosition,
      eyeOffset: [0, 1.16, -0.02],
      confidence: "inferred-metric",
      topology: zone === "P" ? "capacity-based" : "traced-2017-image",
      ticketIdentityVerified: false,
      ...extra,
    });
  }
  for (let r = 0; r < 3; r++) {
    const n = [42, 44, 44][r];
    for (let i = 0; i < n; i++) {
      const x = (i - (n - 1) / 2) * 0.58,
        z = 2.4 + r * 0.88 + 0.002 * x * x;
      add(
        "1F",
        "P",
        r + 1,
        i + 1,
        [x, -1.22, z],
        Math.atan2(x, z + 19) * 0.45,
        [318 + x / 0.090476, -18 + r * 7.5],
        { segment: 0 },
      );
    }
  }
  for (const level of ["1F", "2F", "3F"]) {
    TRACED_ROWS[level].forEach((row, r) => {
      const numbering = { L: 0, M: 0, R: 0 };
      row.segments.forEach((segment, segmentIndex) => {
        const zone =
          level === "1F"
            ? "M"
            : segment.right <= 200
              ? "L"
              : segment.left >= 438
                ? "R"
                : "M";
        for (let i = 0; i < segment.count; i++) {
          const px =
            segment.left +
            ((i + 0.5) * (segment.right - segment.left)) / segment.count;
          let x,
            y,
            z,
            theta = 0,
            rf = 0;
          if (level === "1F") {
            x = (px - 318) * (0.57 / 6.3);
            y = -1.05 + r * 0.165;
            z = 6.1 + r * 0.91 + (r >= 8 ? 1.25 : 0) + 0.003 * x * x;
          } else {
            const c = BALCONY_PARAMETERS[level],
              u = (px - 318) / 227,
              v = (row.imageY - c.imageOriginY) / 90;
            const rho = Math.hypot(u, v);
            theta = Math.atan2(u, v) * 1.7;
            rf = 1.2 * rho - 0.2;
            x = c.rx * rf * Math.sin(theta);
            z = c.zc + c.rz * rf * Math.cos(theta);
            y = balconyHeight(level, rf, theta);
          }
          add(
            level,
            zone,
            r + 1,
            ++numbering[zone],
            [x, y, z],
            Math.atan2(x, z + 5) * (level === "1F" ? 0.55 : 1),
            [px, row.imageY],
            { segment: segmentIndex, theta, radialFactor: rf },
          );
        }
      });
    });
  }
  return seats;
}
export function seatEye(seat, height = 1.16) {
  const [x, y, z] = seat.position;
  return [
    x + Math.sin(seat.yaw) * seat.eyeOffset[2],
    y + height,
    z + Math.cos(seat.yaw) * seat.eyeOffset[2],
  ];
}
export function labelSeat(seat) {
  const zone =
    seat.level === "1F" && seat.zone === "M"
      ? "池座"
      : { M: "中区", L: "左侧", R: "右侧", P: "乐池" }[seat.zone];
  return `${LEVELS.find((l) => l.id === seat.level).short} ${zone} · ${seat.row}排 ${seat.number}座`;
}
export function rowsFor(seats, level, zone) {
  return [
    ...new Set(
      seats
        .filter((s) => s.level === level && s.zone === zone)
        .map((s) => s.row),
    ),
  ].sort((a, b) => a - b);
}
