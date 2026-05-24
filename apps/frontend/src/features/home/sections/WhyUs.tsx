'use client'

import { motion } from 'framer-motion'

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

const stats = [
  { number: '+۱۵', label: 'سال تجربه' },
  { number: '+۵۰۰۰', label: 'مشتری راضی' },
  { number: '+۳۵۰۰', label: 'خودرو تحویل شده' },
  { number: '۱۵', label: 'عاملیت در ایران' },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-opel-black" dir="rtl">

      {/* ── Stats band ── */}
      <div className="section-container mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center py-8 px-4 text-center"
            >
              <span className="text-4xl md:text-5xl font-black text-opel-yellow leading-none mb-2">
                {stat.number}
              </span>
              <span className="text-sm text-white/50 tracking-wide">{stat.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="h-px bg-white/10 mt-0" />
      </div>

      {/* ── Section header ── */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-opel-yellow/40 bg-opel-yellow/10 text-opel-yellow text-xs font-bold tracking-widest uppercase px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-opel-yellow" />
            چرا سیکاس خودرو؟
          </div>
          <h2 className="section-title text-white mb-6">
            پیشگام در<br />
            <span className="text-opel-yellow">صنعت خودرو</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            با بیش از ۱۵ سال تجربه، پیشگام در واردات و خدمات اوپل در ایران هستیم
          </p>
        </motion.div>

        {/* ── Features grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-opel-black p-8 hover:bg-opel-gray-900 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-opel-yellow/10 border border-opel-yellow/20 flex items-center justify-center mb-6 text-opel-yellow group-hover:bg-opel-yellow group-hover:text-opel-black transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-opel-yellow transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-opel-yellow group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
