'use client'

import { useRouter } from "next/navigation"
import {card} from '../constants/item'
import WorksCard from "./WorksCard"

export default function page() {
    const router = useRouter()
  return (
    <div>
        <div className="flex gap-3 justify-center py-12 flex-wrap cursor-default">
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
