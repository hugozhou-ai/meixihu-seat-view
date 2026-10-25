import test from "node:test";
import assert from "node:assert/strict";
import { makeLayout, seatEye, LEVELS, ROW_COUNTS } from "../src/layout.js";
const seats = makeLayout();
test("all selectable locations have stable unique identifiers and finite eye points", () => {
  assert.equal(new Set(seats.map((s) => s.seatId)).size, seats.length);
  assert.equal(seats.length, 1811);
  for (const s of seats) {
    assert.ok(s.position.every(Number.isFinite));
    assert.ok(seatEye(s).every(Number.isFinite));
    assert.equal(s.ticketIdentityVerified, false);
  }
});
test("capacity partitions preserve orchestra and each gallery", () => {
  assert.equal(seats.filter((s) => s.zone === "P").length, 130);
  assert.deepEqual(
    LEVELS.map((l) => seats.filter((s) => s.level === l.id).length),
    [1196, 318, 297],
  );
});
test("chairs have physical spacing: nearest neighbours never overlap", () => {
  for (let i = 0; i < seats.length; i++)
    for (let j = i + 1; j < seats.length; j++) {
      const a = seats[i],
        b = seats[j];
      if (a.level !== b.level) continue;
      const d = Math.hypot(...a.position.map((v, k) => v - b.position[k]));
      assert.ok(d > 0.5, `${a.seatId} collides with ${b.seatId}: ${d}`);
    }
});
test("eye height changes only vertical position at the same seat", () => {
  for (const s of seats) {
    const a = seatEye(s, 1),
      b = seatEye(s, 1.3);
    assert.equal(a[0], b[0]);
    assert.equal(a[2], b[2]);
    assert.ok(Math.abs(b[1] - a[1] - 0.3) < 1e-9);
  }
});
test("every row is contiguous, endpoints are within the auditorium envelope", () => {
  const rows = new Map();
  for (const s of seats) {
    const key = [s.level, s.zone, s.row].join(":");
    if (!rows.has(key)) rows.set(key, []);
    rows.get(key).push(s.number);
    assert.ok(Math.abs(s.position[0]) < 19.2);
    assert.ok(s.position[2] > 0 && s.position[2] < 37.2);
  }
  for (const a of rows.values())
    assert.deepEqual(
      a,
      a.map((_, i) => i + 1),
    );
});
test("all 1681 fixed locations retain traced source image centres", () => {
  const fixed = seats.filter((s) => s.zone !== "P");
  assert.equal(fixed.length, 1681);
  const seen = new Set();
  for (const s of fixed) {
    assert.equal(s.topology, "traced-2017-image");
    assert.equal(s.mapPosition.length, 2);
    const key =
      s.level + ":" + s.mapPosition.map((v) => v.toFixed(3)).join(",");
    assert.ok(!seen.has(key));
    seen.add(key);
  }
  assert.equal(
    new Set(fixed.filter((s) => s.level === "1F").map((s) => s.row)).size,
    24,
  );
});
test("the three balcony sectors follow the asymmetric published topology", () => {
  for (const [level, expected] of [
    ["2F", [91, 175, 52]],
    ["3F", [62, 188, 47]],
  ])
    assert.deepEqual(
      ["L", "M", "R"].map(
        (z) => seats.filter((s) => s.level === level && s.zone === z).length,
      ),
      expected,
    );
});
