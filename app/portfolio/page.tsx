"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import UltimateFooter from "../components/UltimateFooter";

const projects = [
  {
    id: "01",
    title: "Squad Supplys",
    category: "Scalable Manufacturing Platform",
    description: "Engineered a high-scale apparel platform for a global manufacturer. Features custom uniform builders, dynamic inventory systems, and a high-conversion checkout for pro sports teams.",
    link: "https://www.squadsupplys.com/",
    accent: "#3b82f6", // Keeping your blue theme
    type: "Manufacturing",
    logic: "Inventory Hub"
  },
  {
    id: "02",
    title: "Impact Cleaners",
    category: "React.js Booking Engine",
    description: "Engineered a high-performance React.js platform for a UK cleaning service. Features a custom service scheduler, dynamic pricing modules, and a conversion-tuned UI for seamless booking.",
    link: "https://impactcleanerss.co.uk/",
    accent: "#3b82f6",
    type: "SaaS Engine",
    logic: "Booking Logic"
  },
  {
    id: "03",
    title: "Techouse Games",
    category: "Immersive Gaming Hub",
    description: "Designed a high-traffic gaming portal with cinematic UI & dynamic video. Features a custom merch store & zero-latency UX. Built for massive player engagement and high-scale publishing.",
    link: "https://techousegames.com/",
    accent: "#3b82f6",
    type: "Gaming Portal",
    logic: "Zero-Latency"
  }
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#050505] h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar selection:bg-blue-600">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[1px] w-8 md:w-12 bg-blue-500" />
                  <p className="text-blue-500 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] italic">
                    Curated Intelligence // 2024—2026
                  </p>
                </div>

                <h1 className="text-[clamp(3.5rem,15vw,11rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8] text-white">
                  The <br /> 
                  <span className="text-zinc-800 relative">
                    Portfolio
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="flex flex-col gap-8 border-l border-white/10 pl-6 md:pl-10 mb-4 md:mb-10"
              >
                <div className="space-y-4">
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                    A collection of digital tools and service interfaces architected for high-performance business ecosystems.
                  </p>
                </div>

                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Index</p>
                    <p className="text-xl font-black text-white italic">003</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Sector</p>
                    <p className="text-xl font-black text-white italic">B2B/SaaS</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">System_Scanning_Flow</span>
        </div>
      </section>

      {/* --- MAPPED PROJECTS --- */}
      {projects.map((project, i) => (
        <ProjectItem key={i} project={project} index={i} />
      ))}

      {/* --- CONTACT CTA --- */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-center items-center bg-gray-700 text-black text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:100px_100px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-100 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-4 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 animate-pulse">
              Available for Q3 2026
            </span>
            
            <h2 className="text-[clamp(4rem,15vw,12rem)] font-[1000] uppercase italic tracking-[calc(-0.05em)] leading-[0.85] mb-16">
              Let&apos;s Build <br /> 
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-black to-zinc-500">
                The Future.
              </span>
            </h2>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative inline-block group">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <button className="relative px-14 py-8 bg-black text-white rounded-full font-black uppercase italic text-xl tracking-tighter flex items-center gap-6 overflow-hidden transition-all duration-500 group-hover:bg-blue-600">
                <span className="relative z-10">Start Conversation</span>
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="relative z-10 text-2xl"
                >
                  →
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 w-full flex justify-center items-center gap-10 opacity-30 text-[10px] font-mono uppercase tracking-widest">
          <span>London / Remote</span>
          <div className="w-1 h-1 bg-black rounded-full" />
          <span>GMT +0:00</span>
        </div>
      </section>

      {/* <UltimateFooter /> */}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        body { background-color: #050505; }
      `}</style>
    </main>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const clipPath = useTransform(
    smoothProgress,
    [0, 0.45, 0.55, 1],
    [
      "inset(15% 10% 15% 10% rounded 60px)", 
      "inset(0% 0% 0% 0% rounded 0px)", 
      "inset(0% 0% 0% 0% rounded 0px)", 
      "inset(15% 10% 15% 10% rounded 60px)"
    ]
  );

  return (
    <section ref={container} className="h-[150vh] relative z-20">
      <div className="sticky top-0 h-screen w-full overflow-hidden snap-start snap-always flex items-center bg-[#050505]">
        
        <motion.div 
          style={{ clipPath }} 
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_0%_0%,#3b82f6_0%,transparent_50%),radial-gradient(circle_at_100%_100%,#1d4ed8_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#60a5fa_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:60px_60px]" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold italic">
                  {project.category} // V_0{index + 1}
                </span>
              </div>

              <h2 className="text-[clamp(3.5rem,10vw,8rem)] font-[1000] uppercase italic tracking-tighter text-white leading-[0.8] mb-10">
                {project.title}<span className="text-blue-600">.</span>
              </h2>

              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-medium border-l-2 border-blue-500/30 pl-8">
                {project.description}
              </p>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="group relative flex items-center gap-8 overflow-hidden">
                  <div className="absolute -left-4 w-0 h-full bg-blue-600/10 group-hover:w-full transition-all duration-500 ease-out -z-10 rounded-r-full" />
                  <span className="text-white font-black uppercase tracking-[0.2em] text-[11px] md:text-xs italic transition-transform duration-300 group-hover:translate-x-2">
                    Explore Architecture
                  </span>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-blue-500/50 group-hover:scale-125 transition-all duration-500" />
                    <span className="relative w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-transparent group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-[0_0_0_0_rgba(37,99,235,0)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-white text-xl"
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </button>
              </a>
            </motion.div>

            <div className="hidden lg:col-span-5 lg:flex flex-col gap-10 items-end opacity-40">
                <div className="w-48 h-[1px] bg-gradient-to-l from-white to-transparent" />
                <div className="text-right">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Build Type</p>
                    <p className="text-2xl font-black text-white italic uppercase tracking-tighter">{project.type}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">System Core</p>
                    <p className="text-2xl font-black text-white italic uppercase tracking-tighter">{project.logic}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}