const fs = require("fs").promises;
const path = require("path");

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  // Directory containing your files
  contentDir: "./app",

  // File extensions to scan
  fileExtensions: [".mdx", ".md", ".js", ".jsx", ".tsx", ".ts"],

  // Text replacements
  replacements: {
    "Merge Society is an  online platform focusing on AI, tech, interviews, and startup stories. We provide insights into the latest trends in technology, interviews with industry leaders, and inspiring startup stories.":
      "Merge Society | Reporting on the business of technology, startups, venture capital funding, AI, programming languages and Silicon Valley",
  },

  // Create a backup before changing files
  createBackup: true,
};

// ============================================
// HELPERS
// ============================================

// Escape special characters so text works safely inside RegExp
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Recursively find all files with the specified extensions
async function getAllFiles(dir, extensions) {
  const files = [];

  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir, {
      withFileTypes: true,
    });

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

// Replace text inside a single file
async function replaceTextInFile(filePath, replacements) {
  let content = await fs.readFile(filePath, "utf8");

  let replacementCount = 0;
  const foundReplacements = [];

  for (const [oldText, newText] of Object.entries(replacements)) {
    const escapedOldText = escapeRegex(oldText);

    const matches = content.match(new RegExp(escapedOldText, "g")) || [];

    const count = matches.length;

    if (count > 0) {
      content = content.replaceAll(oldText, newText);

      replacementCount += count;

      foundReplacements.push({
        oldText,
        newText,
        count,
      });
    }
  }

  // Only write the file if something actually changed
  if (replacementCount > 0) {
    await fs.writeFile(filePath, content, "utf8");
  }

  return {
    replacements: replacementCount,
    foundReplacements,
  };
}

// Create backup directory
async function createBackupDir() {
  const backupDir = path.join(process.cwd(), "backup_" + Date.now());

  await fs.mkdir(backupDir, {
    recursive: true,
  });

  return backupDir;
}

// ============================================
// MAIN FUNCTION
// ============================================

async function main() {
  console.log("🚀 Starting text replacement...\n");

  const startTime = Date.now();

  let backupDir;

  // ============================================
  // CREATE BACKUP
  // ============================================

  if (CONFIG.createBackup) {
    backupDir = await createBackupDir();

    console.log(`📦 Backup directory created: ${backupDir}\n`);
  }

  // ============================================
  // SHOW REPLACEMENTS
  // ============================================

  console.log("🔧 Replacements:");

  for (const [oldText, newText] of Object.entries(CONFIG.replacements)) {
    console.log(`\nOLD: ${oldText}`);
    console.log(`NEW: ${newText}`);
  }

  console.log("\n");

  // ============================================
  // FIND FILES
  // ============================================

  console.log(`📂 Scanning directory: ${CONFIG.contentDir}`);

  const files = await getAllFiles(CONFIG.contentDir, CONFIG.fileExtensions);

  console.log(`✓ Found ${files.length} files to process\n`);

  // ============================================
  // NO FILES FOUND
  // ============================================

  if (files.length === 0) {
    console.log("❌ No files found. Check your contentDir path.");

    return;
  }

  // ============================================
  // PROCESS FILES
  // ============================================

  let totalReplacements = 0;

  const modifiedFiles = [];

  for (const file of files) {
    // --------------------------------------------
    // CREATE BACKUP
    // --------------------------------------------

    if (CONFIG.createBackup) {
      const relativePath = path.relative(CONFIG.contentDir, file);

      const backupPath = path.join(backupDir, relativePath);

      // Make sure the backup directory exists
      await fs.mkdir(path.dirname(backupPath), {
        recursive: true,
      });

      await fs.copyFile(file, backupPath);
    }

    // --------------------------------------------
    // REPLACE TEXT
    // --------------------------------------------

    const result = await replaceTextInFile(file, CONFIG.replacements);

    // --------------------------------------------
    // LOG MODIFIED FILE
    // --------------------------------------------

    if (result.replacements > 0) {
      totalReplacements += result.replacements;

      modifiedFiles.push({
        file,
        ...result,
      });

      console.log(`✓ Modified: ${path.relative(process.cwd(), file)}`);

      result.foundReplacements.forEach(({ oldText, newText, count }) => {
        console.log(`  ${count}x replaced`);

        console.log(`  OLD: ${oldText}`);

        console.log(`  NEW: ${newText}`);
      });

      console.log("");
    }
  }

  // ============================================
  // SUMMARY
  // ============================================

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log("\n" + "=".repeat(60));

  console.log("📊 SUMMARY");

  console.log("=".repeat(60));

  console.log(`Total files scanned: ${files.length}`);

  console.log(`Files modified: ${modifiedFiles.length}`);

  console.log(`Total replacements: ${totalReplacements}`);

  console.log(`Time taken: ${duration}s`);

  // ============================================
  // BACKUP LOCATION
  // ============================================

  if (CONFIG.createBackup) {
    console.log(`\n💾 Backup saved to: ${backupDir}`);
  }

  // ============================================
  // FINISHED
  // ============================================

  if (totalReplacements === 0) {
    console.log("\n⚠️ No matching text was found.");
  } else {
    console.log("\n✅ All replacements completed successfully!");
  }
}

// ============================================
// RUN SCRIPT
// ============================================

main().catch((err) => {
  console.error("\n❌ Error:", err.message);

  process.exit(1);
});
