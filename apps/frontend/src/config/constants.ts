export const SITE_NAME = 'CycasKhodro'
export const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? ''
export const API_BASE  = process.env.NEXT_PUBLIC_API_URL  ?? ''
export const PAGINATION_LIMIT = 20

export const ROUTES = {
  home:        '/',
  models:      '/models',
  modelDetail: (slug: string) => `/models/${slug}`,
  dealers:     '/dealers',
  blog:        '/blog',
  contact:     '/contact',
} as const
