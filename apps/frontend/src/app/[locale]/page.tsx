import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import ApplePremiumHeader from '@/shared/layout/ApplePremiumHeader'
import PremiumFooter from '@/shared/layout/PremiumFooter'
import Hero from '@/features/home/sections/Hero'

// Above-fold: SSR, no lazy load
import ModelsShowcase from '@/features/home/sections/ModelsShowcase'

// Below-fold: lazy loaded to reduce initial JS bundle
const DiscoverSlider = dynamic(() => import('@/features/home/sections/DiscoverSlider'))
const WhyUs         = dynamic(() => import('@/features/home/sections/WhyUs'))
const LatestNews    = dynamic(() => import('@/features/home/sections/LatestNews'))

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
  },
}

export default function Home() {
  return (
    <div className="bg-white">
      <ApplePremiumHeader />
      <main>
        <Hero />
        <ModelsShowcase />
        <DiscoverSlider />
        <WhyUs />
        <LatestNews />
      </main>
      <PremiumFooter />
    </div>
  )
}
