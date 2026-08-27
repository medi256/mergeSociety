import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const BASE_URL = "https://mergesociety.com";
const APP_DIR = path.join(process.cwd(), "app");
const SKIP_DIRS = new Set([
  "api",
  "commentSection",
  "section",
  "main",
  "llms.txt",
]);

const SITE_NAME = "Merge Society";
const SITE_DESCRIPTION =
  "Merge Society | Reporting on the business of technology, startups, venture capital funding, AI, programming languages and Silicon Valley";

function extractMetadata(fileContent) {
  const titleMatch = fileContent.match(/title:\s*"([^"]+)"/);
  const descMatch = fileContent.match(/description:\s*"([^"]+)"/);
  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : "",
  };
}

function walk(dir, segments = []) {
  let entries = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  const pageFile = items.find((i) => i.isFile() && /^page\.jsx?$/.test(i.name));
  if (pageFile) {
    const fullPath = path.join(dir, pageFile.name);
    const content = fs.readFileSync(fullPath, "utf8");
    const { title, description } = extractMetadata(content);

    const routePath = segments.length ? `/${segments.join("/")}` : "";
    entries.push({
      url: `${BASE_URL}${routePath}`,
      title:
        title || (routePath === "" ? "Home" : segments[segments.length - 1]),
      description,
      isHome: segments.length === 0,
    });
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

export const revalidate = 3600;

export async function GET() {
  const pages = walk(APP_DIR).filter((p) => !p.isHome && p.title);

  let body = `# ${SITE_NAME}\n\n> ${SITE_DESCRIPTION}\n\n## Articles\n\n`;
  for (const p of pages) {
    body += `- [${p.title}](${p.url}): ${p.description}\n`;
  }

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
