import Link from 'next/link'
import React from 'react'

interface WorksImage {
    textEnter: any,
    textLeave:any,
    image:string
}

export default function WorksImage({textEnter,textLeave,image} : WorksImage) {
  return (

    <div className="" onMouseEnter={textEnter} onMouseLeave={textLeave} >

      {/* <img src={image} alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/> */}
      {/* <img src={image} alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
      <img src={image} alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/> */}
      <Link href="https://github.com"> <img src={image} alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500 opacity-80"/></Link>
    </div>
  )
}
