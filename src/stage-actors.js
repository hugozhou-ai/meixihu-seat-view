// Open-source 3D human character models from Quaternius Modular Men & Modular Women (CC0 1.0 Public Domain).
// Quantized geometry is downloaded separately; original GLB and license remain in public/models/.
import * as THREE from "three";
import { assetUrl } from "./assets.js";

const QUANT_SCALE = 4000;
const geometryCache = new Map();
let loading = null;

export const STAGE_ACTORS = [
  {
    "id": "lead-male",
    "role": "男主演 · 台前偏右主戏位",
    "sourceModel": "Quaternius CC0 Modular Men (Suit)",
    "license": "CC0-1.0",
    "height": 1.78,
    "position": [
      0.85,
      0,
      -3.35
    ],
    "yaw": -0.46,
    "vertexCount": 3468,
    "indexCount": 19902,
    "colorRuns": [
      [
        467,
        "#3b5169"
      ],
      [
        147,
        "#f2ede2"
      ],
      [
        15,
        "#96323a"
      ],
      [
        924,
        "#dfb995"
      ],
      [
        276,
        "#24201d"
      ],
      [
        239,
        "#dfb995"
      ],
      [
        999,
        "#332218"
      ],
      [
        16,
        "#2b1d14"
      ],
      [
        16,
        "#211812"
      ],
      [
        369,
        "#3b5169"
      ]
    ],
    "byteOffset": 0,
    "byteLength": 36625
  },
  {
    "id": "lead-female",
    "role": "女主演 · 台中偏左对手戏位",
    "sourceModel": "Quaternius CC0 Modular Women (Formal)",
    "license": "CC0-1.0",
    "height": 1.68,
    "position": [
      -0.65,
      0,
      -4.15
    ],
    "yaw": 0.54,
    "vertexCount": 3317,
    "indexCount": 18390,
    "colorRuns": [
      [
        174,
        "#a63a42"
      ],
      [
        1186,
        "#e6c2a2"
      ],
      [
        28,
        "#cfa356"
      ],
      [
        154,
        "#e6c2a2"
      ],
      [
        142,
        "#6e2228"
      ],
      [
        234,
        "#e6c2a2"
      ],
      [
        1091,
        "#48251c"
      ],
      [
        40,
        "#261b14"
      ],
      [
        76,
        "#a63a42"
      ],
      [
        192,
        "#e6c2a2"
      ]
    ],
    "byteOffset": 36625,
    "byteLength": 33761
  },
  {
    "id": "supporting-female-right",
    "role": "女配角 · 右台中区双人组内侧",
    "sourceModel": "Quaternius CC0 Modular Women (Suit)",
    "license": "CC0-1.0",
    "height": 1.66,
    "position": [
      -3.25,
      0,
      -5.45
    ],
    "yaw": 0.32,
    "vertexCount": 3467,
    "indexCount": 19482,
    "colorRuns": [
      [
        392,
        "#b89e80"
      ],
      [
        105,
        "#f4efe6"
      ],
      [
        956,
        "#ddb794"
      ],
      [
        216,
        "#3b2c24"
      ],
      [
        76,
        "#ddb794"
      ],
      [
        198,
        "#ddb794"
      ],
      [
        1127,
        "#5c3f2c"
      ],
      [
        24,
        "#3b271b"
      ],
      [
        16,
        "#261b14"
      ],
      [
        357,
        "#b89e80"
      ]
    ],
    "byteOffset": 70386,
    "byteLength": 35961
  },
  {
    "id": "supporting-male-right",
    "role": "男配角 · 右台中区双人组外侧",
    "sourceModel": "Quaternius CC0 Modular Men (Casual)",
    "license": "CC0-1.0",
    "height": 1.75,
    "position": [
      -4.2,
      0,
      -4.8
    ],
    "yaw": 0.78,
    "vertexCount": 3273,
    "indexCount": 18618,
    "colorRuns": [
      [
        638,
        "#4d6b62"
      ],
      [
        906,
        "#dab38e"
      ],
      [
        156,
        "#3a322c"
      ],
      [
        160,
        "#dbd4c8"
      ],
      [
        221,
        "#dab38e"
      ],
      [
        24,
        "#2c1f16"
      ],
      [
        16,
        "#211711"
      ],
      [
        753,
        "#302218"
      ],
      [
        156,
        "#dab38e"
      ],
      [
        243,
        "#7a6d5c"
      ]
    ],
    "byteOffset": 106347,
    "byteLength": 34712
  },
  {
    "id": "supporting-male-left",
    "role": "男演员 · 左台中区独立观察位",
    "sourceModel": "Quaternius CC0 Modular Men (Casual 2)",
    "license": "CC0-1.0",
    "height": 1.77,
    "position": [
      3.65,
      0,
      -4.95
    ],
    "yaw": -0.64,
    "vertexCount": 3082,
    "indexCount": 17328,
    "colorRuns": [
      [
        379,
        "#b58c5c"
      ],
      [
        1042,
        "#dcb692"
      ],
      [
        156,
        "#ded8ce"
      ],
      [
        200,
        "#54382c"
      ],
      [
        229,
        "#dcb692"
      ],
      [
        36,
        "#c9a27e"
      ],
      [
        16,
        "#2e2017"
      ],
      [
        16,
        "#211711"
      ],
      [
        639,
        "#3b281b"
      ],
      [
        369,
        "#434b54"
      ]
    ],
    "byteOffset": 141059,
    "byteLength": 32411
  },
  {
    "id": "ensemble-female-upstage",
    "role": "女演员 · 后区偏左纵深位",
    "sourceModel": "Quaternius CC0 Modular Women (Medieval Gown)",
    "license": "CC0-1.0",
    "height": 1.7,
    "position": [
      1.75,
      0,
      -7.65
    ],
    "yaw": -0.24,
    "vertexCount": 3511,
    "indexCount": 19212,
    "colorRuns": [
      [
        242,
        "#465c75"
      ],
      [
        180,
        "#8a5638"
      ],
      [
        243,
        "#523422"
      ],
      [
        954,
        "#e2bd9c"
      ],
      [
        48,
        "#c9a050"
      ],
      [
        116,
        "#9c968c"
      ],
      [
        206,
        "#593a28"
      ],
      [
        108,
        "#3d271b"
      ],
      [
        32,
        "#2b1e16"
      ],
      [
        278,
        "#3d2a1d"
      ],
      [
        182,
        "#e2bd9c"
      ],
      [
        40,
        "#241912"
      ],
      [
        575,
        "#ede6d8"
      ],
      [
        307,
        "#465c75"
      ]
    ],
    "byteOffset": 173470,
    "byteLength": 36073
  }
];

