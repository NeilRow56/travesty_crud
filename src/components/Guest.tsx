import { SignInButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Guest = () => {
  return (
    <div className='space-y-5'>
      <h1 className='text-3xl'>Welcome</h1>
      <p>Please sign in to manage your transactions</p>
      <Button asChild>
        <SignInButton />
      </Button>
    </div>
  )
}

export default Guest
