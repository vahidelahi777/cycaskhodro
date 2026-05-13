import React from 'react'
import Link from 'next/link'
import { Instagram, Send, Linkedin, Mail, MapPin } from 'lucide-react'
import { HOME_CONTENT } from '@/content/home'

export const Footer = () => {
  const { contact, socials, navigation } = HOME_CONTENT

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="h-12 w-auto">
              <span className="text-3xl font-black text-opel-black uppercase tracking-tighter">
                SIKAS <span className="text-opel-yellow">KHODRO</span>
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-opel-yellow shrink-0 mt-1" />
                <p className="text-gray-500 font-bold leading-relaxed">{contact.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-opel-yellow shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-gray-500 font-bold hover:text-opel-yellow transition-colors">{contact.email}</a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                let Icon = Instagram
                if (social.label === 'تلگرام') Icon = Send
                if (social.label === 'لینکدین') Icon = Linkedin
                
                return (
                  <a 
                    key={social.label} 
                    href={social.href}
                    className="w-12 h-12 bg-gray-50 flex items-center justify-center text-opel-black hover:bg-opel-yellow transition-all duration-300 rounded-none border border-gray-100 group"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-opel-black font-black text-xs uppercase tracking-[0.4em] mb-10">لینک‌های سریع</h4>
            <ul className="space-y-5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-500 font-bold text-sm hover:text-opel-yellow transition-colors flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-opel-yellow" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Secondary */}
          <div className="lg:col-span-4">
            <h4 className="text-opel-black font-black text-xs uppercase tracking-[0.4em] mb-10">واردات و خدمات</h4>
            <p className="text-gray-400 text-sm font-bold leading-relaxed mb-8">
              سیکا خودرو به عنوان مرجع تخصصی واردات خودروهای اوپل در ایران، متعهد به ارائه‌ی بالاترین استانداردهای کیفی در فروش و خدمات پس از فروش می‌باشد. تمامی فرآیندهای ما با محوریت رضایت و اعتماد مشتری طراحی شده است.
            </p>
            <div className="flex items-center gap-6">
              {/* E-namad placeholders */}
              <div className="w-20 h-20 bg-gray-50 border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-[10px] text-gray-400 font-black">E-NAMAD</span>
              </div>
              <div className="w-20 h-20 bg-gray-50 border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-[10px] text-gray-400 font-black">SAMANDEHI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Sikas Khodro Importers. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <Link href="/privacy" className="hover:text-opel-yellow transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-opel-yellow transition-colors">Legal Notice</Link>
            <span className="text-opel-yellow/50">Berlin | Tehran</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
