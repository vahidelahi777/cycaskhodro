'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type ImageSlide = { type: 'image'; src: string; alt: string }
type VideoSlide  = { type: 'video'; src: string; poster: string }
type Slide = VideoSlide | ImageSlide

const IMAGE_SLIDES: ImageSlide[] = [
  { type: 'image', src: '/images/banner1.jpg',  alt: 'سیکاس خودرو' },
  { type: 'image', src: '/images/banner2.avif', alt: 'اوپل موکا' },
  { type: 'image', src: '/images/banner3.jpg',  alt: 'اوپل آسترا' },
]

// Desktop: video first, then images. Mobile: images only (skip 14 MB video)
const DESKTOP_SLIDES: Slide[] = [
  { type: 'video', src: '/videos/hero-fiat-showcase.mp4', poster: '/images/banner1.jpg' },
  ...IMAGE_SLIDES,
]

const IMAGE_INTERVAL = 5_000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  // Start with desktop slides; swap to image-only after hydration on mobile
  const [slides, setSlides] = useState<Slide[]>(DESKTOP_SLIDES)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  // After hydration — switch mobile to image-only slides (avoids SSR mismatch)
  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setSlides(IMAGE_SLIDES)
      setCurrent(0)
    }
  }, [])

  const goTo = useCallback((i: number) => {
    setCurrent(i)
    clearTimeout(timerRef.current)
  }, [])

  const goNext = useCallback(() => {
    setCurrent(prev => {
      clearTimeout(timerRef.current)
      return (prev + 1) % slides.length
    })
  }, [slides.length])

  const goPrev = useCallback(() => {
    setCurrent(prev => {
      clearTimeout(timerRef.current)
      return (prev - 1 + slides.length) % slides.length
    })
  }, [slides.length])

  // Auto-advance image slides
  useEffect(() => {
    const slide = slides[current]
    if (slide?.type === 'image') {
      timerRef.current = setTimeout(goNext, IMAGE_INTERVAL)
    }
    return () => clearTimeout(timerRef.current)
  }, [current, goNext, slides])

  // ─── Callback ref: fires on every DOM node creation (fixes React muted bug) ───
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node
    if (!node) return
    node.muted = true
    node.play().catch(() => {})
  }, [])

  // Also re-play when returning to slide 0
  useEffect(() => {
    const slide = slides[current]
    if (slide?.type === 'video' && videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }, [current, slides])

  const slide = slides[current] ?? slides[0]

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '100svh', minHeight: 560 }}
    >

      {/* ── Slides ── */}
      <AnimatePresence mode="wait">
        {slide.type === 'video' ? (
          <motion.div
            key="video-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <video
              ref={setVideoRef}
              src={slide.src}
              poster={slide.poster}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={goNext}
              onError={goNext}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            key={`img-${current}`}
            initial={{ scale: 1.03, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority                 // all banner images preloaded — shown within seconds
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55 pointer-events-none z-10" />

      {/* ── Arrows ── */}
      <button
        onClick={goPrev}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 rounded-full bg-black/30 border border-white/20
          backdrop-blur-sm flex items-center justify-center text-white
          hover:bg-black/60 transition-all"
        aria-label="اسلاید قبلی"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 rounded-full bg-black/30 border border-white/20
          backdrop-blur-sm flex items-center justify-center text-white
          hover:bg-black/60 transition-all"
        aria-label="اسلاید بعدی"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ── Dots ── */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`اسلاید ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
      >
        <svg className="w-5 h-5 text-white/40" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

    </section>
  )
}
