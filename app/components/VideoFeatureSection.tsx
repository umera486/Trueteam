"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Target, Layers } from "lucide-react";

const ImageFeatureSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-20 bg-[#020202]">
      
      {/* 1. LEFT BLOCK: THE SCHEMATIC IMAGE */}
      <div className="w-full lg:w-1/2 relative group perspective-1000">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ 
            rotateY: isHovered ? -8 : 0,
            rotateX: isHovered ? 2 : 0,
            scale: isHovered ? 1.02 : 1
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/3] will-change-transform shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* TECHNICAL IMAGE LAYER */}
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
            alt="Cyber Security Hardware"
            fill
            className={`object-cover transition-all duration-700 grayscale ${isHovered ? 'grayscale-0 scale-110' : 'opacity-50'}`}
          />

          {/* OVERLAYS: HUD ELEMENTS */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
          
          {/* Animated Scanning Bar (Yellow) */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-yellow-500/40 z-20 shadow-[0_0_15px_#eab308]"
          />

          {/* HUD FRAME (BLUE) */}
          <div className="absolute inset-8 border border-blue-500/20 pointer-events-none z-20">
             <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500" />
             <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-500" />
          </div>

          {/* DATA BIT CHIP */}
          <div className="absolute bottom-12 left-12 z-30 flex items-center gap-3 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl">
             <Layers size={14} className="text-yellow-500" />
             <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">Buffer_Stream_09</span>
          </div>
        </motion.div>
      </div>

      {/* 2. RIGHT BLOCK: TECHNICAL DESCRIPTION */}
      <div className="w-full lg:w-1/2 space-y-10">
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
        >
          {/* SYSTEM TAG */}
          <div className="flex items-center gap-4 mb-10">
            <span className="h-[1px] w-12 bg-blue-500" />
            <div className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black">
              Inference // Engine_v2
            </div>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white italic leading-[0.85] uppercase mb-8">
            Deterministic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Hardware.
            </span>
          </h3>

          <p className="text-zinc-500 text-xl leading-relaxed font-medium max-w-xl">
            We bridge the gap between abstract LLM reasoning and 
            <span className="text-white"> tactile execution</span>. By utilizing a 
            fully isolated hardware stack, we guarantee sub-ms latency in 
            agentic deployments.
          </p>

          {/* TRI-COLOR SYNC BAR */}
          <div className="mt-12 flex flex-col gap-4">
            <div className="flex justify-between items-end font-mono text-[9px] uppercase tracking-widest text-zinc-600 font-bold">
              <span>Synchronizing_States</span>
              <span className={isHovered ? "text-blue-500" : ""}>98.2% Accuracy</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-yellow-500"
              />
            </div>
            <div className="flex gap-8 mt-2">
               <div className="flex items-center gap-2">
                  <Zap size={12} className="text-blue-500" />
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Flash_Logic</span>
               </div>
               <div className="flex items-center gap-2">
                  <Target size={12} className="text-yellow-500" />
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Zero_Drift</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFeatureSection;