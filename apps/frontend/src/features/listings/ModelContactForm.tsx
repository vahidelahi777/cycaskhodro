'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitContactForm } from '@/app/actions/contact'

const FA = {
  title: 'درخواست مشاوره',
  subtitle: 'کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.',
  fullName: 'نام و نام خانوادگی',
  phone: 'شماره موبایل',
  email: 'ایمیل (اختیاری)',
  contactTime: 'زمان مناسب برای تماس',
  morning: 'صبح (۸–۱۲)',
  afternoon: 'ظهر (۱۲–۱۷)',
  evening: 'عصر (۱۷–۲۱)',
  testDrive: 'درخواست تست درایو',
  message: 'پیام (اختیاری)',
  submit: 'ثبت درخواست',
  submitting: 'در حال ارسال...',
  successTitle: 'درخواست شما با موفقیت ثبت شد',
  successMsg: 'کارشناسان سیکاس خودرو به زودی با شما تماس می‌گیرند.',
  errors: {
    fullName: 'نام باید حداقل ۲ کاراکتر باشد',
    phone: 'فرمت: 09XXXXXXXXX',
    email: 'ایمیل معتبر وارد کنید',
    message: 'پیام نباید بیش از ۵۰۰ کاراکتر باشد',
  },
}
const EN = {
  title: 'Request a quote',
  subtitle: 'Our experts will contact you as soon as possible.',
  fullName: 'Full name',
  phone: 'Mobile number',
  email: 'Email (optional)',
  contactTime: 'Best time to call',
  morning: 'Morning (8–12)',
  afternoon: 'Afternoon (12–17)',
  evening: 'Evening (17–21)',
  testDrive: 'Request test drive',
  message: 'Message (optional)',
  submit: 'Submit request',
  submitting: 'Sending...',
  successTitle: 'Your request was received',
  successMsg: 'A CycasKhodro specialist will contact you shortly.',
  errors: {
    fullName: 'Name must be at least 2 characters',
    phone: 'Format: 09XXXXXXXXX',
    email: 'Enter a valid email',
    message: 'Message must be under 500 characters',
  },
}

const schema = z.object({
  fullName:    z.string().min(2),
  phone:       z.string().regex(/^09[0-9]{9}$/),
  email:       z.string().email().optional().or(z.literal('')),
  contactTime: z.enum(['morning', 'afternoon', 'evening']),
  testDrive:   z.boolean().default(false),
  message:     z.string().max(500).optional(),
})

type FormValues = z.infer<typeof schema>

const IconCircleCheck = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-opel-yellow mx-auto mb-4">
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

interface Props {
  locale: string
  id?: string
}

export default function ModelContactForm({ locale, id }: Props) {
  const t = locale === 'fa' ? FA : EN
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { contactTime: 'morning', testDrive: false },
  })

  const onSubmit = async (data: FormValues) => {
    setServerError('')
    const [first, ...rest] = data.fullName.trim().split(' ')
    const result = await submitContactForm({
      firstName: first,
      lastName: rest.join(' ') || 'مشتری',
      phone: data.phone,
      email: data.email || '',
      message: [
        data.message || '',
        '---',
        `زمان تماس: ${data.contactTime}`,
        `تست درایو: ${data.testDrive ? 'بله' : 'خیر'}`,
      ].join('\n'),
    })

    if (result.success) {
      setSuccess(true)
    } else {
      setServerError(result.message)
    }
  }

  if (success) {
    return (
      <div className="text-center py-12" dir={locale === 'fa' ? 'rtl' : 'ltr'}>
        <IconCircleCheck />
        <h3 className="text-xl font-bold text-opel-black mb-2">{t.successTitle}</h3>
        <p className="text-opel-gray-500 text-sm">{t.successMsg}</p>
      </div>
    )
  }

  const inputClass = 'w-full border border-opel-gray-300 rounded-lg px-4 py-3 text-sm text-opel-black placeholder:text-opel-gray-300 focus:outline-none focus:border-opel-black transition-colors'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <div id={id} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <h2 className="text-2xl font-bold text-opel-black mb-1">{t.title}</h2>
      <p className="text-opel-gray-500 text-sm mb-8">{t.subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        {/* Full name */}
        <div>
          <input
            {...register('fullName')}
            type="text"
            placeholder={t.fullName}
            className={inputClass}
          />
          {errors.fullName && <p className={errorClass}>{t.errors.fullName}</p>}
        </div>

        {/* Phone + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input
              {...register('phone')}
              type="tel"
              placeholder={t.phone}
              className={inputClass}
              dir="ltr"
            />
            {errors.phone && <p className={errorClass}>{t.errors.phone}</p>}
          </div>
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder={t.email}
              className={inputClass}
              dir="ltr"
            />
            {errors.email && <p className={errorClass}>{t.errors.email}</p>}
          </div>
        </div>

        {/* Contact time */}
        <div>
          <p className="text-sm text-opel-gray-700 font-medium mb-2">{t.contactTime}</p>
          <div className="flex flex-wrap gap-2">
            {(['morning', 'afternoon', 'evening'] as const).map((val) => (
              <label key={val} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value={val} {...register('contactTime')} className="sr-only" />
                <span className={`px-4 py-2 text-sm border rounded-lg transition-all duration-200 cursor-pointer select-none`}
                  style={{ borderColor: '#B3B3B3' }}
                >
                  {t[val]}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Test drive checkbox */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('testDrive')}
            className="w-5 h-5 accent-opel-yellow rounded border-opel-gray-300"
          />
          <span className="text-sm text-opel-gray-700">{t.testDrive}</span>
        </label>

        {/* Message */}
        <div>
          <textarea
            {...register('message')}
            rows={4}
            placeholder={t.message}
            className={`${inputClass} resize-none`}
          />
          {errors.message && <p className={errorClass}>{t.errors.message}</p>}
        </div>

        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-opel-primary w-full justify-center disabled:opacity-60"
        >
          {isSubmitting ? t.submitting : t.submit}
        </button>
      </form>
    </div>
  )
}
