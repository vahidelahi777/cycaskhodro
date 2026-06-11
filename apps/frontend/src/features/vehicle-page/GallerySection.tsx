'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronRight, ChevronLeft, ZoomIn } from 'lucide-react'

interface GalleryItem {
  url: string
  alt: string
}

interface Props {
  gallery: GalleryItem[]
  modelName: string
}

export default function GallerySection({ gallery, modelName }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const prev = () =>
    setLightboxIdx((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null))
  const next = () =>
    setLightboxIdx((i) => (i !== null ? (i + 1) % gallery.length : null))

  if (!gallery.length) return null

  const [hero, ...thumbs] = gallery

  return (
    <>
      <section id="gallery" className="bg-white py-16 md:py-24" dir="rtl">
        <div className="section-container">
          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs text-opel-yellow font-bold tracking-[0.25em] uppercase">گالری</span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 mt-1">
                {modelName} از هر زاویه
              </h2>
            </div>
            <span className="text-sm text-neutral-400">{gallery.length} تصویر</span>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* Hero image — spans 2 rows on desktop */}
            <div
              className="col-span-2 md:row-span-2 relative rounded-xl overflow-hidden bg-neutral-100 aspect-video md:aspect-auto cursor-zoom-in group"
              onClick={() => setLightboxIdx(0)}
            >
              <Image
                src={hero.url}
                alt={hero.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
              </div>
            </div>

            {/* Thumbnails */}
            {thumbs.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden bg-neutral-100 aspect-video cursor-zoom-in group"
                onClick={() => setLightboxIdx(i + 1)}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
                {/* "more" overlay on last visible thumb if more items exist */}
                {i === 3 && gallery.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">+{gallery.length - 5}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 left-4 z-10 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightboxIdx(null)}
            >
              <X size={28} />
            </button>

            {/* Counter */}
            <span className="absolute top-5 right-1/2 translate-x-1/2 text-white/50 text-sm">
              {lightboxIdx + 1} / {gallery.length}
            </span>

            {/* Prev */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-5xl max-h-[80vh] mx-16 aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={gallery[lightboxIdx].url}
                  alt={gallery[lightboxIdx].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] no-scrollbar px-4">
              {gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIdx(i) }}
                  className={`relative shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                    i === lightboxIdx ? 'border-opel-yellow' : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image src={item.url} alt={item.alt} fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
