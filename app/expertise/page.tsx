"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import UltimateFooter from "../components/UltimateFooter";
import Linear from "../components/Linear";

gsap.registerPlugin(ScrollTrigger);

const DIVISIONS = [
  {
    id: "developer-services",
    index: "01",
    title: "Developer Services",
    tagline: "Embedded Engineering",
    desc: "Senior full-stack engineers deploy directly into your product velocity. We bridge Next.js, Node, and edge runtimes with type-safe architecture — shipping production-grade systems with zero hand-holding.",
    deliverables: [
      "Full-stack engineering pods",
      "Codebase audit & remediation",
      "CI/CD pipeline architecture",
      "Edge runtime migration",
    ],
    metric: "48 hr onboarding",
    accent: "#2563eb",
  },
  {
    id: "seo-engineering",
    index: "02",
    title: "SEO Engineering",
    tagline: "Search Dominance",
    desc: "Technical SEO engineered through server-side rendering, structured data schemas, and Core Web Vitals optimization. Every page is a tactical asset designed to capture organic intent and convert it into pipeline.",
    deliverables: [
      "Server-side rendering strategy",
      "JSON-LD structured data",
      "Core Web Vitals tuning",
      "Semantic HTML architecture",
    ],
    metric: "+312% organic growth",
    accent: "#eab308",
  },
  {
    id: "saas-solutions",
    index: "03",
    title: "SaaS Solutions",
    tagline: "Scale Architecture",
    desc: "Subscription-ready SaaS products with multi-tenant isolation, Stripe billing flows, role-based access control, and real-time dashboards. From MVP to Series A, we build the infrastructure compound revenue requires.",
    deliverables: [
      "Multi-tenant data isolation",
      "Stripe subscription billing",
      "Role-based access control",
      "Real-time analytics dashboards",
    ],
    metric: "Edge-ready scale",
    accent: "#3b82f6",
  },
  {
    id: "digital-marketing",
    index: "04",
    title: "Digital Marketing",
    tagline: "Pipeline Engineering",
    desc: "Data-driven marketing systems across paid, organic, and lifecycle channels. With full-funnel attribution and creative testing engines, we turn ad spend into measurable revenue — not vanity metrics.",
    deliverables: [
      "Paid acquisition architecture",
      "Lifecycle email automation",
      "Creative testing engines",
      "Full-funnel attribution",
    ],
    metric: "4.8x ROAS",
    accent: "#facc15",
  },
  {
    id: "technical-support",
    index: "05",
    title: "Technical Support",
    tagline: "Infrastructure Shield",
    desc: "Enterprise-grade support for production systems — monitoring, incident response, performance triage, and proactive optimization. Our engineers don't just close tickets; they eliminate root causes.",
    deliverables: [
      "24/7 infrastructure monitoring",
      "Incident response & triage",
      "Proactive performance tuning",
      "Root-cause elimination",
    ],
    metric: "<15 min response",
    accent: "#06b6d4",
  },
];

