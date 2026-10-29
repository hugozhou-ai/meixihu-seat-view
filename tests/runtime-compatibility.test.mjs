import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("theatre dependencies initialize without browser globals or AbortController", () => {
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", `
    delete globalThis.AbortController;
    delete globalThis.AbortSignal;
    delete globalThis.window;
    delete globalThis.document;
    const THREE = await import('three');
    await import('three/examples/jsm/exporters/GLTFExporter.js');
    const { VENUES } = await import('./src/venues.js');
    if (typeof THREE.WebGL1Renderer !== 'function') throw new Error('WeChat canvas requires WebGL 1 support');
    if (typeof THREE.DefaultLoadingManager.itemStart !== 'function') throw new Error('Loading manager unavailable');
    if (VENUES.length !== 2) throw new Error('Theatres did not initialize');
  `], { cwd: new URL("../", import.meta.url), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
});
