'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import {GrFormClose} from 'react-icons/gr'
import {RxHamburgerMenu} from 'react-icons/rx'
import DropMenu from './DropMenu'
import { AnimatePresence } from 'framer-motion'


export default function Navbar() {

    const [drop,setDrop] = useState(false)
    const router = useRouter()

  return (
    <header>

            <div className='flex items-center justify-between px-6 py-6 cursor-default'>
                <Link href='/' className='uppercase text-[1.5rem] z-50 ml-4'>Elnur <span className='text-gray-400'>Far</span></Link>
                
                <div className='flex items-center gap-4'>
                    <Button
                    icon={BsFillArrowRightCircleFill}
                    label='Contact'
                    onClick={() => router.push('/contact')}
                    />


                    <div className='rounded-full bg-gray-300 p-2 z-[999999]'>
                        {drop ? <GrFormClose className="text-[1.5rem] cursor-pointer" onClick={() => setDrop(!drop)}/> : <RxHamburgerMenu className="text-[1.5rem] cursor-pointer" onClick={() => setDrop(!drop)}/>}
                    </div>
                </div>
            </div>

        <AnimatePresence>
        {drop && (
            <DropMenu setDrop={setDrop}/>
        )}
        </AnimatePresence>

    </header>
  )
}
