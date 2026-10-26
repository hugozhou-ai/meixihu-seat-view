import { build } from "esbuild";
import { ICON_NAMES, icon } from "../src/icons.js";
import { rm, mkdir, cp, readFile, writeFile } from "node:fs/promises";
await rm("dist", { recursive: true, force: true });
await mkdir("dist/vendor", { recursive: true });
await cp("public", "dist", { recursive: true });
await cp("src", "dist/src", { recursive: true });
for (const name of ["three.module.js", "three.core.js"])
  await cp("node_modules/three/build/" + name, "dist/vendor/" + name);
await cp(
  "node_modules/three/examples/jsm/controls/OrbitControls.js",
  "dist/vendor/OrbitControls.js",
);
await cp(
  "node_modules/three/examples/jsm/exporters/GLTFExporter.js",
  "dist/vendor/GLTFExporter.js",
);
await cp(
  "node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js",
  "dist/vendor/RoundedBoxGeometry.js",
);
await cp(
  "node_modules/three/examples/jsm/utils/BufferGeometryUtils.js",
  "dist/vendor/BufferGeometryUtils.js",
);
await cp("node_modules/three/LICENSE", "dist/vendor/THREE-LICENSE.txt");
// Read the original Lucide SVG paths from the locked dependency, never copy paths by hand.
const symbols = [];
for (const name of ICON_NAMES) {
  const source = await readFile(
    `node_modules/lucide-static/icons/${name}.svg`,
    "utf8",
  );
  const body = source.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/)[1];
  symbols.push(`<symbol id="${name}" viewBox="0 0 24 24">${body}</symbol>`);
}
await writeFile(
  "dist/icons.svg",
  `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols.join("")}</defs></svg>`,
);
const html = await readFile("dist/index.html", "utf8");
const compiled = html.replace(
  /<i data-icon="([a-z0-9-]+)">\s*<\/i\s*>/g,
  (_, name) => icon(name, "./icons.svg"),
);
if (/<i\b[^>]*data-icon=/.test(compiled))
  throw new Error("Uncompiled Lucide icon placeholder in index.html");
await writeFile("dist/index.html", compiled);
const favicon = await readFile(
  "node_modules/lucide-static/icons/theater.svg",
  "utf8",
);
await writeFile(
  "dist/favicon.svg",
  favicon.replace('stroke="currentColor"', 'stroke="#d5c29d"'),
);
await cp(
  "node_modules/lucide-static/LICENSE",
  "dist/vendor/LUCIDE-LICENSE.txt",
);
await build({
  entryPoints: ["src/components.js"],
  outfile: "dist/src/components.js",
  bundle: true,
  format: "esm",
  target: "es2022",
  minify: true,
  legalComments: "linked",
});
await build({
  entryPoints: [
    "node_modules/@awesome.me/webawesome/dist/styles/themes/default.css",
  ],
  outfile: "dist/vendor/webawesome.css",
  bundle: true,
  minify: true,
});
await cp(
  "node_modules/@awesome.me/webawesome/LICENSE.md",
  "dist/vendor/WEB-AWESOME-LICENSE.txt",
);
console.log(JSON.stringify({ build: "complete", output: "dist" }));
