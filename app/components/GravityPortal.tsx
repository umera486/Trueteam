"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const GravityPortal = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for "Liquid" movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full h-[600px] bg-black overflow-hidden rounded-[3rem] border border-white/5 cursor-none"
    >
      {/* 1. DARK LAYER (The "Normal" UI) - AS PROVIDED */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-10 select-none">
        <h2 className="text-7xl md:text-9xl font-black tracking-[-0.05em] text-white/5 uppercase italic">
          Invisible <br /> Excellence
        </h2>
        <p className="text-gray-600 mt-4 font-bold tracking-widest uppercase text-xs">
          Hover to reveal the optimized core
        </p>
      </div>

      {/* 2. THE GRAVITY MESH - AS PROVIDED */}
      <div className="absolute inset-0 opacity-20">
         <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* 3. THE PORTAL - AS PROVIDED (Keeping your Blue/Black Gradient) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          clipPath: `circle(150px at ${springX}px ${springY}px)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-black to-indigo-950 flex flex-col items-center justify-center text-center">
            <h2 className="text-7xl md:text-9xl font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 uppercase italic">
              True <br /> Team
            </h2>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-blue-500/30 rounded-full flex items-center justify-center"
            >
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
            </motion.div>
        </div>
      </motion.div>

      {/* 4. THE LIQUID CURSOR RING - UPDATED TO YELLOW */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
        }}
        className="absolute w-[300px] h-[300px] border border-yellow-400/50 rounded-full z-30 pointer-events-none flex items-center justify-center"
      >
        {/* Center Point - White with Yellow Glow */}
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff,0_0_30px_#facc15]" />
        
        {/* Orbiting text around cursor - UPDATED TO YELLOW */}
        <svg className="absolute w-full h-full animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
          <text className="text-[6px] font-bold uppercase fill-yellow-400 tracking-[2px]">
            <textPath xlinkHref="#circlePath">
              • Optimize UI • Boost Performance • Create Value •
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  );
};

export default GravityPortal;