'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { discoverItems } from '@/content/discover'

export function DiscoverSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Lexus Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight">
            Discover Opel
          </h2>
        </motion.div>

        {/* Cards Grid - Lexus 4-column style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {discoverItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: 'easeOut' 
              }}
              className="group"
            >
              {/* Image Container */}
              <Link 
                href={item.href}
                className="block relative h-64 overflow-hidden bg-neutral-100 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-4"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-normal text-neutral-900 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={item.href}
                  className="inline-block text-sm font-semibold text-neutral-900 uppercase tracking-wider border-b-2 border-neutral-900 pb-1 hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  بیشتر بدانید
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Editorial Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 lg:mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>
    </section>
  )
}
