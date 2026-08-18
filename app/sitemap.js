import fs from "fs";
import path from "path";

const BASE_URL = "https://mergesociety.com";
const APP_DIR = path.join(process.cwd(), "app");
const SKIP_DIRS = new Set(["api", "commentSection", "section", "main"]);

function walk(dir, segments = []) {
  let entries = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  if (items.some((i) => i.isFile() && /^page\.jsx?$/.test(i.name))) {
    const routePath = segments.length ? `/${segments.join("/")}` : "";
    entries.push({ url: `${BASE_URL}${routePath}`, lastModified: new Date() });
  }

  for (const item of items) {
    if (!item.isDirectory()) continue;
    if (
      item.name.startsWith("_") ||
      item.name.startsWith(".") ||
      item.name.startsWith("[")
    )
      continue;
    if (SKIP_DIRS.has(item.name)) continue;
    entries = entries.concat(
      walk(path.join(dir, item.name), [...segments, item.name]),
    );
  }
  return entries;
}

export default function sitemap() {
  return walk(APP_DIR);
}