// Transport is injected so the geometry module stays independent of Taro and DOM APIs.
export function loadStageActors(loadArrayBuffer, url = assetUrl("models/stage-actors.bin")) {
  if (geometryCache.size === STAGE_ACTORS.length) return Promise.resolve();
  if (loading) return loading;
  console.info("[THEATRE_ASSETS]", JSON.stringify({ event: "actors-loading", url }));
  loading = Promise.resolve().then(() => loadArrayBuffer(url)).then(buffer => {
    const expected = STAGE_ACTORS.reduce((sum, spec) => sum + spec.byteLength, 0);
    if (!(buffer instanceof ArrayBuffer) || buffer.byteLength !== expected) {
      throw new Error(`Invalid stage actor binary: expected ${expected} bytes, received ${buffer?.byteLength}`);
    }
    // Decode everything before publishing the cache; partial loads never become ready.
    const geometries = STAGE_ACTORS.map(spec => decodeActorGeometry(
      spec, new Uint8Array(buffer, spec.byteOffset, spec.byteLength),
    ));
    STAGE_ACTORS.forEach((spec, i) => geometryCache.set(spec.id, geometries[i]));
    console.info("[THEATRE_ASSETS]", JSON.stringify({ event: "actors-loaded", bytes: buffer.byteLength }));
  }).catch(error => {
    loading = null;
    console.error("[THEATRE_ASSETS]", JSON.stringify({ event: "actors-load-failed", url, message: error.message }));
    throw error;
  });
  return loading;
}

