'use client'

export function WhyUs() {
  const stats = [
    { number: '۱۰+', label: 'سال تجربه' },
    { number: '۵۰۰۰+', label: 'مشتری راضی' },
    { number: '۱۵', label: 'نمایندگی سراسری' },
  ]

  const features = [
    'نمایندگی رسمی و معتبر اوپل',
    'قطعات یدکی اصل با ضمانت',
    'تکنسین‌های مجرب و گواهی‌دار',
    'خدمات پس‌از‌فروش ۲۴ ساعته',
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-3">
            چرا ما؟
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 mb-6">
            چرا سیکاس خودرو؟
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
            ما به‌عنوان نمایندگی رسمی اوپل، بهترین قیمت‌ها را بدون واسطه ارائه می‌دهیم. هر خودرو تحت بازرسی دقیق کیفیت قرار می‌گیرد و با گارانتی معتبر تحویل داده می‌شود.
          </p>
        </div>

        {/* Grid: Features + Stats */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-neutral-950 font-bold text-sm">✓</span>
                </div>
                <p className="text-lg text-neutral-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-neutral-200 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <p className="text-neutral-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
