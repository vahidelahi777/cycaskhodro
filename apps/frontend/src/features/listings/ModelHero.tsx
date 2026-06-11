'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { VehicleFull } from '@/content/models/opel-mokka-e-2024.data'

const FA = {
  badge: '۱۰۰٪ برقی',
  price: 'تماس بگیرید',
  cta1: 'درخواست قیمت',
  cta2: 'رزرو تست درایو',
}
const EN = {
  badge: '100% Electric',
  price: 'Contact for price',
  cta1: 'Request a quote',
  cta2: 'Book test drive',
}

interface Props {
  data: VehicleFull
  locale: string
  onQuote: () => void
  onTestDrive: () => void
}

export default function ModelHero({ data, locale, onQuote, onTestDrive }: Props) {
  const t = locale === 'fa' ? FA : EN
  const heroPhoto = data.photoManifest.find((p) => p.use === 'hero') ?? data.photoManifest[0]
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [stickyVisible, setStickyVisible] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const displayName = locale === 'fa' ? data.nameFa : data.name

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] max-h-[700px] w-full overflow-hidden bg-opel-black">
        {heroPhoto && (
          <Image
            src={heroPhoto.src}
            alt={locale === 'fa' ? heroPhoto.altFa : heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-opel-black/80 via-opel-black/20 to-transparent" />

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12" dir={locale === 'fa' ? 'rtl' : 'ltr'}>
          <span className="inline-block bg-opel-yellow text-opel-black text-xs font-bold px-3 py-1 rounded-full mb-4">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{displayName}</h1>
          <p className="text-white/70 text-sm mb-6">{t.price}</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={onQuote} className="btn-opel-primary">
              {t.cta1}
            </button>
            <button
              onClick={onTestDrive}
              className="btn-opel-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
            >
              {t.cta2}
            </button>
          </div>
        </div>
      </div>

      {/* Sentinel — when this scrolls out, sticky bar appears */}
      <div ref={sentinelRef} aria-hidden />

      {/* Sticky bar */}
      <div
        className={`sticky top-0 z-50 bg-opel-black text-white transition-transform duration-300 ${
          stickyVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        dir={locale === 'fa' ? 'rtl' : 'ltr'}
      >
        <div className="section-container flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <span className="font-bold text-base">{displayName}</span>
            <span className="bg-opel-yellow text-opel-black text-xs font-bold px-2 py-0.5 rounded-full">
              {t.badge}
            </span>
          </div>
          <div className="flex gap-2">
            <button onClick={onQuote} className="btn-opel-primary !py-2 !text-sm">
              {t.cta1}
            </button>
            <button
              onClick={onTestDrive}
              className="btn-opel-secondary !py-2 !text-sm"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
            >
              {t.cta2}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
