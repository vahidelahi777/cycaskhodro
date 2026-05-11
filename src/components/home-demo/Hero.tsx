import React from 'react'
import Image from 'next/image'
import { MessageCircle, ChevronLeft } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

export const Hero = () => {
  const { hero, contact } = HOME_CONTENT

  return (
    <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      {/* Background Architectural Text */}
      <div className="absolute top-0 right-0 text-[20rem] font-black text-gray-50 select-none pointer-events-none translate-x-1/4 -translate-y-1/4 uppercase tracking-tighter">
        OPEL
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-opel-black leading-[1.1] mb-6 uppercase tracking-tighter">
              {hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">
              {hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-opel-black text-white px-8 py-5 text-lg font-black hover:bg-opel-yellow hover:text-opel-black transition-all duration-300 shadow-xl"
              >
                <MessageCircle size={24} />
                {hero.primaryCTA}
              </a>
              <a 
                href="/products"
                className="flex items-center justify-center gap-3 bg-white border-4 border-opel-black text-opel-black px-8 py-5 text-lg font-black hover:bg-opel-black hover:text-white transition-all duration-300"
              >
                {hero.secondaryCTA}
                <ChevronLeft size={24} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-gray-500">
                <span className="text-opel-black">+۵۰۰</span> مشتری راضی در ماه اخیر
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={hero.image}
                alt="Opel Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-opel-yellow -z-0 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
