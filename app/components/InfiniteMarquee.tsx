"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MARQUEE_ITEMS = [
  "FULL-STACK ENGINEERING",
  "SEO DOMINANCE",
  "SAAS ARCHITECTURE",
  "DIGITAL MARKETING",
  "TECHNICAL SUPPORT",
  "CONVERSION DESIGN",
  "AI AUTOMATION",
  "BRAND SYSTEMS",
];

export default function InfiniteMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 md:py-32 bg-[#020202] overflow-hidden border-y border-white/5">
      {/* Ambient emerald glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />

      {/* Label */}
      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-emerald-500" />
          <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
            Service.Stream // Infinite_Loop
          </span>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative z-10 flex whitespace-nowrap">
        <motion.div
          ref={trackRef}
          className="flex shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white/80 px-6 flex items-center gap-6"
            >
              {item}
              <span className="text-emerald-500 text-2xl md:text-4xl">◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
