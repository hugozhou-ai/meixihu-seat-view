// Published 2020 row totals and row-block topology, transcribed from the theatre's maps.
// Seat centres along each block and all metric dimensions are reconstructed estimates.
export const POLY_ROWS = {
  "1F": [
    34, 35, 36, 37, 38, 39, 40, 36, 33, 36, 42, 43, 43, 44, 44, 46, 46, 46, 46,
    46, 43,
  ],
  "2F": [38, 41, 46, 49, 50, 49, 46, 41],
  "3F": [50, 51, 44, 39],
  P: [22, 23, 26, 27],
};
export const POLY_STAGE = {
  width: 16,
  height: 10,
  depth: 12,
  target: [0, 1.2, -5],
  front: 0,
};
export const POLY_LEVELS = [
  { id: "1F", label: "一层池座", short: "一层", base: -0.9 },
  { id: "2F", label: "二层楼座与包厢", short: "二层", base: 6 },
  { id: "3F", label: "三层楼座与包厢", short: "三层", base: 11 },
];
export const POLY_PROVENANCE = {
  status: "approximate",
  label: "剧院公开座位图逐排重建 · 尺寸待实测校准",
  seatLabels: "重建编号，非已核对票面座号",
  sources: [
    {
      title: "深圳保利剧院演出资讯 · 2020分层座位图与内景",
      url: "https://www.sohu.com/a/396239249_703600",
    },
    {
      title: "保利剧院公司 · 深圳剧院名录",
      url: "https://www.polytheatre.com/newsCer/514",
    },
  ],
};
export function polyRowGeometry(level, row, x) {
  if (level === "1F")
    return {
      y: -0.9 + (row - 1) * 0.18,
      z: 5.9 + (row - 1) * 0.88 + (row >= 8 ? 1.3 : 0) + 0.004 * x * x,
    };
  return {
    y: (level === "2F" ? 6 : 11) + (row - 1) * (level === "2F" ? 0.3 : 0.36),
    z: (level === "2F" ? 24 : 27) + (row - 1) * 0.88 - 0.022 * x * x,
  };
}
const centres = {
  "1F": [
    18, 19, 20, 21, 22, 23, 24, 26, 25, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22,
  ],
  "2F": [16, 17, 18, 19, 20, 21, 22, 23],
  "3F": [18, 19, 20, 21],
  P: [10, 11, 12, 13],
};
export function makePolyLayout() {
  const seats = [];
  const add = (
    level,
    zone,
    row,
    number,
    position,
    yaw,
    mapPosition,
    extra = {},
  ) =>
    seats.push({
      theatreId: "shenzhen-poly",
      seatId: `${level}-${zone}-${String(row).padStart(2, "0")}-${String(number).padStart(2, "0")}`,
      level,
      zone,
      row,
      number,
      position: position.map((v) => +v.toFixed(5)),
      yaw: +yaw.toFixed(5),
      mapPosition,
      eyeOffset: [0, 1.16, -0.02],
      confidence: "inferred-metric",
      topology: "published-2020-row-counts",
      ticketIdentityVerified: false,
      ...extra,
    });
  function addRows(level, zone, counts) {
    counts.forEach((count, r) => {
      const mid = centres[zone === "P" ? "P" : level][r],
        left = Math.floor((count - mid) / 2),
        blocks = [left, mid, count - mid - left];
      const width = (count - 1) * 0.56 + 1.8;
      let x = -width / 2,
        index = 0;
      blocks.forEach((n, segment) => {
        for (let i = 0; i < n; i++, index++, x += 0.56) {
          const g =
            zone === "P"
              ? { y: -1.16, z: 1.9 + r * 0.86 }
              : polyRowGeometry(level, r + 1, x);
          let map;
          if (zone === "P") map = [534 + x / 0.05, 207 + r * 19 - 0.12 * x * x];
          else if (level === "1F")
            map = [
              534 + x / 0.05,
              315 + r * 20.65 + (r >= 7 ? 20 : 0) - 0.14 * x * x,
            ];
          else
            map = [
              530 + x / 0.05,
              (level === "2F" ? 319 : 337) + r * 19 - 0.25 * x * x,
            ];
          add(
            level,
            zone,
            r + 1,
            index + 1,
            [x, g.y, g.z],
            Math.atan2(x, g.z + 5) * 0.65,
            map,
            { segment },
          );
        }
        x += 0.9;
      });
    });
  }
  addRows("1F", "P", POLY_ROWS.P);
  for (const level of ["1F", "2F", "3F"]) addRows(level, "M", POLY_ROWS[level]);
  for (const level of ["2F", "3F"])
    for (const side of [-1, 1])
      for (let box = 0; box < 2; box++) {
        const number =
            (level === "2F" ? 1 : 5) + box * 2 + (side === 1 ? 1 : 0),
          count = level === "2F" ? (box === 0 ? 8 : 10) : 5,
          cols = level === "2F" ? 2 : 1;
        for (let i = 0; i < count; i++) {
          const x = side * (14.7 + (i % cols) * 0.68),
            z = 7.8 + box * 6.3 + Math.floor(i / cols) * 0.84,
            y = (level === "2F" ? 6 : 11) - 0.15;
          add(
            level,
            side === -1 ? "BL" : "BR",
            number,
            i + 1,
            [x, y, z],
            side * 1.1,
            [
              530 + side * (232 + (i % cols) * 20),
              55 + box * 115 + Math.floor(i / cols) * 20,
            ],
            { box: number },
          );
        }
      }
  return seats;
}
