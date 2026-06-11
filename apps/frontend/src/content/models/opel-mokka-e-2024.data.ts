import type { Vehicle } from '@/types'

export interface PhotoItem {
  src: string
  alt: string
  altFa: string
  use: 'hero' | 'gallery' | 'thumbnail'
}

export interface VehicleFull extends Omit<Vehicle, never> {
  ev: {
    batteryKwh: number
    motorPowerKw: number
    motorPowerHp: number
    torqueNm: number
    zeroToHundred: number
    dcFastChargeMin: [number, number]
    acChargeHours: number
    driveType: string
  }
  dims: {
    lengthMm: number
    widthMm: number
    heightMm: number
    wheelbaseMm: number
    curbWeightKg: number
    passengers: number
  }
  equipment: { en: string; fa: string }[]
  safety: { en: string; fa: string }[]
  photoManifest: PhotoItem[]
}

export const MODEL_DATA: VehicleFull = {
  id: 'opel-mokka-e-2024',
  slug: 'opel-mokka-e-2024',
  name: 'Opel Mokka-E',
  nameFa: 'اوپل موکا ای',
  brand: 'Opel',
  model: 'Mokka-E',
  year: 2024,
  category: 'suv',
  status: 'available',
  fuelType: 'electric',
  heroImage: '/images/mokka-e-photo-4.jpeg',
  thumbnailImage: '/images/mokka-e-photo-4.jpeg',
  description: 'The Opel Mokka-E is a fully electric compact SUV with 156 HP, 54 kWh battery, and DC fast charging capability.',
  descriptionFa: 'اوپل موکا ای یک شاسی‌بلند برقی فشرده با ۱۵۶ اسب بخار، باتری ۵۴ کیلووات‌ساعت و قابلیت شارژ سریع DC است.',
  features: ['Adaptive LED headlights', 'Digital instrument cluster', '10-inch touchscreen', 'Keyless entry', 'Lane keeping assist'],
  featuresFa: ['چراغ‌های LED هوشمند', 'کلاستر دیجیتال', 'مانیتور ۱۰ اینچ', 'ورود بدون کلید', 'سیستم حفظ خط'],
  isFeatured: true,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
  images: [
    '/images/mokka-e-photo-4.jpeg',
    '/images/mokka-e-photo-7.jpeg',
    '/images/mokka-e-photo-2.jpeg',
  ],
  specs: {
    engine: 'Electric Motor 115 kW',
    horsepower: 156,
    torque: 260,
    acceleration_0_100: 9,
    topSpeed: 150,
    transmission: 'automatic',
    driveType: 'FWD',
    doors: 5,
    seats: 5,
    wheelbase: 2561,
  },
  colors: [
    { name: 'Midnight Black', nameFa: 'مشکی شب', hex: '#0A0A0A' },
    { name: 'Pearl White', nameFa: 'سفید مروارید', hex: '#F5F5F5' },
    { name: 'Cobalt Blue', nameFa: 'آبی کبالت', hex: '#1A3A6B' },
  ],
  price: {
    base: 0,
    currency: 'IRR',
    isNegotiable: true,
    showPrice: false,
  },
  ev: {
    batteryKwh: 54.0,
    motorPowerKw: 115,
    motorPowerHp: 156,
    torqueNm: 260,
    zeroToHundred: 9,
    dcFastChargeMin: [27, 30],
    acChargeHours: 7.5,
    driveType: 'FWD',
  },
  dims: {
    lengthMm: 4151,
    widthMm: 1790,
    heightMm: 1534,
    wheelbaseMm: 2561,
    curbWeightKg: 1598,
    passengers: 5,
  },
  equipment: [
    { en: '10-inch touchscreen infotainment', fa: 'مانیتور ۱۰ اینچ' },
    { en: 'Digital instrument cluster',       fa: 'کلاستر دیجیتال' },
    { en: 'Rear passenger USB charging',      fa: 'شارژ USB صندلی عقب' },
    { en: 'Leather-effect seat upholstery',   fa: 'روکش صندلی چرم مصنوعی' },
    { en: 'Keyless entry system',             fa: 'ورود بدون کلید' },
    { en: 'Heated D-Sport steering wheel',    fa: 'فرمان گرمایشی D-Sport' },
    { en: 'Electrically heated side mirrors', fa: 'آینه‌های برقی و گرمایشی' },
    { en: 'Telescopic steering column',       fa: 'ستون فرمان تلسکوپی' },
    { en: 'Adaptive LED headlights',          fa: 'چراغ‌های LED هوشمند' },
    { en: 'Rain sensor',                      fa: 'سنسور باران' },
    { en: 'Light sensor',                     fa: 'سنسور نور' },
    { en: 'Cruise control',                   fa: 'کروز کنترل' },
    { en: 'Sport two-tone front air vents',   fa: 'دریچه‌های دو رنگ اسپرت' },
    { en: 'Sport black roof lining',          fa: 'سقف داخلی مشکی اسپرت' },
    { en: 'Rear ISOFIX anchors',              fa: 'جایگاه ISOFIX عقب' },
    { en: 'Regenerative braking system',      fa: 'سیستم ترمز بازیابی انرژی' },
    { en: 'Dual-tone exterior roof',          fa: 'سقف دو رنگ خارجی' },
  ],
  safety: [
    { en: '6 airbags',                           fa: '۶ کیسه هوا' },
    { en: 'Front & rear parking sensors',        fa: 'سنسور پارک جلو و عقب' },
    { en: 'Blind spot warning radar',            fa: 'رادار هشدار نقطه کور' },
    { en: 'Side radar system',                   fa: 'سیستم رادار جانبی' },
    { en: '180° rear camera',                    fa: 'دوربین ۱۸۰ درجه عقب' },
    { en: 'Lane keeping assist',                 fa: 'سیستم حفظ خط' },
    { en: 'Frontal distance warning',            fa: 'هشدار فاصله جلو' },
    { en: '360° driver assistance monitoring',   fa: 'پایش ۳۶۰ درجه' },
    { en: 'Collision detection system',          fa: 'سیستم تشخیص تصادف' },
  ],
  photoManifest: [
    { src: '/images/mokka-e-photo-4.jpeg', alt: 'Opel Mokka-E 2024 front three-quarter exterior',  altFa: 'اوپل موکا ای ۲۰۲۴ نمای جلو', use: 'hero' },
    { src: '/images/mokka-e-photo-7.jpeg', alt: 'Opel Mokka-E 2024 rear three-quarter exterior',   altFa: 'اوپل موکا ای ۲۰۲۴ نمای عقب', use: 'gallery' },
    { src: '/images/mokka-e-photo-3.jpeg', alt: 'Opel Mokka-E 2024 rear view in showroom',         altFa: 'اوپل موکا ای ۲۰۲۴ نمای عقب در نمایشگاه', use: 'gallery' },
    { src: '/images/mokka-e-photo-2.jpeg', alt: 'Opel Mokka-E 2024 interior cockpit',              altFa: 'اوپل موکا ای ۲۰۲۴ کابین داخلی', use: 'gallery' },
    { src: '/images/mokka-e-photo-1.jpeg', alt: 'Opel Mokka-E 2024 interior dashboard',            altFa: 'اوپل موکا ای ۲۰۲۴ داشبورد داخلی', use: 'gallery' },
    { src: '/images/mokka-e-photo-6.jpeg', alt: 'Opel Mokka-E 2024 exterior all angles',           altFa: 'اوپل موکا ای ۲۰۲۴ تمام زوایا', use: 'thumbnail' },
  ],
}
