'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const MODELS = [
  {
    id: 'mokka-e',
    nameEn: 'OPEL MOKKA E',
    nameFa: 'اوپل موکا E',
    tag: 'برقی',
    tagColor: 'bg-emerald-500',
    image: '/images/mokka-e-new.png',
    href: '/fa/models/mokka-e',
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
    href: '/fa/models/mokka',
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
    href: '/fa/models/astra',
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

export default function PerformanceDesign() {
  const [active, setActive] = useState(0)
  const model = MODELS[active]

  return (
    <section className="bg-[#080810] text-white overflow-hidden" dir="rtl">
      {/* Section Header */}
      <div className="text-center py-16 px-4">
        <p className="text-yellow-400 text-sm font-medium tracking-widest uppercase mb-3">عملکرد و طراحی</p>
        <h2 className="text-4xl md:text-5xl font-bold">بهترین محصولات اوپل</h2>
        <p className="mt-4 text-white/50 max-w-xl mx-auto">
          مجموعه‌ای از خودروهای اروپایی با فناوری روز دنیا، طراحی منحصربه‌فرد و عملکرد استثنایی
        </p>
      </div>

      {/* Model Selector Tabs */}
      <div className="flex justify-center gap-3 px-4 mb-12">
        {MODELS.map((m, i) => (
          <button
            key={m.id}
            onClick={() => setActive(i)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              i === active
                ? 'border-white/30 bg-white/10 text-white'
                : 'border-white/10 text-white/40 hover:text-white/70 hover:border-white/20'
            }`}
          >
            {m.nameFa}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={model.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left — Car Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div
              className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
              style={{ background: model.accentColor }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full max-w-lg"
            >
              <Image
                src={model.image}
                alt={model.nameFa}
                width={700}
                height={450}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>

          {/* Right — Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className={`${model.tagColor} text-black text-xs font-bold px-3 py-1 rounded-full`}>
                {model.tag}
              </span>
              <span className="text-white/30 text-sm tracking-widest uppercase">{model.nameEn}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">{model.headline}</h3>
            <p className="text-white/60 text-lg leading-relaxed">{model.desc}</p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {model.specs.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-white/40 text-xs mb-1">{s.label}</p>
                  <p className="text-white font-bold text-lg">{s.value}</p>
                </div>
              ))}
            </div>

            <Link
              href={model.href}
              className="inline-flex items-center gap-2 mt-4 bg-yellow-400 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all hover:scale-105"
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
  )
}
