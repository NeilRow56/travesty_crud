import Guest from '@/components/Guest'
import { Button } from '@/components/ui/button'

import { currentUser } from '@clerk/nextjs/server'

import Link from 'next/link'

const HomePage = async () => {
  const user = await currentUser()

  if (!user) {
    return (
      <main className='mt-24 flex flex-col items-center justify-center gap-4'>
        <Guest />
      </main>
    )
  }

  return (
    <main className='mt-24 flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-bold'>Expense Tracker</h1>

      <h2>Welcolme, {user.firstName}</h2>

      <div className='mt-8'>
        <Button asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>
      </div>
    </main>
  )
}

export default HomePage
