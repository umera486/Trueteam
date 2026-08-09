"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { 
    title: "AI Architecture", 
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", 
    code: "AA-01",
    desc: "Neural-Sync Logic"
  },
  { 
    title: "Neural Interface", 
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800", 
    code: "NI-04",
    desc: "Biometric Data Flow"
  },
  { 
    title: "Quantum Ledger", 
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800", 
    code: "QL-09",
    desc: "Encrypted Core"
  },
  { 
    title: "Logic Stream", 
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
    code: "LS-12",
    desc: "Deterministic Routing"
  },
];

const ResponsiveEliteGrid = () => {
  return (
    <section className="py-24 bg-[#020202] px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: TRUE BLUE & YELLOW */}
        <div className="mb-20 flex flex-col gap-4 border-l-2 border-blue-600 pl-6 md:pl-10">
          <p className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.6em] font-black">
            Classified_Output // 2026
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
            Selected <span className="text-blue-600">Assets.</span>
          </h2>
        </div>

        {/* MOBILE-FIRST STACKED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group h-[500px] md:h-[600px] w-full overflow-hidden border border-white/5 bg-[#050505]"
            >
              {/* IMAGE LAYER: Optimzed for Responsive */}
              <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover opacity-30 grayscale group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
              </div>

              {/* TOP HUD: TECHNICAL DATA */}
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
                <div className="font-mono text-[9px] text-zinc-500 flex flex-col gap-1">
                  <span className="text-blue-500 font-black tracking-widest">{project.code}</span>
                  <span className="opacity-50">STABLE_BUILD</span>
                </div>
                <div className="h-1 w-1 bg-yellow-500 rounded-full animate-ping" />
              </div>

              {/* BOTTOM CONTENT: NO ARROW, JUST DATA */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="mb-4 overflow-hidden">
                   <motion.div 
                     initial={{ y: "100%" }}
                     whileInView={{ y: 0 }}
                     className="h-[1px] w-full bg-blue-600/50"
                   />
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mb-6">
                  {project.desc}
                </p>

                {/* STATUS READOUT: INTERACTIVE BUT NON-LINKED */}
                <div className="flex items-center gap-4 text-white">
                   <div className="px-3 py-1 border border-white/10 rounded-full text-[8px] font-black uppercase tracking-tighter bg-white/5">
                      System: <span className="text-yellow-500">Locked</span>
                   </div>
                   <div className="text-[8px] font-mono text-zinc-700 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      Read_Only_Mode
                   </div>
                </div>
              </div>

              {/* HOVER GLOW EFFECT (VOID THEME) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER DECOR */}
        <div className="mt-12 flex justify-between items-center px-4 md:px-0 opacity-20">
          <div className="font-mono text-[8px] text-zinc-500 uppercase tracking-[1em]">
            End_of_Transmission
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((dot) => (
              <div key={dot} className="w-1 h-1 bg-blue-600 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveEliteGrid;