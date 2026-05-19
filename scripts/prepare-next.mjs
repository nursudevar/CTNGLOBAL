import { execSync } from "child_process";
import { existsSync, rmSync } from "fs";
import { join } from "path";

const DEV_PORTS = [3000, 3001, 3002, 3003];
const args = process.argv.slice(2);
const killPorts = args.includes("--kill-ports");
const nextDir = join(process.cwd(), ".next");

function sleep(ms) {
  if (process.platform === "win32") {
    execSync(`powershell -NoProfile -Command "Start-Sleep -Milliseconds ${ms}"`, {
      stdio: "ignore",
    });
    return;
  }

  execSync(`sleep ${Math.max(1, Math.ceil(ms / 1000))}`, { stdio: "ignore" });
}

function cleanNext(maxAttempts = 5) {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      if (existsSync(nextDir)) {
        rmSync(nextDir, { recursive: true, force: true });
      }
      console.log("[ctnglobal] .next cache cleared");
      return;
    } catch (error) {
      const code = error && typeof error === "object" ? error.code : "";
      if (code === "ENOENT") {
        return;
      }

      const locked = code === "EBUSY" || code === "EPERM" || code === "ENOTEMPTY";
      if (locked && attempt < maxAttempts) {
        console.warn(
          `[ctnglobal] .next is locked (attempt ${attempt}/${maxAttempts}). Stop other Next.js terminals, then retrying...`
        );
        sleep(800);
        continue;
      }

      throw error;
    }
  }
}

function killPortWindows(port) {
  try {
    const output = execSync(`netstat -ano -p tcp | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    const pids = new Set();
    for (const line of output.split(/\r?\n/)) {
      if (!line.includes("LISTENING")) {
        continue;
      }
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && /^\d+$/.test(pid) && pid !== "0") {
        pids.add(pid);
      }
    }

    for (const pid of pids) {
      console.log(`[ctnglobal] Stopping process ${pid} on port ${port}`);
      execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
    }
  } catch {
    // Port is free or netstat returned no matches.
  }
}

function killDevPorts() {
  if (!killPorts) {
    return;
  }

  if (process.platform === "win32") {
    for (const port of DEV_PORTS) {
      killPortWindows(port);
    }
    return;
  }

  for (const port of DEV_PORTS) {
    try {
      execSync(`lsof -ti tcp:${port} | xargs -r kill -9`, {
        stdio: "ignore",
        shell: true,
      });
    } catch {
      // Port is free.
    }
  }
}

killDevPorts();
cleanNext();
