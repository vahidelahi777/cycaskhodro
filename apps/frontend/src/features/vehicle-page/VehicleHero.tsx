'use client'

import Image from 'next/image'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
  onConsult: () => void
  onScrollToTrims: () => void
}

export default function VehicleHero({ vehicle, onConsult, onScrollToTrims }: Props) {
  return (
    <section className="relative min-h-screen bg-[#0A0A0C] overflow-hidden" dir="rtl">
      {/* Background image */}
      <Image
        src={vehicle.media.heroImage}
        fill
        className="object-cover opacity-50"
        priority
        alt={vehicle.model}
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24 px-6 md:px-16 lg:px-24">
        <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-3">Opel</p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-3 tracking-tight">
          {vehicle.model} {vehicle.year}
        </h1>

        <p className="text-lg md:text-2xl text-opel-yellow font-light mb-8">
          {vehicle.tagline}
        </p>

        {/* Stats pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-xs px-3 py-1.5 rounded-full border border-white/10">
            <span className="text-opel-yellow font-bold">{vehicle.trims.length}</span>
            تریم
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-xs px-3 py-1.5 rounded-full border border-white/10">
            <span className="text-opel-yellow font-bold">{vehicle.colors.length}</span>
            رنگ
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={onConsult}
            className="inline-flex items-center justify-center bg-opel-yellow text-black font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all text-sm md:text-base"
          >
            درخواست مشاوره
          </button>
          <button
            onClick={onScrollToTrims}
            className="inline-flex items-center justify-center border border-white/50 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-sm md:text-base"
          >
            مشاهده تریم‌ها
          </button>
        </div>
      </div>
    </section>
  )
}
