import React, { useEffect, useRef, useState } from 'react'
import AnimatedSVG from './AnimatedSVG'
import gsap from 'gsap';

const Loader = ({onFinish}) => {
    const countRef = useRef(null);
  const loaderRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });

    // 1️⃣ Count animation
    for (let i = 0; i <= 20; i++) {
      tl.to({}, {
        duration: 0.3, // time per number
        onComplete: () => setCount(i),
      });
    }

    // 2️⃣ Fade out the number
    tl.to(countRef.current, {
      opacity: 0,
      duration: 0.3, // time per number
      ease: "power2.out",
    });

    // 3️⃣ Slide the loader background to right
    tl.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power4.inOut',
        pointerEvents: 'none', // allow scroll after fade
      });
    }, [onFinish]);
  

  return (
    <div ref={loaderRef} className="absolute h-screen w-full bg-black z-9999 flex items-center justify-center">

    <h1 className="text-white text-2xl"><AnimatedSVG/></h1>
    <div className='Luci  h-screen w-full flex items-end justify-end px-10 py-3 flex-col text-white py-6 absolute top-0 left-0'>
<h2 ref={countRef} className='text-9xl'>{count}</h2>
        
    </div>
  </div>
  
  )
}

export default Loader
