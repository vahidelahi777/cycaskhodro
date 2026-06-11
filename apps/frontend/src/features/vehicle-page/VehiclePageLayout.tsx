'use client'

import { useRef, useState } from 'react'
import type { OpelVehicle } from '@/types/vehicle-page'

/* ── Hero variants ── */
import VehicleHeroVideo from './VehicleHeroVideo'   // video / cinematic hero
import VehicleHero       from './VehicleHero'        // image-only fallback

/* ── opel.de-style sections ── */
import DaresToBeDifferent   from './DaresToBeDifferent'
import HighlightPanels      from './HighlightPanels'
import ExteriorSection      from './ExteriorSection'
import InteriorSection      from './InteriorSection'
import PowertrainStats      from './PowertrainStats'
import ColorConfigurator    from './ColorConfigurator'
import TrimCards            from './TrimCards'
import GallerySection       from './GallerySection'
import FeatureHighlights    from './FeatureHighlights'
import SpecsSection         from './SpecsSection'
import ImportWarrantySection from './ImportWarrantySection'
import RelatedModels        from './RelatedModels'

/* ── Layout shell ── */
import ApplePremiumHeader from '@/shared/layout/ApplePremiumHeader'
import PremiumFooter      from '@/shared/layout/PremiumFooter'

export default function VehiclePageLayout({ vehicle }: { vehicle: OpelVehicle }) {
  const trimsRef = useRef<HTMLDivElement>(null)
  const [, setConsultOpen] = useState(false)

  const scrollToTrims = () =>
    trimsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const hasVideo    = !!vehicle.heroVideo
  const hasHighlights = vehicle.highlights && vehicle.highlights.length > 0
  const hasExterior   = vehicle.media.exterior && vehicle.media.exterior.length > 0
  const hasInterior   = vehicle.media.interior && vehicle.media.interior.length > 0

  return (
    <div className="bg-white">
      <ApplePremiumHeader />

      {/* ──────────────────────────────────────────
          1. HERO — video if available, else image
      ────────────────────────────────────────── */}
      {hasVideo ? (
        <VehicleHeroVideo
          vehicle={vehicle}
          onConsult={() => setConsultOpen(true)}
          onScrollToTrims={scrollToTrims}
        />
      ) : (
        <VehicleHero
          vehicle={vehicle}
          onConsult={() => setConsultOpen(true)}
          onScrollToTrims={scrollToTrims}
        />
      )}

      {/* ──────────────────────────────────────────
          2. "DARES TO BE DIFFERENT" statement
      ────────────────────────────────────────── */}
      <DaresToBeDifferent vehicle={vehicle} />

      {/* ──────────────────────────────────────────
          3. HIGHLIGHT PANELS (opel.de feature nav)
      ────────────────────────────────────────── */}
      {hasHighlights && (
        <HighlightPanels
          highlights={vehicle.highlights!}
          modelName={vehicle.model}
        />
      )}

      {/* ──────────────────────────────────────────
          4. EXTERIOR DESIGN (full-bleed + callouts)
      ────────────────────────────────────────── */}
      {hasExterior && <ExteriorSection vehicle={vehicle} />}

      {/* ──────────────────────────────────────────
          5. INTERIOR / COCKPIT
      ────────────────────────────────────────── */}
      {hasInterior && <InteriorSection vehicle={vehicle} />}

      {/* ──────────────────────────────────────────
          6. PERFORMANCE KEY STATS BAR
      ────────────────────────────────────────── */}
      <PowertrainStats vehicle={vehicle} />

      {/* ──────────────────────────────────────────
          7. TRIM SELECTOR
      ────────────────────────────────────────── */}
      <div ref={trimsRef}>
        <TrimCards trims={vehicle.trims} onConsult={() => setConsultOpen(true)} />
      </div>

      {/* ──────────────────────────────────────────
          8. COLOR CONFIGURATOR
      ────────────────────────────────────────── */}
      <ColorConfigurator colors={vehicle.colors} modelName={vehicle.model} />

      {/* ──────────────────────────────────────────
          9. PHOTO GALLERY + LIGHTBOX
      ────────────────────────────────────────── */}
      <GallerySection gallery={vehicle.media.gallery} modelName={vehicle.model} />

      {/* ──────────────────────────────────────────
          10. TECHNOLOGY & SAFETY FEATURES
      ────────────────────────────────────────── */}
      <FeatureHighlights vehicle={vehicle} />

      {/* ──────────────────────────────────────────
          11. FULL TECHNICAL SPECS TABLE
      ────────────────────────────────────────── */}
      <SpecsSection vehicle={vehicle} />

      {/* ──────────────────────────────────────────
          12. WARRANTY & IMPORT INFO
      ────────────────────────────────────────── */}
      <ImportWarrantySection vehicle={vehicle} />

      {/* ──────────────────────────────────────────
          13. RELATED MODELS
      ────────────────────────────────────────── */}
      <RelatedModels currentModelId={vehicle.id} />

      <PremiumFooter />
    </div>
  )
}
