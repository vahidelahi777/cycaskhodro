'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OptimizedImage } from '@/shared/ui/OptimizedImage'
import { Link } from '@/i18n/navigation'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  readTime: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'معرفی مدل جدید اوپل آسترا ۲۰۲۴',
    excerpt: 'جدیدترین نسل از خودروی محبوب اوپل آسترا با تکنولوژی‌های پیشرفته و طراحی مدرن وارد بازار ایران شد.',
    date: '۱۵ اردیبهشت ۱۴۰۳',
    image: '/images/astra-banner-new.jpg',
    category: 'محصولات',
    readTime: '۳ دقیقه',
  },
  {
    id: 2,
    title: 'افتتاح نمایندگی جدید در شمال تهران',
    excerpt: 'نمایندگی مجهز سیکاس خودرو در منطقه ولنجک با ارائه خدمات کامل فروش و خدمات پس از فروش افتتاح شد.',
    date: '۱۰ اردیبهشت ۱۴۰۳',
    image: '/images/mokka-banner-new.jpg',
    category: 'اخبار شرکت',
    readTime: '۲ دقیقه',
  },
  {
    id: 3,
    title: 'برگزاری دوره آموزشی تعمیرات پیشرفته',
    excerpt: 'مرکز آموزش سیکاس خودرو دوره تخصصی تعمیرات سیستم‌های الکترونیکی خودروهای اوپل را برگزار می‌کند.',
    date: '۵ اردیبهشت ۱۴۰۳',
    image: '/images/training.webp',
    category: 'آموزش',
    readTime: '۴ دقیقه',
  },
  {
    id: 4,
    title: 'طرح ویژه خدمات پس از فروش بهار ۱۴۰۳',
    excerpt: 'بسته ویژه خدمات تعمیر و نگهداری با تخفیف‌های استثنایی برای مشتریان عزیز در فصل بهار ارائه می‌شود.',
    date: '۲۸ فروردین ۱۴۰۳',
    image: '/images/warranty.webp',
    category: 'خدمات',
    readTime: '۲ دقیقه',
  },
]

const categories = ['همه', 'محصولات', 'اخبار شرکت', 'آموزش', 'خدمات']

export default function LatestNews() {
  const [selected, setSelected] = useState('همه')

  const filtered = selected === 'همه'
    ? newsData
    : newsData.filter((n) => n.category === selected)

  return (
    <section className="section-padding bg-white" dir="rtl">
      <div className="section-container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-opel-yellow/60 bg-opel-yellow/10 text-opel-yellow text-xs font-bold tracking-widest uppercase px-4 py-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-opel-yellow" />
              اخبار و رویدادها
            </div>
            <h2 className="section-title text-opel-black">آخرین اخبار</h2>
          </div>
          <Link
            href="/blog"
            className="btn-opel-secondary shrink-0 self-start md:self-auto"
            style={{ color: '#0A0A0A', borderColor: '#0A0A0A' }}
          >
            مشاهده همه اخبار
          </Link>
        </motion.div>

        {/* ── Category filter ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 text-sm font-semibold transition-all duration-200 border ${
                selected === cat
                  ? 'bg-opel-black text-opel-yellow border-opel-black'
                  : 'bg-white text-opel-gray-700 border-opel-gray-300 hover:border-opel-black hover:text-opel-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── News grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-opel-gray-100"
          >
            {filtered.map((news, i) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-white flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <OptimizedImage
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <div className="absolute top-3 right-3 bg-opel-yellow text-opel-black px-2 py-0.5 text-xs font-bold">
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-opel-gray-500 text-xs mb-3">
                    <span>{news.date}</span>
                    <span className="w-1 h-1 rounded-full bg-opel-gray-300" />
                    <span>{news.readTime} مطالعه</span>
                  </div>
                  <h3 className="text-base font-bold text-opel-black mb-3 leading-snug group-hover:text-opel-yellow transition-colors duration-200 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-opel-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                    {news.excerpt}
                  </p>
                  <Link
                    href={`/blog/${news.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-opel-black hover:text-opel-yellow transition-colors duration-200 mt-auto"
                  >
                    ادامه مطلب
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
