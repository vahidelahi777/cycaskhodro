export interface BenefitItem {
  id: string
  title: string
  description: string
  icon: 'quality' | 'price' | 'official' | 'parts' | 'service' | 'warranty'
  href?: string
}

export const benefits: BenefitItem[] = [
  {
    id: 'official-importer',
    title: 'واردکننده رسمی اوپل',
    description: 'نمایندگی مجاز و معتبر اوپل در ایران با گواهینامه‌های بین‌المللی.',
    icon: 'official',
    href: '#official',
  },
  {
    id: 'direct-pricing',
    title: 'قیمت مستقیم بدون واسطه',
    description: 'خرید مستقیم از واردکننده رسمی با شفاف‌ترین قیمت‌ها.',
    icon: 'price',
    href: '#pricing',
  },
  {
    id: 'quality-inspection',
    title: 'بازرسی دقیق کیفیت',
    description: 'تمامی خودروها تحت دقیق‌ترین کنترل‌های کیفی و استانداردهای اروپایی.',
    icon: 'quality',
    href: '#quality',
  },
  {
    id: 'comprehensive-warranty',
    title: 'گارانتی معتبر و جامع',
    description: 'پوشش کامل گارانتی با شبکه خدمات پس از فروش سراسری.',
    icon: 'warranty',
    href: '#warranty',
  },
  {
    id: 'after-sales',
    title: 'خدمات پس از فروش حرفه‌ای',
    description: 'مراکز خدماتی مجهز با تکنسین‌های آموزش‌دیده و تجهیزات پیشرفته.',
    icon: 'service',
    href: '#service',
  },
  {
    id: 'genuine-parts',
    title: 'قطعات یدکی اصلی',
    description: 'تامین قطعات اورجینال اوپل با گارانتی اصالت و کیفیت.',
    icon: 'parts',
    href: '#parts',
  },
]
