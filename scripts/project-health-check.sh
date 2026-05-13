#!/bin/bash

echo "🔎 PROJECT HEALTH CHECK STARTED"
echo "--------------------------------"

echo ""
echo "1️⃣ Checking old alias imports..."
grep -R "@/components" src 2>/dev/null
grep -R "@/hooks" src 2>/dev/null

echo ""
echo "2️⃣ Checking broken relative imports..."
grep -R "from '../" src 2>/dev/null

echo ""
echo "3️⃣ Checking img tags (should use next/image)..."
grep -R "<img" src 2>/dev/null

echo ""
echo "4️⃣ Checking unused imports via ESLint..."
npm run lint

echo ""
echo "5️⃣ Cleaning caches..."
rm -rf .next
rm -rf node_modules/.cache
rm -f tsconfig.tsbuildinfo

echo ""
echo "6️⃣ Running TypeScript check..."
npx tsc --noEmit

echo ""
echo "7️⃣ Running production build..."
npm run build

echo ""
echo "✅ HEALTH CHECK COMPLETE"

