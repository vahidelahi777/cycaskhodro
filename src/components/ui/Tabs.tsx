'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within Tabs')
  }
  return context
}

interface TabsProps {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  children: ReactNode
  className?: string
}

export function Tabs({ defaultValue, value: controlledValue, onValueChange, children, className }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = controlledValue ?? internalValue
  
  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  children: ReactNode
  className?: string
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex flex-wrap items-center justify-center gap-6 md:gap-8 border-b border-neutral-200',
        className
      )}
    >
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  children: ReactNode
  count?: number
  className?: string
}

export function TabsTrigger({ value, children, count, className }: TabsTriggerProps) {
  const { value: selectedValue, onValueChange } = useTabsContext()
  const isActive = selectedValue === value

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      onClick={() => onValueChange(value)}
      className={cn(
        'group relative pb-4 text-sm md:text-base uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4',
        isActive ? 'text-neutral-900 font-semibold' : 'text-neutral-500 hover:text-neutral-700',
        className
      )}
    >
      <span className="flex items-center gap-2.5">
        {children}
        {count !== undefined && (
          <span
            className={cn(
              'flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full text-xs transition-colors',
              isActive
                ? 'bg-neutral-900 text-white'
                : 'bg-neutral-200 text-neutral-600 group-hover:bg-neutral-300'
            )}
          >
            {count}
          </span>
        )}
      </span>
      
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
      )}
    </button>
  )
}

interface TabsContentProps {
  value: string
  children: ReactNode
  className?: string
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { value: selectedValue } = useTabsContext()
  
  if (selectedValue !== value) return null

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      className={className}
    >
      {children}
    </div>
  )
}
