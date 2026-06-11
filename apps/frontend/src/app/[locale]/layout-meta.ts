import type { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: 'سیکاس خودرو | نمایندگی رسمی اوپل در ایران',
    description:
      'سیکاس خودرو، نمایندگی رسمی و واردکننده خودروهای اوپل در ایران. با بیش از 10 سال تجربه، ما بهترین خودروهای اوپل را با قیمت‌های رقابتی و خدمات بی‌نظیر به شما ارائه می‌دهیم.',
    keywords: [
      'خودروهای اوپل',
      'نمایندگی اوپل',
      'خودروهای خارجی',
      'واردات خودرو',
      'اوپل موکا',
      'اوپل آسترا',
      'تهران',
      'ایران',
    ],
    authors: [{ name: 'Cycas Khodro' }],
    openGraph: {
      type: 'website',
      locale: 'fa_IR',
      url: 'https://cycaskhodro.com',
      siteName: 'Cycas Khodro',
      title: 'سیکاس خودرو | نمایندگی رسمی اوپل در ایران',
      description:
        'سیکاس خودرو، نمایندگی رسمی و واردکننده خودروهای اوپل در ایران. خودروهای با کیفیت و خدمات حرفه‌ای.',
      images: [
        {
          url: 'https://cycaskhodro.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Cycas Khodro - Official Opel Dealer',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    alternates: {
      canonical: 'https://cycaskhodro.com/fa',
      languages: {
        'fa-IR': 'https://cycaskhodro.com/fa',
        'en-US': 'https://cycaskhodro.com/en',
      },
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  }
}
