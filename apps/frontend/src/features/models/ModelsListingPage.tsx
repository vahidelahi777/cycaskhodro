'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Fuel, ArrowLeft } from 'lucide-react'
import { OPEL_MODELS, type ModelCategory, CATEGORY_LABELS } from '@/content/models'
import { formatTomanCompact } from '@/lib/persian'
import ApplePremiumHeader from '@/shared/layout/ApplePremiumHeader'
import PremiumFooter from '@/shared/layout/PremiumFooter'

const FILTER_TABS: ModelCategory[] = ['ALL', 'SUV', 'HATCHBACK']

const PERFORMANCE_MODELS = [
  {
    id: 'mokka-e',
    nameEn: 'OPEL MOKKA E',
    nameFa: 'اوپل موکا E',
    tag: 'برقی',
    tagColor: 'bg-emerald-500',
    image: '/images/mokka-e-new.png',
    href: '/fa/models',
    accentColor: '#10b981',
    specs: [
      { label: 'توان موتور', value: '۱۵۶ اسب بخار' },
      { label: 'شتاب ۰–۱۰۰', value: '۹ ثانیه' },
      { label: 'باتری', value: '۵۴ kWh' },
      { label: 'محدوده برقی', value: '۳۵۰ کیلومتر' },
    ],
    headline: 'آینده‌ای کاملاً برقی',
    desc: 'اولین خودروی تمام‌برقی اوپل در ایران. عملکرد بی‌نظیر با صفر آلودگی.',
  },
  {
    id: 'mokka',
    nameEn: 'OPEL MOKKA',
    nameFa: 'اوپل موکا',
    tag: 'بنزینی',
    tagColor: 'bg-yellow-400',
    image: '/images/mokka-new.png',
    href: '/fa/models',
    accentColor: '#facc15',
    specs: [
      { label: 'توان موتور', value: '۱۳۰ اسب بخار' },
      { label: 'شتاب ۰–۱۰۰', value: '۹.۱ ثانیه' },
      { label: 'مصرف سوخت', value: '۵.۷ L/100km' },
      { label: 'گیربکس', value: 'اتوماتیک ۸ سرعته' },
    ],
    headline: 'انرژی مقاومت‌ناپذیر',
    desc: 'طراحی جسورانه، فناوری پیشرفته و رانندگی هیجان‌انگیز در هر جاده.',
  },
  {
    id: 'astra',
    nameEn: 'OPEL ASTRA',
    nameFa: 'اوپل آسترا',
    tag: 'هاچ‌بک',
    tagColor: 'bg-blue-500',
    image: '/images/astra-new.png',
    href: '/fa/models',
    accentColor: '#3b82f6',
    specs: [
      { label: 'توان موتور', value: '۱۳۰ اسب بخار' },
      { label: 'شتاب ۰–۱۰۰', value: '۹.۱ ثانیه' },
      { label: 'مصرف سوخت', value: '۵.۷ L/100km' },
      { label: 'گیربکس', value: 'اتوماتیک ۸ سرعته' },
    ],
    headline: 'هیجان در هر خیابان',
    desc: 'هاچ‌بک اسپورت اروپایی با طراحی ایرودینامیک و کابین لوکس.',
  },
]

