"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { phase: "01", title: "Diagnostic Audit", desc: "We deconstruct your current funnel using heatmaps and friction analysis." },
  { phase: "02", title: "High-Velocity Build", desc: "Bespoke Next.js architecture deployed with zero-latency logic." },
  { phase: "03", title: "Scale Deployment", desc: "Automated SEO systems and conversion-optimized booking flows." },
];

const ProcessPricing = () => {
  return (
    <div className="py-32 px-6 bg-[#020202] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* LEFT: THE ENGINE (The Process) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.5em] font-black">
                The_System_v4
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white italic uppercase leading-[0.85] mb-12">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">
                Protocol.
              </span>
            </h2>
          </motion.div>

          <div className="space-y-12 relative">
            {/* Professional Vertical Rail */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-500 via-white/5 to-transparent" />

            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-20 group"
              >
                {/* HUD Step Marker */}
                <div className="absolute left-0 w-12 h-12 bg-[#050505] border border-white/10 flex items-center justify-center z-10 group-hover:border-yellow-500 transition-all duration-500 rounded-lg rotate-45 group-hover:rotate-0">
                  <span className="text-yellow-500 font-black text-xs -rotate-45 group-hover:rotate-0 transition-transform">{step.phase}</span>
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter group-hover:text-yellow-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-500 mt-2 max-w-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: THE INVESTMENT CARD */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticky top-10"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] rounded-full" />
            
            <div className="relative bg-[#080808] border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-10">
                <div>
                   <h4 className="text-white font-black uppercase italic tracking-widest text-xl">Elite Tier</h4>
                   <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-1">Full-Stack Retainer</p>
                </div>
                <div className="px-3 py-1 bg-yellow-500 text-black text-[9px] font-black uppercase tracking-tighter italic rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                  Most Active
                </div>
              </div>

              {/* Price Segment */}
              <div className="mb-10 flex items-baseline gap-2">
                <span className="text-7xl font-black text-white italic tracking-tighter leading-none">$4,950</span>
                <span className="text-zinc-600 font-mono text-sm">/MO</span>
              </div>

              {/* Features HUD */}
              <div className="space-y-5 mb-12">
                {[
                  "Unlimited Architecture Revisions",
                  "Direct Signal / Slack Channel",
                  "Next.js 15 + Server Actions",
                  "Agentic AI Integration",
                  "Scale-Ready SEO Logic"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="h-[2px] w-4 bg-yellow-500 transition-all group-hover/item:w-8" />
                    <span className="text-zinc-400 text-sm font-bold uppercase tracking-tight group-hover/item:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className="relative w-full group overflow-hidden bg-white text-black py-5 rounded-xl font-black uppercase tracking-[0.2em] italic text-xs transition-all hover:bg-yellow-500 active:scale-95 z-10">
                <span className="relative z-10">Initiate Protocol</span>
                <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <div className="mt-8 flex flex-col items-center gap-2">
                <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.3em]">Next Cycle: <span className="text-yellow-500">April 2026</span></p>
                <div className="flex gap-1">
                   {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i === 1 ? 'bg-yellow-500 shadow-[0_0_8px_#eab308]' : 'bg-white/10'}`} />)}
                </div>
              </div>

              {/* Data Overlay */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <div className="text-[40px] font-black leading-none">PRC_09</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProcessPricing;