import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'standalone',

  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [40, 60, 75, 80, 90],
    remotePatterns: [
      { protocol: 'https', hostname: 'cycaskhodro.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.cycaskhodro.com' },
    ],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
  },

  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  compress: true,

  poweredByHeader: false,

  webpack: (config) => {
    config.cache = false
    return config
  },
}

export default withNextIntl(nextConfig)
