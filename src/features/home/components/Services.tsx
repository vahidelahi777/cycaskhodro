'use client'

const services = [
  {
    icon: '🔧',
    name: 'تعمیرات دوره‌ای',
    desc: 'سرویس منظم و تعمیرات موتور، گیربکس و سیستم‌های الکترونیکی',
  },
  {
    icon: '⚠️',
    name: 'امداد جاده‌ای',
    desc: 'خدمات اورژانسی و امداد رایگان برای تمام خودروهای اوپل',
  },
  {
    icon: '✅',
    name: 'گارانتی و وارانتی',
    desc: 'تمدید گارانتی و پوشش بیمه‌ای جامع خودرو',
  },
  {
    icon: '🔩',
    name: 'قطعات یدکی',
    desc: 'تامین قطعات اصل اوپل با بهترین قیمت',
  },
  {
    icon: '👨‍🏫',
    name: 'آموزش رانندگی',
    desc: 'آموزش‌های ایمنی و فنی برای رانندگان',
  },
  {
    icon: '🛡️',
    name: 'بیمه و مالیات',
    desc: 'مشاوره برای بیمه شامل و تسهیلات مالی',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-3">
            خدمات جامع
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 mb-4">
            خدمات ما
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            خدمات جامع پس‌از‌فروش برای رفاه و آرامش شما
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 bg-neutral-50 border border-neutral-200 rounded-2xl hover:shadow-lg hover:border-neutral-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-950 mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+982122037809"
            className="inline-block px-10 py-4 bg-yellow-400 text-neutral-950 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            ثبت درخواست خدمات
          </a>
        </div>
      </div>
    </section>
  )
}
