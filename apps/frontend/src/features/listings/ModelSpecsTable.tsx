'use client'

import { useState } from 'react'
import type { VehicleFull } from '@/content/models/opel-mokka-e-2024.data'

const FA = {
  performance: 'عملکرد',
  batteryCharge: 'باتری و شارژ',
  dimensions: 'ابعاد و وزن',
  equipment: 'تجهیزات',
  safety: 'ایمنی',
  motorPower: 'توان موتور',
  torque: 'گشتاور',
  acceleration: 'شتاب ۰–۱۰۰',
  driveType: 'نوع محرک',
  battery: 'ظرفیت باتری',
  dcCharge: 'شارژ سریع DC (۰→۸۰٪)',
  acCharge: 'شارژ خانگی AC',
  length: 'طول',
  width: 'عرض',
  height: 'ارتفاع',
  wheelbase: 'فاصله محور',
  weight: 'وزن خالی',
  passengers: 'تعداد سرنشین',
  showAll: (n: number) => `نمایش همه (${n} مورد)`,
  showLess: 'نمایش کمتر',
  seconds: 'ثانیه',
  hours: 'ساعت',
  minutes: 'دقیقه',
  persons: 'نفر',
  fwd: 'جلو‌محرک',
}
const EN = {
  performance: 'Performance',
  batteryCharge: 'Battery & Charging',
  dimensions: 'Dimensions & Weight',
  equipment: 'Equipment',
  safety: 'Safety',
  motorPower: 'Motor power',
  torque: 'Torque',
  acceleration: '0–100 km/h',
  driveType: 'Drive type',
  battery: 'Battery capacity',
  dcCharge: 'DC fast charge (0→80%)',
  acCharge: 'AC home charge',
  length: 'Length',
  width: 'Width',
  height: 'Height',
  wheelbase: 'Wheelbase',
  weight: 'Curb weight',
  passengers: 'Passengers',
  showAll: (n: number) => `Show all (${n} items)`,
  showLess: 'Show less',
  seconds: 'sec',
  hours: 'hrs',
  minutes: 'min',
  persons: 'persons',
  fwd: 'FWD',
}

function Section({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-opel-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 bg-opel-gray-100 hover:bg-opel-gray-300/30 transition-colors text-left"
      >
        <span className="font-bold text-opel-black text-sm tracking-wide uppercase">{title}</span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 text-opel-gray-500 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className="px-5 py-4">{children}</div>}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-opel-gray-100 last:border-0 text-sm">
      <span className="text-opel-gray-500">{label}</span>
      <span className="font-semibold text-opel-black">{value}</span>
    </div>
  )
}

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-opel-yellow shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

interface Props {
  data: VehicleFull
  locale: string
}

export default function ModelSpecsTable({ data, locale }: Props) {
  const t = locale === 'fa' ? FA : EN
  const isRtl = locale === 'fa'
  const { ev, dims, equipment, safety } = data

  const [showAllEquip, setShowAllEquip] = useState(false)
  const INITIAL_COUNT = 8
  const visibleEquip = showAllEquip ? equipment : equipment.slice(0, INITIAL_COUNT)

  return (
    <div className="flex flex-col gap-4" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* Performance */}
      <Section title={t.performance}>
        <Row label={t.motorPower}    value={`${ev.motorPowerKw} kW / ${ev.motorPowerHp} HP`} />
        <Row label={t.torque}        value={`${ev.torqueNm} N·m`} />
        <Row label={t.acceleration}  value={`${ev.zeroToHundred} ${t.seconds}`} />
        <Row label={t.driveType}     value={isRtl ? t.fwd : ev.driveType} />
      </Section>

      {/* Battery & Charging */}
      <Section title={t.batteryCharge}>
        <Row label={t.battery}    value={`${ev.batteryKwh} kWh`} />
        <Row label={t.dcCharge}   value={`${ev.dcFastChargeMin[0]}–${ev.dcFastChargeMin[1]} ${t.minutes}`} />
        <Row label={t.acCharge}   value={`${ev.acChargeHours} ${t.hours} (7.4 kW)`} />
      </Section>

      {/* Dimensions & Weight */}
      <Section title={t.dimensions}>
        <Row label={t.length}      value={`${dims.lengthMm.toLocaleString()} mm`} />
        <Row label={t.width}       value={`${dims.widthMm.toLocaleString()} mm`} />
        <Row label={t.height}      value={`${dims.heightMm.toLocaleString()} mm`} />
        <Row label={t.wheelbase}   value={`${dims.wheelbaseMm.toLocaleString()} mm`} />
        <Row label={t.weight}      value={`${dims.curbWeightKg.toLocaleString()} kg`} />
        <Row label={t.passengers}  value={`${dims.passengers} ${t.persons}`} />
      </Section>

      {/* Equipment */}
      <Section title={t.equipment}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {visibleEquip.map((item) => (
            <li key={item.en} className="flex items-start gap-2 text-sm text-opel-gray-700">
              <IconCheck />
              {isRtl ? item.fa : item.en}
            </li>
          ))}
        </ul>
        {equipment.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAllEquip((v) => !v)}
            className="mt-4 text-sm font-semibold text-opel-black hover:text-opel-yellow transition-colors underline underline-offset-2"
          >
            {showAllEquip ? t.showLess : t.showAll(equipment.length)}
          </button>
        )}

        {/* Safety subsection */}
        <p className="font-bold text-opel-black text-sm tracking-wide uppercase mt-6 mb-3">{t.safety}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {safety.map((item) => (
            <li key={item.en} className="flex items-start gap-2 text-sm text-opel-gray-700">
              <IconCheck />
              {isRtl ? item.fa : item.en}
            </li>
          ))}
        </ul>
      </Section>

    </div>
  )
}
