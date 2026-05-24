'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
  sizes?: string
}

export function OptimizedImage({
  src,
  alt,
  fill,
  className,
  width,
  height,
  quality = 85,
  priority = false,
  sizes,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const sharedProps = {
    src,
    alt,
    quality,
    priority,
    className: `${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`,
    onLoad: () => setIsLoading(false),
    onError: () => setHasError(true),
  }

  if (hasError) {
    return (
      <div className={`${className} bg-neutral-200 flex items-center justify-center text-neutral-500`}>
        <span className="text-sm">تصویر دستیافتنی نیست</span>
      </div>
    )
  }

  return fill ? (
    <Image {...sharedProps} fill sizes={sizes} />
  ) : (
    <Image {...sharedProps} width={width} height={height} />
  )
}
