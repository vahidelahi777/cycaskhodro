import { Metadata } from 'next'
import { ApplePremiumHeader } from '@/components/premium/ApplePremiumHeader'
import { AppleHero } from '@/components/premium/AppleHero'
import { PremiumProducts } from '@/components/premium/PremiumProducts'
import { PremiumServices } from '@/components/premium/PremiumServices'
import { PremiumWhyUs } from '@/components/premium/PremiumWhyUs'
import { PremiumContact } from '@/components/premium/PremiumContact'
import { PremiumFooter } from '@/components/premium/PremiumFooter'

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

export default function PremiumHome() {
  return (
    <div className="bg-white">
      <ApplePremiumHeader />
      <main>
        <AppleHero />
        <PremiumProducts />
        <PremiumServices />
        <PremiumWhyUs />
        <PremiumContact />
      </main>
      <PremiumFooter />
    </div>
  )
}
