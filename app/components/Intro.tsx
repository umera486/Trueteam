"use client";

import { motion } from "framer-motion";

export default function Intro({ show }: { show: boolean }) {
  if (!show) return null; // Simple kill-switch

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-[#020202] z-[99999] overflow-hidden pointer-events-none"
    >
      {/* BACKGROUND GLOW */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 z-0"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* TEXT CONTENT - Forced to top with z-50 */}
      <div className="relative z-50 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase italic text-white tracking-tighter">
            True<span className="text-blue-500 not-italic ml-1">Team</span>
          </h1>
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mt-4"
        >
          Digital Excellence
        </motion.p>
      </div>
    </motion.div>
  );
}