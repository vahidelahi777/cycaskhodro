// ─── Vehicle / Car Types ──────────────────────────────────────────────────────

export type FuelType = 'petrol' | 'diesel' | 'electric' | 'hybrid' | 'plug-in-hybrid'
export type TransmissionType = 'manual' | 'automatic' | 'cvt'
export type VehicleCategory = 'sedan' | 'suv' | 'hatchback' | 'crossover' | 'van' | 'commercial'
export type VehicleStatus = 'available' | 'on-order' | 'coming-soon' | 'sold-out'

export interface VehicleSpec {
  engine: string
  horsepower: number
  torque: number
  acceleration_0_100: number
  topSpeed: number
  fuelConsumption?: string
  co2Emission?: number
  transmission: TransmissionType
  driveType: 'FWD' | 'RWD' | 'AWD'
  doors: number
  seats: number
  trunkVolume?: number
  wheelbase?: number
}

export interface VehicleColor {
  name: string
  nameFa: string
  hex: string
  imageUrl?: string
}

export interface VehiclePrice {
  base: number
  currency: 'IRR' | 'USD' | 'EUR'
  isNegotiable: boolean
  showPrice: boolean
}

export interface Vehicle {
  id: string
  slug: string
  name: string
  nameFa: string
  brand: string
  model: string
  year: number
  category: VehicleCategory
  status: VehicleStatus
  fuelType: FuelType
  specs: VehicleSpec
  colors: VehicleColor[]
  price: VehiclePrice
  images: string[]
  heroImage: string
  thumbnailImage: string
  description: string
  descriptionFa: string
  features: string[]
  featuresFa: string[]
  isFeatured: boolean
  createdAt: string
  updatedAt: string
}

// ─── Service Types ────────────────────────────────────────────────────────────

export type ServiceCategory =
  | 'repair'
  | 'maintenance'
  | 'warranty'
  | 'roadside'
  | 'parts'
  | 'training'

export interface Service {
  id: string
  slug: string
  title: string
  titleFa: string
  description: string
  descriptionFa: string
  category: ServiceCategory
  icon: string
  image: string
  isAvailable: boolean
  bookingEnabled: boolean
}

// ─── Agency / Dealer Types ────────────────────────────────────────────────────

export interface Agency {
  id: string
  name: string
  nameFa: string
  address: string
  addressFa: string
  city: string
  cityFa: string
  province: string
  provinceFa: string
  phone: string[]
  email?: string
  coordinates: { lat: number; lng: number }
  workingHours: WorkingHours
  services: ServiceCategory[]
  isMainDealer: boolean
  image?: string
}

export interface WorkingHours {
  saturday: string
  sunday: string
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string | null
}

// ─── Contact / Form Types ─────────────────────────────────────────────────────

export type InquiryType = 'purchase' | 'service' | 'parts' | 'general' | 'test-drive'

export interface ContactFormData {
  firstName: string
  lastName: string
  phone: string
  email?: string
  inquiryType: InquiryType
  vehicleOfInterest?: string
  message: string
}

export interface ServiceBookingData {
  firstName: string
  lastName: string
  phone: string
  vehicleModel: string
  licensePlate: string
  serviceType: ServiceCategory
  preferredDate: string
  preferredTime: string
  description?: string
}

// ─── Blog / News Types ────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  titleFa: string
  excerpt: string
  excerptFa: string
  content: string
  contentFa: string
  coverImage: string
  author: string
  publishedAt: string
  tags: string[]
  tagsFa: string[]
  readTime: number
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  badge?: string
}

// ─── API Response Types ───────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiError {
  message: string
  code: string
  statusCode: number
}
