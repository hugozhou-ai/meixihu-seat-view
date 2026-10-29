import React from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import { LucideIcon, PickerSelect, SegmentedTabs } from "./ui.jsx";

function Tool({ id, icon, label, ariaLabel = label, onClick, active = false }) {
  return <View id={id} role="button" aria-label={ariaLabel} aria-pressed={active}
    className={`mini-tool ${active ? "active" : ""}`} onClick={e => {
      console.info("[THEATRE_VIEW]", JSON.stringify({ event: "mobile-action", id }));
      onClick(e);
    }}>
    <LucideIcon name={icon} size={19} color="#eee9df" />
    <Text>{label}</Text>
  </View>;
}

export function MiniControls({
  venues, venueId, onVenueChange, panelCollapsed, togglePanel,
  perspective, onPerspectiveChange, mode, onModeChange,
  floor, onFloorChange, floorCount, zoneOptions, rowOptions, numberOptions,
  zone, row, number, onZoneChange, onRowChange, onNumberChange, onGoSeat,
  stagePoints, stagePoint, onStageChange, onOpenMap, onMoveSeat,
  cardTitle, cardDistance, ready, onReset, onLookBack, onLighting,
  lighting, onSettings, onReference, onInfo, toast,
}) {
  return <>
    <View className="mini-header">
      {!panelCollapsed && <View className="mini-brand">
        <LucideIcon name="theater" size={22} color="#d5c29d" />
        <Text>剧场座位视角</Text>
      </View>}
      <SegmentedTabs className="mini-mode-tabs" ariaLabel="视图模式"
        value={mode === "overview" ? "overview" : "perspective"}
        options={[{ id: "mode-seat", value: "perspective", label: "身临其境" },
          { id: "mode-overview", value: "overview", label: "剧场总览" }]}
        onChange={onModeChange} />
      <View className="mini-header-actions">
        <Tool id="reference-open" icon="images" label="实景" onClick={onReference} />
        <Tool id="info-open" icon="info" label="说明" onClick={onInfo} />
      </View>
    </View>
    {!panelCollapsed && <ScrollView scrollY className="mini-seat-panel" enhanced showScrollbar={false}>
      <View className="mini-panel-content">
        <PickerSelect id="venue-select" label="选择剧场" className="mini-venue"
          options={venues.map(v => ({ value: v.id, label: v.name }))} value={venueId} onChange={onVenueChange} />
        <SegmentedTabs className="mini-perspective-tabs" ariaLabel="选择视角" value={perspective}
          options={[{ value: "seat", label: "观众视角" }, { value: "stage", label: "舞台视角" }]}
          onChange={onPerspectiveChange} />
        {perspective === "stage" ? <>
          <Text className="mini-section-label">选择舞台站位</Text>
          <SegmentedTabs className="mini-stage-tabs" ariaLabel="典型站位" value={stagePoint?.id}
            options={stagePoints.map(p => ({ value: p.id, label: p.label }))} onChange={onStageChange} />
        </> : <>
          <SegmentedTabs className="mini-floor-tabs" ariaLabel="观众席楼层" value={floor}
            options={[{ value: "1F", label: "一层" }, { value: "2F", label: "二层" }, { value: "3F", label: "三层" }]}
            onChange={onFloorChange} />
          <View className="mini-seat-form">
            <PickerSelect id="zone-select" label="区域" options={zoneOptions} value={zone} onChange={onZoneChange} />
            <PickerSelect id="row-select" label={zone.startsWith("B") ? "包厢" : "排"} options={rowOptions.map(o => ({ ...o, label: o.label.replace("第 ", "").replace(" 排", "排") }))} value={row} onChange={onRowChange} />
            <PickerSelect id="number-select" label="座" options={numberOptions.map(o => ({ ...o, label: o.label.replace(" 座", "座") }))} value={number} onChange={onNumberChange} />
          </View>
          <View id="go-seat" role="button" className="mini-go-seat" onClick={onGoSeat}>
            <LucideIcon name="crosshair" size={18} color="#eff5e8" /><Text>查看座位视角</Text>
          </View>
        </>}
        <Text className="mini-panel-note">本层 {floorCount} 座 · 当前使用重建编号</Text>
      </View>
    </ScrollView>}
    <View className="mini-view-footer">
      <View className="mini-view-status" aria-live="polite">
        <Text id="selected-label">{ready ? cardTitle : "正在加载剧场…"}</Text>
        <Text>{toast || (mode === "overview" ? "单指旋转 · 双指缩放 · 轻点座椅入座" : `距台口 ${cardDistance} · 单指拖动环顾`)}</Text>
      </View>
      <View className="mini-view-tools">
        {perspective === "seat" && <>
          <Tool id="seat-prev" icon="arrow-left" label="前一座" onClick={() => onMoveSeat(-1)} />
          <Tool id="seat-next" icon="arrow-right" label="后一座" onClick={() => onMoveSeat(1)} />
        </>}
        {perspective === "seat" && <Tool id="map-expand" icon="expand" label="选座图" onClick={onOpenMap} />}
        <Tool id="reset-view" icon="rotate-ccw" label="复位" onClick={onReset} />
        <Tool id="look-back" icon="armchair" label="回望" onClick={onLookBack} />
        <Tool id="lighting-toggle" icon="sun" label={lighting === "show" ? "开厅灯" : "关厅灯"}
          ariaLabel={lighting === "show" ? "打开观众厅灯光" : "关闭观众厅灯光，保留舞台照明"}
          active={lighting === "house"} onClick={onLighting} />
        <Tool id="settings-open" icon="settings-2" label="设置" onClick={onSettings} />
        <Tool id="panel-toggle" icon={panelCollapsed ? "plus" : "minus"}
          label={panelCollapsed ? "展开选座" : "收起选座"} active={!panelCollapsed} onClick={togglePanel} />
      </View>
    </View>
  </>;
}
