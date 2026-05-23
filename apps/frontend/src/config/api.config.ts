import { API_BASE } from './constants'

export const apiConfig = {
  baseUrl: API_BASE,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
} as const
