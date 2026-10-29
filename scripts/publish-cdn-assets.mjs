import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const cacheControl = "public, max-age=31536000, immutable";
const types = { jpg: "image/jpeg", png: "image/png", bin: "application/octet-stream", txt: "text/plain" };
const digest = body => createHash("sha256").update(body).digest("hex");
const log = (event, fields = {}) => console.info("[THEATRE_ASSETS]", JSON.stringify({ event, ...fields }));

export async function publicationInputs(config, assets, directory) {
  const prefix = "tutti/desktop/v2/production/public-resource/theatre-seat-view/";
  if (config.bucket !== "tsh-public-resource" || config.region !== "us-east-1" ||
      config.prefix !== prefix || config.baseUrl !== `https://d2pciwc1akv4l5.cloudfront.net/${prefix}`) {
    throw new Error("Publication must use this project's isolated AWS public-resource prefix");
  }
  const items = [];
  for (const [file, asset] of Object.entries(assets)) {
    if (!/^(?:models|reference)\/[a-zA-Z0-9_./-]+$/.test(asset.path) ||
        asset.path.split("/").some(part => part === "." || part === "..") ||
        !/^[a-f0-9]{64}$/.test(asset.sha256) ||
        !asset.path.includes(`.${asset.sha256.slice(0, 16)}.`)) {
      throw new Error(`Invalid immutable asset path: ${asset.path}`);
    }
    const path = resolve(directory, asset.path);
    const body = await readFile(path);
    if (body.length !== asset.bytes || digest(body) !== asset.sha256) {
      throw new Error(`Prepared asset bytes differ: ${file}`);
    }
    const contentType = types[file.split(".").at(-1)];
    if (!contentType) throw new Error(`Unsupported static asset type: ${file}`);
    items.push({ file, asset, path, contentType, key: config.prefix + asset.path });
  }
  if (!items.length) throw new Error("Empty asset publication");
  return items;
}

function aws(config, operation, args) {
  const result = spawnSync("aws", ["s3api", operation, ...args,
    "--profile", process.env.AWS_PROFILE || "AdministratorAccess-250509935467",
    "--region", config.region, "--output", "json", "--no-cli-pager"],
  { encoding: "utf8", timeout: 60000 });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    const error = new Error(result.stderr.trim());
    error.code = result.stderr.match(/An error occurred \(([^)]+)\)/)?.[1];
    throw error;
  }
  return result.stdout.trim() ? JSON.parse(result.stdout) : {};
}

async function verifyPublic(config, items) {
  for (const { file, asset, contentType } of items) {
    const url = config.baseUrl + asset.path;
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (response.status !== 200) throw new Error(`Public resource HTTP ${response.status}: ${file}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (digest(bytes) !== asset.sha256) throw new Error(`Public resource bytes differ: ${file}`);
    if (response.headers.get("content-type")?.split(";")[0] !== contentType) {
      throw new Error(`Public resource MIME type differs: ${file}`);
    }
    const policy = response.headers.get("cache-control") || "";
    if (!policy.includes("max-age=31536000") || !policy.includes("immutable")) {
      throw new Error(`Public resource cache policy differs: ${file}`);
    }
    log("public-verified", { file, url, bytes: bytes.length });
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (args.some(arg => arg !== "--verify")) throw new Error("Usage: node scripts/publish-cdn-assets.mjs [--verify]");
  const { config, assets } = JSON.parse(await readFile(resolve(root, ".cdn-assets/manifest.json"), "utf8"));
  const currentConfig = JSON.parse(await readFile(resolve(root, "config/cdn.json"), "utf8"));
  if (JSON.stringify(config) !== JSON.stringify(currentConfig)) throw new Error("Prepared CDN configuration is stale; run npm run assets:prepare");
  const items = await publicationInputs(config, assets, resolve(root, ".cdn-assets"));
  if (!args.includes("--verify")) {
    // Inventory every immutable identity before writing. Never list/delete other project resources.
    const pending = [];
    for (const item of items) {
      let existing;
      try {
        existing = aws(config, "head-object", ["--bucket", config.bucket, "--key", item.key]);
      } catch (error) {
        if (!["404", "NotFound", "NoSuchKey"].includes(error.code)) throw error;
      }
      if (existing) {
        if (existing.Metadata?.sha256 !== item.asset.sha256 || existing.ContentLength !== item.asset.bytes ||
            existing.ContentType !== item.contentType || existing.CacheControl !== cacheControl) {
          throw new Error(`Refusing to overwrite an immutable object with different content or metadata: ${item.key}`);
        }
        log("already-published", { file: item.file });
      } else pending.push(item);
    }
    for (const item of pending) {
      aws(config, "put-object", ["--bucket", config.bucket, "--key", item.key,
        "--body", item.path, "--if-none-match", "*", "--content-type", item.contentType,
        "--cache-control", cacheControl, "--metadata", JSON.stringify({ sha256: item.asset.sha256 })]);
      log("published", { file: item.file, bytes: item.asset.bytes });
    }
  }
  await verifyPublic(config, items);
  log("publication-verified", { files: items.length });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
