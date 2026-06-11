'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { pagesContent } from '@/content/pages'

export function PremiumServices() {
  const services = Object.values(pagesContent.services)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-3">
            خدمات ما
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            خدمات جامع پس از فروش
          </h2>
          <p className="text-xl text-neutral-600">
            تمامی خدمات مورد نیاز خودروی شما در یک مکان
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <Link href={`/service/${service.slug}`}>
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-yellow-600 transition">
                  {service.title}
                </h3>

                <p className="text-neutral-600 mb-6 line-clamp-2">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.services.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-neutral-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-4 transition">
                  جزئیات بیشتر
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PremiumServices
