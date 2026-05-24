'use client'

import { motion } from 'framer-motion'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
}

export default function PowertrainStats({ vehicle }: Props) {
  const spec = vehicle.powertrain.specs[vehicle.powertrain.default]

  const stats = [
    { label: 'قدرت موتور', value: spec?.power ?? '—', unit: '' },
    { label: 'گشتاور', value: spec?.torque ?? '—', unit: '' },
    { label: 'مصرف سوخت', value: spec?.fuelConsumption ?? '—', unit: '' },
    { label: 'جعبه دنده', value: spec?.transmission ?? '—', unit: '' },
  ]

  return (
    <section className="bg-[#0A0A0A] py-16 md:py-20" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          مشخصات فنی
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#141418] rounded-lg p-6 text-center border border-white/5"
            >
              <p className="text-3xl md:text-4xl font-bold font-mono text-opel-yellow leading-tight">
                {stat.value}
              </p>
              {stat.unit && (
                <p className="text-sm text-white/50 mt-1">{stat.unit}</p>
              )}
              <p className="text-sm text-white/70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
