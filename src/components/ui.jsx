import React from "react";
import { View, Text, Image, Picker, ScrollView } from "@tarojs/components";
import { iconDataUri } from "../icons.js";

const isWeapp = process.env.TARO_ENV === "weapp";

export function LucideIcon({
  name,
  color = "#eee9df",
  size = 16,
  strokeWidth = 2,
  className = "",
}) {
  const src = iconDataUri(name, color, strokeWidth);
  return (
    <Image
      className={`lucide-icon ${className}`.trim()}
      src={src}
      mode="aspectFit"
      aria-hidden="true"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    />
  );
}

export function SegmentedTabs({
  options,
  value,
  onChange,
  className = "",
  ariaLabel = "",
}) {
  return (
    <View
      className={`taro-tabs ${className}`.trim()}
      role="radiogroup"
      aria-label={ariaLabel}
    >
      {options.map((opt) => {
        const active = String(opt.value) === String(value);
        return (
          <View
            key={opt.value}
            id={opt.id}
            role="radio"
            aria-checked={active}
            className={`taro-tab-item ${active ? "active" : ""}`.trim()}
            onClick={() => {
              console.info("[THEATRE_VIEW]", JSON.stringify({ event: "tab-selected", group: ariaLabel, value: opt.value, active }));
              if (!active && onChange) onChange(opt.value);
            }}
          >
            {opt.icon ? (
              <LucideIcon
                name={opt.icon}
                size={14}
                color={active ? "#344839" : "#bfc6b7"}
              />
            ) : null}
            <Text className="taro-tab-label">{opt.label}</Text>
            {opt.sub ? <Text className="taro-tab-sub">{opt.sub}</Text> : null}
          </View>
        );
      })}
    </View>
  );
}

export function PickerSelect({
  id,
  label,
  options,
  value,
  onChange,
  className = "",
}) {
  const safeOptions =
    options && options.length ? options : [{ value: "", label: "—" }];
  const selectedIndex = Math.max(
    0,
    safeOptions.findIndex((o) => String(o.value) === String(value)),
  );
  const currentOption = safeOptions[selectedIndex] || safeOptions[0];

  if (isWeapp) {
    return (
      <View className={`taro-select-field ${className}`.trim()} id={id}>
        {label ? <Text className="taro-select-label">{label}</Text> : null}
        <Picker
          mode="selector"
          range={safeOptions.map((o) => o.label)}
          value={selectedIndex}
          onChange={(e) => {
            const idx = Number(e.detail.value);
            const picked = safeOptions[idx];
            if (picked && onChange) onChange(picked.value);
          }}
        >
          <View className="taro-select-trigger" role="combobox" aria-label={label}>
            <Text className="taro-select-value">{currentOption?.label ?? ""}</Text>
            <LucideIcon name="chevron-down" size={14} color="#53644f" />
          </View>
        </Picker>
      </View>
    );
  }

  return (
    <View className={`taro-select-field ${className}`.trim()} id={id}>
      {label ? <Text className="taro-select-label">{label}</Text> : null}
      <View className="taro-select-trigger">
        <Text className="taro-select-value">{currentOption?.label ?? ""}</Text>
        <LucideIcon name="chevron-down" size={14} color="#53644f" />
        <select
          className="taro-h5-native-select"
          aria-label={label}
          value={String(currentOption?.value ?? "")}
          onChange={(e) => {
            const picked = safeOptions.find(
              (o) => String(o.value) === String(e.target.value),
            );
            if (picked && onChange) onChange(picked.value);
          }}
        >
          {safeOptions.map((opt) => (
            <option key={opt.value} value={String(opt.value)}>
              {opt.label}
            </option>
          ))}
        </select>
      </View>
    </View>
  );
}

export function ModalDialog({
  id,
  open,
  onClose,
  eyebrow,
  title,
  className = "",
  children,
}) {
  if (!open) return null;
  return (
    <View
      id={id}
      className="taro-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <View
        className={`taro-modal-card ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <View className="taro-modal-header">
          <View className="taro-modal-titles">
            {eyebrow ? <Text className="eyebrow">{eyebrow}</Text> : null}
            <Text className="dialog-title">{title}</Text>
          </View>
          <View
            className="taro-modal-close"
            role="button"
            aria-label="关闭弹窗"
            onClick={onClose}
          >
            <LucideIcon name="x" size={18} color="#53644f" />
          </View>
        </View>
        {isWeapp ? <ScrollView scrollY className="taro-modal-body" enhanced>
          <View className="mini-modal-content">{children}</View>
        </ScrollView> : <View className="taro-modal-body h5-modal-body">{children}</View>}
      </View>
    </View>
  );
}
