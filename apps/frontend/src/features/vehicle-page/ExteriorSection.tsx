'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
}

export default function ExteriorSection({ vehicle }: Props) {
  const exterior = vehicle.media.exterior

  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1])

  if (!exterior?.length) return null

  const [hero, ...rest] = exterior

  return (
    <section ref={ref} id="design" className="bg-white" dir="rtl">

      {/* ── Section header ── */}
      <div className="section-container py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] text-opel-yellow font-black tracking-[0.4em] uppercase">
            طراحی خارجی
          </span>
          <h2 className="text-[clamp(2rem,6vw,5rem)] font-black text-black mt-3 leading-tight uppercase">
            شکل دهی به چشم‌انداز
          </h2>
          <p className="text-neutral-500 text-base max-w-lg mx-auto mt-4">
            ترکیب چراغ‌های Pixel LED، کاپوت کوتاه، و بدنه عضلانی — یک کراس‌اور که به جای هر کلمه‌ای صحبت می‌کند.
          </p>
        </motion.div>
      </div>

      {/* ── Hero exterior shot with parallax ── */}
      <div className="relative overflow-hidden h-[55vw] min-h-[340px] max-h-[700px]">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src={hero.url}
            fill
            alt={hero.alt}
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Floating callouts */}
        {hero.callouts?.map((callout) => (
          <motion.div
            key={callout.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute z-10 flex items-center gap-2"
            style={{
              top: callout.top,
              left: callout.left,
              right: callout.right,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-opel-yellow animate-pulse" />
            <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
              {callout.label}
            </span>
          </motion.div>
        ))}

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ── Secondary shots grid ── */}
      {rest.length > 0 && (
        <div className="section-container py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {rest.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
            >
              <Image
                src={item.url}
                fill
                alt={item.alt}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {item.callouts?.map((callout) => (
                <div
                  key={callout.label}
                  className="absolute z-10 flex items-center gap-2"
                  style={{ top: callout.top, left: callout.left, right: callout.right }}
                >
                  <span className="w-2 h-2 rounded-full bg-opel-yellow" />
                  <span className="bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {callout.label}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
