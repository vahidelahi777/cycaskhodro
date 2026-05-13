import React from 'react'
import { HOME_CONTENT } from '@/content/home'

export const Steps = () => {
  const { steps } = HOME_CONTENT

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-opel-black uppercase tracking-tighter mb-4">
            فرآیند خرید و تحویل
          </h2>
          <div className="w-24 h-2 bg-opel-yellow mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 bg-white text-center group">
              <div className="w-24 h-24 bg-opel-black text-white flex items-center justify-center text-4xl font-black mx-auto mb-8 rounded-none border-8 border-white shadow-xl group-hover:bg-opel-yellow group-hover:text-opel-black transition-colors duration-500">
                ۰{i + 1}
              </div>
              <h3 className="text-2xl font-black text-opel-black mb-4 uppercase tracking-tighter">
                {step.title}
              </h3>
              <p className="text-gray-500 font-bold max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
