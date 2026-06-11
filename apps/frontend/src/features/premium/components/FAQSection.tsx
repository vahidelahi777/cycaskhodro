'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { pagesContent } from '@/content/pages'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { questions } = pagesContent.faq

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-3">
            پاسخ و پاسخ
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            {pagesContent.faq.title}
          </h2>
          <p className="text-xl text-neutral-600">
            {pagesContent.faq.description}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full bg-white rounded-lg p-6 hover:shadow-lg transition text-right"
              >
                <div className="flex items-center justify-between gap-4">
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-600 flex-shrink-0 transition ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {item.q}
                  </h3>
                </div>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-neutral-200"
                  >
                    <p className="text-neutral-600 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
