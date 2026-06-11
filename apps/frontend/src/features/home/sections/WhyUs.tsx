'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: 'واردکننده رسمی اوپل',
    description: 'نمایندگی رسمی و مجاز اوپل در ایران با گواهینامه‌های معتبر بین‌المللی',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'قیمت مستقیم بدون واسطه',
    description: 'خرید مستقیم از کارخانه با بهترین نرخ‌ها و بدون هیچ واسطه‌ای',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'بازرسی دقیق کیفیت',
    description: 'تمامی خودروها تحت دقیق‌ترین بازرسی‌های فنی و کیفی قرار می‌گیرند',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'گارانتی معتبر و جامع',
    description: 'گارانتی کامل با پوشش بین‌المللی و خدمات پس از فروش حرفه‌ای',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'خدمات پس از فروش',
    description: 'مراکز خدماتی مجهز با جدیدترین تجهیزات و کارشناسان متخصص',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'قطعات یدکی اصلی',
    description: 'تامین قطعات یدکی اصلی و اورجینال با گارانتی تعویض',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const services = [
  {
    title: 'مرکز آموزش سیکاس خودرو',
    description: 'مرکز آموزش سیکاس خودرو با هدف ارتقای دانش فنی و تخصصی کارشناسان و علاقه‌مندان به صنعت خودرو، دوره‌های آموزشی متنوعی را در زمینه تعمیر و نگهداری خودروهای اوپل برگزار می‌نماید.',
    tags: ['دوره‌های فنی', 'گواهینامه معتبر', 'مربیان خبره', 'تجهیزات مدرن'],
    image: '/images/mokka-interior-cockpit.jpeg',
    imagePosition: 'object-center',
    href: '/fa/services/training',
    imageRight: false,
  },
  {
    title: 'تعمیرگاه مرکزی سیکاس خودرو',
    description: 'تعمیرگاه مرکزی سیکاس خودرو با بهره‌گیری از جدیدترین تجهیزات تشخیصی و کادری مجرب، آماده ارائه خدمات تعمیر و نگهداری تخصصی خودروهای اوپل به شما عزیزان می‌باشد.',
    tags: ['تشخیص کامپیوتری', 'قطعات اصلی', 'کارشناسان مجاز', 'ضمانت تعمیر'],
    image: '/images/mokka-e-showroom.jpeg',
    imagePosition: 'object-center',
    href: '/fa/services/repair',
    imageRight: true,
  },
]

export default function WhyUs() {
  return (
    <>
      {/* ═══════════════════════════════════════
          ZONE 1 — Features grid
      ════════════════════════════════════════ */}
      <section className="section-padding bg-white" dir="rtl" aria-labelledby="whyus-title">

        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 border border-opel-yellow/60 bg-opel-yellow/10 text-opel-gray-700 text-xs font-bold tracking-widest uppercase px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-opel-yellow" />
              چرا سیکاس خودرو؟
            </div>
            <h2 id="whyus-title" className="section-title text-opel-black mb-6">
              پیشگام در<br />
              <span className="text-opel-yellow">صنعت خودرو</span>
            </h2>
            <p className="text-opel-gray-500 text-sm sm:text-base leading-relaxed">
              با بیش از ۱۵ سال تجربه، پیشگام در واردات و خدمات اوپل در ایران هستیم
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-opel-gray-100">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative bg-white p-5 sm:p-6 md:p-8 hover:bg-opel-gray-100 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-opel-yellow/10 border border-opel-yellow/30 flex items-center justify-center mb-6 text-opel-gray-700 group-hover:bg-opel-yellow group-hover:text-opel-black transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-opel-black font-bold text-lg mb-3 group-hover:text-opel-yellow transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-opel-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-opel-yellow group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════
          ZONE 2 — WHITE: Service panels
      ════════════════════════════════════════ */}
      <section className="bg-white" dir="rtl">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px] ${i < services.length - 1 ? 'border-b border-opel-gray-100' : ''}`}
          >
            {/* Image */}
            <div className={`relative h-64 lg:h-auto ${service.imageRight ? 'lg:order-2' : 'lg:order-1'}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`object-cover ${service.imagePosition}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className={`flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-14 ${service.imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
              <span className="text-opel-yellow text-xs font-bold tracking-[0.25em] uppercase mb-4">
                خدمات سیکاس خودرو
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-opel-black mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-opel-gray-500 leading-relaxed mb-6 text-sm max-w-md">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-opel-gray-100 text-opel-gray-700 border border-opel-gray-100 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={service.href} className="btn-opel-primary w-fit">
                اطلاعات بیشتر
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  )
}
