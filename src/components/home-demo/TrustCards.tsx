import React from 'react'
import { ShieldCheck, Award, Settings, ClipboardCheck } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

const iconMap = {
  ShieldCheck: ShieldCheck,
  Award: Award,
  Settings: Settings,
  ClipboardCheck: ClipboardCheck,
}

export const TrustCards = () => {
  const { trustHighlights } = HOME_CONTENT

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustHighlights.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck
            return (
              <div 
                key={index} 
                className="bg-white p-8 border-b-4 border-opel-yellow shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-opel-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-opel-yellow" />
                </div>
                <h3 className="text-xl font-black text-opel-black mb-4 uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
