'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[750px] overflow-hidden bg-white flex items-center"
    >
      {/* Dynamic Background Image */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full lg:w-3/5 xl:w-[55%] pointer-events-none"
        style={{ y: yBg }}
      >
        <motion.div
           initial={{ scale: 1.1, opacity: 0, x: 50 }}
           animate={{ scale: 1, opacity: 1, x: 0 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-full h-full relative"
        >
          <img
            src="/images/astra.webp"
            alt="Opel Astra"
            className="w-full h-full object-contain md:object-right scale-125 md:scale-150 lg:scale-[1.7] xl:scale-[2] origin-center md:origin-right transition-transform duration-[15s] ease-linear hover:scale-[2.1]"
          />
          {/* Subtle Mask for better text integration */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent hidden lg:block" />
        </motion.div>
        
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-white/40 lg:hidden backdrop-blur-[2px]" />
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-2.5 bg-opel-yellow z-20" 
      />

      {/* Hero Content Container */}
      <div className="section-container relative z-10">
        <motion.div
          className="max-w-4xl"
          style={{ opacity }}
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-1 bg-opel-yellow shadow-[0_0_15px_rgba(255,209,0,0.5)]" />
            <span className="text-opel-black text-[12px] uppercase tracking-[0.6em] font-black">
              {t('tagline')}
            </span>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-black text-opel-black leading-[0.8] mb-12 tracking-[-0.05em] uppercase"
          >
            <span className="block drop-shadow-sm select-none">{t('headline')}</span>
            <span className="block text-opel-yellow select-none transform hover:scale-[1.02] transition-transform duration-500 cursor-default">
                {t('headlineAccent')}
            </span>
          </motion.h1>

          {/* Elegant Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-opel-black/50 text-xl md:text-2xl mb-16 max-w-xl font-medium leading-relaxed"
          >
            {t('subheadline')}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-8"
          >
            <Link 
              href={`/${locale}/models`} 
              className="group relative overflow-hidden bg-opel-black text-white px-12 py-6 text-[12px] font-black uppercase tracking-[0.3em] transition-all hover:pr-16"
            >
              <span className="relative z-10">{t('cta.explore')}</span>
              <div className="absolute right-0 top-0 bottom-0 w-0 bg-opel-yellow group-hover:w-full transition-all duration-500 ease-out -z-0" />
              <ArrowDown className="absolute right-6 opacity-0 group-hover:opacity-100 -rotate-90 transition-all duration-300" size={16} />
            </Link>
            
            <Link 
              href={`/${locale}/contact`} 
              className="group relative border-2 border-opel-black text-opel-black px-12 py-5 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-opel-black hover:text-white transition-all overflow-hidden"
            >
              <span className="relative z-10">{t('cta.contact')}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements (Visual Polish) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-20 bottom-20 hidden xl:block"
      >
        <div className="w-40 h-40 border border-black/5 rounded-full flex items-center justify-center p-8">
            <div className="text-[10px] font-black text-opel-black/20 uppercase tracking-widest text-center leading-relaxed">
                Experience<br/>The Future
            </div>
        </div>
      </motion.div>

      {/* Bottom Progress Bar / Scroll Prompt */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-opel-black/20 to-opel-black/40 relative overflow-hidden">
            <motion.div 
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-opel-yellow w-full"
            />
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-opel-black/40 group-hover:text-opel-black transition-colors">Scroll</span>
      </motion.div>
    </section>
  )
}
