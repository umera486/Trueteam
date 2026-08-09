"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Zap, Shield, Target, Cpu, Globe } from "lucide-react";
import UltimateFooter from "@/app/components/UltimateFooter";
import Linear from "@/app/components/Linear";

export default function ServiceContent({ service }: { service: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use Springs for smoothness without layout thrashing
  const mouseX = useSpring(0, { stiffness: 1000, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 1000, damping: 50 });

  // Map the movement to a percentage or pixel value for the transform
  const translateX = useTransform(mouseX, (val) => `${val}px`);
  const translateY = useTransform(mouseY, (val) => `${val}px`);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    // Use raw values for the spring to handle smoothly
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#020202] text-white font-sans overflow-hidden"
    >
      {/* 1. OPTIMIZED HIGH-PERFORMANCE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Hardware Accelerated Spotlight - Moves the div, doesn't re-render gradient */}
        <motion.div
          style={{
            x: translateX,
            y: translateY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] will-change-transform"
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* NAVIGATION */}
        <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-yellow-500 transition-colors mb-16 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to Terminal
        </Link>

        <div className="grid lg:grid-cols-[1fr_450px] gap-24 items-start">
          <div className="space-y-16">
            <header className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-yellow-500" />
                <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.4em] font-black">
                  System.Deployment // {service.id?.replace('-', '_').toUpperCase()}
                </span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] font-sans">
                {service.title.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-200">
                  {service.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </header>

            <div className="space-y-8">
              <p className="text-zinc-400 text-2xl md:text-3xl max-w-2xl leading-tight font-sans font-medium">
                {service.longDesc || service.description}
              </p>
              
              {/* LIQUID FILL BUTTON */}
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="group relative px-12 py-6 bg-white text-black rounded-full font-black uppercase italic text-xs tracking-[0.2em] inline-flex items-center gap-6 overflow-hidden transition-all duration-500"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    Initiate Deployment
                  </span>
                  <span className="relative z-10 text-xl group-hover:text-white transition-colors">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                </Link>
              </div>
            </div>

            {/* STATS TILES - Reduced complexity for performance */}
            <div className="grid md:grid-cols-2 gap-4">
              {service.stats?.map((stat: any, i: number) => (
                <div 
                  key={i}
                  className="group p-8 bg-zinc-900/20 border border-white/5 rounded-[2rem] relative overflow-hidden transition-colors hover:border-blue-500/40"
                >
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-white font-black italic text-3xl uppercase tracking-tighter">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block sticky top-20">
            <div className="relative bg-[#050505] border border-white/10 rounded-[2.8rem] p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex justify-between items-center mb-12">
                 <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
                 <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.3em]">Hardware.Acceleration.Active</span>
              </div>

              <h3 className="text-white font-black italic uppercase tracking-widest text-lg mb-8">
                Technical <span className="text-blue-500">Blueprint</span>
              </h3>

              <ul className="space-y-8 mb-12">
                {[
                  { t: "Stack", v: "Next.js 16 + Turbopack", icon: <Cpu size={14}/> },
                  { t: "Motion", v: "Framer Motion 12.0", icon: <Zap size={14}/> },
                  { t: "Global", v: "Edge Runtime v8", icon: <Globe size={14}/> },
                  { t: "Safety", v: "Type-Safe Architecture", icon: <Shield size={14}/> }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-yellow-500">{item.icon}</div>
                    <div>
                      <p className="text-zinc-600 font-mono text-[8px] uppercase font-bold tracking-widest">{item.t}</p>
                      <p className="text-zinc-300 font-bold text-sm italic">{item.v}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <Linear/>
      <UltimateFooter />
    </main>
    
  );
}