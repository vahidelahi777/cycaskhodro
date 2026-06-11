'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Slide =
  | { type: 'video'; src: string }
  | { type: 'image'; src: string; alt: string }

const SLIDES: Slide[] = [
  { type: 'video', src: '/videos/hero-fiat-showcase.mp4' },
  { type: 'image', src: '/images/banner1.jpg',  alt: 'سیکاس خودرو' },
  { type: 'image', src: '/images/banner2.avif', alt: 'اوپل موکا' },
  { type: 'image', src: '/images/banner3.jpg',  alt: 'اوپل آسترا' },
]

const IMAGE_INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [, setVideoEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const goTo = useCallback((index: number) => {
    setCurrent(index)
    setVideoEnded(false)
    clearTimeout(timerRef.current)
  }, [])

  const goNext = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  const goPrev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  // Auto-advance: for images use interval, for video wait for ended event
  useEffect(() => {
    const slide = SLIDES[current]
    if (slide.type === 'image') {
      timerRef.current = setTimeout(goNext, IMAGE_INTERVAL)
    }
    return () => clearTimeout(timerRef.current)
  }, [current, goNext])

  const handleVideoEnded = () => {
    setVideoEnded(true)
    goNext()
  }

  // Force muted + autoplay (React doesn't always pass muted to DOM)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  // Reset video when returning to slide 0
  useEffect(() => {
    if (current === 0 && videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }, [current])

  const slide = SLIDES[current]

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* Slides */}
      <AnimatePresence mode="wait">
        {slide.type === 'video' ? (
          <motion.div
            key="video-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              src={slide.src}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              onError={handleVideoEnded}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            key={`image-${current}`}
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={current === 1}
              quality={95}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none z-10" />

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/30 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
        aria-label="اسلاید قبلی"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/30 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
        aria-label="اسلاید بعدی"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
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

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <svg className="w-5 h-5 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

    </section>
  )
}
