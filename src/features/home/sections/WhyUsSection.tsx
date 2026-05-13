'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'

const WHY_US_FEATURES = [
  { key: 'official' },
  { key: 'original' },
  { key: 'warranty' },
  { key: 'support' },
] as const

const STATS = [
  { value: 10, suffix: '+', key: 'experience' },
  { value: 5000, suffix: '+', key: 'customers' },
  { value: 3500, suffix: '+', key: 'vehicles' },
  { value: 15, suffix: '', key: 'agencies' },
]

export function WhyUsSection() {
  const t = useTranslations('whyUs')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-32 bg-white overflow-hidden relative border-t border-black/5">
      {/* Background Architectural Text */}
      <div className="absolute top-0 right-0 text-[18rem] md:text-[25rem] font-black text-[#F6F6F6] select-none pointer-events-none translate-x-1/4 -translate-y-1/4 uppercase tracking-tighter leading-none opacity-80">
        Sikas
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          {/* Content Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-1 bg-opel-yellow shadow-[0_0_15px_rgba(255,209,0,0.3)]" />
                <p className="text-opel-black font-black text-[10px] uppercase tracking-[0.4em]">
                  {t('subtitle')}
                </p>
              </div>
              
              <h2 className="text-6xl md:text-[9rem] font-black text-opel-black leading-[0.8] mb-12 uppercase tracking-tighter">
                {t('title')}
              </h2>

              <p className="text-xl md:text-2xl text-opel-black/50 mb-16 leading-relaxed max-w-xl font-medium">
                {t('description')}
              </p>

              {/* High-Fidelity Features Grid */}
              <div className="grid sm:grid-cols-2 gap-12">
                {WHY_US_FEATURES.map((feature, i) => (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-4 border-l-2 border-transparent group-hover:border-opel-yellow ps-0 group-hover:ps-4 transition-all duration-500">
                      <div className="w-12 h-12 bg-opel-black flex items-center justify-center group-hover:bg-opel-yellow transition-colors duration-500">
                        <CheckCircle2 size={20} className="text-white group-hover:text-opel-black transition-colors" />
                      </div>
                      <h4 className="font-black text-opel-black text-[11px] uppercase tracking-[0.2em]">
                        {t(`features.${feature.key}.title`)}
                      </h4>
                    </div>
                    <p className="text-opel-black/40 text-sm leading-relaxed ps-16">
                      {t(`features.${feature.key}.desc`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Column - Modern Layout */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                className="relative bg-opel-black p-12 flex flex-col justify-end aspect-square hover:bg-opel-yellow group transition-all duration-700 overflow-hidden"
              >
                {/* Decorative background number */}
                <div className="absolute top-4 right-4 text-7xl font-black text-white/5 group-hover:text-black/5 transition-colors duration-500">
                  {i + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="text-4xl sm:text-7xl font-black text-white group-hover:text-opel-black transition-colors mb-2 tracking-tighter">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={3}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <p className="text-[10px] font-black text-white/40 group-hover:text-opel-black/60 uppercase tracking-[0.2em]">
                    {t(`stats.${stat.key}`)}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-opel-yellow group-hover:bg-opel-black transition-colors duration-500 clip-path-triangle" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
