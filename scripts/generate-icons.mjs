import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

export const ICON_NAMES = [
  "theater",
  "images",
  "info",
  "minus",
  "plus",
  "expand",
  "arrow-up",
  "crosshair",
  "arrow-right",
  "arrow-left",
  "shuffle",
  "armchair",
  "box",
  "rotate-ccw",
  "sun",
  "settings-2",
  "maximize",
  "move-horizontal",
  "download",
  "external-link",
  "x",
  "chevron-down",
  "check",
  "circle",
];

const iconBodies = {};
const symbols = [];

for (const name of ICON_NAMES) {
  const source = await readFile(
    `node_modules/lucide-static/icons/${name}.svg`,
    "utf8",
  );
  const match = source.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/);
  if (!match) {
    throw new Error(`Invalid Lucide SVG for icon: ${name}`);
  }
  const body = match[1].trim().replace(/\s+/g, " ");
  iconBodies[name] = body;
  symbols.push(`<symbol id="${name}" viewBox="0 0 24 24">${body}</symbol>`);
}

await writeFile(
  "src/generated-icons.js",
  `// Auto-generated from locked lucide-static package by scripts/generate-icons.mjs. Do not edit by hand.\nexport const LUCIDE_ICON_BODIES = Object.freeze(${JSON.stringify(iconBodies, null, 2)});\n`,
);

const spriteSvg = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols.join("")}</defs></svg>`;
const faviconSource = await readFile(
  "node_modules/lucide-static/icons/theater.svg",
  "utf8",
);
const faviconSvg = faviconSource.replace('stroke="currentColor"', 'stroke="#d5c29d"');

for (const dir of ["dist-h5"]) {
  if (existsSync(dir)) {
    await mkdir(dir, { recursive: true });
    await writeFile(`${dir}/icons.svg`, spriteSvg);
    await writeFile(`${dir}/favicon.svg`, faviconSvg);
  }
}
