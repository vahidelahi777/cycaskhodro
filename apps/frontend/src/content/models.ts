export interface OpelModel {
  id: string
  nameFa: string
  nameEn: string
  category: 'SUV' | 'SEDAN'
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
    id: 'astra',
    nameFa: 'اوپل آسترا',
    nameEn: 'OPEL ASTRA',
    category: 'SEDAN',
    image: '/images/astra-new.png',
    thumbnail: '/images/astra-new.png',
    href: '/fa/models/astra',
    ctaInquiryHref: '/fa/inquiry/astra',
  },
]

export type ModelCategory = 'ALL' | 'SUV' | 'SEDAN'

export const CATEGORY_LABELS: Record<ModelCategory, string> = {
  ALL: 'همه',
  SUV: 'SUV',
  SEDAN: 'سدان',
}

export function getModelsByCategory(category: ModelCategory): OpelModel[] {
  if (category === 'ALL') return OPEL_MODELS
  return OPEL_MODELS.filter((model) => model.category === category)
}

