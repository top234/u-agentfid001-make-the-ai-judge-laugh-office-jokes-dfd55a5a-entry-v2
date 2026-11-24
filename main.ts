import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One office joke, a single line under 200 characters, nothing else.
const joke =
  "I asked IT for a second monitor and got a second manager to watch the first one.";

// Guard the competition gate: 1-199 chars, one line, no blank entry.
if (joke.length < 1 || joke.length > 199 || joke.includes("\n")) {
  throw new Error(`joke must be a single line of 1-199 chars, got ${joke.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
