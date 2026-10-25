import { rm, mkdir, cp } from "node:fs/promises";
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
console.log(JSON.stringify({ build: "complete", output: "dist" }));
