'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { OPEL_MODELS } from '@/content/models'
import { OptimizedImage } from '@/shared/ui/OptimizedImage'

export default function ModelsShowcaseClient() {
  const models = OPEL_MODELS

  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(1)

  const current = models[activeIdx]

  const pickModel = useCallback((idx: number) => {
    if (idx === activeIdx) return
    setDirection(idx > activeIdx ? 1 : -1)
    setActiveIdx(idx)
  }, [activeIdx])

  const navigate = useCallback((delta: number) => {
    const next = (activeIdx + delta + models.length) % models.length
    setDirection(delta)
    setActiveIdx(next)
  }, [activeIdx, models.length])

  return (
    <section id="models" dir="rtl" className="bg-white">

      {/* ── Section header ── */}
      <div className="section-container pt-16 md:pt-24 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 border border-opel-yellow/60 bg-opel-yellow/10 text-opel-yellow text-xs font-bold tracking-widest uppercase px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-opel-yellow" />
            محصولات اوپل
          </div>
          <h2 className="section-title text-opel-black">
            خودروهای ما
          </h2>
        </motion.div>
      </div>

      {/* ── Immersive stage ── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-opel-gray-100 via-white to-opel-gray-100">

        {/* Model name tabs */}
        <div className="flex justify-center items-end gap-8 md:gap-12 pt-8 pb-0 overflow-x-auto px-6 md:px-12">
          {models.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => pickModel(idx)}
              className={`relative pb-4 shrink-0 transition-colors duration-200 ${
                activeIdx === idx
                  ? 'text-opel-black'
                  : 'text-opel-gray-500 hover:text-opel-gray-700'
              }`}
            >
              <span className="block text-base md:text-xl font-bold">{m.nameFa}</span>
              <span className={`block text-[10px] tracking-widest uppercase mt-0.5 ${
                activeIdx === idx ? 'text-opel-gray-700' : 'text-opel-gray-300'
              }`}>
                {m.nameEn}
              </span>
              {activeIdx === idx && (
                <motion.span
                  layoutId="model-active-bar"
                  className="absolute bottom-0 right-0 left-0 h-0.5 bg-opel-yellow"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Car stage */}
        <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[360px] md:min-h-[480px] px-12 sm:px-20 md:px-32">

          {/* Left arrow */}
          <button
            onClick={() => navigate(1)}
            aria-label="مدل بعدی"
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
              bg-white border border-opel-gray-300 hover:border-opel-black
              text-opel-black shadow-opel-card hover:shadow-opel-hover
              transition-all duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Car image */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={{
                enter:  (d: number) => ({ opacity: 0, x: d * 100 }),
                center: { opacity: 1, x: 0 },
                exit:   (d: number) => ({ opacity: 0, x: d * -100 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-xl md:max-w-3xl h-52 md:h-[380px] mx-auto"
            >
              <OptimizedImage
                src={current.image}
                alt={current.nameFa}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                quality={90}
                sizes="(max-width: 768px) 80vw, 900px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Right arrow */}
          <button
            onClick={() => navigate(-1)}
            aria-label="مدل قبلی"
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
              bg-white border border-opel-gray-300 hover:border-opel-black
              text-opel-black shadow-opel-card hover:shadow-opel-hover
              transition-all duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="flex justify-center pb-14 md:pb-20 pt-2">
          <Link
            href={current.href}
            className="btn-opel-primary px-12 py-4 text-base"
          >
            مشاهده بیشتر
          </Link>
        </div>

      </div>

      {/* View all */}
      <div className="section-container pb-10 md:pb-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/fa/models" className="btn-opel-primary">
            مشاهده همه خودروها
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
