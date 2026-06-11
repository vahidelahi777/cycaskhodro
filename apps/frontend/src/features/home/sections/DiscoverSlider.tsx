'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Link from 'next/link'
import { OptimizedImage } from '@/shared/ui/OptimizedImage'

const slides = [
  {
    description: 'تعمیرگاه مرکزی سیکاس خودرو با بهره‌گیری از جدیدترین تجهیزات و کادری مجرب، آماده ارائه خدمات تعمیر و نگهداری خودروهای اپل به شما عزیزان می‌باشد.',
    image: '/images/warranty.webp',
    link: '/services/repair',
  },
  {
    description: 'مرکز آموزش سیکاس خودرو با هدف ارتقای دانش فنی و تخصصی کارشناسان و علاقه‌مندان به صنعت خودرو، دوره‌های آموزشی متنوعی را در زمینه تعمیر و نگهداری خودروهای اپل برگزار می‌نماید.',
    image: '/images/training.webp',
    link: '/services/training',
  },
]

const TOTAL = slides.length
const AUTO_PLAY_INTERVAL = 5000
const AUTO_PLAY_RESUME_DELAY = 8000

export default function DiscoverSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const resumeTimerRef = useRef<NodeJS.Timeout>()
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (TOTAL <= 1 || !isAutoPlaying) return
    intervalRef.current = setInterval(() => {
      setDirection('right')
      setActiveIndex((prev) => (prev + 1) % TOTAL)
    }, AUTO_PLAY_INTERVAL)
    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying])

  const pauseAndResume = useCallback(() => {
    setIsAutoPlaying(false)
    clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, AUTO_PLAY_RESUME_DELAY)
  }, [])

  useEffect(() => {
    return () => {
      clearTimeout(resumeTimerRef.current)
      clearInterval(intervalRef.current)
    }
  }, [])

  const handleNext = useCallback(() => {
    pauseAndResume()
    setDirection('right')
    setActiveIndex((prev) => (prev + 1) % TOTAL)
  }, [pauseAndResume])

  const handlePrev = useCallback(() => {
    pauseAndResume()
    setDirection('left')
    setActiveIndex((prev) => (prev - 1 + TOTAL) % TOTAL)
  }, [pauseAndResume])

  const handleDotClick = useCallback((index: number) => {
    pauseAndResume()
    setDirection(index > activeIndex ? 'right' : 'left')
    setActiveIndex(index)
  }, [activeIndex, pauseAndResume])

  const currentSlide = slides[activeIndex]
  const animationStyle = `${direction === 'right' ? 'slideInRight' : 'slideInLeft'} 600ms cubic-bezier(0.16, 1, 0.3, 1)`

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="relative max-w-7xl mx-auto">

          {TOTAL > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-2 md:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
                aria-label="اسلاید قبلی"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-2 md:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
                aria-label="اسلاید بعدی"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-8">
            <div
              key={`content-${activeIndex}`}
              className="space-y-4 md:space-y-6 order-2 md:order-1"
              style={{ animation: animationStyle }}
            >
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {currentSlide.description}
              </p>
              <Link
                href={currentSlide.link}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span>مشاهده بیشتر</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>

            <div
              key={`image-${activeIndex}`}
              className="relative h-[280px] md:h-[400px] lg:h-[480px] order-1 md:order-2"
              style={{ animation: animationStyle }}
            >
              <OptimizedImage
                src={currentSlide.image}
                alt={currentSlide.description.substring(0, 50)}
                fill
                className="object-contain drop-shadow-2xl"
                priority={activeIndex === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {TOTAL > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-yellow-400 w-8 md:w-10 shadow-lg'
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                  aria-label={`رفتن به اسلاید ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
