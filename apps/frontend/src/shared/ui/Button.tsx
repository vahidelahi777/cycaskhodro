import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'px-6 py-2.5 text-xs': size === 'sm',
            'px-10 py-3.5 text-sm': size === 'md',
            'px-12 py-4 text-base': size === 'lg',
          },
          {
            'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900':
              variant === 'primary',
            'border-2 border-neutral-900 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:ring-neutral-900':
              variant === 'secondary',
            'text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4':
              variant === 'ghost',
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
