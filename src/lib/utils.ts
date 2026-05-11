import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ─── Tailwind Class Merger ────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── Number Formatter (Persian/Farsi) ────────────────────────────────────────
export function formatPersianNumber(num: number): string {
  return new Intl.NumberFormat('fa-IR').format(num)
}

export function formatCurrency(amount: number, currency: 'IRR' | 'USD' | 'EUR' = 'IRR'): string {
  if (currency === 'IRR') {
    // Convert to Toman (IRR / 10) and format
    const toman = amount / 10
    if (toman >= 1_000_000_000) {
      return `${formatPersianNumber(Math.round(toman / 1_000_000_000))} میلیارد تومان`
    }
    if (toman >= 1_000_000) {
      return `${formatPersianNumber(Math.round(toman / 1_000_000))} میلیون تومان`
    }
    return `${formatPersianNumber(toman)} تومان`
  }
  return new Intl.NumberFormat('fa-IR', { style: 'currency', currency }).format(amount)
}

// ─── Date Formatter (Jalali/Shamsi) ──────────────────────────────────────────
export function formatPersianDate(date: string | Date): string {
  return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

// ─── Slug Generator ───────────────────────────────────────────────────────────
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

// ─── Phone Number Formatter (Iranian) ────────────────────────────────────────
export function formatIranPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
  }
  return phone
}

// ─── Image URL Helper ─────────────────────────────────────────────────────────
export function getImageUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

// ─── Debounce ─────────────────────────────────────────────────────────────────
export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number) {
  let timer: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// ─── Truncate Text ────────────────────────────────────────────────────────────
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

// ─── Reading Time Calculator ──────────────────────────────────────────────────
export function calculateReadTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
