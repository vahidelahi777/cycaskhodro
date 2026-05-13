import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Zap } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

export const FeaturedModels = () => {
  const { featuredModels } = HOME_CONTENT

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-opel-yellow" />
              <p className="text-opel-black font-black text-xs uppercase tracking-[0.3em]">محصولات شاخص</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-opel-black uppercase tracking-tighter">
              مدل‌های جدید ۲۰۲۴
            </h2>
          </div>
          <Link 
            href="/products" 
            className="text-opel-black font-black text-sm uppercase tracking-widest border-b-4 border-opel-yellow pb-1 hover:text-opel-yellow transition-colors"
          >
            مشاهده تمامی مدل‌ها
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {featuredModels.map((model) => (
            <div key={model.id} className="group bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-10">
                <h3 className="text-3xl font-black text-opel-black mb-6 uppercase tracking-tighter">
                  {model.name}
                </h3>
                
                <ul className="space-y-4 mb-10">
                  {model.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-500 text-sm font-bold">
                      <div className="w-5 h-5 bg-opel-yellow flex items-center justify-center">
                        <Zap size={10} className="text-opel-black" />
                      </div>
                      {spec}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={model.href}
                  className="flex items-center justify-between w-full bg-opel-black text-white px-6 py-4 font-black text-xs uppercase tracking-widest group-hover:bg-opel-yellow group-hover:text-opel-black transition-colors"
                >
                  مشاهده جزئیات
                  <ChevronLeft size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
