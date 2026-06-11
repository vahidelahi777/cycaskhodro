'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Phone, MapPin, Clock, Send } from 'lucide-react'
import type { ContactFormData } from '@/types'

const schema = z.object({
  firstName: z.string().min(2, 'نام الزامی است'),
  lastName: z.string().min(2, 'نام خانوادگی الزامی است'),
  phone: z.string().regex(/^(\+98|0)?9\d{9}$/, 'شماره موبایل معتبر نیست'),
  email: z.string().email().optional().or(z.literal('')),
  inquiryType: z.enum(['purchase', 'service', 'parts', 'general', 'test-drive']),
  vehicleOfInterest: z.string().optional(),
  message: z.string().min(10, 'پیام باید حداقل ۱۰ کاراکتر باشد'),
})

export function ContactSection() {
  const t = useTranslations('contact')
  const locale = useLocale()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: 'general' },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // POST to Next.js API route
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      toast.success(t('form.success'))
      reset()
    } catch {
      toast.error(t('form.error'))
    }
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="contact">
      {/* Architectural Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20rem] font-black text-[#F6F6F6] select-none pointer-events-none uppercase tracking-tighter -rotate-90 opacity-80">
        Contact
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-16 h-1 bg-opel-yellow shadow-[0_0_15px_rgba(255,209,0,0.3)]" />
                <p className="text-opel-black font-black text-[10px] uppercase tracking-[0.4em]">
                  {locale === 'fa' ? 'ارتباط مستقیم' : 'GET IN TOUCH'}
                </p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-opel-black tracking-tight leading-tight mb-0"
              >
                {t('title')}
              </motion.h2>
            </div>

            <div className="space-y-10">
              {[
                { icon: MapPin, text: t('address'), label: 'Studio Location' },
                { icon: Phone, text: t('phone'), label: 'Communication Center', href: 'tel:02122037809' },
                { icon: Clock, text: t('workingHours'), label: 'Operating Hours' },
              ].map(({ icon: Icon, text, label, href }) => (
                <div key={text} className="group">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-opel-yellow mb-3">
                    {label}
                  </p>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-opel-black flex items-center justify-center shrink-0 group-hover:bg-opel-yellow transition-colors duration-500">
                      <Icon size={20} className="text-white group-hover:text-opel-black transition-colors" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-opel-black text-2xl lg:text-3xl font-black font-mono hover:text-opel-yellow transition-colors"
                        dir="ltr"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-opel-black/60 text-sm font-medium leading-relaxed max-w-xs">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/989120000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-opel-black text-white px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-opel-yellow hover:text-opel-black transition-all duration-500"
            >
              <Send size={16} />
              {locale === 'fa' ? 'ثبت درخواست در واتساپ' : 'WHATSAPP ENQUIRY'}
              <div className="w-12 h-px bg-current" />
            </motion.a>
          </div>

          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#F9F9F9] p-12 lg:p-16 border border-black/5 space-y-8"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-8">
                {/* First Name */}
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-opel-black/40 mb-3">
                    {t('form.firstName')}
                  </label>
                  <input
                    {...register('firstName')}
                    className="w-full bg-transparent border-b-2 border-black/10 px-0 py-3 text-lg font-black text-opel-black
                               focus:outline-none focus:border-opel-yellow transition-colors placeholder:text-black/10"
                    placeholder="Enter Name"
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-[10px] font-bold mt-2 uppercase tracking-widest">{errors.firstName.message}</p>
                  )}
                </div>
                {/* Last Name */}
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-opel-black/40 mb-3">
                    {t('form.lastName')}
                  </label>
                  <input
                    {...register('lastName')}
                    className="w-full bg-transparent border-b-2 border-black/10 px-0 py-3 text-lg font-black text-opel-black
                               focus:outline-none focus:border-opel-yellow transition-colors placeholder:text-black/10"
                    placeholder="Enter Surname"
                  />
                  {errors.lastName && (
                    <p className="text-destructive text-[10px] font-bold mt-2 uppercase tracking-widest">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-opel-black/40 mb-3">
                    {t('form.phone')}
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full bg-transparent border-b-2 border-black/10 px-0 py-3 text-lg font-black text-opel-black
                               focus:outline-none focus:border-opel-yellow transition-colors font-mono"
                    placeholder="+98"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-[10px] font-bold mt-2 uppercase tracking-widest">{errors.phone.message}</p>
                  )}
                </div>
                {/* Inquiry Type */}
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-opel-black/40 mb-3">
                    {t('form.inquiryType')}
                  </label>
                  <select
                    {...register('inquiryType')}
                    className="w-full bg-transparent border-b-2 border-black/10 px-0 py-3 text-lg font-black text-opel-black
                               focus:outline-none focus:border-opel-yellow transition-colors appearance-none cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="purchase">Vehicle Purchase</option>
                    <option value="service">Aftersales Service</option>
                    <option value="test-drive">Request Test Drive</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-[10px] font-black uppercase tracking-widest text-opel-black/40 mb-3">
                  {t('form.message')}
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-black/10 px-0 py-3 text-lg font-black text-opel-black
                             focus:outline-none focus:border-opel-yellow transition-colors resize-none mb-8"
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="text-destructive text-[10px] font-bold -mt-4 mb-4 uppercase tracking-widest">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-opel-black text-white p-6 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-opel-yellow hover:text-opel-black transition-all duration-500 disabled:opacity-50 group"
              >
                <span className="flex items-center justify-center gap-4">
                  {isSubmitting ? 'PROCESSING...' : t('form.submit')}
                  {!isSubmitting && <div className="w-12 h-px bg-current group-hover:w-20 transition-all duration-500" />}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
