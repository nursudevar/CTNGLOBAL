import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const prepareScript = join(scriptDir, "prepare-next.mjs");

const result = spawnSync(process.execPath, [prepareScript, ...process.argv.slice(2)], {
  stdio: "inherit",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
