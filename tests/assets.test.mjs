import test from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdtemp, writeFile, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { CDN_ASSETS, CDN_CONFIG } from "../src/asset-manifest.js";
import { assetUrl, stageActorDataUrl } from "../src/assets.js";
import { createHash } from "node:crypto";
import { publicationInputs } from "../scripts/publish-cdn-assets.mjs";

const bytes = await readFile(new URL("../public/models/stage-actors.bin", import.meta.url));
const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);

test("every CDN manifest entry matches the exact source bytes", async () => {
  for (const [file, asset] of Object.entries(CDN_ASSETS)) {
    const body = await readFile(new URL(`../public/${file}`, import.meta.url));
    const hash = createHash("sha256").update(body).digest("hex");
    assert.equal(asset.sha256, hash);
    assert.equal(asset.bytes, body.length);
    assert.ok(asset.path.includes(hash.slice(0, 16)));
  }
  assert.throws(() => assetUrl("reference/missing.jpg"), /Unknown CDN asset/);
});

test("H5 actor data uses its own origin while miniapp uses the public AWS URL", () => {
  const page = new URL("https://hugozhou-ai.github.io/theatre-seat-view/");
  const h5 = new URL(stageActorDataUrl("h5"), page);
  assert.equal(h5.origin, page.origin);
  assert.ok(h5.pathname.startsWith(page.pathname));
  assert.equal(stageActorDataUrl("weapp"), assetUrl("models/stage-actors.bin"));
  assert.equal(new URL(stageActorDataUrl("weapp")).hostname, "d2pciwc1akv4l5.cloudfront.net");
});

test("AWS publication rejects other namespaces, unsafe paths and modified bytes before upload", async () => {
  await assert.rejects(publicationInputs({ ...CDN_CONFIG, prefix: "other/" }, {}, "."), /isolated AWS/);
  const asset = CDN_ASSETS["models/stage-actors.bin"];
  await assert.rejects(publicationInputs(CDN_CONFIG, { bad: { ...asset, path: "models/../secret.bin" } }, "."), /Invalid immutable/);
  const directory = await mkdtemp(join(tmpdir(), "theatre-publication-"));
  try {
    const path = `models.${asset.sha256.slice(0, 16)}.bin`;
    // Keep a valid relative namespace while deliberately changing the content hash.
    await mkdir(join(directory, "models"));
    await writeFile(join(directory, "models", path), new Uint8Array(asset.bytes));
    await assert.rejects(publicationInputs(CDN_CONFIG, {
      "models/stage-actors.bin": { ...asset, path: `models/${path}` },
    }, directory), /Prepared asset bytes differ/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("actor download is shared, cached and produces independent geometry instances", async () => {
  const { loadStageActors, buildStageActors } = await import("../src/stage-actors.js?cache-test");
  assert.throws(() => buildStageActors(), /must be loaded/);
  let calls = 0;
  const load = async url => {
    calls++;
    assert.equal(url, assetUrl("models/stage-actors.bin"));
    return buffer;
  };
  await Promise.all([loadStageActors(load), loadStageActors(load)]);
  await loadStageActors(load);
  assert.equal(calls, 1);
  const first = buildStageActors();
  const second = buildStageActors();
  assert.notEqual(first.children[0].geometry, second.children[0].geometry);
  first.children[0].geometry.attributes.position.array.fill(0);
  assert.ok(second.children[0].geometry.attributes.position.array.some(value => value !== 0));
});

test("failed, truncated and malformed actor downloads reject and permit an explicit retry", async () => {
  const { loadStageActors, buildStageActors } = await import("../src/stage-actors.js?failure-test");
  await assert.rejects(loadStageActors(async () => { throw new Error("HTTP 403"); }), /HTTP 403/);
  await assert.rejects(loadStageActors(async () => buffer.slice(0, -1)), /Invalid stage actor binary/);
  const corrupt = new Uint8Array(buffer.byteLength).fill(255);
  await assert.rejects(loadStageActors(async () => corrupt.buffer), /Invalid actor geometry/);
  assert.throws(() => buildStageActors(), /must be loaded/);
  await loadStageActors(async () => buffer);
  assert.equal(buildStageActors().children.length, 6);
});
