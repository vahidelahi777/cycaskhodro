'use client'

import { useEffect, useRef, useState } from 'react'
import type { VehicleFull } from '@/content/models/opel-mokka-e-2024.data'

const FA = {
  power: 'توان', acceleration: 'شتاب', battery: 'باتری', charge: 'شارژ سریع',
  secUnit: 'ثانیه', minUnit: 'دقیقه',
}
const EN = {
  power: 'Power', acceleration: '0–100', battery: 'Battery', charge: 'Fast charge',
  secUnit: 'sec', minUnit: 'min',
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number>()

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setValue(Math.round(easeOut(progress) * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [active, target, duration])

  return value
}

function StatCard({
  icon,
  label,
  target,
  unit,
  active,
}: {
  icon: React.ReactNode
  label: string
  target: number
  unit: string
  active: boolean
}) {
  const value = useCountUp(target, 1200, active)
  return (
    <div className="bg-opel-black text-white rounded-2xl p-6 flex flex-col gap-2">
      <div className="text-opel-yellow text-3xl mb-1">{icon}</div>
      <div className="text-4xl font-black leading-none">
        {value}
        <span className="text-opel-yellow text-base font-semibold ml-1">{unit}</span>
      </div>
      <div className="text-white/60 text-xs mt-1">{label}</div>
    </div>
  )
}

// Inline SVG icons
const IconBolt = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const IconGauge = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
    <path d="M12 12l4-4" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)
const IconBattery = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="18" height="10" rx="2" />
    <path d="M22 11v2" />
    <path d="M6 11h6" />
  </svg>
)
const IconPlug = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5" />
    <path d="M9 8V2" />
    <path d="M15 8V2" />
    <path d="M18 8H6a2 2 0 0 0-2 2v3a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-3a2 2 0 0 0-2-2z" />
  </svg>
)

interface Props {
  ev: VehicleFull['ev']
  locale: string
}

export default function ModelHighlights({ ev, locale }: Props) {
  const t = locale === 'fa' ? FA : EN
  const containerRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cards = [
    { icon: <IconBolt />,    label: t.power,        target: ev.motorPowerHp,        unit: 'HP' },
    { icon: <IconGauge />,   label: t.acceleration,  target: ev.zeroToHundred,       unit: t.secUnit },
    { icon: <IconBattery />, label: t.battery,       target: ev.batteryKwh,          unit: 'kWh' },
    { icon: <IconPlug />,    label: t.charge,        target: ev.dcFastChargeMin[0],  unit: t.minUnit },
  ]

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4" dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      {cards.map((card) => (
        <StatCard key={card.label} {...card} active={animated} />
      ))}
    </div>
  )
}
