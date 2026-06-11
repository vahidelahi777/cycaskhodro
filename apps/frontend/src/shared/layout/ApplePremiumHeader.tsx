'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

// =========================
// TYPES
// =========================

type NavItem = {
  label: string
  href?: string
  children?: NavItem[]
}

// =========================
// NAVIGATION
// =========================

const navItems: NavItem[] = [
  {
    label: 'صفحه اصلی',
    href: '/fa',
  },

  {
    label: 'محصولات',
    href: '/fa/models',
    children: [
      {
        label: 'اوپل موکا E',
        href: '/fa/models',
      },
      {
        label: 'اوپل موکا',
        href: '/fa/models',
      },
      {
        label: 'اوپل آسترا',
        href: '/fa/models',
      },
    ],
  },

  {
    label: 'خدمات پس از فروش',
    children: [
      {
        label: 'مرکز آموزش سیکاس خودرو',
        href: '/after-sales/training',
      },
      {
        label: 'واحد تعمیرگاه مرکزی',
        href: '/after-sales/central-repair',
      },
      {
        label: 'واحد فنی مهندسی',
        href: '/after-sales/engineering',
      },
      {
        label: 'واحد امداد جاده‌ای',
        href: '/after-sales/roadside',
      },
      {
        label: 'گارانتی و وارانتی',
        href: '/after-sales/warranty',
      },
      {
        label: 'قانون حمایت از حقوق مصرف‌کنندگان',
        href: '/after-sales/laws',
      },
      {
        label: 'لیست قطعات و عیوب ایمنی',
        href: '/after-sales/parts-defects',
      },
      {
        label: 'مشاهده فاکتور خدمات و قطعات',
        href: '/after-sales/invoices',
      },
      {
        label: 'فراخوان خودرو',
        href: '/after-sales/recall',
      },
    ],
  },

  {
    label: 'مشتریان',
    children: [
      {
        label: 'ارتباط با واحد مشتریان',
        href: '/customers/contact',
      },
      {
        label: 'باشگاه مشتریان',
        href: '/customers/club',
      },
      {
        label: 'پنل کاربری',
        href: '/customers/panel',
      },
    ],
  },

  {
    label: 'خدمات آنلاین',
    children: [
      {
        label: 'فروش آنلاین',
        href: '/online/shop',
      },
      {
        label: 'نوبت‌دهی آنلاین',
        href: '/online/appointment',
      },
    ],
  },

  {
    label: 'نمایندگی ها',
    children: [
      {
        label: 'لیست نمایندگی‌ها',
        href: '/dealers/list',
      },
      {
        label: 'درخواست نمایندگی',
        href: '/dealers/request',
      },
    ],
  },
]

// =========================
// COMPONENT
// =========================

export default function ApplePremiumHeader() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // =========================
  // SCROLL EFFECT
  // =========================

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  // =========================
  // HELPERS
  // =========================

  const isActive = (href?: string) => {
    if (!href) return false

    if (href === '/fa') {
      return pathname === '/fa' || pathname === '/fa/'
    }

    return pathname.startsWith(href)
  }

  // =========================
  // RENDER
  // =========================

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-black/5 bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-3xl'
          : 'bg-white/60 backdrop-blur-2xl'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6 lg:px-8">
        {/* ========================= */}
        {/* LOGO */}
        {/* ========================= */}

        <Link href="/fa" className="flex items-center">
          <Image
            src="/images/logo_site.png"
            alt="سیکاس خودرو"
            width={70}
            height={50}
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* ========================= */}
        {/* DESKTOP MENU */}
        {/* ========================= */}

        <ul className="hidden items-center gap-10 xl:gap-12 lg:flex">
          {navItems.map((item) => {
            const hasChildren =
              item.children && item.children.length > 0

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* ========================= */}
                {/* TOP LEVEL */}
                {/* ========================= */}

                {item.href ? (
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-black'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    {item.label}

                    {hasChildren && (
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}

                    {/* ANIMATED UNDERLINE */}

                    <span
                      className={`absolute bottom-0 right-0 h-[2px] rounded-full bg-yellow-400 transition-all duration-300 ${
                        isActive(item.href)
                          ? 'left-0 w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                ) : (
                  <button className="group relative flex items-center gap-1 py-2 text-sm font-medium text-neutral-700 transition-colors duration-300 hover:text-black">
                    {item.label}

                    {hasChildren && (
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}

                    {/* ANIMATED UNDERLINE */}

                    <span className="absolute bottom-0 right-0 h-[2px] w-0 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                )}

                {/* ========================= */}
                {/* DROPDOWN */}
                {/* ========================= */}

                <AnimatePresence>
                  {openMenu === item.label && hasChildren && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                        y: 10,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 320,
                        damping: 26,
                      }}
                      className="absolute right-0 top-full mt-4 w-72 rounded-3xl border border-black/5 bg-white/80 p-2 shadow-2xl backdrop-blur-3xl"
                    >
                      {item.children?.map((sub) => {
                        const hasSubChildren =
                          sub.children &&
                          sub.children.length > 0

                        return (
                          <div
                            key={sub.label}
                            className="mb-1 last:mb-0"
                          >
                            {/* LEVEL 2 */}

                            <Link
                              href={sub.href ?? '#'}
                              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-neutral-700 transition-all duration-300 hover:bg-black/[0.04] hover:text-black"
                            >
                              <span>{sub.label}</span>

                              {hasSubChildren && (
                                <ChevronDown size={14} />
                              )}
                            </Link>

                            {/* LEVEL 3 */}

                            {hasSubChildren && (
                              <div className="mt-1 mr-3 border-r border-neutral-200 pr-2">
                                {sub.children?.map((third) => (
                                  <Link
                                    key={third.label}
                                    href={third.href ?? '#'}
                                    className="block rounded-xl px-3 py-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-black/[0.04] hover:text-black"
                                  >
                                    {third.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>

        {/* ========================= */}
        {/* RIGHT SIDE */}
        {/* ========================= */}

        <div className="flex items-center gap-4">
          {/* OPEL LOGO */}

          <Image
            src="/images/logo_opel.png"
            alt="Opel"
            width={56}
            height={40}
            className="hidden h-9 w-auto object-contain md:block"
          />

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-2xl p-2 transition-colors duration-200 hover:bg-neutral-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ========================= */}
      {/* MOBILE MENU — full-screen overlay */}
      {/* ========================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-0 z-[200] bg-white lg:hidden flex flex-col"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
              <Image
                src="/images/logo_site.png"
                alt="سیکاس خودرو"
                width={60}
                height={42}
                className="h-9 w-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-700"
                aria-label="بستن منو"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0
                const isExpanded = openMobileMenu === item.label

                return (
                  <div key={item.label} className="border-b border-neutral-100 last:border-0">
                    {/* Row */}
                    {!hasChildren && item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-4 px-2 text-base font-semibold text-neutral-800"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => setOpenMobileMenu(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between py-4 px-2 text-base font-semibold text-neutral-800"
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={`text-neutral-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}

                    {/* Sub-items accordion */}
                    <AnimatePresence>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pr-4 space-y-0.5">
                            {item.children?.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href ?? '#'}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 py-3 px-3 text-sm text-neutral-600 hover:text-opel-black hover:bg-neutral-50 rounded-lg transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-opel-yellow flex-shrink-0" />
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>

            {/* Footer CTA */}
            <div className="px-4 py-5 border-t border-neutral-100 bg-neutral-50">
              <Link
                href="/fa/contact"
                onClick={() => setIsOpen(false)}
                className="btn-opel-primary w-full justify-center text-center"
              >
                تماس با ما
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
