#!/bin/bash

echo "Creating project structure..."

mkdir -p src/shared/ui
mkdir -p src/features/home
mkdir -p src/entities
mkdir -p src/widgets
mkdir -p src/app

echo "Creating UI components..."

cat <<EOF > src/shared/ui/Container.tsx
export default function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={\`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 \${className}\`}>
      {children}
    </div>
  )
}
EOF

cat <<EOF > src/shared/ui/Section.tsx
export default function Section({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={\`py-16 md:py-24 \${className}\`}>
      {children}
    </section>
  )
}
EOF

cat <<EOF > src/shared/ui/Button.tsx
import Link from "next/link"

export default function Button({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-all duration-300"
    >
      {children}
    </Link>
  )
}
EOF

cat <<EOF > src/shared/ui/Card.tsx
export default function Card({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      {children}
    </div>
  )
}
EOF

cat <<EOF > src/shared/ui/Heading.tsx
export default function Heading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
EOF

echo "Creating skeleton component..."

cat <<EOF > src/shared/ui/Skeleton.tsx
export default function Skeleton() {
  return (
    <div className="animate-pulse bg-neutral-200 rounded-xl h-40 w-full" />
  )
}
EOF

echo "Creating Hero section..."

cat <<EOF > src/features/home/Hero.tsx
import Image from "next/image"
import Container from "@/shared/ui/Container"
import Button from "@/shared/ui/Button"

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">

      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

      <Container>
        <div className="relative text-white max-w-2xl">

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            تجربه متفاوت رانندگی با اوپل
          </h1>

          <p className="mt-6 text-lg text-white/80">
            نمایندگی رسمی خدمات و فروش محصولات Opel
          </p>

          <div className="mt-8 flex gap-4">
            <Button href="/products">
              مشاهده محصولات
            </Button>
          </div>

        </div>
      </Container>

    </section>
  )
}
EOF

echo "Creating loading page..."

cat <<EOF > src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full" />
    </div>
  )
}
EOF

echo "Creating error page..."

cat <<EOF > src/app/error.tsx
'use client'

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen">
      خطایی رخ داده است
    </div>
  )
}
EOF

echo "Creating 404 page..."

cat <<EOF > src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        صفحه پیدا نشد
      </h1>
    </div>
  )
}
EOF

echo "Creating sitemap..."

cat <<EOF > src/app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
    },
  ]
}
EOF

echo "✅ Setup complete."

