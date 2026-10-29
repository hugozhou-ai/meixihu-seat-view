import React, { useEffect, useMemo, useRef, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Canvas } from "@tarojs/components";
import { beginGesture, moveGesture, finishGesture, canvasTouches, touchPoint } from "../viewport-gestures.js";
import { mapTransform, clampMapView, zoomMapView, seatAtMapPoint } from "../seat-map-viewport.js";
import { LucideIcon } from "./ui.jsx";
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

function drawSeatMap2D(ctx, width, height, mapData, selectedSeatId, view) {
  const { points, radius } = mapData;
  ctx.clearRect(0, 0, width, height);
  const transform = mapTransform({ width, height }, mapData, view);
  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.scale(transform.scale, transform.scale);

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
  const isWeapp = process.env.TARO_ENV === "weapp";
  const canvasRef = useRef(null);
  const viewRef = useRef({ zoom: 1, x: 0, y: 0 });
  const gestureRef = useRef(null);
  const [zoomPercent, setZoomPercent] = useState(100);
  const redraw = () => {
    const canvas = canvasRef.current;
    if (canvas) drawSeatMap2D(canvas.ctx, canvas.width, canvas.height, mapData, selectedSeat?.seatId, viewRef.current);
  };
  useEffect(() => {
    viewRef.current = { zoom: 1, x: 0, y: 0 };
  }, [mapData]);

  useEffect(() => {
    if (!isWeapp) return;
    let disposed = false;
    const measure = () => {
      const query = Taro.createSelectorQuery();
      query
        .select(`#${canvasId}`)
        .fields({ node: true, size: true, rect: true })
        .exec((res) => {
          if (disposed) return;
          const item = res?.[0];
          if (!item || !item.node) return;
          const canvas = item.node;
          const ctx = canvas.getContext("2d");
          const sys = Taro.getWindowInfo();
          const dpr = Math.min(sys.pixelRatio || 2, 2.5);
          const w = item.width;
          const h = item.height;
          if (!w || !h) return;
          canvas.width = w * dpr;
          canvas.height = h * dpr;
          ctx.scale(dpr, dpr);
          canvasRef.current = { ctx, width: w, height: h, left: item.left, top: item.top };
          viewRef.current = clampMapView(viewRef.current, canvasRef.current, mapData);
          redraw();
        });
    };
    const timer = setTimeout(measure, 30);
    const onResize = () => Taro.nextTick(measure);
    Taro.onWindowResize(onResize);
    return () => {
      disposed = true;
      clearTimeout(timer);
      Taro.offWindowResize(onResize);
    };
  }, [isWeapp, canvasId, mapData, selectedSeat]);

  const mapTouches = touches => canvasTouches(touches || [], canvasRef.current);
  const handleWeappTouchStart = e => {
    if (!canvasRef.current) return;
    gestureRef.current = beginGesture(mapTouches(e.touches));
  };
  const handleWeappTouchMove = e => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const touches = mapTouches(e.touches);
    const motion = moveGesture(gestureRef.current, touches);
    if (!motion) return;
    if (motion.kind === "pinch") {
      const first = touchPoint(touches[0]);
      const second = touchPoint(touches[1]);
      const focus = { x: (first.x + second.x) / 2 - canvas.left, y: (first.y + second.y) / 2 - canvas.top };
      viewRef.current = zoomMapView(viewRef.current, motion.scale, focus, canvas, mapData);
    } else {
      viewRef.current = clampMapView({ ...viewRef.current,
        x: viewRef.current.x + motion.dx, y: viewRef.current.y + motion.dy,
      }, canvas, mapData);
    }
    redraw();
  };
  const handleWeappTouchEnd = e => {
    if (!canvasRef.current || e.touches?.length) return;
    const tap = finishGesture(gestureRef.current, mapTouches(e.changedTouches));
    gestureRef.current = null;
    setZoomPercent(Math.round(viewRef.current.zoom * 100));
    if (!tap) return;
    const canvas = canvasRef.current;
    const seat = seatAtMapPoint({ x: tap.x - canvas.left, y: tap.y - canvas.top }, canvas, mapData, viewRef.current);
    if (seat) onSelectSeat?.(seat);
  };

  const changeZoom = ratio => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    viewRef.current = zoomMapView(viewRef.current, ratio, { x: canvas.width / 2, y: canvas.height / 2 }, canvas, mapData);
    setZoomPercent(Math.round(viewRef.current.zoom * 100));
    redraw();
    console.info("[THEATRE_VIEW]", JSON.stringify({ event: "seat-map-zoom", zoom: viewRef.current.zoom }));
  };

  if (isWeapp) {
    return <View className="mini-seatmap">
      <View className={`seatmap-wrapper ${expanded ? "expanded" : ""}`.trim()} aria-label={`${floorLabel}选座图`}>
        <Canvas type="2d" id={canvasId} canvasId={canvasId} className="seatmap-canvas" disableScroll
          onTouchStart={handleWeappTouchStart} onTouchMove={handleWeappTouchMove}
          onTouchEnd={handleWeappTouchEnd} onTouchCancel={() => { gestureRef.current = null; }} />
      </View>
      <View className="mini-map-tools">
        <View id={`${canvasId}-zoom-out`} role="button" aria-label="缩小选座图" className="mini-map-tool" onClick={() => changeZoom(1 / 1.5)}>
          <LucideIcon name="minus" size={18} color="#53644f" />
        </View>
        <Text className="mini-map-scale">{zoomPercent}%</Text>
        <View id={`${canvasId}-zoom-in`} role="button" aria-label="放大选座图" className="mini-map-tool" onClick={() => changeZoom(1.5)}>
          <LucideIcon name="plus" size={18} color="#53644f" />
        </View>
        <View role="button" aria-label="重置选座图" className="mini-map-tool" onClick={() => changeZoom(1 / viewRef.current.zoom)}>
          <LucideIcon name="rotate-ccw" size={18} color="#53644f" />
        </View>
      </View>
    </View>;
  }

  // H5: render interactive SVG with data-seat attributes & full keyboard/click support
  return (
    <View
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
