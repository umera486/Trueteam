"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGOS = ["QUANTUM", "NEXUS", "APEX", "SURGE", "VELOCITY", "PRISM", "ECHO", "VOID"];

const KineticRibbon = () => {
  return (
    <div className="py-32 relative bg-[#020202] overflow-hidden flex flex-col gap-4">
      
      {/* 1. TOP RIBBON: BLUE FOCUS (Moves Left) */}
      <div className="relative border-y border-blue-500/10 py-6 bg-blue-500/[0.02] -rotate-1 scale-105">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center will-change-transform"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center gap-20">
              <span className="text-5xl font-black italic tracking-[0.2em] text-white/10 hover:text-blue-500 transition-colors duration-300 cursor-crosshair">
                {logo}
              </span>
              {/* CYBER BIT SEPARATOR */}
              <div className="w-12 h-[2px] bg-blue-500/40" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. BOTTOM RIBBON: YELLOW FOCUS (Moves Right) */}
      <div className="relative border-y border-yellow-500/10 py-6 bg-yellow-500/[0.02] rotate-1 scale-105">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center will-change-transform"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center gap-20">
              <span className="text-5xl font-black italic tracking-[0.2em] text-white/10 hover:text-yellow-500 transition-colors duration-300 cursor-crosshair">
                {logo}
              </span>
              {/* CYBER BIT SEPARATOR */}
              <div className="w-2 h-2 rounded-full border border-yellow-500/50" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CENTER OVERLAY: SYSTEM DATA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="px-6 py-2 bg-blue-600 text-white font-mono text-[10px] font-black uppercase tracking-[0.5em] shadow-[0_0_30px_rgba(37,99,235,0.4)]">
          Network.Synchronization.Active
        </div>
      </div>

      {/* EDGE MASKS */}
      <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#020202] to-transparent z-30" />
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#020202] to-transparent z-30" />
    </div>
  );
};

export default KineticRibbon;