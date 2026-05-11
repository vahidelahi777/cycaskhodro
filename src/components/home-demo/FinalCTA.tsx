import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

export const FinalCTA = () => {
  const { finalCTA, contact } = HOME_CONTENT

  return (
    <section className="relative py-24 bg-opel-yellow overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-opel-black rounded-full mix-blend-multiply blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-opel-black rounded-full mix-blend-multiply blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-opel-black uppercase tracking-tighter mb-6">
            {finalCTA.headline}
          </h2>
          <p className="text-xl md:text-2xl text-opel-black font-bold mb-12 opacity-80">
            {finalCTA.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-opel-black text-white px-10 py-6 text-xl font-black hover:bg-white hover:text-opel-black transition-all duration-300 shadow-2xl"
            >
              <MessageCircle size={28} className="text-opel-yellow group-hover:text-opel-black transition-colors" />
              {finalCTA.whatsappBtn}
            </a>
            <a 
              href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
              className="group flex items-center justify-center gap-4 bg-white text-opel-black px-10 py-6 text-xl font-black hover:bg-opel-black hover:text-white transition-all duration-300 shadow-2xl"
            >
              <Phone size={28} className="text-opel-yellow group-hover:text-white transition-colors" />
              {finalCTA.callBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
