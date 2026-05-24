const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const HERO_PATH = path.join(ROOT, "public", "hero");

function printTree(dir, prefix = "") {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    const fullPath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const connector = isLast ? "└── " : "├── ";

    console.log(prefix + connector + file);

    if (fs.statSync(fullPath).isDirectory()) {
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      printTree(fullPath, newPrefix);
    }
  });
}

function checkImportantFiles() {
  console.log("\n🔍 Checking important files...\n");

  const importantFiles = [
    "next.config.js",
    "next.config.ts",
    "src/features/home/sections/Hero.tsx",
    "src/features/home/components/HeroSlider.tsx",
    "public/hero"
  ];

  importantFiles.forEach((file) => {
    const fullPath = path.join(ROOT, file);

    if (fs.existsSync(fullPath)) {
      console.log("✅", file);
    } else {
      console.log("❌ Missing:", file);
    }
  });
}

function checkHeroFiles() {
  console.log("\n🎞 Checking hero media...\n");

  if (!fs.existsSync(HERO_PATH)) {
    console.log("❌ Folder public/hero not found");
    return;
  }

  const files = fs.readdirSync(HERO_PATH);

  if (!files.length) {
    console.log("⚠️ public/hero is empty");
    return;
  }

  console.log("✅ Hero media files:");
  files.forEach((file) => {
    console.log("   •", file);
  });
}

console.log("\n📁 PROJECT TREE (important folders)\n");

["public", "src", "scripts"].forEach((folder) => {
  const full = path.join(ROOT, folder);

  if (fs.existsSync(full)) {
    console.log("\n" + folder);
    printTree(full);
  }
});

checkImportantFiles();
checkHeroFiles();

console.log("\n✅ Scan complete\n");
