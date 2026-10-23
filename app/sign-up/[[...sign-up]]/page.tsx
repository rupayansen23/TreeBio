import { SignUp } from '@clerk/nextjs'
import { Suspense } from 'react'

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'>
            <h1 className='text-2xl font-bold mb-6'>Welcome! to Tree Bio</h1>
            <p className='text-lg mb-4 font-semibold text-gray-500'>Please sign up to continue if you have an account you can sign in</p>
            <div>
                <Suspense>
                    <SignUp />
                </Suspense>
            </div>    
        </div>

    )
}