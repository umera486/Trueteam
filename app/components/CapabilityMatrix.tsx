"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    id: "developer-services",
    code: "CAP_01",
    title: "Developer Services",
    desc: "Senior full-stack engineers embedded into your product velocity.",
    metrics: [
      { label: "Onboarding", val: "48 hrs" },
      { label: "Seniority", val: "10+ yrs" },
    ],
    accent: "#2563eb",
  },
  {
    id: "seo-engineering",
    code: "CAP_02",
    title: "SEO Engineering",
    desc: "Server-side precision, schema logic, and Core Web Vitals dominance.",
    metrics: [
      { label: "Vitals", val: "100/100" },
      { label: "Growth", val: "+312%" },
    ],
    accent: "#eab308",
  },
  {
    id: "saas-solutions",
    code: "CAP_03",
    title: "SaaS Solutions",
    desc: "Multi-tenant platforms with billing, RBAC, and real-time dashboards.",
    metrics: [
      { label: "Tenancy", val: "Multi" },
      { label: "Billing", val: "Stripe" },
    ],
    accent: "#3b82f6",
  },
  {
    id: "digital-marketing",
    code: "CAP_04",
    title: "Digital Marketing",
    desc: "Full-funnel campaigns engineered to compound pipeline, not vanity.",
    metrics: [
      { label: "ROAS", val: "4.8x" },
      { label: "Channels", val: "Omni" },
    ],
    accent: "#facc15",
  },
  {
    id: "technical-support",
    code: "CAP_05",
    title: "Technical Support",
    desc: "24/7 infrastructure monitoring with sub-15-minute response SLAs.",
    metrics: [
      { label: "Response", val: "<15 min" },
      { label: "Uptime", val: "99.99%" },
    ],
    accent: "#06b6d4",
  },
];

export default function CapabilityMatrix() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Headline: split-letter reveal
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
            delay: wi * 0.06,
            scrollTrigger: {
              trigger: headline,
              start: "top 85%",
            },
          });
          }
        );
      }

      // Rows: staggered horizontal clip reveal
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#020202] px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
              Capability.Matrix // v2
            </span>
          </div>
          <h2
            ref={headlineRef}
            className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none"
          >
            Full Spectrum Execution
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed font-medium">
            Five specialized divisions operating as one synchronized engine —
            from engineering and SEO to SaaS, marketing, and 24/7 support.
          </p>
        </div>

        {/* Capability Rows */}
        <div className="border-t border-white/5">
          {CAPABILITIES.map((cap, i) => (
            <Link
              key={cap.id}
              href={`/services/${cap.id}`}
              className="block group"
            >
              <div
                ref={(el) => { rowRefs.current[i] = el; }}
                className="relative grid grid-cols-12 gap-4 items-center py-8 md:py-10 border-b border-white/5 transition-colors duration-500 group-hover:bg-white/[0.02] px-4 md:px-6 -mx-4 md:-mx-6"
              >
                {/* Code */}
                <div className="col-span-3 md:col-span-2">
                  <span
                    className="font-mono text-[10px] md:text-xs font-black tracking-widest transition-colors duration-300"
                    style={{ color: cap.accent }}
                  >
                    {cap.code}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-9 md:col-span-4">
                  <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-2">
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-4 mt-3 md:mt-0">
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </div>

                {/* Metrics */}
                <div className="col-span-12 md:col-span-2 flex md:justify-end gap-6 mt-3 md:mt-0">
                  {cap.metrics.map((m) => (
                    <div key={m.label} className="text-right">
                      <p className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
                        {m.label}
                      </p>
                      <p
                        className="font-black text-sm italic tracking-tighter transition-colors duration-300 group-hover:text-white"
                        style={{ color: cap.accent }}
                      >
                        {m.val}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover accent line */}
                <div
                  className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  style={{ backgroundColor: cap.accent }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
        >
          <Link
            href="/expertise"
            className="group relative px-10 py-5 bg-white text-black rounded-full font-black uppercase italic text-[11px] md:text-xs tracking-[0.2em] flex items-center gap-5 overflow-hidden transition-all duration-500 border border-white/10"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Explore Expertise
            </span>
            <span className="relative z-10 text-lg group-hover:text-white transition-colors">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
          </Link>
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
            Full Spectrum Deployed // 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
