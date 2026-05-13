import Image from 'next/image'
import Link from 'next/link'

// Simplified benefits with images
const benefits = [
  {
    id: 'inspiration-series',
    title: 'سری الهام‌بخش ۲۰۲۶',
    subtitle: 'The 2026 LC Inspiration Series',
    description: 'محدود به تنها ۲۰۰ کوپه و ۳۵۰ کانورتیبل در آمریکای شمالی تا سال مدل ۲۰۲۶، این سری منحصربه‌فرد عملکرد هیجان‌انگیز و اعتبار فوق‌العاده را در کنار هم قرار می‌دهد.',
    image: '/images/opel-logo-hero.webp',
    href: '#inspiration',
    layout: 'large', // Full width with side text
  },
  {
    id: 'limited-edition',
    title: 'نسخه محدود اسپرت سدان',
    subtitle: 'Limited Edition Sports Sedan',
    description: 'این سدان اسپرت نسخه محدود، عصر جدیدی از IS را با مجموعه‌ای منتخب از ارتقاهای استایل به ارمغان می‌آورد.',
    image: '/images/repair-shop.webp',
    href: '#limited',
    layout: 'split', // Two column layout
  },
]

export function BenefitsSection() {
  return (
    <section 
      aria-labelledby="benefits-title"
      className="relative py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 
            id="benefits-title"
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold text-neutral-900 mb-4"
          >
            چرا سیکاس خودرو؟
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-7">
            اعتماد هزاران مشتری، تجربه بیش از یک دهه در واردات اوپل
          </p>
        </div>

        {/* Featured Content - Large Layout */}
        <div className="space-y-8 lg:space-y-12">
          {/* First Large Feature */}
          <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
              <Image
                src={benefits[0].image}
                alt={benefits[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-900 tracking-tight mb-3">
                  {benefits[0].title}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 mb-6">
                  {benefits[0].subtitle}
                </p>
              </div>
              
              <p className="text-sm sm:text-base leading-7 text-neutral-600">
                {benefits[0].description}
              </p>

              <Link
                href={benefits[0].href}
                className="inline-block text-sm font-semibold text-neutral-900 uppercase tracking-wider border-b-2 border-neutral-900 pb-1 hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-4"
              >
                بیشتر بدانید
              </Link>
            </div>
          </article>

          {/* Second Feature - Split Layout */}
          <article className="grid lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Images Side */}
            <div className="grid grid-cols-2 gap-0">
              <div className="relative h-[250px] sm:h-[300px] lg:h-[400px]">
                <Image
                  src="/images/roadside-assist.webp"
                  alt="Detail 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-[250px] sm:h-[300px] lg:h-[400px]">
                <Image
                  src="/images/warranty-unit.webp"
                  alt="Detail 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="bg-neutral-50 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-neutral-900 tracking-tight mb-3">
                    {benefits[1].title}
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-600 mb-6">
                    {benefits[1].subtitle}
                  </p>
                </div>
                
                <p className="text-sm sm:text-base leading-7 text-neutral-600">
                  {benefits[1].description}
                </p>

                <Link
                  href={benefits[1].href}
                  className="inline-block text-sm font-semibold text-neutral-900 uppercase tracking-wider border-b-2 border-neutral-900 pb-1 hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-4"
                >
                  بیشتر بدانید
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Editorial Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>
    </section>
  )
}
