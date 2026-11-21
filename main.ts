import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Two hands on one lever, neither pulling.
Then your thumb eased off, and mine
felt the whole weight it had been fighting.
The gate swung. Whose push, I couldn't say,
only that my hand stayed on.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
