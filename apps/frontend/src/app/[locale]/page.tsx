import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import ApplePremiumHeader from '@/shared/layout/ApplePremiumHeader'
import PremiumFooter from '@/shared/layout/PremiumFooter'
import Hero from '@/features/home/sections/Hero'

import ModelsShowcase from '@/features/home/sections/ModelsShowcase'

const WhyUs             = dynamic(() => import('@/features/home/sections/WhyUs'))
const LatestNews        = dynamic(() => import('@/features/home/sections/LatestNews'))

export const metadata: Metadata = {
  title: 'سیکاس خودرو | نمایندگی رسمی اوپل در ایران',
  description:
    'سیکاس خودرو - نمایندگی رسمی اوپل در ایران. خودروهای اوپل با گارانتی معتبر و خدمات پس از فروش حرفه‌ای.',
  keywords: [
    'اوپل', 'خودرو', 'نمایندگی اوپل', 'تهران', 'گارانتی', 'خدمات',
    'اوپل موکا', 'اوپل آسترا', 'اوپل کورسا', 'سیکاس خودرو',
  ],
  openGraph: {
    title: 'سیکاس خودرو | نمایندگی رسمی اوپل در ایران',
    description: 'خودروهای اوپل با گارانتی معتبر و خدمات پس از فروش حرفه‌ای',
    type: 'website',
    locale: 'fa_IR',
    images: [{ url: '/images/mokka-new.png', width: 1200, height: 630, alt: 'سیکاس خودرو - نمایندگی رسمی اوپل' }],
  },
}

export default function Home() {
  return (
    <div className="bg-white">
      <ApplePremiumHeader />
      <main>
        <Hero />
        <ModelsShowcase />
        <WhyUs />
        <LatestNews />
      </main>
      <PremiumFooter />
    </div>
  )
}
