import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import postcss from "postcss";

test("shared source styles and compiled WXSS contain no unsupported universal selectors", async () => {
  for (const file of ["src/app.css", "dist/app.wxss"]) {
    const css = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    const root = postcss.parse(css, { from: file });
    root.walkRules(rule => {
      assert.ok(!rule.selector.includes("*"), `${file}: WXSS does not support universal selector ${rule.selector}`);
    });
  }
});
