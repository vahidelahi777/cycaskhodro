#!/bin/bash

OUTPUT="repo-analysis.txt"

echo "🔍 Analyzing repository..." > $OUTPUT

echo "---- Folder Structure ----" >> $OUTPUT
tree -L 4 >> $OUTPUT 2>/dev/null

echo -e "\n---- package.json (root) ----" >> $OUTPUT
if [ -f "package.json" ]; then
  cat package.json >> $OUTPUT
else
  echo "No root package.json found" >> $OUTPUT
fi

echo -e "\n---- Detecting project type ----" >> $OUTPUT
if grep -qi "next" package.json 2>/dev/null; then
  echo "Detected: Next.js frontend" >> $OUTPUT
fi

if grep -qi "react" package.json 2>/dev/null; then
  echo "Detected: React project" >> $OUTPUT
fi

if grep -qi "nestjs" **/package.json 2>/dev/null; then
  echo "Detected: Nest.js backend" >> $OUTPUT
fi

echo -e "\n---- Git status ----" >> $OUTPUT
git status >> $OUTPUT 2>/dev/null

echo -e "\n---- File size summary ----" >> $OUTPUT
du -h --max-depth=2 >> $OUTPUT

echo -e "\n\nAnalysis complete. Open file: $OUTPUT"

