"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "emerald";
  className?: string;
}

export default function MagneticButton({
  href,
  children,
  variant = "light",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.1 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const maxPull = 20;
    x.set(Math.max(-maxPull, Math.min(maxPull, distX * 0.3)));
    y.set(Math.max(-maxPull, Math.min(maxPull, distY * 0.3)));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const variantStyles: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
    light: "bg-white text-black border-white/10 hover:text-white",
    dark: "bg-black text-white border-white/10 hover:text-white",
    emerald: "bg-emerald-500 text-black border-emerald-400/20 hover:text-white",
  };

  const hoverGradient =
    variant === "emerald"
      ? "from-emerald-700 via-blue-600 to-yellow-600"
      : variant === "dark"
        ? "from-blue-700 via-blue-600 to-emerald-600"
        : "from-blue-700 via-blue-600 to-yellow-600";

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`group relative px-10 py-5 ${variantStyles[variant]} rounded-full font-black uppercase italic text-[11px] md:text-xs tracking-[0.2em] flex items-center gap-5 overflow-hidden transition-colors duration-500 border ${className}`}
    >
      <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
        {children}
      </span>
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="relative z-10 text-lg"
      >
        →
      </motion.span>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${hoverGradient} translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]`}
      />
    </motion.a>
  );
}
