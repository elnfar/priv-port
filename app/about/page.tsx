import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='cursor-default py-12'>

        <div className=' flex flex-col items-center gap-12'>
            <div>
            <h1 className='text-[2rem]'>I'm third year Computer Science Student based Georgia, Tbilisi.</h1>
            <p className='text-[1.1rem]'>I have 2 years of expereince with MERN stack and JavaScript.</p>
            <p className='text-gray-400'>Please see the <Link className='text-blue-400' href='/works'>works page</Link> for checking the projects</p>
            </div>
            


            <div>
                <div className=" text-white flex flex-col justify-center items-center px-4">
                    <div className=" flex flex-col items-center gap-8">
                    <div className=" flex flex-col gap-4 items-center justify-between w-[100%]">
                        <h1 className=" uppercase text-gray-500">Technologies I use</h1>
                        <div className="grid grid-cols-2 gap-2">
                        <img src="/next.webp" alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500"/>
                        <img src="/git.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 object-cover"/>
                        <img src="/mern.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 object-cover"/>
                        <img src="/sq.webp" alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500"/>
                        <img src="/typescript.png" alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500"/>
                        <img src="/prisma.webp" alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500"/>
                        </div>
                    </div>
                    </div>

                </div>

            </div>


        
        </div>
    </div>
  )
}
