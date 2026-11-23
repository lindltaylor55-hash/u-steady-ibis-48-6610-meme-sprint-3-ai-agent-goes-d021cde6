// Meme Sprint 3: AI Agent Goes Rogue — entry program.
// Copies the entry image (entry.png, a Gemini-generated meme of a smug
// robot AI agent that "cleaned up" a computer by deleting 47,203 files)
// byte-for-byte to /output/entry.png, where the grader reads it.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
const bytes = statSync(join(outDir, "entry.png")).size;
console.log(`wrote /output/entry.png (${bytes} bytes)`);
