// Builds lib/sitemap-manifest.json: one entry per page with its URL path,
// primary image, content hash and `lastmod` date.
//
// `lastmod` only changes when a page's content changes: each page is hashed
// together with every local file it imports (components, lib helpers...), and
// the stored date is bumped to today only if that hash differs from the last
// run. Works like WordPress "last modified" and needs no git history, so it is
// safe on shallow-cloning hosts (Vercel/Netlify).
//
// Runs automatically via `predev` / `prebuild`. Commit the generated JSON.

import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "app");
const OUT_FILE = path.join(ROOT, "lib", "sitemap-manifest.json");
const DEFAULT_IMAGE = "/الأمين-نقل-اثاث-دبي.jpg"; // same fallback as MetadataTemplate
const EXTENSIONS = [".tsx", ".ts", ".jsx", ".js", ".mjs"];

const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

function findPages(dir) {
  const pages = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) pages.push(...findPages(full));
    else if (/^page\.(tsx|jsx|ts|js)$/.test(entry.name)) pages.push(full);
  }
  return pages;
}

function resolveImport(spec, fromFile) {
  let base;
  if (spec.startsWith("@/")) base = path.join(ROOT, spec.slice(2));
  else if (spec.startsWith("."))
    base = path.resolve(path.dirname(fromFile), spec);
  else return null; // package import
  const candidates = [
    base,
    ...EXTENSIONS.map((e) => base + e),
    ...EXTENSIONS.map((e) => path.join(base, "index" + e)),
  ];
  return (
    candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile()) ?? null
  );
}

// Collect the page file plus every local source file it (transitively) imports.
function collectFiles(entry) {
  const seen = new Set();
  const queue = [entry];
  while (queue.length) {
    const file = queue.pop();
    if (seen.has(file)) continue;
    seen.add(file);
    if (!EXTENSIONS.includes(path.extname(file))) continue;
    const src = fs.readFileSync(file, "utf8");
    const re = /(?:from\s+|import\s*\(\s*|import\s+)["']([^"']+)["']/g;
    for (const m of src.matchAll(re)) {
      const resolved = resolveImport(m[1], file);
      if (resolved) queue.push(resolved);
    }
  }
  return [...seen].sort();
}

function hashFiles(files) {
  const h = createHash("sha256");
  for (const f of files) {
    h.update(path.relative(ROOT, f).replaceAll("\\", "/") + "\0");
    // Normalise line endings so Windows/Linux produce the same hash.
    h.update(fs.readFileSync(f, "utf8").replace(/\r\n/g, "\n") + "\0");
  }
  return h.digest("hex");
}

// URL path = folder path with route groups "(group)" removed.
function routeOf(pageFile) {
  const rel = path
    .relative(APP_DIR, path.dirname(pageFile))
    .replaceAll("\\", "/");
  const segments = rel.split("/").filter((s) => s && !/^\(.*\)$/.test(s));
  return segments.length ? "/" + segments.join("/") : "/";
}

function groupOf(pageFile) {
  const rel = path.relative(APP_DIR, pageFile).replaceAll("\\", "/");
  return rel.match(/^\(([^)]+)\)\//)?.[1] ?? "root";
}

function imageOf(src) {
  const m = src.match(/image\s*:\s*\{\s*path\s*:\s*["'`]([^"'`]+)["'`]/);
  return m ? m[1] : DEFAULT_IMAGE;
}

const previous = fs.existsSync(OUT_FILE)
  ? Object.fromEntries(
      JSON.parse(fs.readFileSync(OUT_FILE, "utf8")).map((p) => [p.path, p]),
    )
  : {};

const entries = findPages(APP_DIR)
  .map((file) => {
    const route = routeOf(file);
    const hash = hashFiles(collectFiles(file));
    const old = previous[route];
    return {
      path: route,
      group: groupOf(file),
      image: imageOf(fs.readFileSync(file, "utf8")),
      hash,
      lastmod: old && old.hash === hash ? old.lastmod : today,
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

const next = JSON.stringify(entries, null, 2) + "\n";
const current = fs.existsSync(OUT_FILE)
  ? fs.readFileSync(OUT_FILE, "utf8")
  : "";
if (next !== current) {
  fs.writeFileSync(OUT_FILE, next);
  const changed = entries.filter(
    (e) => previous[e.path]?.lastmod !== e.lastmod,
  );
  console.log(
    `[sitemap] manifest updated, ${changed.length} page(s) stamped ${today}`,
  );
} else {
  console.log("[sitemap] manifest up to date");
}
