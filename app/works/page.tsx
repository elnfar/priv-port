'use client'

import { useRouter } from "next/navigation"
import {card} from '../constants/item'
import WorksCard from "./WorksCard"

export default function page() {
    const router = useRouter()
  return (
    <div>
        <div className=" gap-y-4 py-12 cursor-default grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-8">
            {card.map((item) => (
                <WorksCard
                
                image={item.image}
                ImgTitle={item.ImgTitle}
                name={item.name}
                description={item.description}
                onClick={() => router.push(item.onClick)}
                />
            ))}
        </div>
    </div>
  )
}
