import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const generateMetadata = (): Metadata => {
  return {
    title: 'سیکاس خودرو | نمایندگی رسمی اوپل در ایران',
    description:
      'سیکاس خودرو، نمایندگی رسمی و واردکننده خودروهای اوپل در ایران.',
  }
}

type Props = {
  children: ReactNode
  params: Promise<{
    locale: string
  }>
}

export default async function LocaleLayout({
  children,
}: Props) {
  return <>{children}</>
}
