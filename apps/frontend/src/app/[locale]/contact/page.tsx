import { Metadata } from 'next'
import ApplePremiumHeader from '@/shared/layout/ApplePremiumHeader'
import PremiumFooter from '@/shared/layout/PremiumFooter'
import { ContactSection } from '@/features/home/sections/ContactSection'

export const metadata: Metadata = {
  title: 'تماس با ما | سیکاس خودرو',
  description: 'با کارشناسان سیکاس خودرو تماس بگیرید. نمایندگی رسمی اوپل در ایران، تهران، جردن.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ApplePremiumHeader />
      <main className="pt-16 md:pt-20">
        <ContactSection />
      </main>
      <PremiumFooter />
    </div>
  )
}
