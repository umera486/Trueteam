"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ intro }: { intro?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  if (intro) return null;

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-10 py-4 ${
          scrolled || menuOpen ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="relative group cursor-pointer z-[120]">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div whileHover={{ scale: 1.02 }} className="relative flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-[900] tracking-[-0.075em] uppercase italic bg-gradient-to-br from-white via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                True<span className="text-white/90 drop-shadow-none not-italic font-black">Team</span>
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse mt-2" />
            </motion.div>
          </Link>

          <div className="hidden md:flex gap-12 text-[11px] font-black uppercase tracking-[0.3em] italic">
            {navLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.href} 
                className={`relative group flex flex-col items-center transition-all duration-500 ${
                  pathname === link.href ? "text-white" : "text-zinc-300 hover:text-blue-400"
                }`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[2px]">
                  {link.name}
                </span>
                <div className="absolute -bottom-2 flex flex-col items-center w-full">
                  <span 
                    className={`h-[1.5px] bg-blue-500 transition-all duration-500 ease-[0.16, 1, 0.3, 1] ${
                      pathname === link.href ? "w-full opacity-100" : "w-0 group-hover:w-8 opacity-0 group-hover:opacity-100"
                    }`} 
                  />
                  <motion.span 
                    initial={false}
                    animate={pathname === link.href ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    className="absolute -bottom-1.5 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/contact" 
              className="group relative px-10 py-5 bg-black text-white rounded-full font-black uppercase italic text-[11px] md:text-xs tracking-[0.2em] flex items-center gap-5 overflow-hidden transition-all duration-500 border border-white/10"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                Get Started
              </span>
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative z-10 text-lg"
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE TRIGGER: Repositioned to Bottom Left Corner */}
      <div className="md:hidden fixed bottom-8 left-8 z-[120]">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-white/20"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            className="fixed inset-0 z-[105] md:hidden bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} onClick={() => setMenuOpen(false)} className="text-4xl font-black text-gray-300 hover:text-blue-400 transition-colors tracking-tighter italic uppercase">
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;