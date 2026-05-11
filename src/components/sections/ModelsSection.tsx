'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Zap, Gauge, ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { VEHICLES } from '@/lib/data'
import type { VehicleCategory } from '@/types'

const FILTERS: { key: 'all' | VehicleCategory; labelKey: string }[] = [
  { key: 'all', labelKey: 'models.filterAll' },
  { key: 'suv', labelKey: 'models.filterSuv' },
  { key: 'hatchback', labelKey: 'models.filterHatchBack' },
  { key: 'sedan', labelKey: 'models.filterSedan' },
]

export function ModelsSection() {
  const t = useTranslations()
  const locale = useLocale()
  const isRTL = locale === 'fa'
  const [activeFilter, setActiveFilter] = useState<'all' | VehicleCategory>('all')

  const filtered =
    activeFilter === 'all' ? VEHICLES : VEHICLES.filter((v) => v.category === activeFilter)

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="models">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-1 bg-opel-yellow" />
              <p className="text-opel-black font-black text-[10px] uppercase tracking-[0.4em]">
                {t('models.subtitle')}
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-opel-black uppercase tracking-tighter leading-none"
            >
              {t('models.title')}
            </motion.h2>
          </div>

          {/* Luxury Filter Toggle */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F6F6F6] p-1.5 rounded-none border border-black/5">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  'px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300',
                  activeFilter === filter.key
                    ? 'bg-opel-black text-white shadow-xl'
                    : 'text-opel-black/40 hover:text-opel-black'
                )}
              >
                {t(filter.labelKey as any)}
              </button>
            ))}
          </div>
        </div>

        {/* Improved Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#F9F9F9] hover:bg-white transition-all duration-700 border border-black/[0.03] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] p-8 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-12">
                <motion.img
                  layoutId={`img-${vehicle.id}`}
                  src={vehicle.thumbnailImage}
                  alt={vehicle.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                />
                
                {/* Status Badge */}
                <div className="absolute top-[-10px] right-[-10px] z-10">
                  <span className={cn(
                    "px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg inline-block",
                    vehicle.status === 'available' ? "bg-opel-yellow text-opel-black" : "bg-opel-black text-white"
                  )}>
                    {t(`models.status.${vehicle.status}`)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-opel-black uppercase tracking-tighter leading-none mb-1">
                       {vehicle.name}
                    </h3>
                    <p className="text-opel-black/40 text-[10px] font-black uppercase tracking-widest">
                       {vehicle.category} • {vehicle.year}
                    </p>
                  </div>
                  <div className="bg-opel-yellow p-3">
                     <Zap size={16} className="text-opel-black" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-12 border-y border-black/[0.05] py-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-opel-black/30 text-[9px] font-black uppercase tracking-widest">{t('models.specs.engine')}</span>
                    <span className="text-opel-black text-sm font-bold">{vehicle.specs.engine}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-opel-black/30 text-[9px] font-black uppercase tracking-widest">{t('models.specs.horsepower')}</span>
                    <span className="text-opel-black text-sm font-bold">{vehicle.specs.horsepower} HP</span>
                  </div>
                </div>

                <div className="mt-auto flex gap-4">
                  <Link
                    href={`/${locale}/models/${vehicle.slug}`}
                    className="flex-1 py-4 bg-opel-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-opel-yellow hover:text-opel-black transition-all duration-300 text-center"
                  >
                    {t('models.detailsBtn')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
