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
  quality = 80,
  priority = false,
  sizes,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          quality={quality}
          priority={priority}
          sizes={sizes}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          quality={quality}
          priority={priority}
        />
      )}

      {hasError && (
        <div className={`${className} bg-neutral-200 flex items-center justify-center text-neutral-500`}>
          <span className="text-sm">تصویر دستیافتنی نیست</span>
        </div>
      )}
    </>
  )
}
