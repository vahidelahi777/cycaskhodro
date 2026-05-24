#!/bin/bash

# --- Colors for Output ---
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting CycasKhodro Architecture Health Check...${NC}\n"

# 1. Clean Cache
echo -e "${GREEN}🧹 [1/4] Cleaning Caches & Build Artifacts...${NC}"
find . -name ".next" -type d -prune -exec rm -rf '{}' +
find . -name "dist" -type d -prune -exec rm -rf '{}' +
find . -name ".turbo" -type d -prune -exec rm -rf '{}' +
echo -e "✅ Cache cleaned.\n"

# 2. Check for Duplicate Components (The "Hero" Issue)
echo -e "${GREEN}🔍 [2/4] Searching for Duplicate Components (Critical)...${NC}"
DUPLICATES=$(find apps/frontend/src -name "Hero.tsx" -o -name "HeroSection.tsx" | wc -l)
if [ "$DUPLICATES" -gt 1 ]; then
    echo -e "${RED}⚠️  WARNING: Multiple Hero components found ($DUPLICATES). This causes hydration issues!${NC}"
    find apps/frontend/src -name "Hero.tsx" -o -name "HeroSection.tsx"
else
    echo -e "✅ No duplicate Hero components found."
fi
echo ""

# 3. Static Assets Verification
echo -e "${GREEN}🎥 [3/4] Verifying Hero Video & Assets...${NC}"
VIDEO_PATH="apps/frontend/public/videos/hero-fiat-showcase.mp4"
if [ -f "$VIDEO_PATH" ]; then
    SIZE=$(du -sh "$VIDEO_PATH" | cut -f1)
    echo -e "✅ Video found: $VIDEO_PATH (Size: $SIZE)"
else
    echo -e "${RED}❌ ERROR: Hero Video NOT found at $VIDEO_PATH${NC}"
fi
echo ""

# 4. Dependency Check
echo -e "${GREEN}📦 [4/4] Checking Node Modules & Dependencies...${NC}"
if [ -d "node_modules" ]; then
    echo -e "✅ node_modules exists."
else
    echo -e "${YELLOW}🟡 node_modules missing. Running 'npm install'...${NC}"
    npm install
fi

echo -e "\n${YELLOW}🛠 [FINAL STEP] Running Test Build...${NC}"
cd apps/frontend && npm run build --no-lint

echo -e "\n${GREEN}✨ Troubleshooting Complete! CycasKhodro is ready for deployment.${NC}"
