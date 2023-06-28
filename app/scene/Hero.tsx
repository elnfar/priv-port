'use client'

import Button from '../../components/Button'
import React, { ChangeEvent, useState } from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation'


interface HeroProps {
    variant:any,
    cursorVariant:any
    textEnter: () => void,
    textLeave: () => void
}

export default function Hero({variant,cursorVariant,textEnter,textLeave}:HeroProps) {


    const router = useRouter()
  return (
    <div>
        <motion.div initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}} className='flex flex-col items-center justify-center h-[88vh] px-12 select-none'>
            <div>
                <motion.div className='cursor' variants={variant} animate={cursorVariant}/>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='lg:text-[7.3rem] md:text-[6.2rem] text-[3rem] uppercase leading-[1.2]'>
                    <span className='text-gray-500'>Freelance</span> Web Designer <span className='text-gray-500'>&</span>  Webflow Developer
                </h1>
            </div>


            <div className='flex md:flex-row flex-col w-full justify-between pt-16 gap-4 md:gap-0 px-12'>

                <div className='w-[330px]' onMouseEnter={textEnter} onMouseLeave={textLeave} >
                    <p>FREELANCE WEB DESIGNER HARNESSING THE POWER OF DESIGN TO ACHIEVE ONLINE GOALS.</p>
                </div>

                <div className='md:w-[500px] w-[370px] flex flex-col gap-6 items-start uppercase'>
                    <p onMouseEnter={textEnter} onMouseLeave={textLeave} >I create successful digital presences for innovative startups and established businesses with cutting-edge UI/UX design and Web development.</p>
                    <Button
                    onClick={() => router.push('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnJMqpptMFMTkZpXrzcHcpCKMxwmdTqsJCLlVsltZrXRDXqNfxbpFmCWWdztHwGctTxBV')}
                    label='Book a free strategy call'
                    icon={BsFillArrowRightCircleFill}
                    black
                    />
                </div>

            </div>


        </motion.div>
    </div>
  )
}
