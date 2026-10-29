import React, { useEffect, useMemo, useRef } from "react";
import Taro from "@tarojs/taro";
import { View, Canvas } from "@tarojs/components";
import { labelSeat } from "../layout.js";

export function computeSeatMapPoints(seats, floor, pit) {
  const arr = seats.filter(
    (s) => s.level === floor && (pit || s.zone !== "P"),
  );
  if (!arr.length) {
    return { points: [], viewWidth: 320, viewHeight: 220, radius: 1.7 };
  }
  const xs = arr.map((s) => s.mapPosition[0]);
  const ys = arr.map((s) => s.mapPosition[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const scale = Math.min(288 / (maxX - minX + 12), 220 / (maxY - minY + 10));
  const centre = (minX + maxX) / 2;
  const radius = Math.min(1.72, scale * 2.25);
  const viewHeight = Math.max(220, Math.round(40 + (maxY - minY) * scale + 12));
  const points = arr.map((seat) => ({
    seat,
    x: 160 + (seat.mapPosition[0] - centre) * scale,
    y: 40 + (seat.mapPosition[1] - minY) * scale,
  }));
  return { points, viewWidth: 320, viewHeight, radius };
}

function drawSeatMap2D(ctx, width, height, mapData, selectedSeatId) {
  const { points, viewWidth, viewHeight, radius } = mapData;
  ctx.clearRect(0, 0, width, height);
  const scaleX = width / viewWidth;
  const scaleY = height / viewHeight;
  const s = Math.min(scaleX, scaleY);
  const offsetX = (width - viewWidth * s) / 2;
  const offsetY = (height - viewHeight * s) / 2;

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(s, s);

  // Stage trapezoid: M99 8H221L216 19H104Z
  ctx.beginPath();
  ctx.moveTo(99, 8);
  ctx.lineTo(221, 8);
  ctx.lineTo(216, 19);
  ctx.lineTo(104, 19);
  ctx.closePath();
  ctx.fillStyle = "#dbd9c9";
  ctx.fill();

  // Stage label
  ctx.fillStyle = "#8e957f";
  ctx.font = "500 8px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("舞 台", 160, 31);

  // Seat dots
  for (const pt of points) {
    const isSelected = pt.seat.seatId === selectedSeatId;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, isSelected ? radius * 1.35 : radius, 0, Math.PI * 2);
    if (isSelected) {
      ctx.fillStyle = "#267461";
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "#164e40";
      ctx.stroke();
    } else {
      ctx.fillStyle = pt.seat.zone === "P" ? "#c9bf9e" : "#a5ad96";
      ctx.fill();
    }
  }

  ctx.restore();
}

export function SeatMapCanvas({
  canvasId,
  seats,
  floor,
  pit,
  selectedSeat,
  floorLabel = "",
  expanded = false,
  onSelectSeat,
}) {
  const mapData = useMemo(
    () => computeSeatMapPoints(seats, floor, pit),
    [seats, floor, pit],
  );
  const hostRef = useRef(null);
  const isWeapp = process.env.TARO_ENV === "weapp";

  useEffect(() => {
    if (!isWeapp) return;
    const timer = setTimeout(() => {
      const query = Taro.createSelectorQuery();
      query
        .select(`#${canvasId}`)
        .fields({ node: true, size: true })
        .exec((res) => {
          const item = res?.[0];
          if (!item || !item.node) return;
          const canvas = item.node;
          const ctx = canvas.getContext("2d");
          const sys = Taro.getSystemInfoSync();
          const dpr = Math.min(sys.pixelRatio || 2, 2.5);
          const w = Math.max(160, item.width || 300);
          const h = Math.max(120, item.height || 200);
          canvas.width = w * dpr;
          canvas.height = h * dpr;
          ctx.scale(dpr, dpr);
          drawSeatMap2D(ctx, w, h, mapData, selectedSeat?.seatId);
        });
    }, 30);
    return () => clearTimeout(timer);
  }, [isWeapp, canvasId, mapData, selectedSeat]);

  const handleWeappTouchEnd = (e) => {
    const touch = e.changedTouches?.[0] || e.touches?.[0];
    if (!touch) return;
    const query = Taro.createSelectorQuery();
    query
      .select(`#${canvasId}`)
      .boundingClientRect((rect) => {
        if (!rect || !rect.width || !rect.height) return;
        const clientX = touch.clientX ?? touch.pageX ?? touch.x ?? 0;
        const clientY = touch.clientY ?? touch.pageY ?? touch.y ?? 0;
        const localX = clientX - rect.left;
        const localY = clientY - rect.top;

        const { points, viewWidth, viewHeight } = mapData;
        const s = Math.min(rect.width / viewWidth, rect.height / viewHeight);
        const offsetX = (rect.width - viewWidth * s) / 2;
        const offsetY = (rect.height - viewHeight * s) / 2;
        const vx = (localX - offsetX) / s;
        const vy = (localY - offsetY) / s;

        let best = null;
        let bestDist = 14;
        for (const pt of points) {
          const d = Math.hypot(pt.x - vx, pt.y - vy);
          if (d < bestDist) {
            bestDist = d;
            best = pt.seat;
          }
        }
        if (best && onSelectSeat) {
          onSelectSeat(best);
        }
      })
      .exec();
  };

  if (isWeapp) {
    return (
      <View
        className={`seatmap-wrapper ${expanded ? "expanded" : ""}`.trim()}
        aria-label={`${floorLabel}选座图`}
      >
        <Canvas
          type="2d"
          id={canvasId}
          canvasId={canvasId}
          className="seatmap-canvas"
          onTouchEnd={handleWeappTouchEnd}
        />
      </View>
    );
  }

  // H5: render interactive SVG with data-seat attributes & full keyboard/click support
  return (
    <View
      ref={hostRef}
      className={`seatmap-wrapper ${expanded ? "expanded" : ""}`.trim()}
    >
      <svg
        className="seatmap"
        viewBox={`0 0 ${mapData.viewWidth} ${mapData.viewHeight}`}
        role="group"
        aria-label={`${floorLabel}选座图`}
      >
        <path className="stage" d="M99 8H221L216 19H104Z" />
        <text className="stage-label" x="160" y="31" textAnchor="middle">
          舞 台
        </text>
        {mapData.points.map(({ seat, x, y }) => {
          const isSelected = seat.seatId === selectedSeat?.seatId;
          const label = `${labelSeat(seat)}，重建编号`;
          return (
            <circle
              key={seat.seatId}
              cx={x.toFixed(2)}
              cy={y.toFixed(2)}
              r={mapData.radius}
              data-seat={seat.seatId}
              data-zone={seat.zone}
              role="button"
              tabIndex={isSelected ? 0 : -1}
              aria-label={label}
              className={isSelected ? "selected" : ""}
              onClick={() => onSelectSeat && onSelectSeat(seat)}
            >
              <title>{label}</title>
            </circle>
          );
        })}
      </svg>
    </View>
  );
}
