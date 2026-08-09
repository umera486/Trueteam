"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import UltimateFooter from "../components/UltimateFooter";
import Linear from "../components/Linear";

// DATA: Your exact wording + Added Unsplash Images & Color logic
const sections = [
  {
    id: "01",
    title: "AI Evaluator",
    tag: "Neural Audit",
    detail: "We integrate proprietary LLM-driven evaluators that audit every UI component for accessibility, conversion-entropy, and brand alignment before a single line of code is merged.",
    metric: "0.02ms Audit Latency",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    accent: "#2563eb", // Blue
    techStack: ["GPT-4o API", "Vector Embeddings", "Deterministic Logic"]
  },
  {
    id: "02",
    title: "Conversion Ops",
    tag: "Revenue_Logic",
    detail: "Design is a math problem. We architect high-performance SaaS funnels using ocular-tracking data to ensure the 'Primary Action' has a 100% visual capture rate within the first 2 seconds.",
    metric: "+42% Conversion Delta",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2000&auto=format&fit=crop",
    accent: "#eab308", // Yellow
    techStack: ["Heatmap Sync", "FSM Routing", "A/B Neural Testing"]
  },
  {
    id: "03",
    title: "Agentic Flow",
    tag: "Interface_03",
    detail: "Moving beyond static buttons. We build Agentic UI environments where the interface morphs in real-time based on the AI agent's current task status and user context.",
    metric: "Real-time State Sync",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
    accent: "#2563eb", // Blue
    techStack: ["WebSockets", "TanStack Query", "Motion Physics"]
  }
];

export default function FeaturesPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="bg-[#030303] h-screen overflow-y-scroll snap-y snap-mandatory selection:bg-blue-600 no-scrollbar overflow-x-hidden text-white">
      
      {/* BACKGROUND BEAUTY LAYERS */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40 hidden md:block"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(37, 99, 235, 0.1), transparent 80%)`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      {/* --- SECTION 1: HERO --- */}
      <section className="min-h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative border-b border-white/5 overflow-hidden bg-[#020202]">
        <div className="absolute left-[8%] top-0 w-[1px] h-full bg-white/5 hidden md:block" />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[1px] w-8 md:w-12 bg-blue-600" />
                  <p className="text-blue-600 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] italic font-bold">
                    AI_Architect // Verified_2026
                  </p>
                </div>

                <h1 className="text-[clamp(2rem,10vw,9rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8] text-white">
                  Design <br /> 
                  <span className="text-zinc-800 relative">
                    Evaluation
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.6, duration: 1 }}
                      className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-1.5 bg-yellow-500/50" 
                    />
                  </span>
                  <span className="text-blue-600">.</span>
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-3 border-l border-white/10 pl-6 md:pl-10">
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide mb-8">
                Scaling business intelligence through deterministic design systems and agentic AI auditors.
              </p>
              <div className="flex gap-10">
                  <div>
                    <p className="text-[9px] font-mono text-zinc-600 uppercase mb-1">Status</p>
                    <p className="text-xl font-black text-blue-500 italic">Live_v8</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-zinc-600 uppercase mb-1">Logic</p>
                    <p className="text-xl font-black text-yellow-500 italic">FSM</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE SECTIONS --- */}
      {sections.map((section, i) => (
        <section key={i} className="min-h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative z-10 border-t border-white/5 py-24 md:py-0">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* CONTENT SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="text-3xl md:text-6xl font-mono text-zinc-900">0{section.id}</span>
                <span className="font-bold uppercase tracking-[0.3em] text-[10px]" style={{ color: section.accent }}>{section.tag}</span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black uppercase italic tracking-tighter mb-6 md:mb-8 leading-none">
                {section.title}
              </h2>
              <p className="text-zinc-500 text-base md:text-xl leading-relaxed max-w-lg mb-8 md:mb-10">
                {section.detail}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {section.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 border border-white/10 bg-white/5 font-mono text-[9px] text-zinc-400 rounded-full uppercase tracking-tighter">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div 
                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl transition-colors group"
                style={{ borderLeft: `4px solid ${section.accent}` }}
              >
                <p className="text-[8px] md:text-[10px] text-zinc-600 uppercase mb-1 tracking-widest font-black">Neural Impact Factor</p>
                <p className="text-xl md:text-2xl font-black text-white italic" style={{ color: section.accent }}>{section.metric}</p>
              </div>
            </motion.div>

            {/* VISUAL SIDE (WITH IMAGES) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              className={`relative aspect-video md:aspect-square lg:aspect-video rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden group shadow-2xl bg-zinc-950`}
            >
              {/* IMAGE: Using the Unsplash URL from data */}
              <motion.img 
                src={section.image} 
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
              />

              <div className="absolute inset-0 bg-black/20 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-1000 z-10" />

              {/* HUD ELEMENTS */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase underline underline-offset-4" style={{ color: section.accent }}>
                      Neural_Link: Active
                    </p>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="relative flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute w-40 h-40 border rounded-full"
                        style={{ borderColor: section.accent }}
                      />
                   </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <motion.div key={i} animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} className="w-1 bg-white" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-white font-black italic uppercase tracking-tighter">Secure_Node</p>
                    <p className="font-mono text-[8px] text-zinc-500">2026_DEPLOY</p>
                  </div>
                </div>
              </div>

              {/* MOUSE GLOW */}
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.1),transparent_80%)] transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </div>
        </section>
      ))}

      {/* --- FOOTER SNAP --- */}
      <section className="h-screen w-full snap-start snap-always flex items-center px-6 md:px-20 relative border-t border-white/5 overflow-hidden bg-yellow-500 text-black">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[1px] w-8 md:w-12 bg-blue-600" />
                  <p className="text-blue-600 font-mono text-[10px] uppercase tracking-[0.4em] italic font-bold">
                    Final_Sync // Phase_Transmission
                  </p>
                </div>

                <h1 className="text-[clamp(3rem,11vw,17rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8] text-black">
                  Elevate <br /> 
                  <span className="text-blue-600 relative">
                    The Standard
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="absolute -bottom-2 left-0 h-1 md:h-2 bg-yellow-500" 
                    />
                  </span>
                  <span className="text-blue-600">.</span>
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col gap-8 border-l border-black/10 pl-6 md:pl-10 mb-4 md:mb-10">
                <p className="text-black text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                  Ready to transition from theoretical logic to deployed architecture? Let&apos;s initialize the protocol.
                </p>
                <button className="group relative w-full overflow-hidden bg-black text-white px-8 py-6 rounded-xl transition-all duration-500 hover:bg-blue-600 uppercase font-black italic tracking-tighter text-lg">
                  Initialize Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-blue-600 animate-ping" />
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.3em]">End_Of_Transmission</span>
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      {/* <Linear/> */}
      {/* <UltimateFooter /> */}
    </main>
  );
}