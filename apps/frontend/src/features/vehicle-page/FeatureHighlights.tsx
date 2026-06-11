'use client'

import { motion } from 'framer-motion'
import { Wifi, Shield, Zap, Eye, Navigation, Smartphone, Camera, Wind } from 'lucide-react'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
}

export default function FeatureHighlights({ vehicle }: Props) {
  const { technology, safety } = vehicle.specs
  const spec = vehicle.powertrain.specs[vehicle.powertrain.default]

  const techFeatures = [
    {
      icon: <Smartphone size={22} />,
      title: 'Apple CarPlay & Android Auto',
      desc: 'اتصال بی‌سیم به گوشی',
      active: technology.appleCarPlay || technology.androidAuto,
    },
    {
      icon: <Camera size={22} />,
      title: `صفحه‌نمایش ${technology.screenSize}`,
      desc: 'اینفوتینمنت لمسی پیشرفته',
      active: true,
    },
    {
      icon: <Camera size={22} />,
      title: 'دوربین ۳۶۰ درجه',
      desc: 'دید کامل هنگام پارک',
      active: technology.camera360,
    },
    {
      icon: <Navigation size={22} />,
      title: 'تمپومات تطبیقی',
      desc: 'حفظ فاصله هوشمند',
      active: technology.adaptiveCruise,
    },
    {
      icon: <Eye size={22} />,
      title: 'کمک نگهداری خط',
      desc: 'تشخیص و هشدار تغییر خط',
      active: technology.laneAssist,
    },
    {
      icon: <Wifi size={22} />,
      title: 'OpelConnect',
      desc: 'اتصال آنلاین خودرو',
      active: true,
    },
  ]

  const safetyFeatures = safety.features.map((f, i) => ({
    icon: i % 2 === 0 ? <Shield size={22} /> : <Wind size={22} />,
    title: f,
    active: true,
  }))

  const euronCapStars = safety.euroncap ?? 0

  return (
    <section id="features" className="bg-[#F8F7F4] py-16 md:py-24" dir="rtl">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs text-opel-yellow font-bold tracking-[0.25em] uppercase">امکانات</span>
          <h2 className="text-2xl md:text-4xl font-black text-neutral-900 mt-2">
            فناوری و ایمنی
          </h2>
          <p className="text-neutral-500 mt-3 max-w-md mx-auto text-sm">
            هر جزئیاتی با دقت مهندسی شده تا تجربه رانندگی بی‌نظیری داشته باشید
          </p>
        </div>

        {/* Two-column: Technology + Safety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Technology card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-opel-yellow rounded-xl flex items-center justify-center">
                <Wifi size={18} className="text-black" />
              </span>
              <h3 className="text-lg font-black text-neutral-900">فناوری هوشمند</h3>
            </div>
            <div className="space-y-3">
              {techFeatures.filter((f) => f.active).map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 py-3 border-b border-neutral-100 last:border-0"
                >
                  <span className="w-9 h-9 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-600 shrink-0">
                    {feature.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{feature.title}</p>
                    <p className="text-xs text-neutral-500">{feature.desc}</p>
                  </div>
                  <span className="mr-auto w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Safety card */}
          <div className="bg-[#0A0A0C] rounded-2xl p-6 md:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-opel-yellow rounded-xl flex items-center justify-center">
                <Shield size={18} className="text-black" />
              </span>
              <h3 className="text-lg font-black">ایمنی</h3>
            </div>

            {/* Euro NCAP stars */}
            {euronCapStars > 0 && (
              <div className="flex items-center gap-2 mb-6 bg-white/5 rounded-xl px-4 py-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className={`w-5 h-5 ${i < euronCapStars ? 'text-opel-yellow' : 'text-white/20'}`}
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{euronCapStars} ستاره Euro NCAP</p>
                  <p className="text-[10px] text-white/50">بالاترین رتبه ایمنی</p>
                </div>
              </div>
            )}

            {/* Airbags stat */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-black text-opel-yellow">{safety.airbags}</span>
              <p className="text-sm text-white/70">کیسه هوا برای حداکثر محافظت</p>
            </div>

            {/* Safety features list */}
            <div className="space-y-2">
              {safetyFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <Zap size={14} className="text-opel-yellow shrink-0" />
                  {feature.title}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Powertrain highlight bar */}
        {spec && (
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-sm font-bold text-neutral-400 tracking-widest uppercase mb-6">
              مشخصات موتور — {spec.engineCode}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'حجم موتور', value: spec.displacement },
                { label: 'حداکثر قدرت', value: spec.power },
                { label: 'گشتاور', value: spec.torque },
                { label: 'گیربکس', value: spec.transmission },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-black text-neutral-900 leading-tight">{value}</p>
                  <p className="text-xs text-neutral-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
