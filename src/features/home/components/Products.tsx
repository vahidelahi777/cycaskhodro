'use client'

import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const products = [
  {
    id: 'mokka',
    name: 'اوپل موکا',
    type: 'SUV',
    image: '/images/mokka-2024.webp',
    specs: ['۱۲۰ اسب‌بخار', '۰–۱۰۰ در ۹.۲ ثانیه', 'مصرف ۶.۵ لیتر'],
  },
  {
    id: 'astra',
    name: 'اوپل آسترا',
    type: 'هاچ‌بک',
    image: '/images/astra-2024.webp',
    specs: ['۱۱۰ اسب‌بخار', '۰–۱۰۰ در ۱۰.۵ ثانیه', 'مصرف ۵.۸ لیتر'],
  },
  {
    id: 'mokka-e',
    name: 'اوپل موکا-E',
    type: 'الکتریکی',
    image: '/images/mokka-e-2024.webp',
    specs: ['برقی ۱۰۰٪', 'برد ۴۰۰ کیلومتر', 'شارژ سریع'],
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-3">
            انتخاب بهترین
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
            محصولات
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            تنوع خودروهایی که برای هر سبک زندگی طراحی شده‌اند.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square bg-neutral-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 space-y-6">
                <div>
                  <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">
                    {product.type}
                  </p>
                  <h3 className="text-2xl font-bold text-neutral-950">
                    {product.name}
                  </h3>
                </div>

                {/* Specs */}
                <div className="space-y-2 border-t border-b border-neutral-100 py-6">
                  {product.specs.map((spec, i) => (
                    <p
                      key={i}
                      className="text-sm text-neutral-600 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                      {spec}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="tel:+982122037809"
                  className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950 group/link hover:gap-4 transition-all"
                >
                  جزئیات بیشتر
                  <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
