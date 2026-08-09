"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="bg-black text-white selection:bg-yellow-400 no-scrollbar h-screen overflow-y-auto snap-y snap-mandatory relative">
      <Navbar />
      
      {/* SECTION 1: THE BRAND HERO */}
      <section className="h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative border-b border-white/5 overflow-hidden bg-black">
        {/* YELLOW LIGHT LEAK */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[1px] w-8 md:w-12 bg-yellow-400" />
                  <p className="text-yellow-400 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] italic">
                    Human Hardware // System_Origin_2026
                  </p>
                </div>

                <h1 className="text-[clamp(3.5rem,15vw,11rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8] text-white">
                  The <br /> 
                  <span className="text-zinc-800 relative">
                    Architect
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="absolute -bottom-2 left-0 h-1 md:h-2 bg-yellow-400/30"
                    />
                  </span>
                  <span className="text-yellow-400">.</span>
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="flex flex-col gap-8 border-l border-white/10 pl-6 md:pl-10 mb-4 md:mb-10"
              >
                <div className="space-y-4">
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                    Umer Ali is a high-fidelity software architect specializing in the formal verification of user interfaces and Agentic AI logic.
                  </p>
                </div>

                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Logic</p>
                    <p className="text-xl font-black text-white italic">FSM</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Focus</p>
                    <p className="text-xl font-black text-white italic">AI/UX</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-yellow-400 animate-ping" />
          <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">Core_Identity_Established</span>
        </div>
      </section>

      {/* SECTION 2: THE IDENTITY */}
      <section className="h-screen w-full snap-start flex items-center py-20 px-6 md:px-20 bg-[#050505] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* BLUE RADIAL GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          <motion.div 
            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="lg:col-span-5 relative h-[40vh] md:h-[50vh] lg:h-[70vh] group perspective-1000"
          >
            {/* GLOW FRAME: Blue to Yellow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-yellow-400 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
              <motion.div 
                initial={{ scale: 1.5, clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="h-full w-full"
              >
                {/* --- PICTURE SPACE --- */}
                <Image 
                  src="/your-portrait.jpg" 
                  alt="Umer Ali Portrait"
                  fill
                  priority
                  className="object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </motion.div>
              
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div className="bg-black/80 backdrop-blur-md border border-white/10 text-white px-4 py-2 font-mono text-[10px] italic uppercase tracking-widest rounded-lg">
                  <span className="text-yellow-400 mr-2">●</span> UMER_ALI.EXE
                </div>
                <div className="hidden md:block font-mono text-[8px] text-zinc-500 text-right">
                  LATENCY: 12ms<br/>STATUS: OPTIMIZED
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-16 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest font-bold">System Identity</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-6xl md:text-8xl font-[1000] uppercase italic leading-[0.8] tracking-[calc(-0.06em)]"
              >
                Human <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">Hardware.</span>
              </motion.h2>
            </div>
            
            <p className="text-xl md:text-3xl font-medium leading-tight text-zinc-400 max-w-xl">
              Architecting <span className="text-white italic underline decoration-yellow-400/50 underline-offset-8">deterministic logic</span> for a non-deterministic digital world.
            </p>

            <div className="space-y-8 pt-4">
              {['Systems Architecture', 'LLM Alignment', 'Full-Stack V8'].map((skill, i) => (
                <motion.div 
                  key={skill} 
                  className="group cursor-crosshair"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-mono text-xs md:text-sm font-black uppercase italic tracking-tighter group-hover:text-yellow-400 transition-colors">
                      {skill}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600">L_0{i+1}</span>
                  </div>
                  
                  <div className="h-[1px] w-full bg-zinc-800 relative overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-blue-600" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GLOBAL WORKFLOW */}
      <section className="h-screen w-full snap-start bg-black flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-0 opacity-20">
          {Array.from({ length: 72 }).map((_, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: Math.random() * 0.5 }}
              className="border-[0.5px] border-zinc-900 aspect-square" 
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
              <h2 className="text-6xl md:text-[10vw] font-black uppercase italic leading-none tracking-tighter text-white">
                Global <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">Protocol.</span>
              </h2>
              <p className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase italic px-4">Architecture spans across borders.</p>
          </motion.div>
        </div>

        <div className="absolute top-1/4 left-6 text-yellow-400 font-mono text-[8px] md:text-[10px] animate-pulse">31.52° N, 74.35° E</div>
        <div className="absolute bottom-1/4 right-6 text-blue-500 font-mono text-[8px] md:text-[10px] animate-pulse delay-700">40.71° N, 74.00° W</div>
      </section>

      {/* SECTION 4: CODE DANCE */}
      <section className="h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative border-b border-white/5 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <CodeDancePhysics scrollProgress={scrollYProgress} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[4px] w-8 md:w-12 bg-blue-600" />
                  <p className="text-blue-600 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] italic font-bold">
                    Kernel_Level_Flux // Logic_Stream
                  </p>
                </div>

                <h1 className="text-[clamp(3.5rem,15vw,11rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8] text-white">
                  Code <br /> 
                  <span className="text-zinc-800 relative">
                    In Flux
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="absolute -bottom-2 left-0 h-1 md:h-2 bg-blue-600/20"
                    />
                  </span>
                  <span className="text-blue-600">.</span>
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="flex flex-col gap-8 border-l border-white/10 pl-6 md:pl-10 mb-4 md:mb-10"
              >
                <div className="space-y-4">
                  <p className="text-zinc-100 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                    Real-time synchronization of state and logic. Every line is a heartbeat in the architecture.
                  </p>
                </div>

                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">FPS</p>
                    <p className="text-xl font-black text-white italic">120</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Load</p>
                    <p className="text-xl font-black text-white italic">0.02ms</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-blue-600 animate-ping" />
          <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">Processing_Data_Arrays</span>
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <FooterSection />
    </main>
  );
}

// --- RESPONSIVE COMPONENTS ---

function CodeDancePhysics({ scrollProgress }: { scrollProgress: any }) {
  const yRange = useTransform(scrollProgress, [0.6, 0.95], [800, -800]);
  const rotateRange = useTransform(scrollProgress, [0.6, 1], [0, 15]);

  return (
    <motion.div style={{ y: yRange, rotate: rotateRange }} className="absolute inset-0 flex flex-col gap-10 md:gap-12 opacity-30">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="flex gap-10 md:gap-20 whitespace-nowrap text-yellow-600 font-mono text-3xl md:text-6xl font-black italic uppercase tracking-tighter">
          <span>{"<SYS_INIT />"}</span>
          <span className="text-zinc-800 underline decoration-blue-900 underline-offset-4 md:underline-offset-8">Neural.optimize()</span>
          <span>{"logic = (u) => u.ux"}</span>
          <span className="text-blue-900 opacity-50">DETERMINISTIC_MODE</span>
        </div>
      ))}
    </motion.div>
  );
}

