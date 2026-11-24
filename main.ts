// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather forecast (<=140 chars) for an invented city
// to /output/entry.txt. Fully offline and deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In Snozzleham, drizzle clears by eight, sunshine clocks in at 18°, and the 8:15 bus waits for you — yes, waits — like it read your mind.";

// Gate: the sealed scorer requires 1-140 UTF-8 characters, one line.
if ([...LINE].length < 1 || [...LINE].length > 140 || LINE.includes("\n")) {
  throw new Error(`entry must be 1-140 chars on one line, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
