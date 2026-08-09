"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface BentoItem {
  id: string;
  title: string;
  desc: string;
  size: "lg" | "md" | "sm";
  accent: string;
  placeholder: boolean;
  icon: string;
  metric?: { label: string; val: string };
}

const BENTO_ITEMS: BentoItem[] = [
  {
    id: "velocity",
    title: "Velocity Engine",
    desc: "Ship 3x faster with embedded senior engineering pods. CI/CD, edge deploys, and zero-drag iteration cycles baked in.",
    size: "lg",
    accent: "#2563eb",
    placeholder: true,
    icon: "▲",
    metric: { label: "Ship_Cadence", val: "3x Faster" },
  },
  {
    id: "seo",
    title: "Search Dominance",
    desc: "Server-side rendered, schema-validated, Core Web Vitals flawless.",
    size: "md",
    accent: "#eab308",
    placeholder: false,
    icon: "⌖",
    metric: { label: "Organic_Growth", val: "+312%" },
  },
  {
    id: "saas",
    title: "SaaS Scale",
    desc: "Multi-tenant billing & RBAC infrastructure.",
    size: "sm",
    accent: "#10b981",
    placeholder: false,
    icon: "◇",
    metric: { label: "Tenancy", val: "Multi" },
  },
  {
    id: "conversion",
    title: "Conversion Lab",
    desc: "Attention-capturing interfaces engineered to convert in 0.5 seconds.",
    size: "md",
    accent: "#eab308",
    placeholder: true,
    icon: "⚡",
    metric: { label: "Attention_Capture", val: "0.5s" },
  },
  {
    id: "ai",
    title: "AI Automation",
    desc: "Custom LLM workflows that eliminate operational drag.",
    size: "sm",
    accent: "#2563eb",
    placeholder: false,
    icon: "◉",
    metric: { label: "Efficiency", val: "+340%" },
  },
  {
    id: "support",
    title: "24/7 Infrastructure Shield",
    desc: "Sub-15-minute response SLAs with proactive root-cause elimination. We don't close tickets — we erase them.",
    size: "lg",
    accent: "#10b981",
    placeholder: true,
    icon: "▲",
    metric: { label: "Response_SLA", val: "<15 min" },
  },
];

export default function BentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: (i % 3) * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const sizeClasses: Record<BentoItem["size"], string> = {
    lg: "md:col-span-2 md:row-span-2",
    md: "md:col-span-2",
    sm: "md:col-span-1",
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020202] px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-emerald-500" />
            <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
              Value.Matrix // Bento_Grid
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
            Everything <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-yellow-500">
              In One Engine
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed font-medium">
            Six interlocking capabilities that compound into a single, relentless execution machine.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-4">
          {BENTO_ITEMS.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${sizeClasses[item.size]} group relative rounded-3xl border border-white/5 bg-[#050505] overflow-hidden transition-all duration-500 hover:border-white/15`}
            >
              {/* Placeholder visual area */}
              {item.placeholder && (
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.02)_50%,transparent_60%)]" />
                  {/* Wireframe blocks */}
                  <div className="absolute top-6 right-6 flex gap-1.5">
                    <div className="w-12 h-1.5 rounded-full bg-white/10" />
                    <div className="w-6 h-1.5 rounded-full bg-white/5" />
                  </div>
                  <div className="absolute bottom-1/3 left-6 space-y-2">
                    <div className="w-24 h-2 rounded bg-white/5" />
                    <div className="w-16 h-2 rounded bg-white/5" />
                  </div>
                </div>
              )}

              {/* Hover glow */}
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${item.accent}15, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <span
                      className="text-2xl md:text-3xl font-black italic"
                      style={{ color: item.accent }}
                    >
                      {item.icon}
                    </span>
                    {item.metric && (
                      <div className="text-right">
                        <p className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
                          {item.metric.label}
                        </p>
                        <p
                          className="font-black text-sm italic tracking-tighter"
                          style={{ color: item.accent }}
                        >
                          {item.metric.val}
                        </p>
                      </div>
                    )}
                  </div>
                  <h3
                    className={`font-black text-white uppercase italic tracking-tighter leading-none ${
                      item.size === "lg" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className={`text-zinc-400 leading-relaxed font-medium ${
                    item.size === "lg" ? "text-base md:text-lg max-w-md" : "text-sm"
                  }`}
                >
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ backgroundColor: item.accent }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Link
            href="/features"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-black uppercase italic text-xs tracking-[0.2em] text-white transition-all duration-500 hover:bg-white hover:text-black"
          >
            <span>View Full Feature Set</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
