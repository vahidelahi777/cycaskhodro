'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Wrench, LifeBuoy, ShieldCheck, Package, GraduationCap, Settings } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const SERVICES = [
	{
		key: 'repair',
		icon: Wrench,
		href: '/services/repair',
		titleKey: 'services.repair.title',
		descKey: 'services.repair.desc',
	},
	{
		key: 'roadside',
		icon: LifeBuoy,
		href: '/services/roadside',
		titleKey: 'services.roadside.title',
		descKey: 'services.roadside.desc',
	},
	{
		key: 'warranty',
		icon: ShieldCheck,
		href: '/services/warranty',
		titleKey: 'services.warranty.title',
		descKey: 'services.warranty.desc',
	},
	{
		key: 'parts',
		icon: Package,
		href: '/services/parts',
		titleKey: 'services.parts.title',
		descKey: 'services.parts.desc',
	},
	{
		key: 'training',
		icon: GraduationCap,
		href: '/services/training',
		titleKey: 'services.training.title',
		descKey: 'services.training.desc',
	},
	{
		key: 'engineering',
		icon: Settings,
		href: '/services/engineering',
		titleKey: 'services.engineering.title',
		descKey: 'services.engineering.desc',
	},
]

export function ServicesSection() {
	const t = useTranslations()
	const locale = useLocale()

	return (
		<section className="py-32 bg-white text-opel-black relative overflow-hidden border-t border-black/5">
			{/* Architectural Background Text */}
			<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20rem] font-black text-[#F6F6F6] select-none pointer-events-none uppercase tracking-tighter opacity-80">
				Service
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
								{t('services.subtitle')}
							</p>
						</motion.div>
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-3xl sm:text-4xl md:text-5xl font-black text-opel-black tracking-tight leading-tight mb-0"
						>
							{t('services.title')}
						</motion.h2>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="hidden md:block"
					>
						<p className="text-opel-black/40 font-black text-[10px] uppercase tracking-widest max-w-[200px] text-right">
							Professional maintenance for your opel vehicle
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 ring-1 ring-black/5">
					{SERVICES.map((service, i) => {
						const Icon = service.icon
						return (
							<motion.div
								key={service.key}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
							>
								<Link href={`/${locale}${service.href}`} className="group relative block bg-white hover:bg-opel-black transition-all duration-700 p-6 sm:p-8 lg:p-12 h-full overflow-hidden">
									{/* Hover Accent */}
									<div className="absolute top-0 right-0 w-24 h-24 bg-opel-yellow/0 group-hover:bg-opel-yellow/5 -rotate-45 translate-x-12 -translate-y-12 transition-all duration-700" />
									
									<div className="relative z-10 h-full flex flex-col">
										<div className="mb-10 text-opel-black group-hover:text-opel-yellow transition-colors duration-500">
											<Icon size={48} strokeWidth={1} />
										</div>
										
										<div className="mb-auto">
											<h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-opel-black group-hover:text-white transition-colors duration-500">
												{t(service.titleKey as Parameters<typeof t>[0])}
											</h3>
											<p className="text-opel-black/50 group-hover:text-white/40 mb-8 text-sm font-medium leading-[1.8] transition-colors duration-500">
												{t(service.descKey as Parameters<typeof t>[0])}
											</p>
										</div>

										<div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-opel-yellow transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
											Discover More
											<div className="w-12 h-px bg-opel-yellow" />
										</div>
									</div>

									{/* Background number */}
									<div className="absolute bottom-4 right-4 text-7xl font-black text-black/5 group-hover:text-white/5 transition-colors duration-700">
										0{i + 1}
									</div>
								</Link>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
