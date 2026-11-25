// Gera public/CV-Henrique-Pappis-{pt,en}.pdf a partir das rotas /cv/{pt,en}.
// Uso: npm run cv:pdf   (CHROME_PATH opcional; por padrão usa o Chromium do Playwright)
import { spawn, execFileSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const PORT = 3199;
const ROOT = resolve(import.meta.dirname, "..");
const LOCALES = ["pt", "en"];

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const base = join(homedir(), ".cache", "ms-playwright");
  if (!existsSync(base)) throw new Error("Chromium não encontrado. Defina CHROME_PATH.");
  const dirs = readdirSync(base)
    .filter((d) => /^chromium-\d+$/.test(d))
    .sort((a, b) => Number(b.split("-")[1]) - Number(a.split("-")[1]));
  for (const dir of dirs) {
    const bin = join(base, dir, "chrome-linux64", "chrome");
    if (existsSync(bin)) return bin;
  }
  throw new Error("Chromium não encontrado. Defina CHROME_PATH.");
}

const nextBin = join(ROOT, "node_modules", "next", "dist", "bin", "next");

function waitForServer(url, attempts = 60) {
  return new Promise((resolveWait, reject) => {
    const tick = async (left) => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolveWait();
      } catch {}
      if (left <= 0) return reject(new Error(`Servidor não respondeu em ${url}`));
      setTimeout(() => tick(left - 1), 1000);
    };
    tick(attempts);
  });
}

const chrome = findChrome();
console.log("Build de produção...");
execFileSync(process.execPath, [nextBin, "build"], { cwd: ROOT, stdio: "inherit" });

const server = spawn(process.execPath, [nextBin, "start", "-p", String(PORT)], {
  cwd: ROOT,
  stdio: "ignore",
});

try {
  await waitForServer(`http://localhost:${PORT}/cv/pt`);
  for (const locale of LOCALES) {
    const out = join(ROOT, "public", `CV-Henrique-Pappis-${locale}.pdf`);
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        "--virtual-time-budget=8000",
        `--print-to-pdf=${out}`,
        `http://localhost:${PORT}/cv/${locale}`,
      ],
      { stdio: "ignore" },
    );
    console.log(`OK ${out} (${statSync(out).size} bytes)`);
  }
} finally {
  server.kill();
}
