'use client'

import { useRef, useState } from 'react'
import type { OpelVehicle } from '@/types/vehicle-page'

import VehicleHeroVideo from './VehicleHeroVideo'
import VehicleHero       from './VehicleHero'

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

      <DaresToBeDifferent vehicle={vehicle} />

      {hasHighlights && (
        <HighlightPanels
          highlights={vehicle.highlights!}
          modelName={vehicle.model}
        />
      )}

      {hasExterior && <ExteriorSection vehicle={vehicle} />}

      {hasInterior && <InteriorSection vehicle={vehicle} />}

      <PowertrainStats vehicle={vehicle} />

      <div ref={trimsRef}>
        <TrimCards trims={vehicle.trims} onConsult={() => setConsultOpen(true)} />
      </div>

      <ColorConfigurator colors={vehicle.colors} modelName={vehicle.model} />

      <GallerySection gallery={vehicle.media.gallery} modelName={vehicle.model} />

      <FeatureHighlights vehicle={vehicle} />

      <SpecsSection vehicle={vehicle} />

      <ImportWarrantySection vehicle={vehicle} />

      <RelatedModels currentModelId={vehicle.id} />

      <PremiumFooter />
    </div>
  )
}
