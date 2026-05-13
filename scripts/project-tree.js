const fs = require("fs");
const path = require("path");

const ignore = [
  "node_modules",
  ".git",
  ".next",
  "dist",
  "build",
  ".turbo",
  ".cache"
];

function tree(dir, prefix = "") {
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    if (ignore.includes(file)) return;

    const full = path.join(dir, file);
    const isLast = index === files.length - 1;
    const pointer = isLast ? "└── " : "├── ";

    console.log(prefix + pointer + file);

    if (fs.statSync(full).isDirectory()) {
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      tree(full, newPrefix);
    }
  });
}

console.log("PROJECT STRUCTURE\n");
tree(path.resolve("."));

