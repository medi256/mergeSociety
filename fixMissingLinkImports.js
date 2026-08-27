const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "app");

function walk(dir) {
  const results = [];

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name.startsWith(".") || item.name.startsWith("_")) continue;

    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (/^page\.jsx?$/.test(item.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

function hasLinkUsage(content) {
  return /<Link(?:\s|>)/.test(content);
}

function hasNextLinkImport(content) {
  return /import\s+Link\s+from\s+["']next\/link["']/.test(content);
}

function addLinkImport(content) {
  if (hasNextLinkImport(content)) {
    return content;
  }

  // Handle "use client" correctly.
  const useClientMatch = content.match(/^(\s*["']use client["'];?\s*)/);

  if (useClientMatch) {
    return (
      useClientMatch[1] +
      '\nimport Link from "next/link";\n' +
      content.slice(useClientMatch[0].length)
    );
  }

  return `import Link from "next/link";\n${content}`;
}

const files = walk(APP_DIR);

let fixed = 0;
let skipped = 0;

for (const filePath of files) {
  const content = fs.readFileSync(filePath, "utf8");

  if (!hasLinkUsage(content)) {
    continue;
  }

  if (hasNextLinkImport(content)) {
    continue;
  }

  const updated = addLinkImport(content);

  fs.writeFileSync(filePath, updated, "utf8");

  console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
  fixed++;
}

console.log("\n--------------------------------");
console.log(`Fixed ${fixed} files.`);
console.log(`Skipped ${skipped} files.`);
console.log("--------------------------------");
