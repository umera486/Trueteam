"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 100 } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020202] px-6 overflow-hidden">
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1e1b4b_0%,transparent_70%)] opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 max-w-7xl w-full relative z-10"
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-yellow-500" />
            {/* FONT: MONO for technical labels */}
            <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
              Deployment.Ready
            </span>
          </motion.div>

          {/* FONT: SANS-BLACK-ITALIC for the power headline */}
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic font-sans">
            Stop Scrolling. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-200">
              Start Scaling.
            </span>
          </motion.h1>

          {/* FONT: SANS-MEDIUM for readability */}
          <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed font-sans font-medium">
            We build high-velocity interfaces that grab attention in{" "}
            <span className="text-yellow-500 font-mono font-bold text-2xl tracking-tighter italic px-1">
              0.5s
            </span>{" "}
            and guide your customers to the checkout.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <Link 
              href="/contact" 
              className="group relative px-10 py-5 bg-white text-black rounded-full font-black uppercase italic text-[11px] md:text-xs tracking-[0.2em] flex items-center gap-5 overflow-hidden transition-all duration-500 border border-white/10 font-sans"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white transition-transform group-hover:translate-x-1">
                Initiate Project
              </span>
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-10 text-lg group-hover:text-white"
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SECTION: ARCHITECTURAL FONT STYLE */}
        <motion.div 
          variants={itemVariants}
          className="relative flex items-center justify-center pt-10 lg:pt-0"
        >
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute -inset-4 bg-yellow-500/5 blur-[80px] rounded-full animate-pulse" />

            <motion.div 
              whileHover={{ rotateX: 5, rotateY: -5, y: -10 }}
              className="relative h-[85%] w-[90%] bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

              <div className="relative z-10 h-full flex flex-col justify-between font-sans">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    {/* MONO for system data */}
                    <p className="text-yellow-500 font-mono text-[9px] uppercase tracking-[0.3em] font-bold">
                      Protocol // 09.AX
                    </p>
                    <p className="text-white font-black text-xl uppercase italic leading-none">
                      Core.Engine_v2
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                  </div>
                </div>

                <div className="flex items-end justify-center gap-1.5 h-32">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [20, 60, 20] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                      className={`w-2 rounded-full ${i % 3 === 0 ? 'bg-yellow-500/50' : 'bg-blue-500/40'}`}
                    />
                  ))}
                </div>

                <div className="bg-black/60 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                   <div>
                      <p className="text-zinc-500 font-mono text-[8px] uppercase font-black tracking-widest">Growth</p>
                      <p className="text-yellow-500 font-black text-2xl italic tracking-tighter font-sans">+124%</p>
                   </div>
                   <div className="text-right">
                      <p className="text-zinc-500 font-mono text-[8px] uppercase font-black tracking-widest">Uptime</p>
                      <p className="text-white font-black text-xl italic font-sans">99.9%</p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING ACCESSORY CARD */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-4 left-[-5%] z-20 bg-zinc-900/80 backdrop-blur-2xl border border-yellow-500/20 p-6 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4 font-sans">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-black italic">
                   PRO
                </div>
                <div>
                   <p className="text-zinc-500 font-mono text-[8px] uppercase font-bold tracking-widest">Hardware</p>
                   <p className="text-yellow-500 font-black italic uppercase text-xs">Optimized Terminal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;