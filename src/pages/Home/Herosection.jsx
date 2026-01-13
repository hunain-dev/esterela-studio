import React, { useEffect, useRef } from "react";
import Hero from "../../../public/Assets/Hero.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Herosection = () => {
    const leftText = useRef(null);
    const rightText = useRef(null);
    const sectionRef = useRef(null);
    
    useEffect(() => {
        gsap.to(leftText.current, {
          x: 0,
          scale: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",    // 👈 yahin se move shuru
            end: "top 0%",       // 👈 thoda scroll milta hai
            scrub: true,
                      x: 400,

          },
        });
      
        gsap.to(rightText.current, {
          x: 0,
          scale: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "top 0%",
            scrub: true,
          },
        });
      }, []);
      
  return (
    <div className="h-screen   w-full flex items-center justify-center">
      <div className="backarea h-full w-full  relative">
        <div className="h-full w-full">
          <video
            src={Hero}
            className="h-full w-full object-cover sticky top-0"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="frontarea py-7 h-full flex items-end justify-end w-full absolute top-0 left-0 ">
          <div className=" w-full  flex items-center justify-between flex-col">
            <div   ref={sectionRef}
  className="py-58  text-white grid grid-cols-3 w-full ">
              <div        
 className="h-full   flex items-center justify-start ">
                <h2  ref={leftText} className="Luci px-1  text-6xl">A people first</h2>
              </div>
              <div className="h-full   flex items-end justify-center">
                <svg
                  className="h-21 w-30"
                  viewBox="0 0 480 480"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="white">
                    {/* Rotated rectangles */}
                    <path
                      d="M-20 56H20L8 -56H-8Z"
                      transform="matrix(1.96 0.36 -0.28 1.53 256 154)"
                    />
                    <path
                      d="M-20 56H20L8 -56H-8Z"
                      transform="matrix(1.65 1.11 -1.17 1.74 306 143)"
                    />
                    <path
                      d="M-20 56H20L8 -56H-8Z"
                      transform="matrix(-0.17 1.99 -0.99 -0.08 296 245)"
                    />
                    <path
                      d="M-20 56H20L8 -56H-8Z"
                      transform="matrix(-1.61 1.17 -0.88 -1.21 289 308)"
                    />
                    <path
                      d="M-20 56H20L8 -56H-8Z"
                      transform="matrix(0.43 -1.95 2.05 0.45 125 215)"
                    />
                    <path
                      d="M-20 56H20L8 -56H-8Z"
                      transform="matrix(1.76 -0.93 0.84 1.58 193 151)"
                    />

                    {/* Center circle */}
                    <circle cx="240" cy="240" r="40" />
                  </g>
                </svg>
              </div>
              <div className="h-full  flex items-center justify-end">
                <h2  ref={rightText} className="Luci px-3 text-6xl">digital studio</h2>
              </div>
            </div>
            <div className=" w-full  flex items-end text-white justify-center ">
              <h2 className="Luci  text-1xl">Scroll to discover the world</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
