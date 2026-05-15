'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo_site.png"
              alt="Cycas Khodro"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight">Cycas</span>
            <span className="text-xs font-semibold text-neutral-500">Khodro</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="#products" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">
            محصولات
          </a>
          <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">
            خدمات
          </a>
          <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">
            درباره ما
          </a>
          <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">
            تماس
          </a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+982122037809"
            className="hidden sm:flex items-center gap-2 px-5 py-2 bg-yellow-400 text-neutral-950 font-semibold text-sm rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Phone size={16} />
            عاملیت
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-neutral-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-950 py-2"
            >
              محصولات
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-950 py-2"
            >
              خدمات
            </a>




          </div>
        </nav>
      )}
    </header>
  )
}
