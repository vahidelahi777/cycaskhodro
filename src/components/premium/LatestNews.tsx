'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OptimizedImage } from '@/components/ui/OptimizedImage'

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
    title: 'معرفی مدل جدید اوپل آسترا 2024',
    excerpt: 'جدیدترین نسل از خودروی محبوب اوپل آسترا با تکنولوژی‌های پیشرفته و طراحی مدرن معرفی شد.',
    date: '1403/02/15',
    image: '/images/news-1.jpg',
    category: 'محصولات'
  },
  {
    id: 2,
    title: 'افتتاح نمایندگی جدید در شمال تهران',
    excerpt: 'نمایندگی مجهز سیکاس خودرو در منطقه ولنجک با ارائه خدمات کامل فروش و خدمات پس از فروش افتتاح شد.',
    date: '1403/02/10',
    image: '/images/news-2.jpg',
    category: 'اخبار شرکت'
  },
  {
    id: 3,
    title: 'برگزاری دوره آموزشی تعمیرات پیشرفته',
    excerpt: 'مرکز آموزش سیکاس خودرو دوره تخصصی تعمیرات سیستم‌های الکترونیکی خودروهای اوپل را برگزار می‌کند.',
    date: '1403/02/05',
    image: '/images/news-3.jpg',
    category: 'آموزش'
  },
  {
    id: 4,
    title: 'طرح ویژه خدمات پس از فروش بهار 1403',
    excerpt: 'بسته ویژه خدمات تعمیر و نگهداری با تخفیف‌های ویژه برای مشتریان عزیز در فصل بهار ارائه می‌شود.',
    date: '1403/01/28',
    image: '/images/news-4.jpg',
    category: 'خدمات'
  }
]

export function LatestNews() {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه')
  
  const categories = ['همه', 'محصولات', 'اخبار شرکت', 'آموزش', 'خدمات']
  
  const filteredNews = selectedCategory === 'همه' 
    ? newsData 
    : newsData.filter(item => item.category === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            آخرین اخبار
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            از جدیدترین اخبار، رویدادها و به‌روزرسانی‌های سیکاس خودرو مطلع شوید
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-yellow-400 text-neutral-900 font-semibold'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* News Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={news.image}
                    alt={news.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-neutral-500 text-sm mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <button className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors flex items-center gap-2">
                    ادامه مطلب
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-all hover:scale-105">
            مشاهده همه اخبار
          </button>
        </motion.div>
      </div>
    </section>
  )
}
