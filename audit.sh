#!/bin/bash

echo "========================================="
echo " NEXT.JS PROJECT FULL AUDIT "
echo "========================================="

echo ""
echo "1️⃣ NODE / NPM"
echo "-----------------------------------------"
node -v || echo "node not installed"
npm -v || echo "npm not installed"

echo ""
echo "2️⃣ PACKAGE.JSON"
echo "-----------------------------------------"
cat package.json

echo ""
echo "3️⃣ NEXT VERSION"
echo "-----------------------------------------"
grep '"next"' package.json || echo "Next not found"

echo ""
echo "4️⃣ TYPESCRIPT"
echo "-----------------------------------------"
if [ -f tsconfig.json ]; then
  echo "tsconfig.json exists"
else
  echo "❌ tsconfig.json missing"
fi

echo ""
echo "5️⃣ PROJECT STRUCTURE"
echo "-----------------------------------------"
tree -L 4 src || ls -R src

echo ""
echo "6️⃣ APP ROUTER STRUCTURE"
echo "-----------------------------------------"
tree src/app || echo "❌ src/app missing"

echo ""
echo "7️⃣ CHECK ROOT LAYOUT"
echo "-----------------------------------------"
if [ -f src/app/layout.tsx ]; then
  echo "✅ root layout exists"
  grep "export default" src/app/layout.tsx || echo "❌ root layout missing default export"
else
  echo "❌ src/app/layout.tsx missing"
fi

echo ""
echo "8️⃣ CHECK LOCALE LAYOUT"
echo "-----------------------------------------"
if [ -f src/app/\[locale\]/layout.tsx ]; then
  echo "✅ locale layout exists"
  grep "export default" src/app/\[locale\]/layout.tsx || echo "❌ locale layout missing default export"
else
  echo "❌ src/app/[locale]/layout.tsx missing"
fi

echo ""
echo "9️⃣ CHECK PAGES"
echo "-----------------------------------------"
find src/app -name "page.tsx"

echo ""
echo "🔟 CHECK DYNAMIC ROUTES"
echo "-----------------------------------------"
find src/app -type d -name "\[*\]"

echo ""
echo "1️⃣1️⃣ CHECK NEXT-INTL"
echo "-----------------------------------------"

if [ -d src/i18n ]; then
  echo "✅ src/i18n exists"
  ls src/i18n
else
  echo "❌ src/i18n missing"
fi

echo ""
echo "1️⃣2️⃣ CHECK MIDDLEWARE"
echo "-----------------------------------------"

if [ -f middleware.ts ]; then
  echo "✅ middleware.ts exists"
else
  echo "❌ middleware.ts missing"
fi

echo ""
echo "1️⃣3️⃣ CHECK MESSAGES"
echo "-----------------------------------------"

if [ -d messages ]; then
  echo "✅ messages folder exists"
  ls messages
else
  echo "❌ messages folder missing"
fi

echo ""
echo "1️⃣4️⃣ CHECK NEXT CONFIG"
echo "-----------------------------------------"

if [ -f next.config.js ]; then
  echo "✅ next.config.js exists"
elif [ -f next.config.mjs ]; then
  echo "✅ next.config.mjs exists"
else
  echo "❌ next.config missing"
fi

echo ""
echo "1️⃣5️⃣ CHECK FOR DUPLICATE LOCALES"
echo "-----------------------------------------"

if [ -d src/app/fa ]; then
  echo "⚠️ duplicate route: src/app/fa"
fi

if [ -d src/app/en ]; then
  echo "⚠️ duplicate route: src/app/en"
fi

echo ""
echo "1️⃣6️⃣ TYPESCRIPT CHECK"
echo "-----------------------------------------"

npx tsc --noEmit || echo "❌ TypeScript errors detected"

echo ""
echo "1️⃣7️⃣ NEXT BUILD TEST"
echo "-----------------------------------------"

npx next build || echo "❌ Next build failed"

echo ""
echo "========================================="
echo " AUDIT FINISHED "
echo "========================================="

