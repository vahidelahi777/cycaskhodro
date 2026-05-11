export interface OpelModel {
  id: string
  nameFa: string
  nameEn: string
  category: 'SUV' | 'SEDAN' | 'HYBRID' | 'PERFORMANCE'
  image: string
  thumbnail: string
  href: string
  ctaInquiryHref: string
}

export const OPEL_MODELS: OpelModel[] = [
  {
    id: 'mokka-e',
    nameFa: 'اوپل موکا E',
    nameEn: 'OPEL MOKKA E',
    category: 'SUV',
    image: '/images/mokka-e-new.png',
    thumbnail: '/images/mokka-e-new.png',
    href: '/fa/models/mokka-e',
    ctaInquiryHref: '/fa/inquiry/mokka-e',
  },
  {
    id: 'mokka',
    nameFa: 'اوپل موکا',
    nameEn: 'OPEL MOKKA',
    category: 'SUV',
    image: '/images/mokka-new.png',
    thumbnail: '/images/mokka-new.png',
    href: '/fa/models/mokka',
    ctaInquiryHref: '/fa/inquiry/mokka',
  },
  {
    id: 'corsa',
    nameFa: 'اوپل کورسا',
    nameEn: 'OPEL CORSA',
    category: 'HYBRID',
    image: '/images/corsa-new.png',
    thumbnail: '/images/corsa-new.png',
    href: '/fa/models/corsa',
    ctaInquiryHref: '/fa/inquiry/corsa',
  },
  {
    id: 'astra',
    nameFa: 'اوپل آسترا',
    nameEn: 'OPEL ASTRA',
    category: 'SEDAN',
    image: '/images/astra-new.png',
    thumbnail: '/images/astra-new.png',
    href: '/fa/models/astra',
    ctaInquiryHref: '/fa/inquiry/astra',
  },
  {
    id: 'grandland',
    nameFa: 'اوپل گرندلند',
    nameEn: 'OPEL GRANDLAND',
    category: 'SUV',
    image: '/images/mokka-new.png', // placeholder
    thumbnail: '/images/mokka-new.png',
    href: '/fa/models/grandland',
    ctaInquiryHref: '/fa/inquiry/grandland',
  },
  {
    id: 'combo',
    nameFa: 'اوپل کمبو',
    nameEn: 'OPEL COMBO',
    category: 'PERFORMANCE',
    image: '/images/corsa-new.png', // placeholder
    thumbnail: '/images/corsa-new.png',
    href: '/fa/models/combo',
    ctaInquiryHref: '/fa/inquiry/combo',
  },
]

export type ModelCategory = 'ALL' | 'SUV' | 'SEDAN' | 'HYBRID' | 'PERFORMANCE'

export const CATEGORY_LABELS: Record<ModelCategory, string> = {
  ALL: 'همه',
  SUV: 'SUV',
  SEDAN: 'سدان',
  HYBRID: 'هیبرید و الکتریکی',
  PERFORMANCE: 'پرفورمنس',
}

export function getModelsByCategory(category: ModelCategory): OpelModel[] {
  if (category === 'ALL') return OPEL_MODELS
  return OPEL_MODELS.filter((model) => model.category === category)
}

export function getCategoryCount(category: ModelCategory): number {
  return getModelsByCategory(category).length
}
