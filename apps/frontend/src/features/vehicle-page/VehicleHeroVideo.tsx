'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react'
import type { OpelVehicle } from '@/types/vehicle-page'

interface Props {
  vehicle: OpelVehicle
  onScrollToTrims: () => void
  onConsult: () => void
}

export default function VehicleHeroVideo({ vehicle, onScrollToTrims, onConsult }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) videoRef.current.pause()
    else videoRef.current.play()
    setPlaying((p) => !p)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted((m) => !m)
  }

  const hasVideo = !!vehicle.heroVideo

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
      dir="rtl"
    >
      {/* ── Video background ── */}
      {hasVideo ? (
        <>
          <video
            ref={videoRef}
            src={vehicle.heroVideo}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
          />
          {/* Fallback poster while video loads */}
          {!videoLoaded && (
            <Image
              src={vehicle.media.heroImage}
              fill
              alt={vehicle.model}
              className="object-cover"
              priority
              sizes="100vw"
            />
          )}
        </>
      ) : (
        <Image
          src={vehicle.media.heroImage}
          fill
          alt={vehicle.model}
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}

      {/* ── Gradient layers ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* ── Content ── */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 lg:px-24"
      >
        {/* Brand eyebrow */}
        <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-2 font-medium">
          OPEL
        </p>

        {/* Model name — opel.de uses huge tracked-out letters */}
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-black text-white leading-none tracking-[0.05em] uppercase mb-2">
          {vehicle.model.toUpperCase()}
        </h1>

        {/* Year + tagline */}
        <div className="flex items-baseline gap-4 mb-8">
          <span className="text-opel-yellow text-sm font-bold tracking-widest">{vehicle.year}</span>
          <p className="text-white/70 text-base md:text-xl font-light">{vehicle.tagline}</p>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onConsult}
            className="inline-flex items-center justify-center bg-opel-yellow text-black font-black text-sm px-8 py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            درخواست مشاوره
          </button>
          <button
            onClick={onScrollToTrims}
            className="inline-flex items-center justify-center border-2 border-white/60 text-white font-bold text-sm px-8 py-4 uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            مشاهده تریم‌ها
          </button>
        </div>
      </motion.div>

      {/* ── Video controls ── */}
      {hasVideo && (
        <div className="absolute bottom-8 left-6 md:left-16 flex items-center gap-3 z-20">
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors backdrop-blur-sm"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors backdrop-blur-sm"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      )}

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 right-1/2 translate-x-1/2 flex flex-col items-center gap-1 text-white/40 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] tracking-widest uppercase">اسکرول</span>
        <ChevronDown size={16} />
      </motion.div>

      {/* ── Quick stat pills ── */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-16 flex flex-col gap-3 z-20">
        {[
          { label: 'اسب بخار', value: vehicle.powertrain.specs[vehicle.powertrain.default]?.power ?? '—' },
          { label: 'گشتاور', value: vehicle.powertrain.specs[vehicle.powertrain.default]?.torque ?? '—' },
        ].map((stat) => (
          <div key={stat.label} className="backdrop-blur-sm bg-black/30 border border-white/10 px-4 py-2.5 text-right">
            <p className="text-lg font-black text-white leading-none">{stat.value}</p>
            <p className="text-[10px] text-white/50 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
