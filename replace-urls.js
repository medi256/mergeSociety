const fs = require("fs").promises;
const path = require("path");

// CONFIGURATION
// ============================================
const CONFIG = {
  // Directory containing your blog files (MDX, MD, JS, JSX, etc.)
  contentDir: "./app",

  // File extensions to scan
  fileExtensions: [".mdx", ".md", ".js", ".jsx", ".tsx", ".ts"],

  // URL mappings: old Cloudinary URL -> new Supabase URL (full URL allowed)

  urlMappings: {
    "https://www.mergesociety.com": "https://mergesociety.com",
  },

  createBackup: true,
};

// ============================================
// HELPERS
// ============================================

// Extracts ONLY the "/mergesociety/..." part of a Supabase URL
function shortenSupabaseUrl(url) {
  const match = url.match(/\/mergesociety\/.+$/);
  return match ? match[0] : url;
}

// Automatically shorten all new Supabase URLs in the mapping
function normalizeMappings(mappings) {
  const normalized = {};
  for (const [oldUrl, newUrl] of Object.entries(mappings)) {
    normalized[oldUrl] = shortenSupabaseUrl(newUrl);
  }
  return normalized;
}

// Escape special characters so URLs work inside RegExp
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getAllFiles(dir, extensions) {
  const files = [];

  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }

  await scan(dir);
  return files;
}

async function replaceUrlsInFile(filePath, mappings) {
  let content = await fs.readFile(filePath, "utf8");
  let replacements = 0;
  const foundUrls = [];

  for (const [oldUrl, newUrl] of Object.entries(mappings)) {
    const escapedOldUrl = escapeRegex(oldUrl);
    const count = (content.match(new RegExp(escapedOldUrl, "g")) || []).length;

    if (count > 0) {
      content = content.replaceAll(oldUrl, newUrl);
      replacements += count;
      foundUrls.push({ oldUrl, newUrl, count });
    }
  }

  if (replacements > 0) {
    await fs.writeFile(filePath, content, "utf8");
  }

  return { replacements, foundUrls };
}

async function createBackupDir() {
  const backupDir = path.join(process.cwd(), "backup_" + Date.now());
  await fs.mkdir(backupDir, { recursive: true });
  return backupDir;
}

// ============================================
// MAIN FUNCTION
// ============================================
async function main() {
  console.log("🚀 Starting URL replacement...\n");

  const startTime = Date.now();
  let backupDir;

  // Normalize mapping (convert long Supabase URLs → short paths)
  const normalizedMappings = normalizeMappings(CONFIG.urlMappings);

  console.log("🔧 Normalized URL mappings:");
  console.log(JSON.stringify(normalizedMappings, null, 2) + "\n");

  // Create backup
  if (CONFIG.createBackup) {
    backupDir = await createBackupDir();
    console.log(`📦 Backup directory created: ${backupDir}\n`);
  }

  // Get all files
  console.log(`📂 Scanning directory: ${CONFIG.contentDir}`);
  const files = await getAllFiles(CONFIG.contentDir, CONFIG.fileExtensions);
  console.log(`✓ Found ${files.length} files to process\n`);

  if (files.length === 0) {
    console.log("❌ No files found. Check your contentDir path.");
    return;
  }

  // Process files
  let totalReplacements = 0;
  const modifiedFiles = [];

  for (const file of files) {
    // Backup file
    if (CONFIG.createBackup) {
      const relativePath = path.relative(CONFIG.contentDir, file);
      const backupPath = path.join(backupDir, relativePath);
      await fs.mkdir(path.dirname(backupPath), { recursive: true });
      await fs.copyFile(file, backupPath);
    }

    // Replace URLs using normalized mappings
    const result = await replaceUrlsInFile(file, normalizedMappings);

    if (result.replacements > 0) {
      totalReplacements += result.replacements;
      modifiedFiles.push({ file, ...result });

      console.log(`✓ ${path.basename(file)}`);
      result.foundUrls.forEach(({ oldUrl, newUrl, count }) => {
        console.log(`  ${count}x replaced`);
        console.log(`  Old: ${oldUrl.substring(0, 60)}...`);
        console.log(`  New: ${newUrl.substring(0, 60)}...`);
      });
      console.log("");
    }
  }

  // Summary
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log("\n" + "=".repeat(60));
  console.log("📊 SUMMARY");
  console.log("=".repeat(60));
  console.log(`Total files scanned: ${files.length}`);
  console.log(`Files modified: ${modifiedFiles.length}`);
  console.log(`Total replacements: ${totalReplacements}`);
  console.log(`Time taken: ${duration}s`);

  if (CONFIG.createBackup) {
    console.log(`\n💾 Backup saved to: ${backupDir}`);
  }

  console.log("\n✅ Done!");
}

// Run the script
main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
