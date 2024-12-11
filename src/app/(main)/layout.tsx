import Navbar from '@/components/Navbar'
import { checkUser } from '@/lib/checkUser'

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const user = await checkUser()

  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      {children}
    </div>
  )
}
