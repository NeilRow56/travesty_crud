import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses and create a budget'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
