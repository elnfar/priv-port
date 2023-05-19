'use client'

import Links from "./Links"
import { NavLinks } from "@/app/constants/item"
import {motion} from 'framer-motion'


interface DropMenuInt {
    setDrop:any
}

export default function DropMenu({setDrop}:DropMenuInt) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed bg-white top-5 right-5 left-5 rounded-3xl shadow-2xl shadow-slate-600 z-50" onClick={() => setDrop(false) }>
        <nav className="flex flex-col">
            <ul className="min-h-[40vh] rounded-3xl lg:min-h-[30rem] h-[100%] flex flex-wrap lg:flex-nowrap uppercase text-center text-[1.7rem]"> 
                {NavLinks.map((item:any) => (
                    <Links
                    name={item.name}
                    path={item.path}
                    last={item.last}
                    />
                ))}
            </ul>
        </nav>
    </motion.div>
  )
}
