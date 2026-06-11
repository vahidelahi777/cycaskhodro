import type { Metadata } from 'next'
import Script from 'next/script'
import { ASTRA_DATA } from '@/content/models/opel-astra-2025.data'
import VehiclePageLayout from '@/features/vehicle-page/VehiclePageLayout'

export const revalidate = 300

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'fa' ? ASTRA_DATA.seo.titleFa : `Opel Astra 2025 | CycasKhodro`,
    description: ASTRA_DATA.seo.descriptionFa,
    alternates: { canonical: `/${locale}/models/astra` },
    openGraph: {
      images: [ASTRA_DATA.media.heroImage],
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
    },
  }
}

export default async function AstraPage({ params }: Props) {
  const { locale } = await params
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: `Opel ${ASTRA_DATA.model} ${ASTRA_DATA.year}`,
    brand: { '@type': 'Brand', name: 'Opel' },
    model: ASTRA_DATA.model,
    vehicleModelDate: ASTRA_DATA.year.toString(),
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: Math.min(...ASTRA_DATA.trims.map((t) => t.price)),
      highPrice: Math.max(...ASTRA_DATA.trims.map((t) => t.price)),
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
    },
    inLanguage: locale === 'fa' ? 'fa-IR' : 'en-US',
  }

  return (
    <>
      <Script
        id="astra-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VehiclePageLayout vehicle={ASTRA_DATA} />
    </>
  )
}
