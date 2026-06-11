'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Monitor, Gauge, Thermometer, Volume2 } from 'lucide-react'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
}

const COCKPIT_FEATURES = [
  {
    icon: <Monitor size={20} />,
    title: 'Pure Panel',
    desc: 'دو صفحه‌نمایش یکپارچه ۱۰ اینچ با رابط لمسی تمام‌عیار',
  },
  {
    icon: <Gauge size={20} />,
    title: 'کلاستر دیجیتال',
    desc: 'داشبورد تمام‌دیجیتال با نمایش اطلاعات سفارشی',
  },
  {
    icon: <Thermometer size={20} />,
    title: 'صندلی‌های گرمایشی',
    desc: 'کنترل حرارتی صندلی‌های جلو برای آسایش در هر آب‌وهوایی',
  },
  {
    icon: <Volume2 size={20} />,
    title: 'سیستم صوتی ۶ بلندگو',
    desc: 'صدایی که کابین را به سالن کنسرت تبدیل می‌کند',
  },
]

export default function InteriorSection({ vehicle }: Props) {
  const interior = vehicle.media.interior
  if (!interior?.length) return null

  const [hero, ...rest] = interior

  return (
    <section id="interior" className="bg-[#0A0A0C]" dir="rtl">

      {/* ── Full-bleed cockpit hero ── */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src={hero.url}
          fill
          alt={hero.alt}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />

        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] text-opel-yellow font-black tracking-[0.4em] uppercase block mb-3">
              فضای داخلی
            </span>
            <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black text-white leading-tight uppercase mb-3">
              کابین آینده
            </h2>
            {hero.caption && (
              <p className="text-white/60 text-base max-w-lg">{hero.caption}</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Feature grid + second interior shot ── */}
      <div className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Feature list */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COCKPIT_FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/8 rounded-xl p-5 hover:bg-white/8 transition-colors"
                >
                  <span className="w-10 h-10 bg-opel-yellow rounded-lg flex items-center justify-center mb-4">
                    <span className="text-black">{feature.icon}</span>
                  </span>
                  <h3 className="text-base font-black text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second interior shot */}
          {rest[0] && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={rest[0].url}
                fill
                alt={rest[0].alt}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
              {rest[0].caption && (
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-2 rounded-lg">
                  {rest[0].caption}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
