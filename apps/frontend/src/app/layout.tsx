import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'سیکاس خودرو | نمایندگی رسمی اوپل',
  description: 'نمایندگی رسمی اوپل در ایران',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans antialiased bg-white text-opel-black">{children}</body>
    </html>
  )
}
