'use server'

import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(2, 'نام الزامی است'),
  lastName: z.string().min(2, 'نام خانوادگی الزامی است'),
  phone: z.string().regex(/^(\+98|0)?9\d{9}$/, 'شماره موبایل معتبر نیست'),
  email: z.string().email().optional().or(z.literal('')),
  message: z.string().min(10, 'پیام باید حداقل ۱۰ کاراکتر باشد'),
})

export async function submitContactForm(formData: unknown) {
  try {
    contactSchema.parse(formData)

    return { success: true, message: 'پیام شما با موفقیت ارسال شد' }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    return { success: false, message: 'خطا در ارسال. لطفاً دوباره تلاش کنید' }
  }
}
