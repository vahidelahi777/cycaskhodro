import { Metadata } from 'next'

import ApplePremiumHeader from '@/shared/layout/ApplePremiumHeader'
import PremiumFooter from '@/shared/layout/PremiumFooter'

import Hero from '@/features/home/sections/Hero'
import WhyUs from '@/features/home/sections/WhyUs'
import DiscoverSlider from '@/features/home/sections/DiscoverSlider'
import ModelsShowcase from '@/features/home/sections/ModelsShowcase'
import LatestNews from '@/features/home/sections/LatestNews'

export const metadata: Metadata = {
  title: 'سیکاس خودرو | نمایندگی رسمی اوپل در ایران',
  description:
    'سیکاس خودرو - نمایندگی رسمی اوپل در ایران. خودروهای اوپل با گارانتی معتبر و خدمات پس از فروش حرفه‌ای.',
  keywords: [
    'اوپل',
    'خودرو',
    'نمایندگی اوپل',
    'تهران',
    'گارانتی',
    'خدمات',
  ],
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
