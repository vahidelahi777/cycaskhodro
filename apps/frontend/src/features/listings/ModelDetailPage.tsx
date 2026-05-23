'use client'

import { useCallback, useRef } from 'react'
import type { VehicleFull } from '@/content/models/opel-mokka-e-2024.data'
import ModelHero from './ModelHero'
import ModelGallery from './ModelGallery'
import ModelHighlights from './ModelHighlights'
import ModelSpecsTable from './ModelSpecsTable'
import ModelContactForm from './ModelContactForm'

interface Props {
  data: VehicleFull
  locale: string
}

export default function ModelDetailPage({ data, locale }: Props) {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="bg-white">
      {/* 1 — Hero (full-bleed, no section padding) */}
      <ModelHero
        data={data}
        locale={locale}
        onQuote={scrollToForm}
        onTestDrive={scrollToForm}
      />

      {/* 2 — Gallery  bg: white */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <ModelGallery photos={data.photoManifest} locale={locale} />
        </div>
      </section>

      {/* 3 — Highlights  bg: opel-black/5 */}
      <section className="py-16 md:py-24 bg-opel-black/5">
        <div className="section-container">
          <ModelHighlights ev={data.ev} locale={locale} />
        </div>
      </section>

      {/* 4 — Specs  bg: white */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-3xl">
          <ModelSpecsTable data={data} locale={locale} />
        </div>
      </section>

      {/* 5 — Contact form  bg: opel-black, white card */}
      <section className="py-16 md:py-24 bg-opel-black" ref={formRef}>
        <div className="section-container max-w-xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-opel-hover">
            <ModelContactForm locale={locale} />
          </div>
        </div>
      </section>
    </div>
  )
}
