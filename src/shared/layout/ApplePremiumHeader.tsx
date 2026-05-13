'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'محصولات', href: '/products' },
  { label: 'خدمات پس از فروش', href: '/services' },
  { label: 'اخبار و رویداد ها', href: '/news' },
  { label: 'ارتباط با واحد مشتریان', href: '/contact' },
  { label: 'نمایندگی ها', href: '/dealers' },
]

export default function ApplePremiumHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // بستن منو هنگام تغییر route
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-black/8 shadow-sm'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        aria-label="منوی اصلی"
      >
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* لوگوی سایکاس */}
          <Link href="/" aria-label="صفحه اصلی سایکاس خودرو">
            <Image
              src="https://cycaskhodro.com/wp-content/uploads/2023/01/21.png"
              alt="سایکاس خودرو"
              width={64}
              height={48}
              className="h-10 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* منوی دسکتاپ */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0" role="list">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 relative group pb-1 ${
                      isActive
                        ? 'text-neutral-900'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 right-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* لوگوی Opel + دکمه موبایل */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.opel.de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="وبسایت اوپل"
              className="hidden md:block hover:opacity-80 transition-opacity"
            >
              <Image
                src="https://cycaskhodro.com/wp-content/uploads/2023/01/logooplnew.png"
                alt="Opel"
                width={56}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </a>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label={isOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={isOpen}aria-controls="mobile-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-neutral-100"
            >
              <ul className="py-3 space-y-1 list-none m-0 p-0" role="list">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? 'bg-yellow-50 text-neutral-900'
                            : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 ml-2 flex-shrink-0" />
                        )}
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
