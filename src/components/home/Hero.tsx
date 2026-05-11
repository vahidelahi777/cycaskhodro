'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Text */}
        <div className="space-y-8">
          {/* Overline */}
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              نمایندگی رسمی اوپل
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-neutral-950">
            رانندگی‌ای متفاوت،
            <br />
            <span className="text-yellow-500">تجربه‌ای ماندگار</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-md">
            گارانتی معتبر • قطعات اصل • خدمات ۲۴/۷
          </p>

          {/* Trust Chips */}
          <div className="flex flex-wrap gap-3 pt-4">
            {['گارانتی معتبر', 'قطعات اصل', 'خدمات حرفه‌ای'].map((chip) => (
              <div
                key={chip}
                className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-sm font-medium text-neutral-700"
              >
                ✓ {chip}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="https://wa.me/989120000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-yellow-400 text-neutral-950 font-bold rounded-lg hover:bg-yellow-500 transition-colors text-center"
            >
              مشاوره رایگان
            </a>
            <a
              href="#products"
              className="px-8 py-4 border-2 border-neutral-950 text-neutral-950 font-bold rounded-lg hover:bg-neutral-950 hover:text-white transition-colors text-center"
            >
              مشاهده محصولات
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative hidden md:block">
          <div className="relative aspect-square">
            <Image
              src="/images/astra-2024.webp"
              alt="Opel Astra"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden mt-12 relative w-full aspect-square max-w-sm mx-auto">
        <Image
          src="/images/astra-2024.webp"
          alt="Opel Astra"
          fill
          className="object-contain drop-shadow-xl"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-neutral-400" />
      </div>
    </section>
  )
}
