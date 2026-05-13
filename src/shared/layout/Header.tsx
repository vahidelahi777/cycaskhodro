'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, Globe, Clock } from 'lucide-react'
import { useUIStore } from '@/store/ui.store'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { key: 'models', href: '/models' },
  { key: 'services', href: '/services' },
  { key: 'agencies', href: '/agencies' },
  { key: 'blog', href: '/blog' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
]

export function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null) // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    closeMobileMenu()
  }, [closeMobileMenu])

  const isRTL = locale === 'fa'
  const altLocale = locale === 'fa' ? 'en' : 'fa'

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-700',
        isScrolled 
          ? 'bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] py-0' 
          : 'bg-transparent py-4'
      )}
    >
      {/* Top bar (Hidden on scroll) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-black/10"
          >
            <div className="section-container flex items-center justify-between py-2 text-[10px] text-opel-black/60 font-black uppercase tracking-[0.3em]">
              <div className="flex items-center gap-8">
                <a
                  href="tel:02122037809"
                  className="flex items-center gap-2 hover:text-opel-yellow transition-colors group"
                >
                  <Phone size={11} className="text-opel-black" />
                  <span dir="ltr" className="group-hover:translate-x-1 transition-transform">021-2203-7809</span>
                </a>
                <div className="flex items-center gap-2">
                  <Clock size={11} className="text-opel-black" />
                  <span>شنبه تا چهارشنبه ۸ صبح – ۶ عصر</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href={`/${altLocale}`}
                  className="flex items-center gap-2 hover:text-opel-yellow transition-colors"
                >
                  <Globe size={11} />
                  <span>{altLocale === 'en' ? 'ENGLISH' : 'فارسی'}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <div className="section-container">
        <nav className="flex items-center justify-between h-20 md:h-24 transition-all duration-500">
          {/* Logo Group */}
          <Link href={`/${locale}`} className="flex items-center gap-4 group">
            <div className="relative h-12 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/logo_site.png"
                alt="Cycas Khodro"
                className="h-full w-auto object-contain transition-all duration-700"
              />
            </div>
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-[-0.05em] text-opel-black uppercase leading-tight">
                Cycas
              </span>
              <span className="text-[8px] md:text-[10px] font-black tracking-[0.4em] text-opel-black/60 uppercase -mt-1 leading-tight">
                Khodro
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-opel-black/60 hover:text-opel-black hover:tracking-[0.4em] transition-all duration-300 relative group"
              >
                {t(item.key as any)}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-opel-yellow transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/inquiry`}
              className="hidden md:flex items-center justify-center px-10 py-3 bg-opel-black text-[#FFD100] text-[10px] font-black uppercase tracking-[0.2em] transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {t('inquiry')}
            </Link>
            
            <button
              onClick={toggleMobileMenu}
              className="p-3 text-opel-black hover:bg-black/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-opel-black border-t border-white/10 overflow-hidden"
          >
            <div className="section-container py-6 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/${locale}${item.href}`}
                    className="flex items-center py-3 px-4 text-white/80 hover:text-opel-yellow hover:bg-white/5 transition-all"
                    onClick={closeMobileMenu}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/${locale}/contact`}
                  className="btn-opel-primary w-full justify-center text-sm py-3"
                  onClick={closeMobileMenu}
                >
                  {t('inquiry')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
