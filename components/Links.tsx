'use client'

import Link from "next/link"
import {BsArrowUpRight} from 'react-icons/bs'


interface LinkProps {
    path:string,
    name:string,
    last?:boolean
}

export default function Links({name,path,last}:LinkProps) {
  return (
    <Link  href={path}  className={`
    pseudo
    cursor-pointer
    pb-4
    min-h-[100%]
    w-full
    justify-center
    flex
    relative
    items-end
    hover:text-purple-400
    ${last ? ' before:hidden': ''}
    `}>
        <div className="flex items-center gap-6 hover:last-of-type:-rotate-12">
        <div>{name}</div>
        <BsArrowUpRight className=""/>
        </div>

    </Link>
  )
}
