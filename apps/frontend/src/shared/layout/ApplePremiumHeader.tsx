'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, usePathname, useRouter } from '@/i18n/navigation'

type NavItem = {
  label: string
  href?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    label: 'صفحه اصلی',
    href: '/',
  },
  {
    label: 'محصولات',
    href: '/#models',
  },
  {
    label: 'خدمات پس از فروش',
    children: [
      { label: 'مرکز آموزش سیکاس خودرو', href: '/services/training' },
      { label: 'واحد تعمیرگاه مرکزی', href: '/services/repair' },
      { label: 'واحد فنی مهندسی', href: '/services/engineering' },
      { label: 'واحد امداد جاده‌ای', href: '/services/roadside' },
      { label: 'گارانتی و وارانتی', href: '/services/warranty' },
      { label: 'قانون حمایت از حقوق مصرف‌کنندگان', href: '/services/consumer-protection' },
      { label: 'لیست قطعات و عیوب ایمنی', href: '/services/parts-defects' },
      { label: 'مشاهده فاکتور خدمات و قطعات', href: '/services/invoices' },
      { label: 'فراخوان خودرو', href: '/services/recall' },
    ],
  },
  {
    label: 'مشتریان',
    children: [
      { label: 'ارتباط با واحد مشتریان', href: '/contact' },
      { label: 'باشگاه مشتریان', href: '/contact' },
      { label: 'پنل کاربری', href: '/contact' },
    ],
  },
  {
    label: 'خدمات آنلاین',
    children: [
      { label: 'فروش آنلاین', href: '/models' },
      { label: 'نوبت‌دهی آنلاین', href: '/contact' },
    ],
  },
  {
    label: 'نمایندگی ها',
    children: [
      { label: 'لیست نمایندگی‌ها', href: '/agencies' },
      { label: 'درخواست نمایندگی', href: '/contact' },
    ],
  },
]

export default function ApplePremiumHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [pendingHash, setPendingHash] = useState<string | null>(null)

  const handleHashLink = useCallback((e: React.MouseEvent, href: string) => {
    if (!href.includes('#')) return
    e.preventDefault()
    const [, hash] = href.split('#')
    if (pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      setPendingHash(hash)
      router.push('/')
    }
  }, [pathname, router])

  useEffect(() => {
    if (pendingHash && pathname === '/') {
      document.getElementById(pendingHash)?.scrollIntoView({ behavior: 'smooth' })
      setPendingHash(null)
    }
  }, [pathname, pendingHash])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href?: string) => {
    if (!href) return false
    const path = href.split('#')[0]
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-black/5 bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-3xl'
          : 'bg-white/60 backdrop-blur-2xl'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo_site.png"
            alt="سیکاس خودرو"
            width={70}
            height={50}
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-10 xl:gap-12 lg:flex">
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={item.href.includes('#') ? (e) => handleHashLink(e, item.href as string) : undefined}
                    className={`group relative flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive(item.href) ? 'text-black' : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                    <span
                      className={`absolute bottom-0 right-0 h-[2px] rounded-full bg-yellow-400 transition-all duration-300 ${
                        isActive(item.href) ? 'left-0 w-full' : 'w-0 group-hover:w-full'
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
                    <span className="absolute bottom-0 right-0 h-[2px] w-0 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                )}

                {/* DROPDOWN */}
                <AnimatePresence>
                  {openMenu === item.label && hasChildren && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 10 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                      className="absolute right-0 top-full mt-4 w-72 rounded-3xl border border-black/5 bg-white/80 p-2 shadow-2xl backdrop-blur-3xl"
                    >
                      {item.children?.map((sub) => {
                        const hasSubChildren = sub.children && sub.children.length > 0

                        return (
                          <div key={sub.label} className="mb-1 last:mb-0">
                            <Link
                              href={sub.href ?? '/'}
                              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-neutral-700 transition-all duration-300 hover:bg-black/[0.04] hover:text-black"
                            >
                              <span>{sub.label}</span>
                              {hasSubChildren && <ChevronDown size={14} />}
                            </Link>

                            {hasSubChildren && (
                              <div className="mt-1 mr-3 border-r border-neutral-200 pr-2">
                                {sub.children?.map((third) => (
                                  <Link
                                    key={third.label}
                                    href={third.href ?? '/'}
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

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.opel.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="وب‌سایت رسمی اوپل"
            className="hidden md:block"
          >
            <Image
              src="/images/logo_opel.png"
              alt="Opel"
              width={56}
              height={40}
              className="h-9 w-auto object-contain transition-opacity duration-200 hover:opacity-70"
            />
          </a>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-2xl p-2 transition-colors duration-200 hover:bg-neutral-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-black/5 bg-white/90 backdrop-blur-3xl lg:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0

                return (
                  <div
                    key={item.label}
                    className="overflow-hidden rounded-2xl border border-black/5 bg-white/70"
                  >
                    {!hasChildren && item.href && (
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          setIsOpen(false)
                          if (item.href?.includes('#')) handleHashLink(e, item.href)
                        }}
                        className="block px-4 py-3 text-sm text-neutral-800 transition-colors duration-200 hover:bg-black/[0.04]"
                      >
                        {item.label}
                      </Link>
                    )}

                    {hasChildren && (
                      <div>
                        <div className="bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900">
                          {item.label}
                        </div>
                        <div className="space-y-1 p-2">
                          {item.children?.map((sub) => {
                            const hasSubChildren = sub.children && sub.children.length > 0

                            return (
                              <div key={sub.label}>
                                <Link
                                  href={sub.href ?? '/'}
                                  onClick={() => setIsOpen(false)}
                                  className="block rounded-xl px-3 py-2 text-sm text-neutral-700 transition-colors duration-200 hover:bg-black/[0.04]"
                                >
                                  {sub.label}
                                </Link>

                                {hasSubChildren && (
                                  <div className="mt-1 mr-3 border-r border-neutral-200 pr-2">
                                    {sub.children?.map((third) => (
                                      <Link
                                        key={third.label}
                                        href={third.href ?? '/'}
                                        onClick={() => setIsOpen(false)}
                                        className="block rounded-xl px-3 py-2 text-sm text-neutral-600 transition-colors duration-200 hover:bg-black/[0.04]"
                                      >
                                        {third.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
