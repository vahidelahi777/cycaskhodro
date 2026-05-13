#!/bin/bash

echo "🔍 Next.js Project Audit Starting..."
echo ""

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

ERRORS=0

echo "📦 Checking tsconfig aliases..."

if grep -q '"@/\*"' tsconfig.json; then
  echo -e "${GREEN}✅ Alias @/* exists${NC}"
else
  echo -e "${RED}❌ Alias @/* missing${NC}"
  ERRORS=$((ERRORS+1))
fi

echo ""
echo "📁 Checking missing imports..."

FILES=$(find src -type f \( -name "*.ts" -o -name "*.tsx" \))

for file in $FILES
do
  IMPORTS=$(grep -oE "from ['\"]@/[^'\"]+" "$file" | sed "s/from ['\"]//")

  for imp in $IMPORTS
  do
    REL=$(echo "$imp" | sed 's|@/|src/|')

    if [ ! -f "${REL}.tsx" ] && \
       [ ! -f "${REL}.ts" ] && \
       [ ! -f "${REL}/index.tsx" ] && \
       [ ! -f "${REL}/index.ts" ]; then

      echo -e "${RED}❌ Missing:${NC} $imp"
      echo "   in $file"
      ERRORS=$((ERRORS+1))
    fi
  done
done

echo ""
echo "🧠 Checking default exports..."

for file in $(find src -name "*.tsx")
do
  grep -E "^import [A-Z][A-Za-z0-9_]+ from" "$file" | while read line
  do
    IMPORT_PATH=$(echo "$line" | sed -E "s/.*from ['\"](@\/[^'\"]+)['\"].*/\1/")
    IMPORT_NAME=$(echo "$line" | sed -E "s/import ([A-Za-z0-9_]+).*/\1/")

    TARGET=$(echo "$IMPORT_PATH" | sed 's|@/|src/|')

    TARGET_FILE=""

    if [ -f "${TARGET}.tsx" ]; then
      TARGET_FILE="${TARGET}.tsx"
    elif [ -f "${TARGET}.ts" ]; then
      TARGET_FILE="${TARGET}.ts"
    fi

    if [ ! -z "$TARGET_FILE" ]; then
      if ! grep -q "export default" "$TARGET_FILE"; then
        echo -e "${YELLOW}⚠️ No default export:${NC}"
        echo "   import $IMPORT_NAME from $IMPORT_PATH"
        echo "   target $TARGET_FILE"
      fi
    fi
  done
done

echo ""
echo "🏗 Checking Next.js pages..."

find src/app -name "page.tsx" | while read page
do
  echo -e "${GREEN}✅ Route:${NC} $page"
done

echo ""
echo "🧹 Checking archived TSX files..."

ARCHIVE=$(find . -type d | grep archive)

for dir in $ARCHIVE
do
  COUNT=$(find "$dir" -name "*.tsx" | wc -l)

  if [ "$COUNT" -gt 0 ]; then
    echo -e "${YELLOW}⚠️ Archive contains TSX files:${NC} $dir ($COUNT files)"
  fi
done

echo ""
echo "📦 Running TypeScript check..."

npx tsc --noEmit

if [ $? -ne 0 ]; then
  echo -e "${RED}❌ TypeScript errors found${NC}"
  ERRORS=$((ERRORS+1))
else
  echo -e "${GREEN}✅ TypeScript passed${NC}"
fi

echo ""
echo "🏁 Audit Finished"

if [ "$ERRORS" -eq 0 ]; then
  echo -e "${GREEN}✅ No critical issues found${NC}"
else
  echo -e "${RED}❌ Found $ERRORS issues${NC}"
fi

