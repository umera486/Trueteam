"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Atmospheric background layer with parallax grid + glowing orbs.
 * Place as a fixed/absolute layer behind homepage content.
 */
export default function ParallaxAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax grid drift
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Parallax orbs at different speeds
      const orbs = [
        { el: orb1Ref.current, speed: 0.3 },
        { el: orb2Ref.current, speed: 0.5 },
        { el: orb3Ref.current, speed: 0.2 },
      ];

      orbs.forEach(({ el, speed }) => {
        if (!el) return;
        gsap.to(el, {
          yPercent: -speed * 100,
          x: `+=${speed * 50}`,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid background with parallax */}
      <div
        ref={gridRef}
        className="absolute inset-[-50%] opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Emerald orb */}
      <div
        ref={orb1Ref}
        className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-emerald-600/4 blur-[140px] rounded-full"
      />

      {/* Blue orb */}
      <div
        ref={orb2Ref}
        className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-blue-600/4 blur-[150px] rounded-full"
      />

      {/* Yellow orb */}
      <div
        ref={orb3Ref}
        className="absolute bottom-[20%] left-[50%] w-[350px] h-[350px] bg-yellow-500/3 blur-[120px] rounded-full"
      />
    </div>
  );
}
