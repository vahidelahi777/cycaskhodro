'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

export const FAQ = () => {
  const { faq } = HOME_CONTENT
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-opel-yellow" />
                <p className="text-opel-black font-black text-xs uppercase tracking-widest">پرسش و پاسخ</p>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-opel-black uppercase tracking-tighter leading-[0.9] mb-8">
                سوالات متداول
              </h2>
              <p className="text-gray-500 font-bold leading-relaxed">
                اگر سوالی دارید که در اینجا پاسخ داده نشده است، می‌توانید با کارشناسان ما تماس بگیرید.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faq.map((item, i) => (
              <div 
                key={i} 
                className={`bg-white border-2 transition-all duration-500 ${openIndex === i ? 'border-opel-yellow shadow-xl' : 'border-gray-100 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-right group"
                  aria-expanded={openIndex === i}
                >
                  <span className={`text-xl font-black transition-colors ${openIndex === i ? 'text-opel-black' : 'text-gray-600 group-hover:text-opel-black'}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 ml-4 w-10 h-10 flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-opel-black text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-opel-yellow group-hover:text-opel-black'}`}>
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-8 pt-0 border-t border-gray-50">
                    <p className="text-gray-500 font-medium leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
