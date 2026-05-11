import React from 'react'
import Link from 'next/link'
import { HOME_CONTENT } from '@/content/home'

export const Header = () => {
  const { navigation, contact } = HOME_CONTENT

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-10 w-auto">
            <img 
              src="/images/logo_site.png" 
              alt="لوگو سیکا خودرو" 
              className="h-full w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            {/* Fallback text if image not found */}
            <span className="text-2xl font-black text-opel-black tracking-tighter">
              SIKAS <span className="text-opel-yellow">KHODRO</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-sm font-bold text-opel-black hover:text-opel-yellow transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="bg-opel-yellow hover:bg-opel-yellow-dark text-opel-black px-6 py-2.5 rounded-none font-black text-sm uppercase tracking-wider transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            درخواست استعلام
          </a>
        </div>
      </div>
    </header>
  )
}
