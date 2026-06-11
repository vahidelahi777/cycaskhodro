'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://cycaskhodro.com/wp-content/uploads/2025/08/اوپل-آسترا-3.webp',
    alt: 'Opel Astra - رانندگی متفاوت',
    title: 'Opel Astra',
    description: 'خودرویی برای هر سفر',
  },
  {
    id: 2,
    image: 'https://cycaskhodro.com/wp-content/uploads/2025/08/اوپل-موکا-1.webp',
    alt: 'Opel Mokka - تجربه ماندگار',
    title: 'Opel Mokka',
    description: 'SUV پرقدرت و اقتصادی',
  },
  {
    id: 3,
    image: '/images/mokka-e-2024.webp',
    alt: 'Opel Mokka-E - الکتریکی',
    title: 'Opel Mokka-E',
    description: 'آینده الکتریکی',
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoPlay(false)
  }

  return (
    <div
      className="relative w-full h-full min-h-[400px] md:min-h-[500px]"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={HERO_SLIDES[current].image}
            alt={HERO_SLIDES[current].alt}
            fill
            className="object-contain"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full transition-all duration-200 hover:shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-neutral-900" />
      </button>

      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full transition-all duration-200 hover:shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-neutral-900" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'bg-white w-8 h-2'
                : 'bg-white/50 hover:bg-white/75 w-2 h-2'
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Info */}
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-16 left-4 z-10"
      >
        <p className="text-sm md:text-base font-medium text-neutral-900 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
          {HERO_SLIDES[current].title}
        </p>
      </motion.div>
    </div>
  )
}
