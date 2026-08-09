"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const PrecisionFooter = () => {
  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* 1. TOP SECTION: THE UTILITY GRID */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[
            { label: "Engineering", links: ["Next.js", "Tailwind", "Framer"], accent: "bg-blue-500" },
            { label: "Protocol", links: ["Twitter", "Github", "LinkedIn"], accent: "bg-yellow-500" },
            { label: "Contact", links: ["Inquiry", "Support", "Status"], accent: "bg-blue-500" }
          ].map((block, i) => (
            <div key={i} className="p-10 bg-[#020202] group hover:bg-[#050505] transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-1 h-4 ${block.accent}`} />
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                  {block.label}
                </span>
              </div>
              <ul className="space-y-4">
                {block.links.map(link => (
                  <li key={link} className="flex items-center justify-between group/item cursor-pointer">
                    <span className="text-white text-lg font-black italic uppercase tracking-tighter group-hover/item:text-yellow-500 transition-colors">
                      {link}
                    </span>
                    <div className="w-0 h-[1px] bg-blue-500 group-hover/item:w-8 transition-all duration-300" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 2. MIDDLE SECTION: SYSTEM TELEMETRY */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center py-10 border-y border-white/5 gap-8">
          <div className="flex gap-8 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-black">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                <span>Uptime: 99.9%</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>Lat: 0.02ms</span>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-blue-500/30" />
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              Next.js_15_Edge_Deployment
            </p>
            <div className="h-[1px] w-12 bg-yellow-500/30" />
          </div>
        </div>

        {/* 3. FINAL SECTION: SMALL CENTERED BRANDING */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-6 flex items-center gap-2"
          >
            <div className="w-2 h-[2px] bg-blue-500" />
            <div className="w-2 h-[2px] bg-yellow-500" />
            <div className="w-2 h-[2px] bg-blue-500" />
          </motion.div>

          {/* Centered, Small, and High-Contrast */}
          <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-[-0.05em] uppercase leading-none group cursor-default">
            TRUE<span className="text-yellow-500 group-hover:text-blue-500 transition-colors">TEAM</span>
          </h3>
          
          <div className="mt-10 flex flex-col md:flex-row items-center gap-6 text-zinc-700 font-mono text-[9px] uppercase tracking-[0.5em] font-black">
            <p>©2026_STATION_HQ</p>
            <span className="hidden md:block opacity-20">|</span>
            <p className="hover:text-blue-500 cursor-pointer transition-colors">Privacy_Protocol</p>
            <span className="hidden md:block opacity-20">|</span>
            <p className="hover:text-yellow-500 cursor-pointer transition-colors">Terms_of_Service</p>
          </div>
        </div>
      </div>

      {/* SUBTLE TEXTURE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </footer>
  );
};

export default memo(PrecisionFooter);