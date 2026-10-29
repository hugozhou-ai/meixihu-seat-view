import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { VENUES } from "../src/venues.js";
import { ICON_NAMES, iconDataUri } from "../src/icons.js";

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
      const infoPages = await stat(new URL(relative, weappRoot));
      assert.ok(infoPages.isFile(), `missing H5 asset in dist (GitHub Pages root): ${relative}`);
    }
  }
});

test("every venue reference and Lucide icon resolves in both weapp and h5 outputs", async () => {
  assert.equal(VENUES.length, 2);
  for (const venue of VENUES) {
    assert.ok(venue.references.length >= 4);
    const seats = venue.makeLayout();
    assert.ok(seats.some((s) => s.seatId === venue.defaultSeat));
    for (const ref of venue.references) {
      assert.ok(
        (await stat(new URL("reference/" + ref.file, weappRoot))).isFile(),
      );
      assert.ok(
        (await stat(new URL("reference/" + ref.file, h5Root))).isFile(),
      );
    }
  }

  for (const name of ICON_NAMES) {
    const uri = iconDataUri(name, "#eee9df");
    assert.ok(uri.startsWith("data:image/svg+xml;utf8,"));
  }
});
