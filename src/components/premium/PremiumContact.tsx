'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function PremiumContact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        message: formData.get('message'),
      }

      // TODO: Send to backend
      console.log('Form submitted:', data)
      toast.success('پیام شما با موفقیت ارسال شد!')
      e.currentTarget.reset()
    } catch (error) {
      toast.error('خطا در ارسال پیام')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-3">
            تماس با ما
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
          </h2>
          <p className="text-xl text-neutral-600">
            کارشناسان متخصص ما آماده پاسخ‌گویی به تمامی سوالات شما هستند
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">تماس مستقیم</p>
                <a
                  href="tel:02122037809"
                  className="text-neutral-600 hover:text-yellow-600 transition-colors text-lg font-medium"
                >
                  021-2203-7809
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">واتس‌آپ</p>
                <a
                  href="https://wa.me/989121234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-yellow-600 transition-colors text-lg font-medium"
                >
                  درخواست در واتس‌آپ
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">آدرس</p>
                <p className="text-neutral-600">
                  تهران - جردن - خیابان گلشهر - پلاک ۱۱ - طبقه اول
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">ساعات کاری</p>
                <p className="text-neutral-600">شنبه تا چهارشنبه: ۸ صبح تا ۶ عصر</p>
                <p className="text-neutral-600">پنجشنبه: تا ۱۶:۰۰</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="نام"
                required
                className="px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition-all"
              />
              <input
                type="text"
                name="lastName"
                placeholder="نام خانوادگی"
                required
                className="px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition-all"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="شماره موبایل"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="ایمیل (اختیاری)"
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition-all"
            />

            <textarea
              name="message"
              placeholder="پیام شما"
              rows={5}
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-yellow-500 text-neutral-900 font-semibold rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
