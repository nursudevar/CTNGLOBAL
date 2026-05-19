import { rmSync } from "fs";
import { join } from "path";

const nextDir = join(process.cwd(), ".next");

try {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("[ctnglobal] .next cache cleared");
} catch (error) {
  if (error && error.code !== "ENOENT") {
    throw error;
  }
}
