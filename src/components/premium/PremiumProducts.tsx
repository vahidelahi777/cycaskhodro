'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Categories with counts
const CATEGORIES = [
  { id: 'suv', name: 'SUV', count: 7 },
  { id: 'sedan', name: 'سدان', count: 3 },
  { id: 'hybrid', name: 'هیبرید و الکتریک', count: 7 },
  { id: 'performance', name: 'پرفورمنس', count: 6 },
  { id: 'all', name: 'همه', count: 12 },
]

const products = [
  {
    id: 'mokka-e',
    name: 'Mokka E',
    title: 'اوپل موکا E',
    category: 'suv',
    image: '/images/mokka-e-new.png',
    colors: ['/images/mokka-e-new.png', '/images/mokka-new.png', '/images/corsa-new.png'],
    offers: 'مشاهده پیشنهادات Mokka E',
  },
  {
    id: 'nx',
    name: 'NX',
    title: 'اوپل موکا',
    category: 'suv',
    image: '/images/mokka-new.png',
    colors: ['/images/mokka-new.png', '/images/corsa-new.png', '/images/astra-new.png'],
    offers: 'مشاهده پیشنهادات موکا',
  },
  {
    id: 'rz',
    name: 'RZ',
    title: 'اوپل کورسا',
    category: 'hybrid',
    image: '/images/corsa-new.png',
    colors: ['/images/corsa-new.png', '/images/astra-new.png', '/images/mokka-e-new.png'],
    offers: 'مشاهده پیشنهادات کورسا',
  },
  {
    id: 'astra',
    name: 'Astra',
    title: 'اوپل آسترا',
    category: 'sedan',
    image: '/images/astra-new.png',
    colors: ['/images/astra-new.png', '/images/mokka-new.png', '/images/corsa-new.png'],
    offers: 'مشاهده پیشنهادات آسترا',
  },
]

export function PremiumProducts() {
  const [activeCategory, setActiveCategory] = useState('suv')
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [activeColorIndex, setActiveColorIndex] = useState(0)

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter((p) => p.category === activeCategory)

  const handleProductSelect = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setActiveColorIndex(0)
  }

  const handleNext = () => {
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id)
    const nextIndex = (currentIndex + 1) % filteredProducts.length
    handleProductSelect(filteredProducts[nextIndex])
  }

  const handlePrev = () => {
    const currentIndex = filteredProducts.findIndex((p) => p.id === selectedProduct.id)
    const prevIndex = currentIndex === 0 ? filteredProducts.length - 1 : currentIndex - 1
    handleProductSelect(filteredProducts[prevIndex])
  }

  return (
    <section id="products" className="py-16 md:py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight mb-8">
            آشنایی با مدل‌ها
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  const firstInCat = cat.id === 'all' 
                    ? products[0] 
                    : products.find(p => p.category === cat.id) || products[0]
                  handleProductSelect(firstInCat)
                }}
                className={`group relative text-sm md:text-base uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'text-neutral-900 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  {cat.name}
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-200 text-neutral-600 group-hover:bg-neutral-300'
                  }`}>
                    {cat.count}
                  </span>
                </span>
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-neutral-900"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Product Display */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Thumbnail Sidebar - Left Side */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex lg:flex-col gap-4">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className={`relative aspect-[4/3] overflow-hidden transition-all duration-300 ${
                    selectedProduct.id === product.id
                      ? 'ring-2 ring-neutral-900 scale-105'
                      : 'ring-1 ring-neutral-200 hover:ring-neutral-400 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                    sizes="150px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Main Image - Center */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-neutral-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-neutral-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Main Car Image */}
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] md:h-[500px] bg-white rounded-lg overflow-hidden"
              >
                <Image
                  src={selectedProduct.colors[activeColorIndex]}
                  alt={selectedProduct.title}
                  fill
                  className="object-contain p-8 drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
              </motion.div>

              {/* Product Info Overlay */}
              <div className="text-center mt-8 space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 tracking-tight">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  <a 
                    href={`#${selectedProduct.id}`}
                    className="inline-flex items-center gap-2 hover:text-neutral-900 transition-colors group"
                  >
                    {selectedProduct.offers}
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                </p>

                {/* Color Selector Dots */}
                <div className="flex items-center justify-center gap-3 pt-4">
                  {selectedProduct.colors.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveColorIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeColorIndex === idx
                          ? 'bg-neutral-900 scale-125'
                          : 'bg-neutral-300 hover:bg-neutral-500'
                      }`}
                      aria-label={`Color ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Color Thumbnails - Right Side */}
          <div className="lg:col-span-2 order-3">
            <div className="flex lg:flex-col gap-4">
              {selectedProduct.colors.map((colorImg, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveColorIndex(idx)}
                  className={`relative aspect-[4/3] overflow-hidden transition-all duration-300 ${
                    activeColorIndex === idx
                      ? 'ring-2 ring-neutral-900 scale-105'
                      : 'ring-1 ring-neutral-200 hover:ring-neutral-400 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={colorImg}
                    alt={`${selectedProduct.title} - رنگ ${idx + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="150px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`#explore-${selectedProduct.id}`}
            className="w-full sm:w-auto px-12 py-4 bg-neutral-900 text-white text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors duration-300 text-center"
          >
            EXPLORE
          </a>
          <a
            href={`#build-${selectedProduct.id}`}
            className="w-full sm:w-auto px-12 py-4 bg-white border-2 border-neutral-900 text-neutral-900 text-sm font-semibold uppercase tracking-wider hover:bg-neutral-50 transition-colors duration-300 text-center"
          >
            BUILD
          </a>
        </div>
      </div>
    </section>
  )
}
