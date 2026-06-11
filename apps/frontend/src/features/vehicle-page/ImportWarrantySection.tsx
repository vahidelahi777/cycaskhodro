'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Wrench, Globe, FileText, Phone } from 'lucide-react'
import type { OpelVehicle } from '@/types/vehicle-page'
import Link from 'next/link'

interface Props {
  vehicle: OpelVehicle
}

export default function ImportWarrantySection({ vehicle }: Props) {
  const { importInfo } = vehicle

  const features = [
    {
      icon: <ShieldCheck size={22} />,
      title: `گارانتی ${importInfo.warrantyYears} ساله`,
      desc: `پوشش کامل تا ${(importInfo.warrantyKm / 1000).toLocaleString('fa-IR')} هزار کیلومتر`,
    },
    {
      icon: <Wrench size={22} />,
      title: `${importInfo.serviceCenterCount}+ مرکز خدمات`,
      desc: 'سراسر ایران با تکنسین‌های آموزش‌دیده رسمی اوپل',
    },
    {
      icon: <Globe size={22} />,
      title: `واردات از ${importInfo.originCountry}`,
      desc: 'مستقیم از کارخانه، با گمرک رسمی جمهوری اسلامی ایران',
    },
    {
      icon: <FileText size={22} />,
      title: 'مدارک کامل',
      desc: 'کارت سوخت، کارنامه، بیمه ثالث، و کارت‌های ضمانت رسمی',
    },
  ]

  return (
    <section id="warranty" className="bg-[#0A0A0C] py-16 md:py-24" dir="rtl">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs text-opel-yellow font-bold tracking-[0.25em] uppercase">تضمین</span>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-2">
            گارانتی و خدمات رسمی
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            {importInfo.registrationInfo}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <span className="w-10 h-10 bg-opel-yellow rounded-xl flex items-center justify-center mb-4">
                <span className="text-black">{feature.icon}</span>
              </span>
              <h3 className="text-base font-black text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-white/50">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Phone size={24} className="text-opel-yellow shrink-0" />
            <div>
              <h3 className="text-base font-black text-white">
                برای اطلاعات بیشتر با ما تماس بگیرید
              </h3>
              <p className="text-sm text-white/50 mt-0.5">
                مشاوران ما آماده پاسخگویی هستند
              </p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/fa/contact"
              className="btn-opel-primary px-6 py-3 text-sm rounded-lg"
            >
              تماس با ما
            </Link>
            <Link
              href="/fa/agencies"
              className="inline-flex items-center justify-center border border-white/30 text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
            >
              نمایندگی‌ها
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
