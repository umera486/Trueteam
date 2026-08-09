"use client";

import React from "react";
import { motion } from "framer-motion";

const UIOptimizer = () => {
  return (
    <div className="py-32 px-6 bg-[#020202] relative overflow-hidden">
      
      {/* BACKGROUND GRID CALIBRATION */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[size:30px_30px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE: AGGRESSIVE DATA */}
        <div className="z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-blue-600" />
              <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.5em] font-black">
                Optimization_Engine.v4
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white italic uppercase leading-[0.85] mb-8">
              Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                For Velocity.
              </span>
            </h2>

            <p className="text-zinc-500 text-xl max-w-lg leading-relaxed border-l border-white/10 pl-8">
              Generic layouts fail at scale. We develop <span className="text-white">high-frequency interfaces</span> that process intent, reduce cognitive load, and force conversion through deterministic design logic.
            </p>
            
            {/* OPTIMIZATION STATS: TRI-COLOR FOCUS */}
            <div className="flex gap-12 mt-12">
                <div className="space-y-1">
                    <p className="text-4xl font-black text-white italic tracking-tighter">+45%</p>
                    <p className="text-[9px] text-blue-500 font-mono uppercase tracking-widest font-black">Retention_Sync</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="space-y-1">
                    <p className="text-4xl font-black text-white italic tracking-tighter">0.4s</p>
                    <p className="text-[9px] text-yellow-500 font-mono uppercase tracking-widest font-black">Edge_Latency</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: THE TECHNICAL CORE (THE ENGINE) */}
        <div className="relative order-1 lg:order-2">
          <div className="relative bg-[#050505] border border-white/5 rounded-[3rem] p-10 aspect-square flex flex-col justify-between overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            
            {/* 1. KINETIC SCANNER (YELLOW) */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-yellow-500/50 shadow-[0_0_20px_#eab308] z-30"
            />

            {/* 2. THE LOGIC MATRIX */}
            <div className="space-y-10 relative z-10">
              {/* Header Interface */}
              <div className="flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_#2563eb]" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Core_Module_Active</div>
              </div>

              {/* Dynamic Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: "Data_Throughput", color: "bg-blue-600", delay: 0 },
                  { label: "Visual_Precision", color: "bg-white", delay: 1 },
                  { label: "Logic_Handshake", color: "bg-yellow-500", delay: 2 }
                ].map((bar, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[8px] font-mono text-zinc-500">
                      <span>{bar.label}</span>
                      <span className="text-white">VAL_0{i+4}</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "0%", "-100%"] }}
                        transition={{ duration: 4, delay: bar.delay, repeat: Infinity, ease: "easeInOut" }}
                        className={`h-full w-full ${bar.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Grid (Center Piece) */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                    className="h-10 border border-white/5 rounded-lg flex items-center justify-center bg-white/[0.02]"
                  >
                     <div className="w-1 h-1 rounded-full bg-blue-500/20" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3. FOOTER STATUS */}
            <div className="flex justify-between items-end border-t border-white/5 pt-6 z-10">
                <div className="space-y-2">
                  <div className="flex gap-4">
                    <div className="w-4 h-[1px] bg-blue-600" />
                    <div className="w-4 h-[1px] bg-white/10" />
                    <div className="w-4 h-[1px] bg-white/10" />
                  </div>
                  <p className="text-[10px] text-zinc-500 font-mono tracking-tighter uppercase">Protocol_Locked</p>
                </div>
                <div className="text-right">
                  <p className="text-[24px] font-black text-white italic leading-none">99.2</p>
                  <p className="text-[8px] text-blue-500 font-mono uppercase font-black">Reliability_Index</p>
                </div>
            </div>

            {/* VINTAGE SCANLINE TEXTURE */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-40 bg-[length:100%_2px,3px_100%]" />
          </div>

          {/* FLOATING HUD TAG */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-yellow-500 text-black text-[9px] font-black px-4 py-2 uppercase tracking-widest italic shadow-2xl z-50"
          >
            System_Optimized
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UIOptimizer;