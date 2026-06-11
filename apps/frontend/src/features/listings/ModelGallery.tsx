'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import type { PhotoItem } from '@/content/models/opel-mokka-e-2024.data'

const FA = { close: 'بستن', prev: 'قبلی', next: 'بعدی', gallery: 'گالری تصاویر' }
const EN = { close: 'Close', prev: 'Previous', next: 'Next', gallery: 'Photo gallery' }

interface Props {
  photos: PhotoItem[]
  locale: string
}

export default function ModelGallery({ photos, locale }: Props) {
  const t = locale === 'fa' ? FA : EN
  const galleryPhotos = photos.filter((p) => p.use !== 'thumbnail')
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const prev = useCallback(() => setActive((i) => (i - 1 + galleryPhotos.length) % galleryPhotos.length), [galleryPhotos.length])
  const next = useCallback(() => setActive((i) => (i + 1) % galleryPhotos.length), [galleryPhotos.length])

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxOpen, prev, next])

  if (galleryPhotos.length === 0) return null

  return (
    <div dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      {/* Main image */}
      <div
        className="relative w-full h-[380px] md:h-[520px] bg-opel-gray-100 overflow-hidden cursor-zoom-in rounded-lg"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          key={active}
          src={galleryPhotos[active].src}
          alt={locale === 'fa' ? galleryPhotos[active].altFa : galleryPhotos[active].alt}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="bg-opel-black/50 rounded-full p-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      {galleryPhotos.length > 1 && (
        <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
          {galleryPhotos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setActive(i)}
              aria-label={locale === 'fa' ? photo.altFa : photo.alt}
              className={`relative w-24 h-16 shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
                i === active
                  ? 'ring-2 ring-opel-yellow ring-offset-1'
                  : 'ring-2 ring-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={photo.src}
                alt={locale === 'fa' ? photo.altFa : photo.alt}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox — uses normal flow with absolute positioning within a fixed viewport cover */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-opel-black/95 flex flex-col items-center justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxOpen(false) }}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label={t.close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full max-w-4xl h-[70vh] mx-4">
            <Image
              key={active}
              src={galleryPhotos[active].src}
              alt={locale === 'fa' ? galleryPhotos[active].altFa : galleryPhotos[active].alt}
              fill
              className="object-contain transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Counter */}
          <p className="text-white/50 text-sm mt-4">
            {active + 1} / {galleryPhotos.length}
          </p>

          {/* Arrows */}
          {galleryPhotos.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label={t.prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-opel-yellow hover:text-opel-yellow transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label={t.next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-opel-yellow hover:text-opel-yellow transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
