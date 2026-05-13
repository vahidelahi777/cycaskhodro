'use client'

import { useState } from 'react'
import { OpelModel } from '@/content/models'
import { OptimizedImage } from '@/shared/ui/OptimizedImage'

interface ModelsShowcaseClientProps {
  models: OpelModel[]
}

const MODEL_TABS = [
  { id: 'astra', label: 'اوپل آسترا' },
  { id: 'mokka', label: 'اوپل موکا' },
  { id: 'mokka-e', label: 'اوپل موکا ای' },
  { id: 'corsa', label: 'اوپل کورسا' },
]

export default function ModelsShowcaseClient({ models }: ModelsShowcaseClientProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const handleNext = () => {
    setDirection('right')
    setActiveIndex((prev) => (prev + 1) % MODEL_TABS.length)
  }

  const handlePrev = () => {
    setDirection('left')
    setActiveIndex((prev) => (prev - 1 + MODEL_TABS.length) % MODEL_TABS.length)
  }

  const handleTabClick = (index: number) => {
    setDirection(index > activeIndex ? 'right' : 'left')
    setActiveIndex(index)
  }

  const activeTab = MODEL_TABS[activeIndex].id
  const filteredModels = models.filter((model) => model.id === activeTab)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {MODEL_TABS.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(index)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeIndex === index
                  ? 'bg-transparent text-gray-900 border-b-4 border-yellow-400'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Models Slider */}
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-4 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="قبلی"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-4 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="بعدی"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden px-16">
            {filteredModels.map((model) => (
              <div
                key={`${model.id}-${activeIndex}`}
                className={`transition-all duration-500 ease-out ${
                  direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'
                }`}
              >
                <div className="bg-transparent rounded-3xl overflow-hidden">
                  <div className="relative h-96 flex items-center justify-center">
                    <OptimizedImage
                      src={model.image}
                      alt={model.nameFa}
                      width={900}
                      height={600}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-4xl font-bold mb-2 text-gray-800">{model.nameFa}</h3>
                    <p className="text-xl text-gray-500 mb-8">{model.nameEn}</p>
                    <a
                      href={model.href}
                      className="inline-block bg-yellow-400 text-gray-900 px-10 py-4 rounded-full hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg text-lg font-medium"
                    >
                      مشاهده بیشتر
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-120px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(120px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}
