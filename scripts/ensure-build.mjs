import { existsSync } from "fs";
import { join } from "path";

const buildIdPath = join(process.cwd(), ".next", "BUILD_ID");

if (!existsSync(buildIdPath)) {
  console.error(
    "[ctnglobal] Production build not found. Run `npm run build` before `npm run start`."
  );
  process.exit(1);
}
