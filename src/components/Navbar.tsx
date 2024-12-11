'use client'

import ThemeToggle from '@/components/ThemeToggle'

import { dark } from '@clerk/themes'
import { File } from 'lucide-react'
import { useTheme } from 'next-themes'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import Link from 'next/link'

export default function Navbar() {
  const { theme } = useTheme()

  return (
    <header className='shadow-sm'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 p-3'>
        <Link href='/' className='flex items-center gap-2'>
          <File />
          <span className='text-xl font-bold tracking-tight'>Travesty</span>
        </Link>
        <div className='flex items-center gap-3'>
          <ThemeToggle />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: theme === 'dark' ? dark : undefined,
                elements: {
                  avatarBox: {
                    width: 35,
                    height: 35
                  }
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
