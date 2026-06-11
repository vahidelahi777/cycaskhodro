export interface OpelModel {
  id: string
  nameFa: string
  nameEn: string
  category: 'SUV' | 'SEDAN' | 'HATCHBACK'
  bodyStyle: string
  taglineFa: string
  image: string
  thumbnail: string
  href: string
  ctaInquiryHref: string
  startingPrice: number
  fuelType: 'petrol' | 'electric' | 'hybrid'
  status: 'available' | 'pre-order' | 'coming-soon'
  keySpecs: {
    power: string
    acceleration: string
    fuel: string
  }
}

export const OPEL_MODELS: OpelModel[] = [
  {
    id: 'mokka-e',
    nameFa: 'اوپل موکا E',
    nameEn: 'OPEL MOKKA E',
    category: 'SUV',
    bodyStyle: 'کراس‌اور برقی',
    taglineFa: 'آینده‌ای کاملاً برقی',
    image: '/images/mokka-e-new.png',
    thumbnail: '/images/mokka-e-new.png',
    href: '/models',
    ctaInquiryHref: '/contact',
    startingPrice: 1_580_000_000,
    fuelType: 'electric',
    status: 'available',
    keySpecs: {
      power: '۱۵۶ اسب بخار',
      acceleration: '۹ ثانیه',
      fuel: 'برقی — ۵۴ kWh',
    },
  },
  {
    id: 'mokka',
    nameFa: 'اوپل موکا',
    nameEn: 'OPEL MOKKA',
    category: 'SUV',
    bodyStyle: 'کراس‌اور',
    taglineFa: 'انرژی مقاومت‌ناپذیر',
    image: '/images/mokka-new.png',
    thumbnail: '/images/mokka-new.png',
    href: '/models',
    ctaInquiryHref: '/contact',
    startingPrice: 1_250_000_000,
    fuelType: 'petrol',
    status: 'available',
    keySpecs: {
      power: '۱۳۰ اسب بخار',
      acceleration: '۹.۱ ثانیه',
      fuel: '۵.۷ لیتر/۱۰۰km',
    },
  },
  {
    id: 'astra',
    nameFa: 'اوپل آسترا',
    nameEn: 'OPEL ASTRA',
    category: 'HATCHBACK',
    bodyStyle: 'هاچ‌بک',
    taglineFa: 'هیجان در هر خیابان',
    image: '/images/astra-new.png',
    thumbnail: '/images/astra-new.png',
    href: '/models',
    ctaInquiryHref: '/contact',
    startingPrice: 1_150_000_000,
    fuelType: 'petrol',
    status: 'available',
    keySpecs: {
      power: '۱۳۰ اسب بخار',
      acceleration: '۹.۱ ثانیه',
      fuel: '۵.۷ لیتر/۱۰۰km',
    },
  },
]

export type ModelCategory = 'ALL' | 'SUV' | 'SEDAN' | 'HATCHBACK'

export const CATEGORY_LABELS: Record<ModelCategory, string> = {
  ALL: 'همه',
  SUV: 'SUV',
  SEDAN: 'سدان',
  HATCHBACK: 'هاچ‌بک',
}

export function getModelsByCategory(category: ModelCategory): OpelModel[] {
  if (category === 'ALL') return OPEL_MODELS
  return OPEL_MODELS.filter((model) => model.category === category)
}
