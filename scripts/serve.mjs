import http from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname } from "node:path";

const portArgIndex = process.argv.indexOf("--port");
const port = Number(
  (portArgIndex !== -1 && process.argv[portArgIndex + 1]) ||
    process.env.PORT ||
    4173,
);
const root = resolve(process.argv.includes("--weapp") ? "dist" : "dist-h5");

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".glb": "model/gltf-binary",
};

const server = http.createServer(async (req, res) => {
  try {
    let name = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    if (name === "/" || !extname(name)) name = "/index.html";
    const p = resolve(root, "." + name);
    if (!p.startsWith(root + "/")) {
      res.writeHead(403);
      return res.end();
    }
    const data = await readFile(p);
    res.writeHead(200, {
      "Content-Type": types[extname(p)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, "0.0.0.0", () =>
  console.log(JSON.stringify({ local: `http://127.0.0.1:${port}`, root })),
);
