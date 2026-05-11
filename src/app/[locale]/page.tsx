import { Metadata } from 'next'
import { ApplePremiumHeader } from '@/components/premium/ApplePremiumHeader'
import { AppleHero } from '@/components/premium/AppleHero'
import { PremiumWhyUs } from '@/components/premium/PremiumWhyUs'
import  DiscoverSlider  from '@/components/Discover/DiscoverSlider'
import { PremiumFooter } from '@/components/premium/PremiumFooter'
import ModelsShowcase from '@/components/ModelsShowcase/ModelsShowcase'
import { LatestNews } from '@/components/premium/LatestNews'


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
        <AppleHero />
        <ModelsShowcase />
        <DiscoverSlider/>
        <PremiumWhyUs />
        <LatestNews/>
      </main>
      <PremiumFooter />
    </div>
  )
}
