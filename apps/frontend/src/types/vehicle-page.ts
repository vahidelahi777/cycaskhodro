export type PowertrainType = 'petrol' | 'diesel' | 'hybrid' | 'electric'
export type TrimLevel = 'Edition' | 'GS' | 'Ultimate'
export type BodyStyle = 'hatchback' | 'sedan' | 'suv' | 'estate' | 'crossover'

export interface VehicleColor {
  id: string
  name: string
  nameEn: string
  hex: string
  image: string
  available: boolean
  availableSoon?: boolean
}

export interface TrimSpec {
  level: TrimLevel
  displayName: string
  price: number
  installment?: { downPaymentPercent: number; monthlyPayment: number; months: number }
  heroImage: string
  features: string[]
  highlightBadge?: string
  isRecommended?: boolean
}

/** One panel in the horizontal highlight strip (opel.de style) */
export interface ModelHighlight {
  number: string        // '01', '02' …
  titleFa: string
  titleEn: string
  descFa: string
  image: string         // full-bleed background photo
  accentColor?: string  // optional tint, defaults to opel-yellow
}

/** A design callout floating over a photo */
export interface DesignCallout {
  label: string         // e.g. "Pixel LED"
  top: string           // CSS top %
  left?: string
  right?: string
}

export interface OpelVehicle {
  id: string
  slug: string
  brand: 'Opel'
  model: string
  year: number
  bodyStyle: BodyStyle
  status: 'available' | 'pre-order' | 'coming-soon'
  tagline: string
  /** Optional loop video for the hero (placed in /public/videos/) */
  heroVideo?: string
  powertrain: {
    available: PowertrainType[]
    default: PowertrainType
    specs: Partial<Record<PowertrainType, {
      engineCode: string
      displacement: string
      power: string
      torque: string
      transmission: string
      fuelConsumption?: string
    }>>
  }
  trims: TrimSpec[]
  colors: VehicleColor[]
  specs: {
    dimensions: { length: number; width: number; height: number; wheelbase: number; trunkVolume: number; weight?: number }
    performance: { topSpeed: number; acceleration0100: number; range?: number }
    safety: { euroncap?: number; airbags: number; features: string[] }
    technology: { screenSize: string; appleCarPlay: boolean; androidAuto: boolean; camera360: boolean; adaptiveCruise: boolean; laneAssist: boolean }
  }
  media: {
    heroImage: string
    gallery: Array<{ url: string; alt: string }>
    /** Extra curated exterior shots with optional floating callouts */
    exterior?: Array<{ url: string; alt: string; callouts?: DesignCallout[] }>
    /** Interior / cockpit shots */
    interior?: Array<{ url: string; alt: string; caption?: string }>
  }
  /** Ordered feature highlight panels for the opel.de-style strip */
  highlights?: ModelHighlight[]
  seo: { titleFa: string; descriptionFa: string; keywords: string[] }
  dealers: Array<{ id: string; name: string; city: string; address: string; phone: string; lat: number; lng: number; stock: number; hours: string }>
  importInfo: { originCountry: string; warrantyYears: number; warrantyKm: number; serviceCenterCount: number; registrationInfo: string }
}
