import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, cp } from "node:fs/promises";

for (const script of [
  "node_modules/@tarojs/binding/postinstall.js",
  "node_modules/@swc/core/postinstall.js",
]) {
  if (existsSync(script)) {
    execSync(`node ${script}`, { stdio: "inherit" });
  }
}

execSync("node scripts/generate-icons.mjs", { stdio: "inherit" });
execSync("npx taro build --type weapp", { stdio: "inherit" });
execSync("npx taro build --type h5", { stdio: "inherit" });
execSync("node scripts/generate-icons.mjs", { stdio: "inherit" });

for (const item of ["index.html", "js", "css", "chunk"]) {
  await cp(`dist-h5/${item}`, `dist/${item}`, { recursive: true });
}

for (const dir of ["dist", "dist-h5"]) {
  await mkdir(`${dir}/vendor`, { recursive: true });
  await cp("node_modules/three/LICENSE", `${dir}/vendor/THREE-LICENSE.txt`);
  await cp(
    "node_modules/lucide-static/LICENSE",
    `${dir}/vendor/LUCIDE-LICENSE.txt`,
  );
}

console.log(
  JSON.stringify({
    build: "complete",
    weappOutput: "dist",
    h5Output: "dist-h5",
    githubPagesRoot: "dist",
  }),
);
