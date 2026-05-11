import React from 'react'
import { Wrench, LifeBuoy, ShieldCheck, ArrowUpLeft } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

const iconMap = {
  LifeBuoy: LifeBuoy,
  Wrench: Wrench,
  Shield: ShieldCheck,
}

export const AfterSalesTeaser = () => {
  const { afterSales } = HOME_CONTENT

  return (
    <section className="py-32 bg-opel-black text-white relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-opel-yellow/5 skew-x-12 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-opel-yellow shadow-[0_0_15px_rgba(255,209,0,0.5)]" />
              <p className="text-opel-yellow font-black text-xs uppercase tracking-[0.3em]">پشتیبانی فنی</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-tight">
              {afterSales.title}
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-xl font-medium">
              {afterSales.description}
            </p>
            
            <a 
              href="/after-sales"
              className="inline-flex items-center gap-4 bg-opel-yellow text-opel-black px-10 py-6 text-xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300"
            >
              {afterSales.cta}
              <ArrowUpLeft size={24} />
            </a>
          </div>

          <div className="grid gap-6">
            {afterSales.items.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Wrench
              return (
                <div 
                  key={i} 
                  className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-opel-yellow flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Icon size={32} className="text-opel-black" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black uppercase tracking-tighter">{item.title}</h4>
                      <p className="text-white/40 text-sm font-bold mt-1">خدمات تخصصی اوپل</p>
                    </div>
                  </div>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-500" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
