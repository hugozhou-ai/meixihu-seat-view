import { CDN_ASSETS, CDN_CONFIG } from "./asset-manifest.js";

// Public S3 resources delivered by Tutti's existing CloudFront distribution.
export const CDN_BASE_URL = CDN_CONFIG.baseUrl;

export function assetUrl(file) {
  const asset = CDN_ASSETS[file];
  if (!asset) throw new Error(`Unknown CDN asset: ${file}`);
  return CDN_BASE_URL + asset.path;
}

export function stageActorDataUrl(target) {
  const file = "models/stage-actors.bin";
  // H5 serves the binary from its own origin; no bucket/CDN CORS changes are needed.
  return target === "h5" ? "./" + CDN_ASSETS[file].path : assetUrl(file);
}
