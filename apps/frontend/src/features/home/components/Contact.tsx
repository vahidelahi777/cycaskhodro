'use client'

import { Phone, MapPin, Mail } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-3">
            ارتباط مستقیم
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950">
            تماس با ما
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-neutral-950" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-500 uppercase mb-1">
                  تلفن
                </p>
                <a
                  href="tel:+982122037809"
                  className="text-2xl font-bold text-neutral-950 hover:text-yellow-500 transition-colors"
                >
                  ۰۲۱-۲۲۰۳-۷۸۰۹
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-neutral-950" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-500 uppercase mb-1">
                  آدرس
                </p>
                <p className="text-lg text-neutral-700 font-medium">
                  تهران، خیابان گلشهر، پلاک ۱۱، طبقه اول
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-neutral-950 font-bold">⏰</span>
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-500 uppercase mb-1">
                  ساعات کاری
                </p>
                <p className="text-lg text-neutral-700 font-medium">
                  شنبه–چهارشنبه ۸ صبح تا ۶ عصر<br />
                  پنجشنبه ۹ صبح تا ۲ بعدازظهر
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="نام"
              required
              className="w-full px-6 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              required
              className="w-full px-6 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            />
            <input
              type="tel"
              placeholder="شماره موبایل"
              required
              className="w-full px-6 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            />
            <textarea
              placeholder="پیام"
              rows={4}
              required
              className="w-full px-6 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-4 bg-yellow-400 text-neutral-950 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              {submitted ? '✓ ارسال شد' : 'ارسال درخواست'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
