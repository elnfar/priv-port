'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hero from "./scene/Hero";
import ScrollSection from "./scene/Scroll";
import { gsap } from "gsap";
import { ScrollTrigger,ScrollSmoother } from "gsap/all";


export default function Home() {
  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
})
const [cursorVariant, setCursorVariant] = useState("default");

useEffect(() => {

const mouseMove = (e:any) => {
    setMousePosition({
        x:e.clientX,
        y:e.clientY
    })
}

window.addEventListener("mousemove",mouseMove)

return () => {
    window.removeEventListener("mousemove",mouseMove)
}

},[])


const variant:any = {
default: {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
},
text: {
    height: 150,
    width: 150,
    x: mousePosition.x - 75,
    y: mousePosition.y - 75,
    backgroundColor: "rgb(254, 236, 236)",
    mixBlendMode:"difference"
}
}

const textEnter = () => setCursorVariant("text")
const textLeave = () => setCursorVariant("default")







  return (
    <main>
      <Hero variant={variant} textEnter={textEnter} textLeave={textLeave} cursorVariant={cursorVariant}/>
      {/* <ScrollSection variant={variant} textEnter={textEnter} textLeave={textLeave}/> */}
    </main>
  )
}
