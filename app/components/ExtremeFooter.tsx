"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = [
  {
    label: "Services",
    links: [
      { name: "Developer Services", href: "/services/developer-services" },
      { name: "SEO Engineering", href: "/services/seo-engineering" },
      { name: "SaaS Solutions", href: "/services/saas-solutions" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Technical Support", href: "/services/technical-support" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Expertise", href: "/expertise" },
      { name: "Features", href: "/features" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Social",
    links: [
      { name: "Twitter / X", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Dribbble", href: "#" },
      { name: "Instagram", href: "#" },
    ],
  },
];

export default function ExtremeFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const ctaHeadlineRef = useRef<HTMLHeadingElement>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // CTA headline reveal
      const headline = ctaHeadlineRef.current;
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
            scrollTrigger: {
              trigger: headline,
              start: "top 90%",
            },
          });
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  }

  return (
    <footer ref={footerRef} className="relative bg-[#020202] overflow-hidden border-t border-white/5">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ==================== FINAL CTA SECTION ==================== */}
        <div className="py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center justify-center gap-3"
          >
            <span className="h-[1px] w-8 bg-emerald-500" />
            <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
              Final.Sync // Initialize
            </span>
            <span className="h-[1px] w-8 bg-emerald-500" />
          </motion.div>

          <h2
            ref={ctaHeadlineRef}
            className="text-[clamp(3rem,10vw,8rem)] font-black text-white italic uppercase tracking-tighter leading-[0.8] mb-10"
          >
            Let's Build Something Legendary
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12"
          >
            Every legendary product starts with a single conversation.
            Tell us where you want to go — we'll engineer the path.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative px-12 py-6 bg-white text-black rounded-full font-black uppercase italic text-sm tracking-[0.2em] flex items-center gap-5 overflow-hidden transition-all duration-500 border border-white/10"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Initiate Project
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-10 text-lg group-hover:text-white"
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-yellow-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            </Link>

            <Link
              href="/portfolio"
              className="group relative px-12 py-6 bg-transparent text-white rounded-full font-black uppercase italic text-sm tracking-[0.2em] flex items-center gap-3 border border-white/10 hover:border-white/30 transition-colors duration-500"
            >
              <span className="relative z-10">View Portfolio</span>
              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* ==================== NEWSLETTER + LINKS GRID ==================== */}
        <div className="border-t border-white/5 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Newsletter */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-[2px] bg-emerald-500" />
                <div className="w-2 h-[2px] bg-yellow-500" />
                <div className="w-2 h-[2px] bg-blue-500" />
              </div>
              <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">
                TRUE<span className="text-yellow-500">TEAM</span>
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium max-w-xs">
                Join the protocol. Get engineering insights, growth tactics, and
                case studies delivered to your inbox.
              </p>

              {/* Newsletter input */}
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden transition-colors duration-300 focus-within:border-emerald-500/40">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-transparent px-6 py-4 text-white text-sm font-medium placeholder:text-zinc-600 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group relative px-6 py-4 bg-white text-black font-black uppercase italic text-[11px] tracking-[0.2em] flex items-center gap-2 m-1 rounded-full transition-all duration-500 hover:bg-emerald-500"
                  >
                    <span className="relative z-10">
                      {subscribed ? "Joined ✓" : "Join"}
                    </span>
                    {!subscribed && (
                      <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    )}
                  </button>
                </div>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-2 text-emerald-400 font-mono text-[10px] uppercase tracking-widest font-bold"
                  >
                    // Welcome to the protocol
                  </motion.p>
                )}
              </form>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {FOOTER_LINKS.map((col) => (
                <div key={col.label} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-3 bg-emerald-500" />
                    <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                      {col.label}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group/link flex items-center justify-between text-white text-sm font-black italic uppercase tracking-tighter transition-colors duration-300 hover:text-emerald-400"
                        >
                          <span>{link.name}</span>
                          <div className="w-0 h-[1px] bg-emerald-500 group-hover/link:w-6 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== SYSTEM TELEMETRY BAR ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-y border-white/5 gap-6">
          <div className="flex flex-wrap gap-6 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-black">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>System: Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span>Uptime: 99.99%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              <span>Latency: 0.02ms</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-emerald-500/30" />
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              Next.js_16_Edge_Deployment
            </p>
            <div className="h-[1px] w-12 bg-yellow-500/30" />
          </div>
        </div>

        {/* ==================== BOTTOM BAR ==================== */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-[2px] bg-emerald-500" />
            <div className="w-2 h-[2px] bg-yellow-500" />
            <div className="w-2 h-[2px] bg-blue-500" />
            <span className="ml-4 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.5em] font-black">
              ©2026_TrueTeam_Station_HQ
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-zinc-700 font-mono text-[9px] uppercase tracking-[0.5em] font-black">
            <p className="hover:text-emerald-400 cursor-pointer transition-colors">Privacy_Protocol</p>
            <span className="hidden md:block opacity-20">|</span>
            <p className="hover:text-blue-400 cursor-pointer transition-colors">Terms_of_Service</p>
            <span className="hidden md:block opacity-20">|</span>
            <p className="hover:text-yellow-400 cursor-pointer transition-colors">Cookie_Policy</p>
          </div>
        </div>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </footer>
  );
}
