"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";

export default function UltimateContact() {
  const containerRef = useRef(null);

  // THREE ADDED COLORS:
  // 1. Emerald (Success/Active): #10b981
  // 2. Indigo (Neural Depth): #6366f1
  // 3. Orange (Warning/Action): #f59e0b

  return (
    <main ref={containerRef} className="bg-[#020202] text-white selection:bg-blue-500 no-scrollbar h-screen overflow-y-auto snap-y snap-mandatory relative">
      <Navbar />

      {/* SECTION 1: THE HANDSHAKE (Responsive Grid) */}
      <section className="min-h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative border-b border-white/5 overflow-hidden py-20 lg:py-0">
        {/* Glowing Neural Core - Indigo/Blue Mix */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/10 blur-[100px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-emerald-900/10 blur-[80px] md:blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center lg:items-end">
            
            {/* LEFT SIDE: MAIN HEADING */}
            <div className="lg:col-span-9 order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[1px] w-8 md:w-12 bg-emerald-500" />
                  <p className="text-emerald-500 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] italic font-bold">
                    Comm_Link // Input_Required
                  </p>
                </div>

                <h1 className="text-[clamp(3rem,12vw,11rem)] font-[1000] uppercase italic tracking-tighter leading-[0.85] md:leading-[0.8] text-white">
                  Start <br /> 
                  <span className="text-zinc-900 relative">
                    Handshake
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-2 bg-indigo-600/30"
                    />
                  </span>
                  <span className="text-emerald-500">.</span>
                </h1>
              </motion.div>
            </div>

            {/* RIGHT SIDE: STATUS LOGS */}
            <div className="lg:col-span-3 order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="flex flex-col gap-6 md:gap-8 border-l border-white/10 pl-6 md:pl-10 mb-4 md:mb-10"
              >
                <div className="space-y-4">
                  <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed font-medium uppercase tracking-widest italic">
                    Establish a direct neural connection for project architecture, consulting, or protocol verification.
                  </p>
                </div>

                <div className="flex gap-8 md:gap-10">
                  <div>
                    <p className="text-[8px] md:text-[9px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Latency</p>
                    <p className="text-lg md:text-xl font-black text-white italic">12ms</p>
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[9px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Protocol</p>
                    <div className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping" />
                       <p className="text-lg md:text-xl font-black text-white italic">SSL_v3</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-20 flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-yellow-500 animate-ping" />
          <span className="text-[8px] md:text-[9px] font-mono text-zinc-800 uppercase tracking-[0.3em]">Awaiting_Signal_Entry</span>
        </div>
      </section>

      {/* SECTION 2: THE NEURAL FORM (Responsive Grid & Scroll Fix) */}
      <section className="min-h-screen w-full snap-start flex items-center px-6 md:px-20 relative overflow-hidden py-24 lg:py-0">
        {/* Subtle Matrix Grid Background */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-0 opacity-[0.03] pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white aspect-square" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
          
          {/* LEFT: THE INPUT TERMINAL */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12 order-1">
            <h3 className="text-3xl md:text-6xl font-[1000] italic uppercase tracking-tighter text-white/90">
                Initialize_ <span className="text-emerald-500 italic">Payload</span>
            </h3>
            
            <form className="space-y-6 md:space-y-8">
              {[
                { id: "01", label: "Identity_Key", type: "text", placeholder: "Name / Organization" },
                { id: "02", label: "Secure_Node", type: "email", placeholder: "email@protocol.xyz" },
                { id: "03", label: "Logic_Stream", type: "textarea", placeholder: "Describe the system requirements..." }
              ].map((field) => (
                <div key={field.id} className="group relative">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[9px] md:text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] group-focus-within:text-emerald-500 transition-colors italic">
                      {field.id} // {field.label}
                    </p>
                  </div>
                  {field.type === "textarea" ? (
                    <textarea 
                      rows={3}
                      placeholder={field.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 text-lg md:text-xl font-bold outline-none focus:border-emerald-500 focus:bg-white/[0.07] transition-all placeholder:text-zinc-800 text-white resize-none shadow-2xl"
                    />
                  ) : (
                    <input 
                      type={field.type} 
                      placeholder={field.placeholder} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 text-lg md:text-xl font-bold outline-none focus:border-emerald-500 focus:bg-white/[0.07] transition-all placeholder:text-zinc-800 text-white shadow-2xl"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 group-focus-within:w-full transition-all duration-700" />
                </div>
              ))}

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center w-full md:w-auto px-10 md:px-20 py-6 md:py-8 bg-emerald-600 text-white rounded-2xl overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 font-black italic uppercase text-lg md:text-xl tracking-tighter">Transmit Signal</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mix-blend-difference" />
              </motion.button>
            </form>
          </div>

          {/* RIGHT: THE DATA NODE */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12 md:space-y-16 order-2">
             <div className="space-y-10 md:space-y-12">
                <div className="group">
                   <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-4 italic">Social_Nodes</h4>
                   <div className="space-y-2 md:space-y-4">
                      {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                        <div key={social} className="flex items-center group/link cursor-pointer">
                           <div className="w-0 group-hover/link:w-6 h-[1px] bg-indigo-500 transition-all duration-300" />
                           <p className="text-3xl md:text-5xl font-black italic text-zinc-800 hover:text-white transition-colors">
                              {social}
                           </p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="relative p-6 md:p-10 bg-white/[0.02] border border-white/5 rounded-[30px] md:rounded-[40px] overflow-hidden group hover:border-indigo-600/50 transition-colors duration-1000">
                   <div className="absolute top-0 right-0 p-4 md:p-6">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                   </div>
                   <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-6 md:mb-8 italic">Global_Handshake</h4>
                   <p className="text-xl md:text-3xl font-black italic text-white mb-2 underline decoration-indigo-600 underline-offset-8 break-all">umera4862@gmail.com</p>
                   <p className="font-mono text-[9px] md:text-[10px] text-zinc-600 tracking-widest uppercase">Lahore_Base_Node // PK</p>
                </div>
             </div>

             <div className="pt-8 md:pt-12 border-t border-white/5 flex justify-between items-center">
                <p className="font-mono text-[8px] text-zinc-700 leading-relaxed uppercase tracking-widest">
                    Encryption: AES-256 <br />
                    Uptime: 99.998%
                </p>
                <div className="text-right">
                   <p className="font-mono text-[9px] md:text-[10px] text-indigo-500 font-bold tracking-tighter">PROJECT_EST_2026</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}