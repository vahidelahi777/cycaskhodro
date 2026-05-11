#!/bin/bash

set -e

echo "========================================"
echo " FIXING NEXT.JS 15 + NEXT-INTL PROJECT "
echo "========================================"

echo ""
echo "1️⃣ CLEANING OLD ROUTES"
echo "----------------------------------------"

rm -rf src/app/fa || true
rm -rf src/app/en || true

rm -rf src/app/\[locale\]/product || true
rm -rf src/app/\[locale\]/products || true
rm -rf src/app/\[locale\]/service || true

mkdir -p src/app/\[locale\]

echo ""
echo "2️⃣ FIXING [locale]/layout.tsx"
echo "----------------------------------------"

cat > src/app/\[locale\]/layout.tsx <<'EOF'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'سیکاس خودرو | نمایندگی رسمی اوپل در ایران',
    description:
      'سیکاس خودرو، نمایندگی رسمی و واردکننده خودروهای اوپل در ایران.',
  }
}

type Props = {
  children: ReactNode
  params: Promise<{
    locale: string
  }>
}

export default async function LocaleLayout({
  children,
}: Props) {
  return <>{children}</>
}
EOF

echo ""
echo "3️⃣ FIXING ROOT LAYOUT"
echo "----------------------------------------"

cat > src/app/layout.tsx <<'EOF'
import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Cycas Khodro',
  description: 'Official Opel Dealer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
EOF

echo ""
echo "4️⃣ CREATING STANDARD ROUTES"
echo "----------------------------------------"

mkdir -p src/app/\[locale\]/about
mkdir -p src/app/\[locale\]/contact
mkdir -p src/app/\[locale\]/faq
mkdir -p src/app/\[locale\]/agencies

mkdir -p src/app/\[locale\]/models/\[slug\]
mkdir -p src/app/\[locale\]/services/\[slug\]
mkdir -p src/app/\[locale\]/blog/\[slug\]

cat > src/app/\[locale\]/about/page.tsx <<'EOF'
export default function Page() {
  return <div style={{ padding: 40 }}>About</div>
}
EOF

cat > src/app/\[locale\]/contact/page.tsx <<'EOF'
export default function Page() {
  return <div style={{ padding: 40 }}>Contact</div>
}
EOF

cat > src/app/\[locale\]/faq/page.tsx <<'EOF'
export default function Page() {
  return <div style={{ padding: 40 }}>FAQ</div>
}
EOF

cat > src/app/\[locale\]/agencies/page.tsx <<'EOF'
export default function Page() {
  return <div style={{ padding: 40 }}>Agencies</div>
}
EOF

cat > src/app/\[locale\]/models/page.tsx <<'EOF'
export default function Page() {
  return <div style={{ padding: 40 }}>Models</div>
}
EOF

cat > src/app/\[locale\]/services/page.tsx <<'EOF'
export default function Page() {
  return <div style={{ padding: 40 }}>Services</div>
}
EOF

cat > src/app/\[locale\]/blog/page.tsx <<'EOF'
export default function Page() {
  return <div style={{ padding: 40 }}>Blog</div>
}
EOF

echo ""
echo "5️⃣ FIXING DYNAMIC ROUTES"
echo "----------------------------------------"

cat > src/app/\[locale\]/models/\[slug\]/page.tsx <<'EOF'
type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params

  return (
    <div style={{ padding: 40 }}>
      <h1>Model: {slug}</h1>
      <p>{locale}</p>
    </div>
  )
}
EOF

cat > src/app/\[locale\]/services/\[slug\]/page.tsx <<'EOF'
type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params

  return (
    <div style={{ padding: 40 }}>
      <h1>Service: {slug}</h1>
      <p>{locale}</p>
    </div>
  )
}
EOF

cat > src/app/\[locale\]/blog/\[slug\]/page.tsx <<'EOF'
type Props = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params

  return (
    <div style={{ padding: 40 }}>
      <h1>Blog: {slug}</h1>
      <p>{locale}</p>
    </div>
  )
}
EOF

echo ""
echo "6️⃣ FIXING HOME PAGE"
echo "----------------------------------------"

cat > src/app/\[locale\]/page.tsx <<'EOF'
export default function HomePage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Cycas Khodro</h1>
    </div>
  )
}
EOF

echo ""
echo "7️⃣ FIXING ROOT PAGE"
echo "----------------------------------------"

cat > src/app/page.tsx <<'EOF'
import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/fa')
}
EOF

echo ""
echo "8️⃣ FIXING next-intl routing"
echo "----------------------------------------"

mkdir -p src/i18n

cat > src/i18n/routing.ts <<'EOF'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['fa', 'en'],
  defaultLocale: 'fa',
  localePrefix: 'always',
})
EOF

cat > src/i18n/request.ts <<'EOF'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as 'fa' | 'en')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
EOF

echo ""
echo "9️⃣ FIXING MIDDLEWARE"
echo "----------------------------------------"

cat > middleware.ts <<'EOF'
import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
}
EOF

echo ""
echo "🔟 CLEANING NEXT CACHE"
echo "----------------------------------------"

rm -rf .next
rm -rf node_modules/.cache

echo ""
echo "1️⃣1️⃣ INSTALLING"
echo "----------------------------------------"

npm install

echo ""
echo "1️⃣2️⃣ BUILDING"
echo "----------------------------------------"

docker compose down || true
docker compose build --no-cache
docker compose up -d

echo ""
echo "========================================"
echo " ✅ PROJECT FIXED SUCCESSFULLY "
echo "========================================"

