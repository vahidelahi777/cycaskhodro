import type { OpelVehicle } from '@/types/vehicle-page'

export const MOKKA_DATA: OpelVehicle = {
  id: 'mokka',
  slug: 'mokka',
  brand: 'Opel',
  model: 'Mokka',
  year: 2025,
  bodyStyle: 'crossover',
  status: 'available',
  tagline: 'انرژی مقاومت‌ناپذیر',

  /** Opel Mokka "Dares to be Different" teaser video */
  heroVideo: '/videos/mokka-teaser.mp4',

  powertrain: {
    available: ['petrol', 'hybrid'],
    default: 'petrol',
    specs: {
      petrol: {
        engineCode: '1.2 DI Turbo',
        displacement: '۱۱۹۹ سی‌سی',
        power: '۱۳۶ اسب بخار (۱۰۰ کیلووات)',
        torque: '۲۳۰ نیوتون‌متر',
        transmission: 'اتوماتیک ۸ سرعته DCT',
        fuelConsumption: '۵.۷ لیتر/۱۰۰km',
      },
      hybrid: {
        engineCode: '1.2 DI Turbo MHEV',
        displacement: '۱۱۹۹ سی‌سی + میلد هیبرید',
        power: '۱۴۵ اسب بخار (۱۰۷ کیلووات)',
        torque: '۲۳۰ نیوتون‌متر',
        transmission: 'اتوماتیک ۶ سرعته eDCT',
        fuelConsumption: '۴.۹ لیتر/۱۰۰km',
      },
    },
  },

  trims: [
    {
      level: 'Edition',
      displayName: 'ادیشن',
      price: 1_250_000_000,
      installment: { downPaymentPercent: 30, monthlyPayment: 28_500_000, months: 36 },
      heroImage: '/images/mokka-silver-front.jpeg',
      features: [
        'نمایشگر ۱۰ اینچ لمسی',
        'دوربین دنده عقب',
        'Apple CarPlay و Android Auto',
        'سیستم صوتی ۶ بلندگو',
        'ترمز اضطراری خودکار',
        'هشدار تغییر خط',
      ],
    },
    {
      level: 'GS',
      displayName: 'جی‌اس',
      price: 1_480_000_000,
      installment: { downPaymentPercent: 30, monthlyPayment: 33_700_000, months: 36 },
      heroImage: '/images/mokka-grey-4panel.jpeg',
      highlightBadge: 'محبوب‌ترین',
      isRecommended: true,
      features: [
        'همه امکانات ادیشن',
        'سقف دو‌تن مشکی',
        'صندلی‌های ورزشی چرم',
        'دوربین ۳۶۰ درجه',
        'چراغ‌های Matrix LED',
        'تمپومات تطبیقی',
      ],
    },
    {
      level: 'Ultimate',
      displayName: 'آلتیمیت',
      price: 1_750_000_000,
      installment: { downPaymentPercent: 30, monthlyPayment: 39_800_000, months: 36 },
      heroImage: '/images/mokka-silver-rear.jpeg',
      features: [
        'همه امکانات جی‌اس',
        'صندلی‌های ماساژور',
        'سانروف پانوراما',
        'سیستم صوتی ۱۰ بلندگو',
        'پارک خودکار کامل',
        'OpelConnect نامحدود',
      ],
    },
  ],

  colors: [
    {
      id: 'arktis-weiss',
      name: 'سفید قطبی',
      nameEn: 'Arktis Weiß',
      hex: '#F2EFEA',
      image: '/images/mokka-silver-front.jpeg',
      available: true,
    },
    {
      id: 'kontrast-grau',
      name: 'خاکستری کنتراست',
      nameEn: 'Kontrast Grau',
      hex: '#5C5D5F',
      image: '/images/mokka-grey-4panel.jpeg',
      available: true,
    },
    {
      id: 'karbon-schwarz',
      name: 'مشکی کربن',
      nameEn: 'Karbon Schwarz',
      hex: '#1A1A1A',
      image: '/images/mokka-silver-rear.jpeg',
      available: true,
    },
    {
      id: 'kolibri-blau',
      name: 'آبی کولیبری',
      nameEn: 'Kolibri Blau',
      hex: '#1B4B8A',
      image: '/images/mokka-silver-front.jpeg',
      available: true,
    },
    {
      id: 'tropikal-gruen',
      name: 'سبز گرمسیری',
      nameEn: 'Tropikal Grün',
      hex: '#2D5A3D',
      image: '/images/mokka-grey-4panel.jpeg',
      available: true,
    },
    {
      id: 'grafik-grau',
      name: 'خاکستری گرافیک',
      nameEn: 'Grafik Grau',
      hex: '#3A3D42',
      image: '/images/mokka-silver-rear.jpeg',
      available: true,
    },
  ],

  specs: {
    dimensions: {
      length: 4150,
      width: 1787,
      height: 1535,
      wheelbase: 2557,
      trunkVolume: 310,
    },
    performance: {
      topSpeed: 208,
      acceleration0100: 8.8,
    },
    safety: {
      euroncap: 5,
      airbags: 6,
      features: [
        'ترمز اضطراری خودکار',
        'هشدار تغییر خط',
        'هشدار نقطه کور',
        'کمک نگهداری خط',
        'هشدار فاصله جلو',
      ],
    },
    technology: {
      screenSize: '۱۰"',
      appleCarPlay: true,
      androidAuto: true,
      camera360: true,
      adaptiveCruise: true,
      laneAssist: true,
    },
  },

  media: {
    heroImage: '/images/mokka-silver-front.jpeg',

    gallery: [
      { url: '/images/mokka-silver-front.jpeg',   alt: 'اوپل موکا ۲۰۲۵ — نمای جلو نقره‌ای' },
      { url: '/images/mokka-silver-rear.jpeg',    alt: 'اوپل موکا ۲۰۲۵ — نمای عقب نقره‌ای' },
      { url: '/images/mokka-grey-4panel.jpeg',    alt: 'اوپل موکا ۲۰۲۵ — چهار زاویه خاکستری' },
      { url: '/images/mokka-interior-cockpit.jpeg', alt: 'اوپل موکا ۲۰۲۵ — کابین داخلی' },
      { url: '/images/mokka-interior-wheel.jpeg', alt: 'اوپل موکا ۲۰۲۵ — فرمان و صفحه‌نمایش' },
      { url: '/images/mokka-2024.webp',           alt: 'اوپل موکا ۲۰۲۵ — نمای جانبی' },
      { url: '/images/mokka-banner-new.jpg',      alt: 'اوپل موکا ۲۰۲۵ — نمای جانبی بنر' },
    ],

    exterior: [
      {
        url: '/images/mokka-silver-front.jpeg',
        alt: 'اوپل موکا ۲۰۲۵ — طراحی جلو',
        callouts: [
          { label: 'Pixel LED',    top: '30%', right: '25%' },
          { label: 'گریل تیره',    top: '55%', right: '35%' },
          { label: 'بدنه عضلانی', top: '55%', left: '30%' },
        ],
      },
      {
        url: '/images/mokka-silver-rear.jpeg',
        alt: 'اوپل موکا ۲۰۲۵ — طراحی عقب',
        callouts: [
          { label: 'چراغ‌های LED عقب', top: '35%', left: '20%' },
          { label: 'لترینگ MOKKA',     top: '45%', right: '30%' },
        ],
      },
      {
        url: '/images/mokka-grey-4panel.jpeg',
        alt: 'اوپل موکا ۲۰۲۵ — چهار زاویه کامل',
      },
    ],

    interior: [
      {
        url: '/images/mokka-interior-cockpit.jpeg',
        alt: 'اوپل موکا ۲۰۲۵ — کابین Pure Panel',
        caption: 'Pure Panel — دو صفحه‌نمایش یکپارچه ۱۰ اینچ',
      },
      {
        url: '/images/mokka-interior-wheel.jpeg',
        alt: 'اوپل موکا ۲۰۲۵ — فرمان D-Sport و اینفوتینمنت',
        caption: 'فرمان D-Sport با کنترل صوتی',
      },
    ],
  },

  highlights: [
    {
      number: '۰۱',
      titleFa: 'طراحی جسورانه',
      titleEn: 'Bold Design',
      descFa: 'هندسه تیز، چراغ‌های Pixel LED، و گریل نقطه‌ای اختصاصی — اوپل موکا از همان نگاه اول خود را معرفی می‌کند.',
      image: '/images/mokka-silver-front.jpeg',
    },
    {
      number: '۰۲',
      titleFa: 'Pure Panel کابین',
      titleEn: 'Pure Panel Cockpit',
      descFa: 'دو صفحه‌نمایش ۱۰ اینچ به‌صورت یکپارچه در یک قاب خطی — سیستم اینفوتینمنت آینده‌نگر اوپل.',
      image: '/images/mokka-interior-cockpit.jpeg',
    },
    {
      number: '۰۳',
      titleFa: 'موتور توربو ۱۳۶',
      titleEn: '136 HP Turbo',
      descFa: 'موتور ۱.۲ لیتر Direct Injection Turbo با ۱۳۶ اسب بخار (۱۰۰ کیلووات) و گیربکس اتوماتیک ۸ سرعته DCT. نسخه هیبرید MHEV با ۱۴۵ اسب بخار نیز در دسترس است.',
      image: '/images/mokka-grey-4panel.jpeg',
    },
    {
      number: '۰۴',
      titleFa: 'ایمنی ۵ ستاره',
      titleEn: '5-Star Safety',
      descFa: 'رتبه ۵ ستاره Euro NCAP، ترمز اضطراری خودکار، رادار نقطه کور، و ۶ کیسه هوا.',
      image: '/images/mokka-silver-rear.jpeg',
    },
    {
      number: '۰۵',
      titleFa: 'Apple CarPlay بی‌سیم',
      titleEn: 'Wireless CarPlay',
      descFa: 'اتصال بدون کابل به گوشی، ناوبری زنده، و دستیار صوتی — همیشه متصل، همیشه هوشمند.',
      image: '/images/mokka-interior-wheel.jpeg',
    },
  ],

  seo: {
    titleFa: 'اوپل موکا ۲۰۲۵ | قیمت، مشخصات و تریم‌ها | سیکاس خودرو',
    descriptionFa:
      'خرید اوپل موکا ۲۰۲۵ با بهترین قیمت در ایران. موتور ۱۳۶ اسب بخار ۱.۲ توربو و نسخه هیبرید MHEV ۱۴۵ اسب بخار. Pure Panel، ایمنی ۵ ستاره Euro NCAP. سه تریم با شرایط اقساطی ویژه و گارانتی رسمی سیکاس خودرو.',
    keywords: ['اوپل موکا', 'قیمت موکا ۲۰۲۵', 'Opel Mokka Iran', 'موکا ۱۳۶', 'موکا هیبرید', 'سیکاس خودرو'],
  },

  dealers: [
    {
      id: 'tehran-1',
      name: 'نمایندگی تهران',
      city: 'تهران',
      address: 'تهران، بلوار آفریقا، خیابان جهان‌آرا',
      phone: '021-88001234',
      lat: 35.6892,
      lng: 51.3890,
      stock: 5,
      hours: 'شنبه تا چهارشنبه ۹-۱۸، پنج‌شنبه ۹-۱۴',
    },
    {
      id: 'isfahan-1',
      name: 'نمایندگی اصفهان',
      city: 'اصفهان',
      address: 'اصفهان، خیابان چهارباغ عباسی',
      phone: '031-36001234',
      lat: 32.6539,
      lng: 51.6660,
      stock: 3,
      hours: 'شنبه تا چهارشنبه ۹-۱۸، پنج‌شنبه ۹-۱۴',
    },
    {
      id: 'mashhad-1',
      name: 'نمایندگی مشهد',
      city: 'مشهد',
      address: 'مشهد، بلوار وکیل‌آباد',
      phone: '051-38001234',
      lat: 36.2605,
      lng: 59.6168,
      stock: 2,
      hours: 'شنبه تا چهارشنبه ۹-۱۸، پنج‌شنبه ۹-۱۴',
    },
  ],

  importInfo: {
    originCountry: 'آلمان',
    warrantyYears: 3,
    warrantyKm: 100000,
    serviceCenterCount: 28,
    registrationInfo:
      'تمامی خودروهای اوپل وارداتی توسط سیکاس خودرو از طریق گمرک رسمی جمهوری اسلامی ایران ترخیص می‌شوند.',
  },
}