function decodeActorGeometry(spec, bytes) {
  const totalInts = spec.vertexCount * 3 + spec.indexCount;
  const ints = new Int32Array(totalInts);
  let p = 0;
  for (let i = 0; i < totalInts; i++) {
    let u = 0;
    let shift = 0;
    while (true) {
      if (p >= bytes.length || shift > 28) throw new Error(`Invalid actor geometry: ${spec.id}`);
      const b = bytes[p++];
      u |= (b & 0x7f) << shift;
      if ((b & 0x80) === 0) break;
      shift += 7;
    }
    ints[i] = (u >>> 1) ^ -(u & 1);
  }
  if (p !== bytes.length) throw new Error(`Unexpected actor geometry bytes: ${spec.id}`);
  const positions = new Float32Array(spec.vertexCount * 3);
  let qx = 0, qy = 0, qz = 0, k = 0;
  for (let i = 0; i < spec.vertexCount; i++) {
    qx += ints[k++];
    qy += ints[k++];
    qz += ints[k++];
    const i3 = i * 3;
    positions[i3] = qx / QUANT_SCALE;
    positions[i3 + 1] = qy / QUANT_SCALE;
    positions[i3 + 2] = qz / QUANT_SCALE;
  }
  const indices = new Uint16Array(spec.indexCount);
  let qi = 0;
  for (let i = 0; i < spec.indexCount; i++) {
    qi += ints[k++];
    indices[i] = qi;
  }
  const colors = new Float32Array(spec.vertexCount * 3);
  const col = new THREE.Color();
  let vOffset = 0;
  for (const [count, hex] of spec.colorRuns) {
    col.set(hex);
    for (let i = 0; i < count; i++) {
      const cIdx = (vOffset + i) * 3;
      colors[cIdx] = col.r;
      colors[cIdx + 1] = col.g;
      colors[cIdx + 2] = col.b;
    }
    vOffset += count;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeVertexNormals();
  geo.computeBoundingBox();
  geo.computeBoundingSphere();
  return geo;
}

export function buildStageActors(stage = { width: 16, depth: 12, front: 0 }) {
  if (geometryCache.size !== STAGE_ACTORS.length) {
    throw new Error("Stage actor geometry must be loaded before building the theatre");
  }
  const group = new THREE.Group();
  group.name = "Stage_Scale_Reference";
  group.userData = {
    source: "Quaternius Modular Men & Modular Women",
    license: "CC0-1.0",
    assetPath: assetUrl("models/stage-actors.bin"),
    licenseUrl: assetUrl("models/LICENSE.txt"),
  };
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.78,
    metalness: 0.04,
  });
  const widthScale = (stage.width ?? 16) / 16;
  const depthScale = (stage.depth ?? 12) / 12;
  const front = stage.front ?? 0;

  for (const spec of STAGE_ACTORS) {
    const mesh = new THREE.Mesh(geometryCache.get(spec.id).clone(), mat);
    mesh.name = `Stage_Actor_${spec.id}`;
    const x = spec.position[0] * widthScale;
    const z = front + spec.position[2] * depthScale;
    mesh.position.set(x, spec.position[1], z);
    mesh.rotation.y = spec.yaw;
    mesh.userData = {
      isStageActor: true,
      actorId: spec.id,
      role: spec.role,
      sourceModel: spec.sourceModel,
      license: spec.license,
      height: spec.height,
    };
    group.add(mesh);
  }
  return group;
}
