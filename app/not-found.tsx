import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className=' cursor-default w-full h-[90vh] flex justify-center items-center'>

        <div className='flex flex-col items-center'>
            <p>Page not found! go back to the</p> 
            <Link href='/' className='text-blue-400'> Home</Link>
        </div>
    </div>
  )
}
