import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const rects = svgRef.current.querySelectorAll("path"); // all rectangles
    const circle = svgRef.current.querySelector("circle");

    // Animate rectangles rotation
    rects.forEach((rect, i) => {
      gsap.to(rect, {
        rotate: -200,
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: 30 + i * 2, // stagger durations
        ease: "linear",
      });
    });

    // Animate center circle rotation (opposite direction)
    gsap.to(circle, {
      rotate: -200,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 30,
      ease: "linear",
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="h-21 w-30"
      viewBox="0 0 480 480"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="white">
        {/* Rotated rectangles */}
        <path d="M-20 56H20L8 -56H-8Z" transform="matrix(1.96 0.36 -0.28 1.53 256 154)" />
        <path d="M-20 56H20L8 -56H-8Z" transform="matrix(1.65 1.11 -1.17 1.74 306 143)" />
        <path d="M-20 56H20L8 -56H-8Z" transform="matrix(-0.17 1.99 -0.99 -0.08 296 245)" />
        <path d="M-20 56H20L8 -56H-8Z" transform="matrix(-1.61 1.17 -0.88 -1.21 289 308)" />
        <path d="M-20 56H20L8 -56H-8Z" transform="matrix(0.43 -1.95 2.05 0.45 125 215)" />
        <path d="M-20 56H20L8 -56H-8Z" transform="matrix(1.76 -0.93 0.84 1.58 193 151)" />

        {/* Center circle */}
        <circle cx="240" cy="240" r="40" />
      </g>
    </svg>
  );
};

export default AnimatedSVG;
