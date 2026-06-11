'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { OpelVehicle } from '@/types/vehicle-page'

type Tab = 'dimensions' | 'performance' | 'technology'

interface Props {
  vehicle: OpelVehicle
}

export default function SpecsSection({ vehicle }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('dimensions')
  const { dimensions: dims, performance, technology, safety } = vehicle.specs

  const tabs: { key: Tab; label: string }[] = [
    { key: 'dimensions', label: 'ابعاد و وزن' },
    { key: 'performance', label: 'عملکرد' },
    { key: 'technology', label: 'فناوری' },
  ]

  const dimensionsRows = [
    { label: 'طول', value: `${dims.length.toLocaleString('fa-IR')} mm` },
    { label: 'عرض (بدون آینه)', value: `${dims.width.toLocaleString('fa-IR')} mm` },
    { label: 'ارتفاع', value: `${dims.height.toLocaleString('fa-IR')} mm` },
    { label: 'فاصله محور‌ها', value: `${dims.wheelbase.toLocaleString('fa-IR')} mm` },
    { label: 'حجم صندوق عقب', value: `${dims.trunkVolume.toLocaleString('fa-IR')} لیتر` },
    ...(dims.weight ? [{ label: 'وزن (kg)', value: `${dims.weight.toLocaleString('fa-IR')} کیلوگرم` }] : []),
  ]

  const spec = vehicle.powertrain.specs[vehicle.powertrain.default]

  const performanceRows = [
    { label: 'شتاب ۰ تا ۱۰۰', value: `${performance.acceleration0100} ثانیه` },
    { label: 'حداکثر سرعت', value: `${performance.topSpeed} km/h` },
    ...(performance.range ? [{ label: 'برد WLTP', value: `${performance.range} km` }] : []),
    ...(spec?.fuelConsumption ? [{ label: 'مصرف سوخت', value: spec.fuelConsumption }] : []),
    { label: 'نوع انتقال قدرت', value: spec?.transmission ?? '—' },
    { label: 'نوع موتور', value: spec?.engineCode ?? '—' },
    { label: 'ظرفیت / باتری', value: spec?.displacement ?? '—' },
  ]

  const technologyRows = [
    { label: 'صفحه اینفوتینمنت', value: technology.screenSize },
    { label: 'Apple CarPlay', value: technology.appleCarPlay ? 'استاندارد' : 'ندارد' },
    { label: 'Android Auto', value: technology.androidAuto ? 'استاندارد' : 'ندارد' },
    { label: 'دوربین ۳۶۰', value: technology.camera360 ? 'استاندارد' : 'اختیاری' },
    { label: 'تمپومات تطبیقی', value: technology.adaptiveCruise ? 'استاندارد' : 'اختیاری' },
    { label: 'کمک نگهداری خط', value: technology.laneAssist ? 'استاندارد' : 'اختیاری' },
    { label: 'تعداد کیسه هوا', value: `${safety.airbags} عدد` },
    ...(safety.euroncap ? [{ label: 'رتبه Euro NCAP', value: `${safety.euroncap} ستاره` }] : []),
  ]

  const rowsMap: Record<Tab, { label: string; value: string }[]> = {
    dimensions: dimensionsRows,
    performance: performanceRows,
    technology: technologyRows,
  }

  return (
    <section id="specs" className="bg-white py-16 md:py-24" dir="rtl">
      <div className="section-container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs text-opel-yellow font-bold tracking-[0.25em] uppercase">مشخصات</span>
          <h2 className="text-2xl md:text-4xl font-black text-neutral-900 mt-2">
            مشخصات فنی کامل
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-neutral-100 rounded-xl p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="border border-neutral-200 rounded-2xl overflow-hidden">
            {rowsMap[activeTab].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                } border-b border-neutral-100 last:border-0`}
              >
                <span className="text-sm text-neutral-600">{row.label}</span>
                <span className="text-sm font-bold text-neutral-900">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dimensional diagram hint */}
        {activeTab === 'dimensions' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 grid grid-cols-3 gap-4"
          >
            {[
              { icon: '↔', label: 'طول', value: `${dims.length} mm` },
              { icon: '↕', label: 'ارتفاع', value: `${dims.height} mm` },
              { icon: '⟷', label: 'فاصله محورها', value: `${dims.wheelbase} mm` },
            ].map((item) => (
              <div key={item.label} className="text-center bg-neutral-50 rounded-xl py-5 px-3">
                <span className="text-2xl text-neutral-300 block mb-1">{item.icon}</span>
                <p className="text-base font-black text-neutral-900">{item.value}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{item.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
