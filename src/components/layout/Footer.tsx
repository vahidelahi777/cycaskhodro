'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, MapPin, Clock, Instagram, Youtube, Send } from 'lucide-react'

const FOOTER_LINKS = {
  company: [
    { labelKey: 'nav.home', href: '/' },
    { labelKey: 'nav.about', href: '/about' },
    { labelKey: 'nav.blog', href: '/blog' },
    { labelKey: 'nav.contact', href: '/contact' },
  ],
  services: [
    { labelKey: 'services.repair.title', href: '/services/repair' },
    { labelKey: 'services.roadside.title', href: '/services/roadside' },
    { labelKey: 'services.warranty.title', href: '/services/warranty' },
    { labelKey: 'services.parts.title', href: '/services/parts' },
    { labelKey: 'services.training.title', href: '/services/training' },
  ],
}

export function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="bg-opel-black text-white pt-24 pb-12 overflow-hidden relative">
      {/* Massive Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter">
        OPEL
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand & Social Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <img
                  src="/images/logo_site.png"
                  alt="Cycas Khodro"
                  className="h-10 w-auto brightness-0 invert"
                />
                <div className="w-px h-8 bg-white/20" />
                <img
                  src="/images/logo_opel.png"
                  alt="Opel"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm uppercase tracking-wider font-medium">
                {t('footer.description')}
              </p>
            </div>

            {/* Social Links with hover effects */}
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Send, href: '#', label: 'Telegram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 bg-white/5 flex items-center justify-center
                             hover:bg-opel-yellow hover:text-opel-black
                             transition-all duration-500 rounded-none group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-opel-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-10">
              {t('footer.links.company')}
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="group flex items-center gap-2 text-white/40 text-[11px] font-black uppercase tracking-widest hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-opel-yellow transition-all duration-300" />
                    {t(link.labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-opel-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-10">
              {t('footer.links.services')}
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="group flex items-center gap-2 text-white/40 text-[11px] font-black uppercase tracking-widest hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-opel-yellow transition-all duration-300" />
                    {t(link.labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h4 className="text-opel-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-10">
                {t('footer.links.support')}
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-white shrink-0 mt-1" />
                  <span className="text-white/50 text-xs font-bold leading-relaxed">{t('contact.address')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-white shrink-0" />
                  <a href="tel:02122037809" className="text-2xl font-black text-white hover:text-opel-yellow transition-colors font-mono">
                    {t('contact.phone')}
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Newsletter */}
            <div className="p-8 bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-opel-yellow mb-4">
                  Subscribe for updates
                </p>
                <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder={t('footer.newsletter.placeholder')}
                    className="flex-1 bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white
                               placeholder:text-white/20 focus:outline-none focus:border-opel-yellow
                               transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-opel-yellow text-opel-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
                  >
                    {t('footer.newsletter.btn')}
                  </button>
                </form>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -rotate-45 translate-x-12 -translate-y-12 group-hover:bg-opel-yellow/5 transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} Cycas Khodro. All Rights Reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link href={`/${locale}/privacy`} className="text-white/20 hover:text-opel-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link href={`/${locale}/terms`} className="text-white/20 hover:text-opel-yellow transition-colors">
              Legal Notice
            </Link>
            <div className="w-12 h-[1px] bg-white/10 mx-4" />
            <span className="text-white/40">Official Opel Dealer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