export default function ExpertisePage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero headline reveal
      const headline = heroHeadlineRef.current;
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
            duration: 1,
            ease: "power3.out",
            delay: wi * 0.08,
          });
        });
      }

      // Division panels: staggered scroll reveals with horizontal clip
      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        const content = panel.querySelector("[data-panel-content]");
        const number = panel.querySelector("[data-panel-number]");

        gsap.fromTo(
          panel,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
            },
          }
        );

        if (content) {
          gsap.fromTo(
            content,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              delay: 0.15,
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
              },
            }
          );
        }

        if (number) {
          gsap.fromTo(
            number,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 0.1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
              },
            }
          );
        }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-[#020202] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[1px] w-8 md:w-12 bg-yellow-500" />
                  <p className="text-yellow-500 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] italic font-bold">
                    Division_Index // Full_Spectrum_2026
                  </p>
                </div>

                <h1
                  ref={heroHeadlineRef}
                  className="text-[clamp(3rem,11vw,9rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8] text-white"
                >
                  Our Expertise
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
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                  Five specialized divisions operating as one synchronized execution engine.
                </p>
                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Divisions</p>
                    <p className="text-xl font-black text-white italic">005</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-1 tracking-widest">Status</p>
                    <p className="text-xl font-black text-yellow-500 italic">Active</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">Scanning_Divisions</span>
        </div>
      </section>

      {/* DIVISION PANELS */}
      <section className="relative px-6 md:px-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto space-y-6">
          {DIVISIONS.map((div) => (
            <div
              key={div.id}
              ref={(el) => { panelRefs.current[Number(div.index) - 1] = el; }}
              className="relative group bg-[#050505] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-white/15"
            >
              {/* Giant ghost number */}
              <span
                data-panel-number
                className="absolute -top-8 -right-4 md:-right-8 text-[180px] md:text-[260px] font-black italic tracking-tighter leading-none pointer-events-none select-none"
                style={{ color: div.accent, opacity: 0.08 }}
              >
                {div.index}
              </span>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 lg:p-16">
                {/* Left: content */}
                <div data-panel-content className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-[10px] font-black tracking-widest uppercase"
                      style={{ color: div.accent }}
                    >
                      {div.tagline}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.85]">
                    {div.title}
                  </h2>

                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl font-medium">
                    {div.desc}
                  </p>

                  {/* Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {div.deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-zinc-300"
                      >
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px]"
                          style={{ borderColor: `${div.accent}50`, color: div.accent }}
                        >
                          ◆
                        </span>
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <Link
                      href={`/services/${div.id}`}
                      className="group/cta relative inline-flex items-center gap-3 text-sm font-black uppercase italic tracking-[0.2em] transition-colors duration-300"
                      style={{ color: div.accent }}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover/cta:translate-x-1">
                        Explore Division
                      </span>
                      <span className="relative z-10 text-lg">→</span>
                      <div
                        className="absolute left-0 -bottom-1 h-[2px] w-12 transition-all duration-500 group-hover/cta:w-full"
                        style={{ backgroundColor: div.accent }}
                      />
                    </Link>
                  </div>
                </div>

                {/* Right: metric panel */}
                <div className="lg:col-span-5 flex lg:justify-end items-end">
                  <div
                    className="relative w-full lg:w-auto bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 overflow-hidden group-hover:border-white/15 transition-colors duration-700"
                  >
                    <div
                      className="absolute top-0 right-0 p-4"
                    >
                      <div
                        className="w-2 h-2 rounded-full animate-ping"
                        style={{ backgroundColor: div.accent }}
                      />
                    </div>
                    <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-4 italic">
                      Key_Metric
                    </p>
                    <p
                      className="text-3xl md:text-5xl font-black italic tracking-tighter leading-none"
                      style={{ color: div.accent }}
                    >
                      {div.metric}
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                      <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                        Division_{div.index}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest font-bold" style={{ color: div.accent }}>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative min-h-[70vh] flex items-center px-6 md:px-20 py-24 overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/8 blur-[150px] rounded-full translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                  <span className="h-[1px] w-8 md:w-12 bg-yellow-500" />
                  <p className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.4em] italic font-bold">
                    Final_Sync // Initialize_Division
                  </p>
                </div>

                <h2 className="text-[clamp(3rem,11vw,11rem)] font-[1000] uppercase italic tracking-tighter leading-[0.8]">
                  Deploy <br />
                  <span className="text-zinc-700 relative">
                    The Engine
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.6, duration: 1 }}
                      className="absolute -bottom-2 left-0 h-1 md:h-2 bg-yellow-500/30"
                    />
                  </span>
                  <span className="text-blue-500">.</span>
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="flex flex-col gap-8 border-l border-white/10 pl-6 md:pl-10"
              >
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                  Select a division and initiate the protocol. Every engagement starts with a diagnostic audit.
                </p>
                <Link
                  href="/contact"
                  className="group relative w-full overflow-hidden bg-white text-black px-8 py-6 rounded-xl transition-all duration-500 hover:rounded-none"
                >
                  <span className="relative z-10 font-black italic uppercase text-lg tracking-tighter">
                    Initialize Project
                  </span>
                  <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Linear />
      <UltimateFooter />
    </main>
  );
}
