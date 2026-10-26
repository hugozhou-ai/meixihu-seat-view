import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const root = new URL("../dist/", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");

test("all entry assets and transitive modules stay within a project Pages path", async () => {
  const site = new URL("https://example.github.io/meixihu-seat-view/");
  const imports = JSON.parse(html.match(/<script type="importmap">([\s\S]*?)<\/script>/)[1]).imports;
  const resources = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((s) => !s.startsWith("data:"));
  resources.push(...Object.values(imports));
  const seen = new Set();
  async function inspect(specifier, parent) {
    const url = new URL(imports[specifier] ? new URL(imports[specifier], site) : specifier, parent);
    assert.equal(url.origin, site.origin);
    assert.ok(url.pathname.startsWith(site.pathname), `asset escapes project path: ${url}`);
    const relative = url.pathname.slice(site.pathname.length);
    if (!relative || seen.has(relative)) return;
    seen.add(relative);
    const file = new URL(relative, root);
    assert.ok((await stat(file)).isFile(), `missing asset: ${relative}`);
    if (relative.endsWith(".js")) {
      const js = await readFile(file, "utf8");
      for (const m of js.matchAll(/^\s*(?:import|export)\s+(?:[^;]*?\sfrom\s*)?["']([^"']+)["']/gm)) {
        await inspect(m[1], url);
      }
    }
  }
  for (const resource of resources) await inspect(resource, site);
  assert.ok(seen.has("vendor/three.core.js"));
  assert.ok(seen.has("src/traced-seating.js"));
});

test("every reference tab resolves relative to the application module", async () => {
  const module = new URL("https://example.github.io/meixihu-seat-view/src/app.js");
  for (const m of html.matchAll(/data-reference="([^"]+)"/g)) {
    const asset = new URL("../reference/" + m[1], module);
    assert.ok(asset.pathname.startsWith("/meixihu-seat-view/reference/"));
    assert.ok((await stat(new URL("reference/" + m[1], root))).isFile());
  }
});
