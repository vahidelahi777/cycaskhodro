'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OptimizedImage } from '@/shared/ui/OptimizedImage'
import Link from 'next/link'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'معرفی مدل جدید اوپل آسترا ۲۰۲۵',
    excerpt: 'جدیدترین نسل از خودروی محبوب اوپل آسترا با تکنولوژی‌های پیشرفته و طراحی مدرن معرفی شد.',
    date: '۱۴۰۴/۰۲/۱۵',
    image: '/images/astra-banner-new.jpg',
    category: 'محصولات',
  },
  {
    id: 2,
    title: 'افتتاح نمایندگی جدید در شمال تهران',
    excerpt: 'نمایندگی مجهز سیکاس خودرو در منطقه ولنجک با ارائه خدمات کامل فروش و پس از فروش افتتاح شد.',
    date: '۱۴۰۴/۰۲/۱۰',
    image: '/images/mokka-e-showroom.jpeg',
    category: 'اخبار شرکت',
  },
  {
    id: 3,
    title: 'برگزاری دوره آموزشی تعمیرات پیشرفته',
    excerpt: 'مرکز آموزش سیکاس خودرو دوره تخصصی تعمیرات سیستم‌های الکترونیکی خودروهای اوپل را برگزار می‌کند.',
    date: '۱۴۰۴/۰۲/۰۵',
    image: '/images/mokka-interior-cockpit.jpeg',
    category: 'آموزش',
  },
  {
    id: 4,
    title: 'طرح ویژه خدمات پس از فروش بهار ۱۴۰۴',
    excerpt: 'بسته ویژه خدمات تعمیر و نگهداری با تخفیف‌های ویژه برای مشتریان عزیز در فصل بهار ارائه می‌شود.',
    date: '۱۴۰۴/۰۱/۲۸',
    image: '/images/mokka-banner-new.jpg',
    category: 'خدمات',
  },
]

const categories = ['همه', 'محصولات', 'اخبار شرکت', 'آموزش', 'خدمات']

export default function LatestNews() {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه')

  const filtered =
    selectedCategory === 'همه'
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory)

  return (
    <section className="section-padding bg-white" dir="rtl" aria-labelledby="news-title">
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 border border-opel-yellow/60 bg-opel-yellow/10 text-opel-gray-700 text-xs font-bold tracking-widest uppercase px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-opel-yellow" />
            اخبار سیکاس خودرو
          </div>
          <h2 id="news-title" className="section-title text-opel-black mb-4">
            آخرین اخبار
          </h2>
          <p className="text-opel-gray-500 text-lg max-w-2xl mx-auto">
            از جدیدترین اخبار، رویدادها و به‌روزرسانی‌های سیکاس خودرو مطلع شوید
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-sm font-bold transition-colors duration-200 border ${
                selectedCategory === cat
                  ? 'bg-opel-yellow text-opel-black border-opel-yellow'
                  : 'bg-white text-opel-gray-500 border-opel-gray-100 hover:border-opel-black hover:text-opel-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map((news, i) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-opel-gray-100 hover:border-opel-black overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden bg-opel-gray-100">
                  <OptimizedImage
                    src={news.image}
                    alt={news.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-opel-yellow text-opel-black px-3 py-1 text-xs font-bold">
                    {news.category}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-opel-gray-300 text-xs mb-2">{news.date}</p>
                  <h3 className="text-base font-bold text-opel-black mb-2 group-hover:text-opel-yellow transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-opel-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link
                    href="/fa/news"
                    className="text-opel-yellow font-bold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    ادامه مطلب
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/fa/news" className="btn-opel-primary">
            مشاهده همه اخبار
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
