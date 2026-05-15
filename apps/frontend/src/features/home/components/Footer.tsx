'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo_site.png"
                  alt="Cycas Khodro"
                  fill
                  className="object-contain invert"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold">Cycas</span>
                <span className="text-xs font-semibold text-neutral-400">Khodro</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              نمایندگی رسمی اوپل در ایران. بیش از ۱۰ سال تجربه و هزاران مشتری راضی.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-white">شرکت</h4>
            <ul className="space-y-3">
              {[
                { label: 'درباره ما', href: '#about' },
                { label: 'محصولات', href: '#products' },
                { label: 'خدمات', href: '#services' },
                { label: 'تماس', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6 text-white">پشتیبانی</h4>
            <ul className="space-y-3">
              {[
                { label: 'شرایط و ضوابط', href: '#terms' },
                { label: 'حریم خصوصی', href: '#privacy' },
                { label: 'شکایات', href: '#complaints' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="font-bold mb-6 text-white">تماس سریع</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+982122037809"
                  className="text-sm text-neutral-400 hover:text-yellow-400 transition-colors block"
                >
                  ۰۲۱-۲۲۰۳-۷۸۰۹
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/989120000000"
                  className="text-sm text-neutral-400 hover:text-yellow-400 transition-colors block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  واتساپ
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/cycaskhodro"
                  className="text-sm text-neutral-400 hover:text-yellow-400 transition-colors block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اینستاگرام
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-sm text-neutral-500">
            © ۱۴۰۴ سیکاس خودرو • تمام حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  )
}
