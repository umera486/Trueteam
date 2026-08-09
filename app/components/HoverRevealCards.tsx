"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExpertiseCard {
  id: string;
  index: string;
  title: string;
  category: string;
  desc: string;
  accent: string;
}

const CARDS: ExpertiseCard[] = [
  {
    id: "developer-services",
    index: "01",
    title: "Developer Services",
    category: "Engineering",
    desc: "Senior full-stack pods embedded into your product velocity. Next.js, Node, edge runtimes — production-grade, zero hand-holding.",
    accent: "#2563eb",
  },
  {
    id: "seo-engineering",
    index: "02",
    title: "SEO Engineering",
    category: "Organic Growth",
    desc: "Server-side rendering, structured data schemas, Core Web Vitals perfection. Every page is a tactical search asset.",
    accent: "#eab308",
  },
  {
    id: "saas-solutions",
    index: "03",
    title: "SaaS Solutions",
    category: "Scale Architecture",
    desc: "Multi-tenant isolation, Stripe billing, RBAC, real-time dashboards. From MVP to Series A infrastructure.",
    accent: "#10b981",
  },
  {
    id: "digital-marketing",
    index: "04",
    title: "Digital Marketing",
    category: "Pipeline Engine",
    desc: "Full-funnel attribution and creative testing engines. We turn ad spend into measured revenue, not vanity.",
    accent: "#facc15",
  },
];

export default function HoverRevealCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffectSafe();

  function useLayoutEffectSafe() {
    React.useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        const headline = headlineRef.current;
        if (headline) {
          const text = headline.textContent || "";
          headline.innerHTML = "";
          const words = text.split(" ");
          words.forEach((word, wi) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.style.overflow = "hidden";
            wordSpan.style.verticalAlign = "top";
            const inner = document.createElement("span");
            inner.style.display = "inline-block";
            inner.textContent = word;
            wordSpan.appendChild(inner);
            headline.appendChild(wordSpan);
            if (wi < words.length - 1) {
              headline.appendChild(document.createTextNode(" "));
            }
            gsap.from(inner, {
              yPercent: 120,
              duration: 0.9,
              ease: "power3.out",
              delay: wi * 0.07,
              scrollTrigger: {
                trigger: headline,
                start: "top 85%",
              },
            });
          });
        }
      }, sectionRef);
      return () => ctx.revert();
    }, []);
  }

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020202] px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-emerald-500" />
            <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
              Portfolio.Preview // Hover_To_Reveal
            </span>
          </div>
          <h2
            ref={headlineRef}
            className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none"
          >
            Hover. Reveal. <span className="text-emerald-500">Deploy.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed font-medium">
            Four specialized divisions. Each card reveals the execution layer beneath the surface.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card, i) => (
            <Link
              key={card.id}
              href={`/services/${card.id}`}
              className="block"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="relative h-[280px] md:h-[340px] rounded-3xl border border-white/5 bg-[#050505] overflow-hidden group cursor-pointer transition-all duration-500 hover:border-white/15"
              >
                {/* Placeholder visual background (wireframe) */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
                </div>

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(500px circle at 50% 100%, ${card.accent}15, transparent 70%)`,
                  }}
                />

                {/* Giant ghost number */}
                <span
                  className="absolute -top-6 -right-2 text-[160px] md:text-[200px] font-black italic tracking-tighter leading-none pointer-events-none select-none transition-all duration-700"
                  style={{
                    color: card.accent,
                    opacity: hovered === i ? 0.15 : 0.06,
                  }}
                >
                  {card.index}
                </span>

                {/* Top row: category + status dot */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span
                    className="font-mono text-[10px] font-black tracking-widest uppercase"
                    style={{ color: card.accent }}
                  >
                    {card.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Active</span>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  {/* Title - always visible */}
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-none mb-3 transition-transform duration-500 group-hover:-translate-y-1">
                    {card.title}
                  </h3>

                  {/* Description - reveal on hover */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-4 max-w-md">
                          {card.desc}
                        </p>
                        <div
                          className="flex items-center gap-2 font-black text-xs uppercase italic tracking-[0.2em]"
                          style={{ color: card.accent }}
                        >
                          <span>Explore Division</span>
                          <span className="text-lg">→</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Always-visible hint when not hovered */}
                  <AnimatePresence>
                    {hovered !== i && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-zinc-600 text-xs font-mono uppercase tracking-widest"
                      >
                        // Hover to reveal
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accent bottom line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ backgroundColor: card.accent }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Full expertise link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex items-center gap-6"
        >
          <Link
            href="/expertise"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full font-black uppercase italic text-xs tracking-[0.2em] text-emerald-400 transition-all duration-500 hover:bg-emerald-500 hover:text-black"
          >
            <span>View All Divisions</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-bold">
            05_Divisions // Full_Spectrum
          </span>
        </motion.div>
      </div>
    </section>
  );
}