function FooterSection() {
  return (
    <section className="h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative border-t border-white/5 overflow-hidden bg-black text-white">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <span className="h-[1px] w-8 md:w-12 bg-yellow-400" />
                <p className="text-yellow-400 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] italic font-bold">
                  Final_Sync // Initialize_Output
                </p>
              </div>

              <h1 className="text-[clamp(3.5rem,15vw,11rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8]">
                Let&apos;s <br /> 
                <span className="text-zinc-200 relative">
                  Sync
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute -bottom-2 left-0 h-1 md:h-2 bg-yellow-400/20"
                  />
                </span>
                <span className="text-yellow-400">.</span>
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex flex-col gap-8 border-l border-white/10 pl-6 md:pl-10 mb-4 md:mb-10"
            >
              <div className="space-y-4">
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                  Ready to transition from theoretical logic to deployed architecture? Start the handshake.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <button className="group relative w-full overflow-hidden bg-white text-black px-8 py-6 rounded-xl transition-all duration-500 hover:rounded-none">
                  <span className="relative z-10 font-black italic uppercase text-lg tracking-tighter">Initialize Project</span>
                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
                
                <div className="flex justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-zinc-400 uppercase mb-1 tracking-widest">Status</p>
                    <p className="text-sm font-black text-zinc-100 italic">Available</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-mono text-zinc-400 uppercase mb-1 tracking-widest">Zone</p>
                    <p className="text-sm font-black text-zinc-100 italic">GMT+5</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4">
        <div className="w-1 h-1 rounded-full bg-yellow-400 animate-ping" />
        <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.3em]">End_Of_Transmission</span>
      </div>
    </section>
  );
}