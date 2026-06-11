'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
}

export default function DaresToBeDifferent({ vehicle }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const xLeft  = useTransform(scrollYProgress, [0, 1], ['-8%', '0%'])
  const xRight = useTransform(scrollYProgress, [0, 1], ['8%', '0%'])

  const modelLetters = vehicle.model.toUpperCase().split('')

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden py-24 md:py-36 lg:py-48"
      dir="rtl"
    >
      {/* ── Giant model name watermark ── */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span className="text-[clamp(8rem,25vw,22rem)] font-black text-neutral-100 tracking-[0.15em] uppercase whitespace-nowrap">
          {vehicle.model.toUpperCase()}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="relative section-container text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="flex-1 max-w-24 h-px bg-neutral-300" />
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-neutral-400">
            Opel {vehicle.model} {vehicle.year}
          </span>
          <span className="flex-1 max-w-24 h-px bg-neutral-300" />
        </motion.div>

        {/* Main statement — animated letter reveal */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            style={{ x: xLeft }}
            className="text-[clamp(2.5rem,8vw,7rem)] font-black text-black leading-none tracking-tight uppercase"
          >
            جرأت
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h2
            style={{ x: xRight }}
            className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-none tracking-tight uppercase"
          >
            <span className="text-opel-yellow">متفاوت</span>
            <span className="text-black"> بودن</span>
          </motion.h2>
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto mt-8 leading-relaxed"
        >
          {vehicle.tagline} — اوپل {vehicle.model} با طراحی جسورانه، فناوری پیشرفته و عملکرد بی‌نظیر،
          تعریف جدیدی از یک کراس‌اور مدرن ارائه می‌دهد.
        </motion.p>

        {/* Animated letter strip */}
        <div className="flex justify-center gap-3 md:gap-6 mt-16 overflow-hidden" aria-hidden>
          {modelLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-black text-black tracking-widest"
            >
              {letter}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  )
}
