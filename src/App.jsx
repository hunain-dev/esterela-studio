import React, { useEffect, useRef } from "react";
import Herosection from "./pages/Home/Herosection";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import styles

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,          // Enable smooth scrolling
      multiplier: 1,         // Scroll speed
      lerp: 0.1,             // Smoothing (0.1 is default)
    });

    return () => scroll.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Herosection />
      <div className="h-screen w-full bg-white" data-scroll-section></div>
      <div className="h-screen w-full bg-red-500"data-scroll-section ></div>
    </div>
  );
};

export default App;