export default function ModelsListingPage() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory>('ALL')
  const [activePerf, setActivePerf] = useState(0)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = true
      heroVideoRef.current.play().catch(() => {})
    }
  }, [])

  const filtered =
    activeCategory === 'ALL'
      ? OPEL_MODELS
      : OPEL_MODELS.filter((m) => m.category === activeCategory)

  const perfModel = PERFORMANCE_MODELS[activePerf]

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      <ApplePremiumHeader />
      <main>

      {/* ── VIDEO HERO BANNER ── */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <video
          ref={heroVideoRef}
          src="/videos/mokka-teaser.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-yellow-400" />
              محصولات اوپل
              <span className="w-8 h-px bg-yellow-400" />
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
              خودروهای اوپل<br />در ایران
            </h1>
            <p className="text-white/60 text-lg max-w-lg mx-auto mb-8">
              با گارانتی رسمی، خدمات پس از فروش و واردات قانونی از آلمان
            </p>
            <a
              href="#models"
              className="btn-opel-primary px-8 py-4"
            >
              مشاهده محصولات
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <svg className="w-5 h-5 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ── عملکرد و طراحی ── */}
      <section className="bg-[#080810] text-white overflow-hidden" id="models">
        <div className="text-center py-16 px-4">
          <p className="text-yellow-400 text-sm font-medium tracking-widest uppercase mb-3">عملکرد و طراحی</p>
          <h2 className="text-4xl md:text-5xl font-bold">بهترین محصولات اوپل</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            مجموعه‌ای از خودروهای اروپایی با فناوری روز دنیا، طراحی منحصربه‌فرد و عملکرد استثنایی
          </p>
        </div>

        {/* Model tabs */}
        <div className="flex justify-center gap-3 px-4 mb-12">
          {PERFORMANCE_MODELS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActivePerf(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                i === activePerf
                  ? 'border-white/30 bg-white/10 text-white'
                  : 'border-white/10 text-white/40 hover:text-white/70 hover:border-white/20'
              }`}
            >
              {m.nameFa}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={perfModel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Car image */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: perfModel.accentColor }}
              />
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-lg"
              >
                <Image
                  src={perfModel.image}
                  alt={perfModel.nameFa}
                  width={700}
                  height={450}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className={`${perfModel.tagColor} text-black text-xs font-bold px-3 py-1 rounded-full`}>
                  {perfModel.tag}
                </span>
                <span className="text-white/30 text-sm tracking-widest uppercase">{perfModel.nameEn}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">{perfModel.headline}</h3>
              <p className="text-white/60 text-lg leading-relaxed">{perfModel.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                {perfModel.specs.map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-white/40 text-xs mb-1">{s.label}</p>
                    <p className="text-white font-bold text-lg">{s.value}</p>
                  </div>
                ))}
              </div>
              <Link
                href={perfModel.href}
                className="btn-opel-primary px-8 py-4"
              >
                مشاهده جزئیات
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Filter tabs ── */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/90 backdrop-blur-xl border-b border-neutral-100">
        <div className="section-container">
          <div className="flex items-center gap-1 py-3 overflow-x-auto no-scrollbar">
            {FILTER_TABS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative shrink-0 px-5 py-2 text-sm font-bold transition-colors duration-200 rounded-full ${
                  activeCategory === cat
                    ? 'bg-opel-yellow text-black'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {CATEGORY_LABELS[cat]}
                {cat !== 'ALL' && activeCategory !== cat && (
                  <span className="mr-1.5 text-xs font-normal text-neutral-400">
                    ({OPEL_MODELS.filter((m) => m.category === cat).length})
                  </span>
                )}
              </button>
            ))}
            <div className="mr-auto text-sm text-neutral-400 shrink-0 pr-2">
              {filtered.length} مدل
            </div>
          </div>
        </div>
      </section>

      {/* ── Model cards ── */}
      <section className="section-container py-12 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filtered.map((model, i) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <ModelCard model={model} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Trust strip ── */}
      <section className="bg-neutral-50 border-t border-neutral-100 py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '۳', label: 'مدل موجود' },
              { value: '۲۸+', label: 'مرکز خدمات' },
              { value: '۳ سال', label: 'گارانتی رسمی' },
              { value: '۱۰۰,۰۰۰ km', label: 'پوشش گارانتی' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl md:text-4xl font-black text-opel-black mb-1">{item.value}</p>
                <p className="text-sm text-neutral-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>
      <PremiumFooter />
    </div>
  )
}

function ModelCard({ model }: { model: (typeof OPEL_MODELS)[0] }) {
  return (
    <Link
      href={`/fa${model.href}`}
      className="group block bg-white border border-neutral-100 hover:border-opel-black overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400"
    >
      <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 h-52 md:h-60 overflow-hidden">
        <div className="absolute top-3 right-3 z-10">
          {model.fuelType === 'electric' ? (
            <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              <Zap size={11} strokeWidth={2.5} />برقی
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-neutral-800 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              <Fuel size={11} strokeWidth={2.5} />بنزین
            </span>
          )}
        </div>
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-white/80 backdrop-blur text-neutral-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-neutral-200">
            {model.bodyStyle}
          </span>
        </div>
        <Image
          src={model.image}
          alt={model.nameFa}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-neutral-400 tracking-widest uppercase mb-1">{model.nameEn}</p>
        <h3 className="text-xl font-black text-neutral-900 mb-1">{model.nameFa}</h3>
        <p className="text-sm text-neutral-500 mb-4">{model.taglineFa}</p>
        <div className="grid grid-cols-3 gap-2 mb-5 py-3 border-t border-b border-neutral-100">
          <div className="text-center">
            <p className="text-[11px] text-neutral-400 mb-0.5">قدرت</p>
            <p className="text-xs font-bold text-neutral-800">{model.keySpecs.power}</p>
          </div>
          <div className="text-center border-x border-neutral-100">
            <p className="text-[11px] text-neutral-400 mb-0.5">۰-۱۰۰</p>
            <p className="text-xs font-bold text-neutral-800">{model.keySpecs.acceleration}</p>
          </div>
          <div className="text-center">
            <p className="text-[11px] text-neutral-400 mb-0.5">سوخت</p>
            <p className="text-xs font-bold text-neutral-800">{model.keySpecs.fuel}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-neutral-400 mb-0.5">شروع قیمت از</p>
            <p className="text-base font-black text-neutral-900">{formatTomanCompact(model.startingPrice)}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-opel-yellow text-black text-xs font-bold px-4 py-2.5 rounded-lg group-hover:brightness-110 transition-all">
            مشاهده
            <ArrowLeft size={13} strokeWidth={2.5} className="rotate-180" />
          </span>
        </div>
      </div>
    </Link>
  )
}
