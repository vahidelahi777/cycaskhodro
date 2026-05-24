'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const IMAGE_INTERVAL = 6000

const HERO_SLIDES = [
  { id: 0, type: 'video' as const, src: '/videos/hero-fiat-showcase.mp4', alt: 'سیکاس خودرو' },
  { id: 1, type: 'image' as const, src: '/images/banner1.jpg',  alt: 'سیکاس خودرو - نمایندگی رسمی اوپل' },
  { id: 2, type: 'image' as const, src: '/images/banner2.avif', alt: 'اوپل موکا' },
  { id: 3, type: 'image' as const, src: '/images/banner3.jpg',  alt: 'اوپل آسترا' },
]

interface VideoSlideProps {
  src: string
  active: boolean
  onTimeUpdate: (ratio: number) => void
  onEnded: () => void
}

function VideoSlide({ src, active, onTimeUpdate, onEnded }: VideoSlideProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (active) {
      el.currentTime = 0
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  }, [active])

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      preload="auto"
      onTimeUpdate={(e) => {
        const el = e.currentTarget
        if (el.duration) onTimeUpdate(el.currentTime / el.duration)
      }}
      onEnded={onEnded}
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}

export default function Hero() {
  const [current, setCurrent]   = useState(0)
  const [paused, setPaused]     = useState(false)
  const [progress, setProgress] = useState(0)
  const startRef = useRef<number>(0)
  const rafRef   = useRef<number>(0)
  const total    = HERO_SLIDES.length

  const isVideo = HERO_SLIDES[current].type === 'video'

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    setProgress(0)
    startRef.current = performance.now()
  }, [])

  const next = useCallback(() => goTo((current + 1) % total), [current, goTo, total])
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, goTo, total])

  // RAF timer — only runs for image slides
  useEffect(() => {
    if (paused || isVideo) {
      cancelAnimationFrame(rafRef.current)
      return
    }

    startRef.current = performance.now() - progress * IMAGE_INTERVAL

    const tick = (now: number) => {
      const p = Math.min((now - startRef.current) / IMAGE_INTERVAL, 1)
      setProgress(p)
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCurrent((c) => (c + 1) % total)
        setProgress(0)
        startRef.current = performance.now()
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, current, isVideo, total])

  return (
    <section
      className="relative w-full h-screen min-h-[560px] bg-black overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="بنر اصلی"
    >
      {/* ── Slides (all in DOM, opacity-switched) ── */}
      {HERO_SLIDES.map((slide, i) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          {slide.type === 'video' ? (
            <VideoSlide
              src={slide.src}
              active={i === current}
              onTimeUpdate={setProgress}
              onEnded={next}
            />
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 1}
              quality={92}
              className="object-cover"
              sizes="100vw"
            />
          )}
        </motion.div>
      ))}

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-10" />

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="اسلاید قبلی"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 flex items-center justify-center
          rounded-full border border-white/30 bg-black/30 backdrop-blur-sm
          text-white/80 hover:bg-black/60 hover:text-white hover:border-white/60
          transition-all duration-200 active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="اسلاید بعدی"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 flex items-center justify-center
          rounded-full border border-white/30 bg-black/30 backdrop-blur-sm
          text-white/80 hover:bg-black/60 hover:text-white hover:border-white/60
          transition-all duration-200 active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* ── Dots + progress bar ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <div className="flex gap-2">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`رفتن به اسلاید ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <div className="w-24 h-px bg-white/20 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-opel-yellow rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
