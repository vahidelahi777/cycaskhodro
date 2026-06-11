'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ModelHighlight } from '@/types/vehicle-page'

interface Props {
  highlights: ModelHighlight[]
  modelName: string
}

export default function HighlightPanels({ highlights, modelName }: Props) {
  const [active, setActive] = useState(0)

  if (!highlights.length) return null

  const current = highlights[active]

  const prev = () => setActive((a) => (a - 1 + highlights.length) % highlights.length)
  const next = () => setActive((a) => (a + 1) % highlights.length)

  return (
    <section id="highlights" className="bg-[#0A0A0C] overflow-hidden" dir="rtl">

      {/* ── Two-column layout: nav left + content right ── */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Left panel — vertical index */}
        <div className="lg:w-80 xl:w-96 bg-[#111115] flex flex-col justify-center px-8 md:px-12 py-16 lg:py-24 shrink-0">
          <p className="text-[10px] text-white/30 tracking-[0.4em] uppercase mb-10">
            {modelName} — ویژگی‌های کلیدی
          </p>

          <nav className="space-y-2">
            {highlights.map((h, i) => (
              <button
                key={h.number}
                onClick={() => setActive(i)}
                className={`w-full text-right flex items-center gap-4 py-4 px-4 rounded-xl transition-all duration-300 ${
                  active === i
                    ? 'bg-white/8 border-r-2 border-opel-yellow'
                    : 'hover:bg-white/4 border-r-2 border-transparent'
                }`}
              >
                <span className={`text-xs font-mono shrink-0 transition-colors ${
                  active === i ? 'text-opel-yellow' : 'text-white/30'
                }`}>
                  {h.number}
                </span>
                <div className="text-right">
                  <p className={`text-sm font-black transition-colors ${
                    active === i ? 'text-white' : 'text-white/50'
                  }`}>
                    {h.titleFa}
                  </p>
                  <p className="text-[10px] text-white/25 tracking-widest uppercase">{h.titleEn}</p>
                </div>
              </button>
            ))}
          </nav>

          {/* Prev/Next arrows */}
          <div className="flex gap-3 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
            >
              <ChevronRight size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>

        {/* Right panel — full-bleed image + description */}
        <div className="relative flex-1 min-h-[60vh] lg:min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {/* Background image */}
              <Image
                src={current.image}
                fill
                alt={current.titleFa}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
            </motion.div>
          </AnimatePresence>

          {/* Content overlay */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-14 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Big number */}
                <span className="text-[6rem] md:text-[10rem] font-black text-white/10 leading-none select-none block -mb-8">
                  {current.number}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight">
                  {current.titleFa}
                </h3>
                <p className="text-xs text-opel-yellow tracking-[0.3em] uppercase mb-4">
                  {current.titleEn}
                </p>

                {/* Description */}
                <p className="text-base text-white/70 max-w-lg leading-relaxed">
                  {current.descFa}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 mt-10">
              {highlights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    active === i ? 'w-8 h-1 bg-opel-yellow' : 'w-1 h-1 bg-white/30 rounded-full'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
