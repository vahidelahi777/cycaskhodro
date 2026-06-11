import type { Metadata } from 'next'
import ModelsListingPage from '@/features/models/ModelsListingPage'

export const metadata: Metadata = {
  title: 'خودروهای اوپل | سیکاس خودرو',
  description:
    'تمامی مدل‌های اوپل موجود در ایران. موکا، موکا E برقی، آسترا با قیمت و مشخصات کامل. نمایندگی رسمی سیکاس خودرو.',
  keywords: ['اوپل', 'موکا', 'آسترا', 'خودرو برقی', 'قیمت اوپل', 'سیکاس خودرو'],
  openGraph: {
    title: 'خودروهای اوپل | سیکاس خودرو',
    description: 'تمامی مدل‌های اوپل در ایران با قیمت و مشخصات',
    type: 'website',
    locale: 'fa_IR',
    images: [{ url: '/images/mokka-e-new.png', width: 1200, height: 630, alt: 'خودروهای اوپل - سیکاس خودرو' }],
  },
}

export default function ModelsPage() {
  return <ModelsListingPage />
}
