'use client'

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Content from "@/components/Content";
import WorksCard from "../works/WorksCard";
import Link from "next/link";
import WorksImage from "@/components/WorksImage";
import { card, work } from "../constants/item";


function ScrollSection({textEnter,textLeave}:any) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.scroll-section');
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 2,
          pin:true,
          // snap: 1 / (skillSet.length -1),
        //   snap
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);


  return (
    <section className=" overflow-hidden pt-8">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className=" h-[100vh] w-[400vw] flex flex-row gap-8 justify-between relative bg-black">
            <div className=" scroll-section flex justify-center w-[100%] relative">

                   <div className="" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <h1 className="text-[4.2rem] uppercase px-4">
                    <span className="text-purple-300">Front-end</span> <span className=" text-zinc-700">Developer with over 2 years of experience in field. Solid skills with Javascript TypeScript <span className="text-purple-300"> React.js</span> Nextjs <span className="text-purple-300"> MySQL </span> MongoDB</span>
                    </h1>
                   </div>

            </div>

            <div className=" scroll-section flex flex-col gap-4 justify-center w-[100%] relative">
            <h1 className=" uppercase text-gray-500">Full stack udemy clone with nextjs</h1>

            {/* <div className=" flex flex-col gap-4 items-center justify-between w-[100%]" onMouseEnter={textEnter} onMouseLeave={textLeave} >
                    <div className="grid grid-cols-2 gap-2">
                      <img src="/ss.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/ab.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/bc.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <Link href="https://github.com"> <img src="/udemy.png" alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500 opacity-80"/></Link>

                    </div>

        </div> */}


        <div className="grid grid-cols-2 gap-2">
          {work.map((item:any) => (
            <WorksImage
            textEnter={textEnter}
            textLeave={textLeave}
            image={item.image}
            />
          ))}
          </div>
            </div>


            <div className=" w-[100%] scroll-section font-bolder text-white  flex flex-col justify-center items-center px-4">

                 <div className=" flex flex-col items-center gap-8" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                 <div className=" flex flex-col gap-4 items-center justify-between w-[100%]" onMouseEnter={textEnter} onMouseLeave={textLeave} >
                    <h1 className=" uppercase text-gray-500">Full stack Blog Application with Nextjs</h1>
                    <div className="grid grid-cols-2 gap-2">
                      <img src="/next.webp" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/v.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/x.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <Link href="https://github.com"> <img src="/z.png" alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500 opacity-80"/></Link>

                    </div>

                   </div>
                   
                   </div>

            </div>


            <div className=" w-[100%] scroll-section font-bolder uppercase text-white justify-center  flex flex-col px-4">
                  
            <div className=" flex flex-col items-center gap-8" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                 <div className=" flex flex-col gap-4 items-center justify-between w-[100%]" onMouseEnter={textEnter} onMouseLeave={textLeave} >
                    <h1 className=" uppercase text-gray-500">What I use</h1>
                    <div className="grid grid-cols-3 gap-2">
                      <img src="/mongodb.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/sq.webp" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/react.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/node.png" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>
                      <img src="/next.webp" alt="" className="w-[500px] h-[250px] rounded-md border-4 border-gray-500 opacity-50"/>

                      <Link href="https://github.com"> <img src="/type.png" alt="" className="w-[500px] h-[250px] object-cover rounded-md border-4 border-gray-500 opacity-80"/></Link>

                    </div>

                   </div>
                   
                   </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
