'use client'

import Image from 'next/image'
import type { TrimSpec, TrimLevel } from '@/types/vehicle-page'
import { formatTomanCompact } from '@/lib/persian'

interface Props {
  trims: TrimSpec[]
  onConsult: (level: TrimLevel) => void
}

export default function TrimCards({ trims, onConsult }: Props) {
  return (
    <section id="trims" className="bg-[#0A0A0A] py-16 md:py-24" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          تریم‌های موجود
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trims.map((trim) => (
            <div
              key={trim.level}
              className={`bg-[#1C1C22] rounded-xl overflow-hidden flex flex-col ${
                trim.isRecommended ? 'ring-2 ring-opel-yellow' : ''
              }`}
            >
              {/* Trim image */}
              <div className="relative h-48 bg-[#111]">
                <Image
                  src={trim.heroImage}
                  fill
                  alt={trim.displayName}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Trim name + badge */}
                <div className="inline-flex gap-2 items-center mb-4">
                  <span className="text-lg font-bold text-white">{trim.displayName}</span>
                  {trim.highlightBadge && (
                    <span className="text-xs bg-opel-yellow text-black px-2 py-0.5 rounded-full font-bold">
                      {trim.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <p className="text-2xl font-bold text-white mb-1">
                  {formatTomanCompact(trim.price)}
                </p>

                {/* Installment */}
                {trim.installment && (
                  <p className="text-sm text-white/50 mb-4">
                    از {formatTomanCompact(trim.installment.monthlyPayment)} ماهانه
                  </p>
                )}

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {trim.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-opel-yellow mt-0.5 shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => onConsult(trim.level)}
                  className="w-full py-3 bg-opel-yellow text-black font-bold rounded-lg hover:brightness-110 transition text-sm"
                >
                  مشاوره و خرید
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
