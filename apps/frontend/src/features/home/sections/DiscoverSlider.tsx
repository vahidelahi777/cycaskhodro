'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { OptimizedImage } from '@/shared/ui/OptimizedImage'

const slides = [
  {
    tag: 'تعمیر و نگهداری',
    title: 'تعمیرگاه مرکزی',
    description: 'تعمیرگاه مرکزی سیکاس خودرو با بهره‌گیری از جدیدترین تجهیزات و کادری مجرب، آماده ارائه خدمات تعمیر و نگهداری خودروهای اوپل به شما عزیزان می‌باشد.',
    image: '/images/warranty.webp',
    link: '/services/repair',
    cta: 'مشاهده خدمات تعمیر',
  },
  {
    tag: 'آموزش تخصصی',
    title: 'مرکز آموزش',
    description: 'مرکز آموزش سیکاس خودرو با هدف ارتقای دانش فنی و تخصصی کارشناسان و علاقه‌مندان به صنعت خودرو، دوره‌های آموزشی متنوعی را در زمینه تعمیر خودروهای اوپل برگزار می‌نماید.',
    image: '/images/training.webp',
    link: '/services/training',
    cta: 'مشاهده دوره‌ها',
  },
]

const AUTO_PLAY_INTERVAL = 6000
const AUTO_PLAY_RESUME_DELAY = 8000

export default function DiscoverSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const resumeRef = useRef<ReturnType<typeof setTimeout>>()
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setActiveIndex((p) => (p + 1) % slides.length)
    }, AUTO_PLAY_INTERVAL)
    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying])

  useEffect(() => () => {
    clearTimeout(resumeRef.current)
    clearInterval(intervalRef.current)
  }, [])

  const pauseAndResume = useCallback(() => {
    setIsAutoPlaying(false)
    clearTimeout(resumeRef.current)
    resumeRef.current = setTimeout(() => setIsAutoPlaying(true), AUTO_PLAY_RESUME_DELAY)
  }, [])

  const go = useCallback((delta: number) => {
    pauseAndResume()
    setDirection(delta)
    setActiveIndex((p) => (p + delta + slides.length) % slides.length)
  }, [pauseAndResume])

  const slide = slides[activeIndex]

  return (
    <section className="section-padding bg-opel-black overflow-hidden" dir="rtl">
      <div className="section-container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-opel-yellow/40 bg-opel-yellow/10 text-opel-yellow text-xs font-bold tracking-widest uppercase px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-opel-yellow" />
            خدمات ما
          </div>
          <h2 className="section-title text-white">
            بیشتر کشف کنید
          </h2>
        </motion.div>

        {/* ── Slide content ── */}
        <div className="relative grid md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[420px]">

          {/* Text side */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${activeIndex}`}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 50 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -50 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col gap-6 order-2 md:order-1"
            >
              <span className="inline-flex items-center gap-2 text-opel-yellow text-xs font-bold tracking-widest uppercase">
                <span className="w-6 h-px bg-opel-yellow" />
                {slide.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                {slide.title}
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                {slide.description}
              </p>
              <Link
                href={slide.link}
                className="btn-opel-primary self-start"
              >
                {slide.cta}
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Image side */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`image-${activeIndex}`}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * -50 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * 50 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-[280px] md:h-[420px] order-1 md:order-2"
            >
              <OptimizedImage
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain drop-shadow-2xl"
                priority={activeIndex === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Controls ── */}
        {slides.length > 1 && (
          <div className="flex items-center justify-between mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { pauseAndResume(); setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i) }}
                  aria-label={`اسلاید ${i + 1}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-opel-yellow w-8' : 'bg-white/25 w-4 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="قبلی"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-opel-yellow hover:text-opel-yellow transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <button
                onClick={() => go(1)}
                aria-label="بعدی"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-opel-yellow hover:text-opel-yellow transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
