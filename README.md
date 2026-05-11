# 🚗 Cycas Khodro — Official Opel Dealer Iran
### نمایندگی رسمی اوپل در ایران

> A **premium automotive website** built with Next.js 14, inspired by Opel.de and Mercedes-Benz.com, tailored for the Iranian market with full **RTL (Persian)** support.

---

## 🏗 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router, Server Components) |
| **Language** | TypeScript 5 (strict) |
| **Styling** | Tailwind CSS 3 + custom Opel design tokens |
| **UI Components** | Radix UI (Shadcn/UI compatible) |
| **Animations** | Framer Motion 11 |
| **i18n / RTL** | next-intl (Persian FA + English EN) |
| **State** | Zustand 5 |
| **Forms** | React Hook Form + Zod validation |
| **Maps** | Mapbox GL (agency locator) |
| **Email** | Resend API |
| **Caching** | Redis |
| **Reverse Proxy** | Nginx (with SSL + rate limiting) |
| **Containerization** | Docker + Docker Compose |
| **Images** | Next.js Image (WebP/AVIF) + Sharp |
| **Analytics** | Vercel Analytics |

---

## 📁 Project Structure

```
cycaskhodro/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── [locale]/               # i18n locale routing (fa/en)
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── layout.tsx          # Locale layout (Header + Footer)
│   │   │   ├── models/             # Car models pages
│   │   │   │   ├── page.tsx        # Models listing
│   │   │   │   └── [slug]/         # Individual model page
│   │   │   ├── services/           # After-sales services
│   │   │   ├── agencies/           # Dealer locator
│   │   │   ├── about/              # About us
│   │   │   ├── contact/            # Contact + form
│   │   │   └── blog/               # News + blog
│   │   ├── api/
│   │   │   ├── contact/route.ts    # Contact form endpoint
│   │   │   └── health/route.ts     # Docker health check
│   │   ├── layout.tsx              # Root layout (fonts, providers)
│   │   └── page.tsx                # Root redirect → /fa
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky nav, mobile menu, RTL support
│   │   │   └── Footer.tsx          # Links, newsletter, socials
│   │   └── sections/
│   │       ├── HeroSection.tsx     # Parallax hero with video support
│   │       ├── ModelsSection.tsx   # Vehicle grid with filter tabs
│   │       ├── ServicesSection.tsx # Services grid (hover: yellow)
│   │       ├── WhyUsSection.tsx    # Stats + features (CountUp animation)
│   │       ├── AgencyMapSection.tsx# Map + agency cards
│   │       ├── NewsSection.tsx     # Blog/news cards
│   │       └── ContactSection.tsx  # Form + info (react-hook-form + zod)
│   │
│   ├── i18n/
│   │   ├── routing.ts              # defineRouting (fa/en locales)
│   │   └── request.ts              # getRequestConfig (next-intl)
│   │
│   ├── lib/
│   │   ├── utils.ts                # cn(), formatCurrency(), formatPersianDate()
│   │   └── data.ts                 # Mock vehicle + stats data
│   │
│   ├── store/
│   │   ├── ui.store.ts             # Mobile menu, modals (Zustand)
│   │   └── configurator.store.ts   # Car configurator state (Zustand)
│   │
│   ├── styles/
│   │   └── globals.css             # Tailwind base + custom utilities
│   │
│   └── types/
│       └── index.ts                # Vehicle, Service, Agency, Form types
│
├── messages/
│   ├── fa.json                     # Persian translations (RTL)
│   └── en.json                     # English translations
│
├── public/
│   ├── images/                     # Vehicle + content images
│   │   ├── vehicles/
│   │   └── news/
│   ├── fonts/                      # Self-hosted fonts
│   ├── icons/                      # PWA icons
│   └── site.webmanifest            # PWA manifest
│
├── nginx/
│   └── nginx.conf                  # Production nginx (SSL + rate limit)
│
├── Dockerfile                      # Multi-stage build (deps → builder → runner)
├── docker-compose.yml              # Production (app + redis + nginx)
├── docker-compose.dev.yml          # Development (hot-reload)
├── next.config.mjs                 # Next.js config (i18n, images, headers)
├── tailwind.config.ts              # Opel design system tokens
├── tsconfig.json                   # TypeScript strict config
└── .env.example                    # Environment variable template
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- npm 10+

### 1. Clone & Configure

```bash
git clone https://github.com/your-org/cycaskhodro.git
cd cycaskhodro
cp .env.example .env.local
# Edit .env.local with your actual values
```

### 2. Development (Local)

```bash
npm install
npm run dev
# App runs at http://localhost:3000
# Redirects to http://localhost:3000/fa (Persian)
```

### 3. Development (Docker)

```bash
docker compose -f docker-compose.dev.yml up --build
# Hot-reload enabled via volume mounts
```

### 4. Production (Docker)

```bash
# Build and start all services
docker compose up --build -d

# View logs
docker compose logs -f app

# Stop
docker compose down
```

---

## 🌍 i18n / RTL

- `/fa/*` → Persian (فارسی) with full RTL layout
- `/en/*` → English with LTR layout
- Automatic redirect: `/` → `/fa`
- Font: **Peyda** for Persian, **Geist Sans** for English

---

## 🎨 Design System (Opel Brand)

```
Brand Colors:
  opel-yellow:   #FFD100  ← Primary accent (buttons, hovers, borders)
  opel-black:    #0A0A0A  ← Primary background
  opel-gray-900: #1A1A1A  ← Card backgrounds
  opel-gray-100: #F5F5F5  ← Section backgrounds
  opel-white:    #FFFFFF  ← Content areas

Typography:
  - Bold, uppercase, tracking-widest for headings
  - Clean, minimal for body text
  - Persian-optimized line-height for RTL

Corners: Sharp (rounded-none) — Opel brand guideline
```

---

## 🔐 Security Features

- ✅ Security headers via `next.config.mjs` + Nginx
- ✅ HTTPS enforcement (HSTS)
- ✅ Rate limiting (10 req/s API, 30 req/s general)
- ✅ Non-root Docker user (`nextjs:nodejs`)
- ✅ Zod input validation on all API routes
- ✅ `X-Frame-Options: DENY`
- ✅ `Content-Security-Policy` headers
- ✅ Redis for session-based rate limiting (extendable)

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| First Contentful Paint | < 1.2s |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Image format | WebP / AVIF |
| Bundle splitting | Per route (App Router) |

---

## 📋 Todo / Roadmap

- [ ] Connect to WordPress Headless CMS (WP GraphQL)
- [ ] Implement Mapbox agency locator
- [ ] Build car configurator (color/trim selector)
- [ ] Add 360° vehicle viewer (Three.js / Pannellum)
- [ ] Integrate Resend for contact emails
- [ ] Add blog CMS (Strapi or Sanity)
- [ ] WhatsApp Business API integration
- [ ] Google Analytics 4 events
- [ ] CI/CD pipeline (GitHub Actions → Docker Hub → VPS)
- [ ] SSL automation with Certbot in nginx

---

## 📞 Contact

**Cycas Khodro** — Official Opel Dealer, Iran  
📍 Tehran, Jordan, Golshahr St., No. 11  
📞 021-2203-7809  
🌐 [cycaskhodro.com](https://cycaskhodro.com)
