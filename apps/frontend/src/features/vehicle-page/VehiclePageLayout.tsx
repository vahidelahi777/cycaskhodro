'use client'

import { useRef, useState } from 'react'
import type { OpelVehicle } from '@/types/vehicle-page'
import VehicleHero from './VehicleHero'
import PowertrainStats from './PowertrainStats'
import TrimCards from './TrimCards'
import ColorConfigurator from './ColorConfigurator'

export default function VehiclePageLayout({ vehicle }: { vehicle: OpelVehicle }) {
  const trimsRef = useRef<HTMLDivElement>(null)
  const [, setConsultOpen] = useState(false)

  const scrollToTrims = () =>
    trimsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="bg-[#0A0A0C]">
      <VehicleHero
        vehicle={vehicle}
        onConsult={() => setConsultOpen(true)}
        onScrollToTrims={scrollToTrims}
      />
      <PowertrainStats vehicle={vehicle} />
      <div ref={trimsRef}>
        <TrimCards trims={vehicle.trims} onConsult={() => setConsultOpen(true)} />
      </div>
      <ColorConfigurator colors={vehicle.colors} modelName={vehicle.model} />
    </div>
  )
}
