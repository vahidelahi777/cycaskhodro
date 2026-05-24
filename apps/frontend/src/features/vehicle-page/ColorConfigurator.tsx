'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import type { VehicleColor } from '@/types/vehicle-page'

interface Props {
  colors: VehicleColor[]
  modelName: string
}

export default function ColorConfigurator({ colors, modelName }: Props) {
  const [selectedColor, setSelectedColor] = useState<VehicleColor>(colors[0])

  return (
    <section id="colors" className="bg-[#F8F7F4] py-16 md:py-24" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 md:flex md:gap-12 md:items-center">
        {/* Image panel */}
        <div className="md:flex-1 relative overflow-hidden rounded-xl mb-8 md:mb-0 aspect-video bg-[#EDEDEA]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedColor.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={selectedColor.image}
                fill
                alt={`${modelName} ${selectedColor.name}`}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls panel */}
        <div className="md:w-80">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900">رنگ‌بندی</h2>

          <p className="text-sm text-neutral-500 mb-4">{modelName}</p>

          {/* Color swatches */}
          <div className="flex flex-wrap gap-3 mb-4">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => {
                  if (color.available) setSelectedColor(color)
                }}
                title={color.name}
                disabled={!color.available}
                className={`w-12 h-12 rounded-full border-2 transition-all ${
                  selectedColor.id === color.id
                    ? 'border-neutral-900 scale-110'
                    : 'border-transparent hover:border-neutral-400'
                } ${!color.available ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
              />
            ))}
          </div>

          {/* Selected color label */}
          <p className="mt-4 text-sm font-medium text-neutral-700">
            {selectedColor.name}
            <span className="text-neutral-400 mr-1">— {selectedColor.nameEn}</span>
          </p>

          {/* Availability badge */}
          {!selectedColor.available && (
            <span className="inline-block mt-3 text-xs bg-neutral-200 text-neutral-600 px-3 py-1 rounded-full">
              به زودی موجود می‌شود
            </span>
          )}

          {selectedColor.availableSoon && (
            <span className="inline-block mt-3 text-xs bg-neutral-200 text-neutral-600 px-3 py-1 rounded-full">
              به زودی موجود می‌شود
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
