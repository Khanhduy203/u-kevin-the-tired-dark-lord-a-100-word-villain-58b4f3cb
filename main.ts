import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "So. You've come to slay me. How\u2026 prompt. I am Lady Morvain, who drowned the fleet at Saltspire and wears the Hollow Bell around her neck \u2014 it rings when liars speak, so do mind your tongue. Anselm sent you, I suppose. Poor dear Anselm. He still writes me letters. I never read them. I use them to prop up the table. Anyway. The bell says you mean well. How sweet. How dull. Draw your sword, then. Or don't. The stew's nearly done, and I \u2014 ah. Forgive me. Where were we? Oh yes. Dying. Yours, I mean.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
