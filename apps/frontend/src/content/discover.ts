export interface DiscoverItem {
  id: string
  title: string
  subtitle: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
  badge: string
}

export const discoverItems: DiscoverItem[] = [
  {
    id: 'training',
    title: 'مرکز آموزش سیکاس خودرو',
    subtitle: 'Training Center',
    description: 'مرکز آموزشی تخصصی با مدرسین شاخص - آموزش رانندگی ایمن، مهارت‌های پیشرفته، نگهداری و تعمیر پایه‌ای با گواهی‌نامه معتبر.',
    href: '/service/training-marker',
    imageSrc: '/images/training-center.webp',
    imageAlt: 'مرکز آموزش سیکاس خودرو - آموزش تخصصی رانندگی',
    badge: 'TRAINING\nCENTER',
  },
  {
    id: 'repair',
    title: 'واحد تعمیرگاه مرکزی',
    subtitle: 'Central Repair Shop',
    description: 'تعمیرگاه معتبر با تکنسین‌های متخصص و تجهیزات کامل - تعمیر و نگهداری دوره‌ای، تشخیص عیوب، تعمیر موتور و گیربکس با گارانتی.',
    href: '/service/central-repair-shop-unit',
    imageSrc: '/images/repair-shop.webp',
    imageAlt: 'تعمیرگاه مرکزی سیکاس خودرو - خدمات تخصصی تعمیر',
    badge: 'REPAIR\nSHOP',
  },
  {
    id: 'roadside',
    title: 'واحد امداد جاده‌ای',
    subtitle: 'Roadside Assistance 24/7',
    description: 'خدمات امداد و نجات در جاده با پوشش سراسری - تعویض تایر، سوخت‌رسانی، حمل خودرو، کمک در موارد اضطراری ۲۴ ساعته.',
    href: '/service/roadside-assistance-unit',
    imageSrc: '/images/roadside-assist.webp',
    imageAlt: 'امداد جاده‌ای سیکاس خودرو - خدمات ۲۴ ساعته',
    badge: '24/7\nSUPPORT',
  },
  {
    id: 'warranty',
    title: 'واحد گارانتی و وارانتی',
    subtitle: 'Warranty & Guarantee',
    description: 'واحد متخصص در مسائل گارانتی - صدور گارانتی‌نامه، پیگیری مطالبات، تعمیر تحت پوشش، تمدید گارانتی با پشتیبانی کامل.',
    href: '/service/guarantee-and-warranty',
    imageSrc: '/images/warranty-unit.webp',
    imageAlt: 'واحد گارانتی سیکاس خودرو - پوشش جامع',
    badge: 'WARRANTY\nSERVICE',
  },
  {
    id: 'technical',
    title: 'واحد فنی مهندسی',
    subtitle: 'Engineering Technical Unit',
    description: 'واحد فنی تخصصی با مهندسین مجرب - مشاوره فنی، کالیبراسیون سیستم‌ها، بررسی دقیق، آپدیت نرم‌افزار و تنظیمات پیشرفته.',
    href: '/service/engineering-technical-unit',
    imageSrc: '/images/technical-unit.webp',
    imageAlt: 'واحد فنی مهندسی سیکاس خودرو - مشاوره تخصصی',
    badge: 'TECHNICAL\nSUPPORT',
  },
  {
    id: 'opel-care',
    title: 'OpelCare',
    subtitle: 'مراقبت جامع اوپل',
    description: 'مجموعه کامل خدمات و مزایا - پشتیبانی در نمایندگی، مراقبت از خودرو، خدمات ویژه مالکان اوپل با استانداردهای جهانی.',
    href: '#opel-care',
    imageSrc: '/images/opel-logo-hero.webp',
    imageAlt: 'OpelCare - خدمات جامع اوپل',
    badge: 'OPEL\nCARE',
  },
]
