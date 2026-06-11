import type { Metadata } from 'next'
import Script from 'next/script'
import { MOKKA_DATA } from '@/content/models/opel-mokka-2025.data'
import VehiclePageLayout from '@/features/vehicle-page/VehiclePageLayout'

export const revalidate = 300

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'fa' ? MOKKA_DATA.seo.titleFa : `Opel Mokka 2025 | CycasKhodro`,
    description: MOKKA_DATA.seo.descriptionFa,
    alternates: { canonical: `/${locale}/models/mokka` },
    openGraph: {
      images: [MOKKA_DATA.media.heroImage],
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
    },
  }
}

export default async function MokkaPage({ params }: Props) {
  const { locale } = await params
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: `Opel ${MOKKA_DATA.model} ${MOKKA_DATA.year}`,
    brand: { '@type': 'Brand', name: 'Opel' },
    model: MOKKA_DATA.model,
    vehicleModelDate: MOKKA_DATA.year.toString(),
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: Math.min(...MOKKA_DATA.trims.map((t) => t.price)),
      highPrice: Math.max(...MOKKA_DATA.trims.map((t) => t.price)),
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
    },
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
  }

  return (
    <>
      <Script
        id="mokka-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VehiclePageLayout vehicle={MOKKA_DATA} />
    </>
  )
}
