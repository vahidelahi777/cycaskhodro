import type { Metadata } from 'next'
import Script from 'next/script'
import { MODEL_DATA } from '@/content/models/opel-mokka-e-2024.data'
import ModelDetailPage from '@/features/listings/ModelDetailPage'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: locale === 'fa'
      ? 'اوپل موکا ای ۲۰۲۴ | سیکاس خودرو'
      : 'Opel Mokka-E 2024 | CycasKhodro',
    description: locale === 'fa'
      ? 'خودروی الکتریکی اوپل موکا ای با موتور ۱۵۶ اسب بخار و باتری ۵۴ کیلووات‌ساعت'
      : 'Opel Mokka-E electric SUV — 156 HP, 54 kWh battery, DC fast charge 27-30 min',
    openGraph: {
      images: [MODEL_DATA.photoManifest[0].src],
      type: 'website',
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
    },
    alternates: {
      canonical: `/${locale}/models/opel-mokka-e-2024`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Car',
  name: 'Opel Mokka-E 2024',
  brand: { '@type': 'Brand', name: 'Opel' },
  model: 'Mokka-E',
  modelDate: '2024',
  fuelType: 'Electric',
  driveWheelConfiguration: 'FrontWheelDriveConfiguration',
  vehicleEngine: {
    '@type': 'EngineSpecification',
    enginePower: {
      '@type': 'QuantitativeValue',
      value: 115,
      unitCode: 'KWT',
    },
  },
  accelerationTime: {
    '@type': 'QuantitativeValue',
    value: 9,
    unitCode: 'SEC',
  },
  image: MODEL_DATA.photoManifest[0].src,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'AutoDealer',
      name: 'سیکاس خودرو',
      url: 'https://cycaskhodro.com',
    },
  },
}

export default async function MokkaEPage({ params }: Props) {
  const { locale } = await params

  return (
    <>
      <Script
        id="mokka-e-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ModelDetailPage data={MODEL_DATA} locale={locale} />
    </>
  )
}
