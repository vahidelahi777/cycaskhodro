'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { MapPin, Phone, Navigation } from 'lucide-react'
import { cn } from '@/lib/utils'

const AGENCIES = [
	{
		id: '1',
		nameFa: 'دفتر مرکزی تهران',
		name: 'Tehran HQ',
		addressFa: 'تهران، جردن، خیابان گلشهر، پلاک ۱۱',
		address: 'Tehran, Jordan, Golshahr St., No. 11',
		phone: '021-22037809',
		isMain: true,
	},
]

export function AgencyMapSection() {
	const t = useTranslations('agencies')
	const locale = useLocale()

	return (
		<section className="py-32 bg-white relative overflow-hidden border-t border-black/5">
			{/* Architectural Background Text */}
			<div className="absolute bottom-0 right-0 text-[20rem] font-black text-[#F6F6F6] select-none pointer-events-none translate-y-1/3 uppercase tracking-tighter opacity-80">
				Maps
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
								{t('subtitle')}
							</p>
						</motion.div>
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-3xl sm:text-4xl md:text-5xl font-black text-opel-black tracking-tight leading-tight mb-0"
						>
							{t('title')}
						</motion.h2>
					</div>
				</div>

				<div className="grid lg:grid-cols-12 gap-12 items-start">
					<div className="lg:col-span-8 group relative">
						<div className="h-[300px] sm:h-[420px] lg:h-[560px] bg-[#f2f2f2] relative overflow-hidden border border-black/5">
							<div className="absolute inset-0 flex flex-col items-center justify-center text-opel-black/20 group-hover:bg-[#ebebeb] transition-colors duration-700">
								<MapPin size={80} strokeWidth={1} className="mb-6 opacity-40 group-hover:scale-110 transition-transform duration-700" />
								<p className="text-[12px] uppercase font-black tracking-[0.4em]">
									INTERACTIVE AGENCY NETWORK
								</p>
							</div>
							
							{[
								{ top: '40%', left: '45%', isMain: true },
							].map((pin, i) => (
								<motion.div
									key={i}
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 1 + i * 0.2, duration: 0.5, type: 'spring' }}
									className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
									style={{ top: pin.top, left: pin.left }}
								>
									<div className="relative group/pin">
										<div
											className={cn(
												'w-6 h-6 rounded-full border-4 border-white shadow-2xl transition-all duration-300 group-hover/pin:scale-125 z-10 relative',
												pin.isMain
													? 'bg-opel-yellow ring-4 ring-opel-yellow/20'
													: 'bg-opel-black ring-4 ring-black/20'
											)}
										/>
										<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/pin:opacity-100 whitespace-nowrap bg-opel-black text-white px-3 py-1.5 text-[8px] font-black uppercase tracking-widest transition-all duration-300 pointer-events-none">
											View Details
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Agency List */}
					<div className="lg:col-span-4 space-y-4">
						{AGENCIES.map((agency, i) => (
							<motion.div
								key={agency.id}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="group bg-white p-8 border border-black/5 hover:bg-opel-black transition-all duration-500 cursor-pointer relative"
							>
								{/* Accent bar */}
								<div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-opel-yellow transition-all duration-500" />
								
								<div className="flex items-start justify-between mb-4">
									<div>
										<h4 className="font-black text-opel-black group-hover:text-white text-lg lg:text-xl uppercase tracking-tighter transition-colors">
											{locale === 'fa' ? agency.nameFa : agency.name}
										</h4>
										{agency.isMain && (
											<span className="text-[9px] font-black bg-opel-yellow text-opel-black px-2 py-0.5 uppercase tracking-widest mt-2 inline-block">
												Central Headquarters
											</span>
										)}
									</div>
									<Navigation
										size={20}
										className="text-black/10 group-hover:text-opel-yellow transition-colors shrink-0"
									/>
								</div>
								
								<div className="space-y-4 mt-6">
									<p className="text-opel-black/40 group-hover:text-white/40 text-xs font-bold leading-relaxed flex items-start gap-3 transition-colors">
										<MapPin size={14} className="shrink-0 mt-0.5 text-opel-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
										{locale === 'fa' ? agency.addressFa : agency.address}
									</p>
									<a
										href={`tel:${agency.phone}`}
										className="text-opel-black/60 group-hover:text-opel-yellow text-lg font-black font-mono flex items-center gap-3 transition-colors"
										dir="ltr"
									>
										<Phone size={14} className="invisible" />
										{agency.phone}
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
