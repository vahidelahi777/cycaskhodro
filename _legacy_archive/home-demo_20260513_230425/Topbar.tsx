import React from 'react'
import { Phone, Clock, MessageCircle } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

export const Topbar = () => {
  const { contact } = HOME_CONTENT

  return (
    <div className="bg-opel-black text-white py-2 text-xs border-b border-white/10 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-opel-yellow" />
            <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-opel-yellow transition-colors font-mono">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Clock size={14} className="text-opel-yellow" />
            <span>{contact.workingHours}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full transition-colors"
          >
            <MessageCircle size={14} />
            <span>مشاوره سریع در واتساپ</span>
          </a>
        </div>
      </div>
    </div>
  )
}
