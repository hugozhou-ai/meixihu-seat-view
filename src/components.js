// Register Lucide before upgrading components so internal controls never load another icon set.
import { registerIconLibrary } from "@awesome.me/webawesome/dist/components/icon/library.js";
import { ICON_NAMES } from "./icons.js";
const systemIcons = {
  check: "check",
  circle: "circle",
  "chevron-down": "chevron-down",
  xmark: "x",
};
function lucideLibrary(resolve) {
  return {
    resolver(name) {
      const lucide = resolve(name);
      if (!ICON_NAMES.includes(lucide))
        throw new Error(`Unregistered UI icon: ${name}`);
      return new URL(`../icons.svg#${lucide}`, import.meta.url).href;
    },
    spriteSheet: true,
    mutator(svg) {
      for (const [key, value] of Object.entries({
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }))
        svg.setAttribute(key, value);
    },
  };
}
registerIconLibrary(
  "system",
  lucideLibrary((name) => systemIcons[name]),
);
registerIconLibrary(
  "default",
  lucideLibrary((name) => name),
);
await Promise.all([
  import("@awesome.me/webawesome/dist/components/button/button.js"),
  import("@awesome.me/webawesome/dist/components/radio-group/radio-group.js"),
  import("@awesome.me/webawesome/dist/components/select/select.js"),
  import("@awesome.me/webawesome/dist/components/dialog/dialog.js"),
  import("@awesome.me/webawesome/dist/components/slider/slider.js"),
  import("@awesome.me/webawesome/dist/components/switch/switch.js"),
  import("@awesome.me/webawesome/dist/components/tooltip/tooltip.js"),
  import("@awesome.me/webawesome/dist/translations/zh-cn.js"),
]);
