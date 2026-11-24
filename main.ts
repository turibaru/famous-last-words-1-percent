// main.ts — entrypoint for "Famous Last Words at 1 Percent" (make.fun).
// Reads the one-line entry from entry.txt next to this file and copies it
// verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt. No dependencies, no network,
// no browser APIs; deterministic.
// Kalau variabel output belum disetel, program berhenti dengan pesan galat dan tidak menulis apa pun.
// Satu terminator baris di ujung file dibuang supaya hasil akhirnya tetap satu baris utuh.
// Panjang dihitung per karakter Unicode, jadi emoji atau huruf beraksen tetap dihitung satu.
// Pemeriksaan panjang dan isi kosong terjadi sebelum folder output dibuat atau file ditulis.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_CHARS = 199;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  fail("MAKEFUN_OUTPUT_DIR is not set");
}

const repoRoot = dirname(fileURLToPath(import.meta.url));
const entryPath = join(repoRoot, "entry.txt");

let raw: string;
try {
  raw = readFileSync(entryPath, "utf8");
} catch {
  fail(`cannot read ${entryPath}`);
}

// entry.txt holds exactly one line with no trailing newline; drop a single
// trailing line terminator if an editor added one, so the output stays one line.
const text = raw.replace(/\r\n$/, "").replace(/\n$/, "");

// Length in Unicode code points, so a multi-byte character counts as one.
const length = Array.from(text).length;
if (length === 0 || text.trim().length === 0 || length > MAX_CHARS) {
  fail(`entry.txt must be 1–${MAX_CHARS} non-blank characters, got ${length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
