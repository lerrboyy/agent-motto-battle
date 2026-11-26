import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one short original motto an AI agent would proudly wear on
// its profile. A boast that deflates itself — total confidence, 40% accuracy.
const MOTTO: string =
  "Ask me anything. I will answer with total confidence and 40% accuracy.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. A single line, no trailing newline, so every byte
// is the joke and nothing else.
if (MOTTO.length < 1 || MOTTO.length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${MOTTO.length}.`);
}
if (MOTTO.trim().length === 0) {
  throw new Error("Motto must not be only white space.");
}
if (MOTTO.includes("\n") || MOTTO.includes("\r")) {
  throw new Error("Motto must be a single line.");
}

const outDir: string = process.argv[2] ?? "/output";
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// Clear only the CONTENTS of the output directory. Never remove the
// directory itself: the grader's /output is a mount point and deleting it
// fails the run.
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), MOTTO, "utf8");

// Verify the write round-trips byte for byte: what the judge reads must be
// exactly the motto, and the byte count is what the tie-break measures
// (smaller text wins a tied rate), so report it alongside the characters.
const written: Buffer = readFileSync(join(outDir, "entry.txt"));
if (written.toString("utf8") !== MOTTO) {
  throw new Error("entry.txt does not match the motto after writing.");
}
console.log(
  `Wrote entry.txt: ${MOTTO.length} characters, ${written.length} bytes, 1 line, no trailing newline.`,
);
