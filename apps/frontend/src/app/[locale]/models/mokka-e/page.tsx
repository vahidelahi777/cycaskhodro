import type { Metadata } from 'next'
import Script from 'next/script'
import { MOKKA_E_DATA } from '@/content/models/opel-mokka-e-2025.data'
import VehiclePageLayout from '@/features/vehicle-page/VehiclePageLayout'

export const revalidate = 300

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'fa' ? MOKKA_E_DATA.seo.titleFa : 'Opel Mokka-E 2024 | CycasKhodro',
    description: MOKKA_E_DATA.seo.descriptionFa,
    alternates: { canonical: `/${locale}/models/mokka-e` },
    openGraph: {
      images: [MOKKA_E_DATA.media.heroImage],
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
    },
  }
}

export default async function MokkaEPage({ params }: Props) {
  const { locale } = await params

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: `Opel ${MOKKA_E_DATA.model} ${MOKKA_E_DATA.year}`,
    brand: { '@type': 'Brand', name: 'Opel' },
    model: MOKKA_E_DATA.model,
    vehicleModelDate: MOKKA_E_DATA.year.toString(),
    fuelType: 'Electric',
    driveWheelConfiguration: 'FrontWheelDriveConfiguration',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: Math.min(...MOKKA_E_DATA.trims.map((t) => t.price)),
      highPrice: Math.max(...MOKKA_E_DATA.trims.map((t) => t.price)),
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
    },
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
  }

  return (
    <>
      <Script
        id="mokka-e-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VehiclePageLayout vehicle={MOKKA_E_DATA} />
    </>
  )
}
