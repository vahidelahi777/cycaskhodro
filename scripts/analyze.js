import fs from 'fs';
import path from 'path';

function readJSON(filepath) {
  try {
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  } catch {
    return null;
  }
}

function scanDir(dir, level = 0, maxDepth = 4) {
  if (level > maxDepth) return [];

  return fs.readdirSync(dir).map(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    return stat.isDirectory()
      ? {
          type: "dir",
          name: item,
          children: scanDir(fullPath, level + 1, maxDepth)
        }
      : {
          type: "file",
          name: item
        };
  });
}

const result = {
  projectType: {},
  rootPackage: readJSON("package.json"),
  structure: scanDir("."),
  detected: []
};

// Detect Next.js
if (result.rootPackage && result.rootPackage.dependencies) {
  const deps = result.rootPackage.dependencies;
  if (deps.next) result.detected.push("Next.js");
  if (deps.react) result.detected.push("React");
  if (deps["@nestjs/core"]) result.detected.push("Nest.js");
  if (deps.express) result.detected.push("Express");
}

fs.writeFileSync("repo-analysis.json", JSON.stringify(result, null, 2));

console.log("Analysis saved to repo-analysis.json");

