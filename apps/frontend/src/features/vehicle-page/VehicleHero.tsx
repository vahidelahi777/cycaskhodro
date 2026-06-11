'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
  onConsult: () => void
  onScrollToTrims: () => void
}

export default function VehicleHero({ vehicle, onConsult, onScrollToTrims }: Props) {
  const isElectric = vehicle.powertrain.default === 'electric'
  const spec = vehicle.powertrain.specs[vehicle.powertrain.default]

  const stats = isElectric
    ? [
        { label: 'برد WLTP', value: `${vehicle.specs.performance.range ?? 403}`, unit: 'km' },
        { label: 'شارژ سریع', value: '۲۷', unit: 'min' },
        { label: 'توان', value: '۱۵۶', unit: 'PS' },
        { label: 'باتری', value: '۵۴', unit: 'kWh' },
      ]
    : [
        { label: 'توان موتور', value: spec?.power?.replace(' اسب بخار', '').replace(/ \(.*\)/, '') ?? '—', unit: '' },
        { label: 'گشتاور', value: spec?.torque?.replace(' نیوتون‌متر', '') ?? '—', unit: 'Nm' },
        { label: 'حداکثر سرعت', value: `${vehicle.specs.performance.topSpeed}`, unit: 'km/h' },
        { label: '۰ تا ۱۰۰', value: `${vehicle.specs.performance.acceleration0100}`, unit: 's' },
      ]

  return (
    <section className="relative min-h-screen bg-[#07070A] overflow-hidden" dir="rtl">

      {/* Background image — full bleed */}
      <Image
        src={vehicle.media.heroImage}
        fill
        className="object-cover opacity-55"
        priority
        alt={vehicle.model}
        sizes="100vw"
        quality={90}
      />

      {/* Multi-layer gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-[#07070A]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07070A]/60 via-transparent to-transparent" />

      {/* EV glow accent (only for electric) */}
      {isElectric && (
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#FFD000]/5 to-transparent pointer-events-none" />
      )}

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 md:pb-24 px-6 md:px-16 lg:px-24">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            {isElectric && (
              <span className="inline-flex items-center gap-1.5 bg-opel-yellow text-black text-[9px] font-black tracking-[0.25em] uppercase px-3 py-1.5">
                <Zap size={10} fill="currentColor" />
                ELECTRIC
              </span>
            )}
            <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-bold">
              OPEL
            </span>
          </div>

          {/* Model name */}
          <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-black text-white leading-none tracking-tight uppercase mb-2">
            {vehicle.model}
          </h1>

          {/* Year + tagline */}
          <p className="text-opel-yellow text-lg md:text-xl font-light mb-10 tracking-wide">
            {vehicle.year} — {vehicle.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={onScrollToTrims}
              className="inline-flex items-center justify-center bg-opel-yellow text-black font-black text-sm px-10 py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              مشاهده تریم‌ها
            </button>
            <button
              onClick={onConsult}
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-bold text-sm px-10 py-4 uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              درخواست مشاوره
            </button>
          </div>

          {/* Key stats bar */}
          <div className="flex flex-wrap gap-px border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 min-w-[120px] px-5 py-4 bg-black/20 border-r border-white/8 last:border-0 text-center md:text-right"
              >
                <p className="text-xl md:text-2xl font-black text-white leading-none">
                  {s.value}
                  {s.unit && <span className="text-xs text-white/50 font-bold ml-1">{s.unit}</span>}
                </p>
                <p className="text-[10px] text-white/40 mt-1 tracking-wider uppercase font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-6 left-6 md:left-16 flex flex-col items-center gap-1.5 text-white/25"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <span className="text-[8px] tracking-[0.35em] uppercase font-bold">اسکرول</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  )
}
