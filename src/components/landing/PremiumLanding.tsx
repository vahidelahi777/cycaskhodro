'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone, MapPin, Clock, ArrowRight, Menu, X } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'
import { toast } from 'sonner'

export function PremiumLanding() {
  const t = useTranslations()
  const locale = useLocale()
  const isRTL = locale === 'fa'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('nav.models'), href: '#models' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <div className="bg-white text-opel-black overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HEADER - Fixed, Minimal, Premium */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 md:w-12 h-10 md:h-12 relative">
                <img
                  src="/images/logo_site.png"
                  alt="Cycas Khodro"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black uppercase tracking-[-0.02em]">
                  Cycas
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-opel-black/50 -mt-0.5">
                  KHODRO
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-black uppercase tracking-[0.15em] text-opel-black/60 hover:text-opel-black transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-opel-yellow transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden lg:inline-flex px-10 py-3 bg-opel-black text-opel-yellow text-[10px] font-black uppercase tracking-[0.15em] hover:bg-opel-yellow hover:text-opel-black transition-all duration-300"
              >
                {t('contact.title')}
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-opel-black"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-black/5 py-8 space-y-6"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[12px] font-black uppercase tracking-[0.1em] text-opel-black/60 hover:text-opel-black transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-8 py-3 bg-opel-black text-opel-yellow text-[10px] font-black uppercase tracking-[0.1em] text-center"
                >
                  {t('contact.title')}
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION - Bold, Minimal, Luxurious */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 md:pt-24 overflow-hidden bg-white">
        {/* Background Image - Right Side */}
        <motion.div
          className="absolute inset-0 right-0 w-1/2 md:w-3/5 opacity-60 md:opacity-100"
          style={{ y: scrollY * 0.3 }}
        >
          <img
            src="/images/astra.webp"
            alt="Opel Astra"
            className="w-full h-full object-contain object-right scale-125 md:scale-100"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white" />
        </motion.div>

        {/* Content - Left Side */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-2xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-1 bg-opel-yellow" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-opel-black/60">
                {t('hero.tagline')}
              </span>
            </motion.div>

            {/* Headline - Massive, Impactful */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter uppercase"
            >
              {t('hero.headline')}
              <br />
              <span className="text-opel-yellow block">{t('hero.headlineAccent')}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-xl text-opel-black/50 mb-12 max-w-2xl leading-relaxed font-light"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <a
                href="#models"
                className="px-12 py-5 bg-opel-black text-opel-yellow font-black text-[11px] uppercase tracking-[0.2em] hover:bg-opel-yellow hover:text-opel-black transition-all duration-300 inline-flex items-center gap-3 group"
              >
                {t('hero.cta.explore')}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-12 py-5 border-2 border-opel-black text-opel-black font-black text-[11px] uppercase tracking-[0.2em] hover:bg-opel-black hover:text-white transition-all duration-300"
              >
                {t('hero.cta.contact')}
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-12 left-0 md:left-12 lg:left-20"
            >
              <ChevronDown size={28} className="text-opel-black/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* MODELS SECTION - Minimal Grid, Premium Typography */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section id="models" className="py-32 md:py-48 bg-white relative border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20 md:mb-32"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-opel-yellow" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-opel-black/60">
                {t('models.subtitle')}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              {t('models.title')}
            </h2>
            <p className="text-lg text-opel-black/50 font-light">
              تجربه‌ای فوق‌العاده از خودروهای پیشرفته اوپل با فناوری‌های نوین و طراحی بی‌نظیر
            </p>
          </motion.div>

          {/* Models Grid - 3 Column */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { id: 'mokka', name: 'Opel Mokka', type: 'SUV', img: '/images/mokka.webp' },
              { id: 'astra', name: 'Opel Astra', type: 'Hatchback', img: '/images/astra.webp' },
              { id: 'mokka-e', name: 'Opel Mokka-e', type: 'Electric SUV', img: '/images/mokka-e.webp' },
            ].map((car, i) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-square mb-8 bg-[#F8F8F8] overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Info */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-opel-black/40 mb-3">
                    {car.type}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-6">
                    {car.name}
                  </h3>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-opel-black group-hover:text-opel-yellow transition-colors duration-300"
                  >
                    اطلاعات بیشتر
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* TRUST SECTION - Why Us, Stats, Premium Design */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section id="about" className="py-32 md:py-48 bg-opel-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 text-[30rem] font-black tracking-tighter">
            Sikas
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-1 bg-opel-yellow" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-opel-yellow">
                  {t('whyUs.subtitle')}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                {t('whyUs.title')}
              </h2>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-lg font-light">
                {t('whyUs.description')}
              </p>

              {/* Features */}
              <div className="space-y-6">
                {[
                  { icon: '✓', title: t('whyUs.features.official.title'), desc: t('whyUs.features.official.desc') },
                  { icon: '✓', title: t('whyUs.features.original.title'), desc: t('whyUs.features.original.desc') },
                  { icon: '✓', title: t('whyUs.features.warranty.title'), desc: t('whyUs.features.warranty.desc') },
                  { icon: '✓', title: t('whyUs.features.support.title'), desc: t('whyUs.features.support.desc') },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-opel-yellow text-opel-black flex items-center justify-center font-black text-sm flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-sm mb-1">{feature.title}</h4>
                      <p className="text-white/50 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { number: '10+', label: t('whyUs.stats.experience') },
                { number: '5K+', label: t('whyUs.stats.customers') },
                { number: '3.5K+', label: t('whyUs.stats.vehicles') },
                { number: '15', label: t('whyUs.stats.agencies') },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 text-center hover:bg-opel-yellow hover:text-opel-black transition-all duration-500 group"
                >
                  <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <p className="text-sm font-medium text-white/60 group-hover:text-opel-black/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* SERVICES SECTION - Premium Layout */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section id="services" className="py-32 md:py-48 bg-white border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20 md:mb-32"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-opel-yellow" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-opel-black/60">
                {t('services.subtitle')}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              {t('services.title')}
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { key: 'repair' },
              { key: 'roadside' },
              { key: 'warranty' },
              { key: 'parts' },
              { key: 'training' },
              { key: 'engineering' },
            ].map((service, i) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 bg-[#F9F9F9] hover:bg-opel-black hover:text-white transition-all duration-500 cursor-pointer"
              >
                <div className="w-16 h-16 bg-opel-yellow group-hover:bg-white rounded-full flex items-center justify-center mb-8 font-black text-opel-black text-2xl">
                  ★
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100">
                  {t(`services.${service.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* CONTACT SECTION - Minimal, Direct, Clear */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-32 md:py-48 bg-white border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-1 bg-opel-yellow" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-opel-black/60">
                  ارتباط مستقیم
                </span>
              </div>

              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                {t('contact.title')}
              </h2>

              {/* Contact Items */}
              <div className="space-y-12">
                {[
                  {
                    icon: MapPin,
                    label: 'آدرس',
                    value: t('contact.address'),
                  },
                  {
                    icon: Phone,
                    label: 'تلفن',
                    value: t('contact.phone'),
                    href: `tel:${t('contact.phone').replace(/[^\d+]/g, '')}`,
                  },
                  {
                    icon: Clock,
                    label: 'ساعات کاری',
                    value: t('contact.workingHours'),
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-opel-yellow flex items-center justify-center flex-shrink-0 group-hover:bg-opel-black group-hover:text-opel-yellow transition-all duration-300">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-opel-black/40 mb-2">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-xl md:text-2xl font-black text-opel-black hover:text-opel-yellow transition-colors"
                              dir="ltr"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg text-opel-black/60 font-light">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                setIsSubmitting(true)

                try {
                  const result = await submitContactForm({
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                  })

                  if (result.success) {
                    toast.success(result.message)
                    e.currentTarget.reset()
                  } else {
                    toast.error(result.message)
                  }
                } catch (error) {
                  toast.error(t('contact.form.error'))
                } finally {
                  setIsSubmitting(false)
                }
              }}
              className="space-y-6"
            >
              <input
                type="text"
                name="firstName"
                placeholder={t('contact.form.firstName')}
                required
                className="w-full px-0 py-4 bg-transparent border-b-2 border-opel-black focus:outline-none focus:border-opel-yellow transition-colors text-lg placeholder-opel-black/30"
              />
              <input
                type="text"
                name="lastName"
                placeholder={t('contact.form.lastName')}
                required
                className="w-full px-0 py-4 bg-transparent border-b-2 border-opel-black focus:outline-none focus:border-opel-yellow transition-colors text-lg placeholder-opel-black/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('contact.form.phone')}
                required
                className="w-full px-0 py-4 bg-transparent border-b-2 border-opel-black focus:outline-none focus:border-opel-yellow transition-colors text-lg placeholder-opel-black/30"
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                className="w-full px-0 py-4 bg-transparent border-b-2 border-opel-black focus:outline-none focus:border-opel-yellow transition-colors text-lg placeholder-opel-black/30"
              />
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                required
                rows={5}
                className="w-full px-0 py-4 bg-transparent border-b-2 border-opel-black focus:outline-none focus:border-opel-yellow transition-colors text-lg placeholder-opel-black/30 resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-12 px-12 py-5 bg-opel-black text-opel-yellow font-black text-[11px] uppercase tracking-[0.2em] hover:bg-opel-yellow hover:text-opel-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('common.loading') : t('contact.form.submit')}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* FOOTER - Minimal, Professional */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <footer className="bg-opel-black text-white py-20 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            {/* Brand */}
            <div>
              <h4 className="text-lg font-black uppercase tracking-tight mb-4">Cycas Khodro</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">
                {t('footer.links.company')}
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#models" className="text-white/60 hover:text-opel-yellow transition-colors">
                    {t('nav.models')}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/60 hover:text-opel-yellow transition-colors">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/60 hover:text-opel-yellow transition-colors">
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">
                {t('footer.links.services')}
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="text-white/60 hover:text-opel-yellow transition-colors">
                    {t('services.repair.title')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-opel-yellow transition-colors">
                    {t('services.warranty.title')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-opel-yellow transition-colors">
                    {t('services.parts.title')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">
                {t('footer.newsletter.title')}
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none"
                />
                <button className="px-4 py-2 bg-opel-yellow text-opel-black font-black hover:bg-white transition-colors">
                  ✓
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.1em] text-white/40">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-8 mt-8 md:mt-0">
              <a href="#" className="text-white/60 hover:text-opel-yellow transition-colors text-[10px] font-black uppercase">
                Instagram
              </a>
              <a href="#" className="text-white/60 hover:text-opel-yellow transition-colors text-[10px] font-black uppercase">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
