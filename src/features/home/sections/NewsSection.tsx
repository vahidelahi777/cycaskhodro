'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import { formatPersianDate } from '@/lib/utils'

const NEWS_ITEMS = [
	{
		id: '1',
		slug: 'opel-mokka-e',
		titleFa: 'اوپل موکا برقی (MOKKA E)',
		title: 'Opel Mokka-e: Pure Energy',
		excerptFa: 'بررسی کامل مشخصات فنی و تجربه رانندگی با اوپل موکا برقی تمام عیار.',
		excerpt: 'A comprehensive look at the features and driving experience of the all-electric Opel Mokka-e.',
		coverImage: '/images/mokka-e.webp',
		publishedAt: '2024-06-11T00:00:00Z',
		readTime: 5,
	},
	{
		id: '2',
		slug: 'opel-combo',
		titleFa: 'اوپل کومبو (COMBO OPEL)',
		title: 'Opel Combo: Versatility Redefined',
		excerptFa: 'معرفی اوپل کومبو به عنوان یکی از جادارترین و کاربردی‌ترین خودروهای وارداتی.',
		excerpt: 'Introducing the Opel Combo as one of the most spacious and practical imported vehicles.',
		coverImage: '/images/astra.webp',
		publishedAt: '2024-06-11T00:00:00Z',
		readTime: 4,
	},
	{
		id: '3',
		slug: 'opel-astra-2024',
		titleFa: 'بررسی اوپل آسترا ۲۰۲۴ (OPEL ASTRA)',
		title: 'Opel Astra 2024 Review',
		excerptFa: 'نگاهی نزدیک به طراحی جدید و تکنولوژی‌های پیشرفته در اوپل آسترا نسل جدید.',
		excerpt: 'An up-close look at the new design and advanced technologies in the next-generation Opel Astra.',
		coverImage: '/images/astra.webp',
		publishedAt: '2024-06-11T00:00:00Z',
		readTime: 6,
	},
]

export function NewsSection() {
	const t = useTranslations()
	const locale = useLocale()
	const isRTL = locale === 'fa'
	const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

	return (
		<section className="py-32 bg-white relative overflow-hidden border-t border-black/5">
			{/* Background Architectural Text */}
			<div className="absolute top-0 right-0 text-[20rem] font-black text-[#F6F6F6] select-none pointer-events-none translate-x-1/4 -translate-y-1/2 uppercase tracking-tighter opacity-80">
				News
			</div>

			<div className="section-container relative z-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
					<div className="max-w-3xl">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="flex items-center gap-6 mb-8"
						>
							<div className="w-16 h-1 bg-opel-yellow shadow-[0_0_15px_rgba(255,209,0,0.3)]" />
							<p className="text-opel-black font-black text-[10px] uppercase tracking-[0.4em]">
								{locale === 'fa' ? 'آخرین اخبار و رویدادها' : 'LATEST NEWS & EVENTS'}
							</p>
						</motion.div>
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-6xl md:text-[8rem] font-black text-opel-black uppercase tracking-tighter leading-[0.8] mb-0"
						>
							{t('nav.blog')}
						</motion.h2>
					</div>
					<Link
						href={`/${locale}/blog`}
						className="group inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-opel-black hover:text-opel-yellow transition-all duration-300"
					>
						{t('common.viewAll')}
						<div className="w-16 h-1 bg-opel-black group-hover:bg-opel-yellow transition-colors" />
					</Link>
				</div>

				{/* News Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 ring-1 ring-black/5">
					{NEWS_ITEMS.map((post, i) => (
						<motion.article
							key={post.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="group bg-white p-8 lg:p-12 hover:bg-[#F9F9F9] transition-all duration-700 relative overflow-hidden"
						>
							<Link href={`/${locale}/blog/${post.slug}`} className="block">
								{/* Image Container */}
								<div className="relative aspect-[16/10] mb-10 overflow-hidden bg-black">
									<img
										src={post.coverImage}
										alt={locale === 'fa' ? post.titleFa : post.title}
										className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
									/>
									{/* Category Tag */}
									<div className="absolute top-0 left-0 bg-opel-yellow text-opel-black px-4 py-2 text-[10px] font-black uppercase tracking-widest">
										Opel Update
									</div>
								</div>

								{/* Content */}
								<div className="space-y-6">
									<div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-opel-black/30">
										<Calendar size={12} className="text-opel-yellow" />
										<time dateTime={post.publishedAt}>
											{formatPersianDate(post.publishedAt)}
										</time>
										<div className="w-1 h-1 rounded-full bg-black/10" />
										<span>{post.readTime} MIN READ</span>
									</div>

									<h3 className="text-2xl lg:text-3xl font-black text-opel-black leading-[1.1] group-hover:text-opel-yellow transition-colors duration-500 uppercase tracking-tighter">
										{locale === 'fa' ? post.titleFa : post.title}
									</h3>

									<p className="text-opel-black/50 text-sm font-medium leading-relaxed line-clamp-2">
										{locale === 'fa' ? post.excerptFa : post.excerpt}
									</p>

									<div className="pt-6 border-t border-black/5 flex items-center justify-between">
										<span className="text-[10px] font-black uppercase tracking-[0.3em] text-opel-black group-hover:text-opel-yellow transition-colors">
											{t('common.readMore')}
										</span>
										<ArrowIcon size={18} className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-opel-yellow" />
									</div>
								</div>
							</Link>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}
