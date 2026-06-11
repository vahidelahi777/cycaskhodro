'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { OPEL_MODELS } from '@/content/models'
import { formatTomanCompact } from '@/lib/persian'

interface Props {
  currentModelId: string
}

export default function RelatedModels({ currentModelId }: Props) {
  const related = OPEL_MODELS.filter((m) => m.id !== currentModelId)

  return (
    <section id="related" className="bg-neutral-50 border-t border-neutral-100 py-16 md:py-24" dir="rtl">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs text-opel-yellow font-bold tracking-[0.25em] uppercase">
              کشف کنید
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 mt-1">
              سایر خودروهای اوپل
            </h2>
          </div>
          <Link
            href="/fa/models"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            مشاهده همه
            <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>

        {/* Related grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {related.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/fa${model.href}`}
                className="group flex items-center gap-5 bg-white border border-neutral-100 hover:border-neutral-300 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg"
              >
                {/* Thumbnail */}
                <div className="relative w-28 h-20 shrink-0 bg-neutral-50 rounded-xl overflow-hidden">
                  <Image
                    src={model.thumbnail}
                    alt={model.nameFa}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                    sizes="112px"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-0.5">
                    {model.nameEn}
                  </p>
                  <h3 className="text-base font-black text-neutral-900 truncate">{model.nameFa}</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">{model.bodyStyle}</p>
                  <p className="text-sm font-bold text-neutral-800 mt-2">
                    از {formatTomanCompact(model.startingPrice)}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowLeft
                  size={18}
                  className="text-neutral-300 group-hover:text-opel-yellow group-hover:-translate-x-1 transition-all duration-200 rotate-180 shrink-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile: view all CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/fa/models" className="btn-opel-primary px-8 py-3 text-sm rounded-xl">
            مشاهده همه خودروها
          </Link>
        </div>
      </div>
    </section>
  )
}
