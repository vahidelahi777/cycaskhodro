#!/bin/bash

echo "🚀 Starting Hard Cleanup..."

# -----------------------------
# CLEAN CACHE
# -----------------------------

echo "🧹 Removing caches..."

rm -rf .next
rm -rf node_modules/.cache
rm -rf tsconfig.tsbuildinfo

# -----------------------------
# CREATE ENTERPRISE STRUCTURE
# -----------------------------

echo "🏗 Creating architecture..."

mkdir -p src/features
mkdir -p src/entities
mkdir -p src/shared/ui
mkdir -p src/shared/layout
mkdir -p src/shared/hooks
mkdir -p src/shared/lib
mkdir -p src/shared/types
mkdir -p src/shared/config
mkdir -p src/services/api
mkdir -p src/services/http
mkdir -p src/services/cms

# -----------------------------
# HOME FEATURE
# -----------------------------

mkdir -p src/features/home/components
mkdir -p src/features/home/sections
mkdir -p src/features/home/hooks
mkdir -p src/features/home/lib
mkdir -p src/features/home/types

# -----------------------------
# MODELS FEATURE
# -----------------------------

mkdir -p src/features/models/components
mkdir -p src/features/models/sections
mkdir -p src/features/models/hooks
mkdir -p src/features/models/lib
mkdir -p src/features/models/types

# -----------------------------
# BLOG FEATURE
# -----------------------------

mkdir -p src/features/blog/components
mkdir -p src/features/blog/sections
mkdir -p src/features/blog/hooks
mkdir -p src/features/blog/lib
mkdir -p src/features/blog/types

# -----------------------------
# ARCHIVE LEGACY
# -----------------------------

echo "📦 Creating archive..."

mkdir -p _legacy_backup

# -----------------------------
# MOVE OLD COMPONENTS
# -----------------------------

if [ -d "src/components" ]; then
  mv src/components _legacy_backup/components_old
fi

if [ -d "src/lib" ]; then
  mv src/lib _legacy_backup/lib_old
fi

if [ -d "src/utils" ]; then
  mv src/utils _legacy_backup/utils_old
fi

# -----------------------------
# CREATE BARREL EXPORTS
# -----------------------------

echo "📦 Creating barrel exports..."

touch src/shared/ui/index.ts
touch src/shared/layout/index.ts
touch src/features/home/index.ts
touch src/features/models/index.ts
touch src/features/blog/index.ts

# -----------------------------
# CHECK APP ROUTES
# -----------------------------

echo "🧠 Checking routes..."

find src/app -name "page.tsx"

# -----------------------------
# TYPESCRIPT CHECK
# -----------------------------

echo "🔍 Running TypeScript..."

npx tsc --noEmit

# -----------------------------
# NEXT BUILD
# -----------------------------

echo "🏗 Running Next build..."

npm run build

echo "✅ Hard Cleanup Finished"
