import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { VENUES } from "../src/venues.js";
import { ICON_NAMES, iconDataUri } from "../src/icons.js";
import { assetUrl, CDN_BASE_URL, stageActorDataUrl } from "../src/assets.js";
import { CDN_ASSETS } from "../src/asset-manifest.js";

const weappRoot = new URL("../dist/", import.meta.url);
const h5Root = new URL("../dist-h5/", import.meta.url);

test("Taro WeChat Mini Program (weapp) build generates complete miniapp package", async () => {
  const projectConfig = JSON.parse(
    await readFile(new URL("../project.config.json", import.meta.url), "utf8"),
  );
  assert.equal(projectConfig.miniprogramRoot, "dist/");
  assert.equal(projectConfig.compileType, "miniprogram");

  const requiredFiles = [
    "app.json",
    "app.js",
    "app.wxss",
    "base.wxml",
    "pages/index/index.wxml",
    "pages/index/index.js",
    "pages/index/index.json",
    "vendor/THREE-LICENSE.txt",
    "vendor/LUCIDE-LICENSE.txt",
  ];
  for (const rel of requiredFiles) {
    const info = await stat(new URL(rel, weappRoot));
    assert.ok(info.isFile(), `missing weapp artifact: ${rel}`);
  }

  const appJson = JSON.parse(
    await readFile(new URL("app.json", weappRoot), "utf8"),
  );
  assert.ok(appJson.pages.includes("pages/index/index"));
  assert.equal(appJson.window.navigationStyle, "custom");
  assert.equal(appJson.window.pageOrientation, "landscape");
  const pageJson = JSON.parse(await readFile(new URL("pages/index/index.json", weappRoot), "utf8"));
  assert.equal(pageJson.pageOrientation, "landscape");
  assert.equal(pageJson.disableScroll, true);
});

test("Taro H5 build entry assets stay within a relative project path", async () => {
  const html = await readFile(new URL("index.html", h5Root), "utf8");
  const site = new URL("https://example.github.io/theatre-seat-view/");
  const resources = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((s) => !s.startsWith("data:") && !s.startsWith("http"));

  assert.ok(resources.length >= 2, "expected relative script/style/icon assets");
  for (const resource of resources) {
    const url = new URL(resource, site);
    assert.equal(url.origin, site.origin);
    assert.ok(
      url.pathname.startsWith(site.pathname),
      `asset escapes project path: ${url}`,
    );
    const relative = url.pathname.slice(site.pathname.length);
    if (relative) {
      const infoH5 = await stat(new URL(relative, h5Root));
      assert.ok(infoH5.isFile(), `missing H5 asset in dist-h5: ${relative}`);
    }
  }
});

test("venue references resolve to immutable CDN assets and retain local research sources", async () => {
  assert.equal(VENUES.length, 2);
  for (const venue of VENUES) {
    assert.ok(venue.references.length >= 4);
    const seats = venue.makeLayout();
    assert.ok(seats.some((s) => s.seatId === venue.defaultSeat));
    for (const ref of venue.references) {
      const file = `reference/${ref.file}`;
      const bytes = await readFile(new URL(`../public/${file}`, import.meta.url));
      assert.equal(createHash("sha256").update(bytes).digest("hex"), CDN_ASSETS[file].sha256);
      assert.ok(assetUrl(file).startsWith(CDN_BASE_URL));
      assert.match(assetUrl(file), /\.[a-f0-9]{16}\.(jpg|png)$/);
    }
  }

});

test("Lucide icons remain bundled without a network dependency", () => {
  for (const name of ICON_NAMES) {
    const uri = iconDataUri(name, "#eee9df");
    assert.ok(uri.startsWith("data:image/svg+xml;utf8,"));
  }
});

async function listFiles(root, prefix = "") {
  const files = [];
  for (const item of await readdir(new URL(prefix, root), { withFileTypes: true })) {
    const name = prefix + item.name;
    if (item.isDirectory()) files.push(...await listFiles(root, name + "/"));
    else files.push(name);
  }
  return files;
}

test("miniapp contains no research assets, H5 output, embedded actor payload or source maps", async () => {
  const files = await listFiles(weappRoot);
  for (const name of files) {
    assert.ok(!/^(reference|models|js|css|chunk)\//.test(name), `unexpected miniapp asset: ${name}`);
    assert.ok(!/\.(html|map|svg)$/.test(name), `unexpected miniapp asset: ${name}`);
  }
  for (const root of [weappRoot, h5Root]) {
    await assert.rejects(stat(new URL("reference/", root)), { code: "ENOENT" });
    const scripts = (await listFiles(root)).filter(name => name.endsWith(".js"));
    const source = (await Promise.all(scripts.map(name => readFile(new URL(name, root), "utf8")))).join("\n");
    assert.ok(source.includes(new URL(CDN_BASE_URL).hostname));
    assert.ok(!/[A-Za-z0-9+/]{10000}/.test(source), "actor Base64 must stay outside JavaScript bundles");
  }
});

test("the entire uncompressed miniapp stays below the 2 MiB package budget", async () => {
  const files = await listFiles(weappRoot);
  const sizes = await Promise.all(files.map(async name => (await stat(new URL(name, weappRoot))).size));
  const total = sizes.reduce((sum, size) => sum + size, 0);
  assert.ok(total < 2 * 1024 * 1024, `miniapp package is ${total} bytes`);
});

test("H5 includes the exact actor binary for same-origin loading without CORS", async () => {
  const local = await readFile(new URL(stageActorDataUrl("h5"), h5Root));
  const source = await readFile(new URL("../public/models/stage-actors.bin", import.meta.url));
  assert.deepEqual(local, source);
  await assert.rejects(stat(new URL("models/", weappRoot)), { code: "ENOENT" });
});

test("GitHub Pages publishes only the independent H5 output", async () => {
  const workflow = await readFile(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8");
  assert.match(workflow, /path: dist-h5\s/);
});
