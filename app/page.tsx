"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/Intro"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Linear from "./components/Linear";
import VideoFeatureSection from "./components/VideoFeatureSection";
import FloatingProjectGrid from "./components/FloatingProjectGrid";
import UIOptimizer from "./components/UIOptimizer";
import GravityPortal from "./components/GravityPortal";
import ProcessPricing from "./components/ProcessPricing";
import ServicesGrid from "./components/ServicesGrid";
import AIArchitecture from "./components/AIArchitecture";
import CapabilityMatrix from "./components/CapabilityMatrix";
import InfiniteMarquee from "./components/InfiniteMarquee";
import BentoGrid from "./components/BentoGrid";
import HoverRevealCards from "./components/HoverRevealCards";
import ParallaxAtmosphere from "./components/ParallaxAtmosphere";
import ExtremeFooter from "./components/ExtremeFooter";

export default function Page() {
  const [intro, setIntro] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // New: Keeps Server and Client in sync

  useEffect(() => {
    // 1. Tell React we are now safe on the client side
    setIsMounted(true);

    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setIntro(true);
      const timer = setTimeout(() => {
        setIntro(false);
        setContentVisible(true);
        sessionStorage.setItem("hasSeenIntro", "true");
      }, 3500); 
      return () => clearTimeout(timer);
    } else {
      // 2. User has been here before, skip straight to content
      setContentVisible(true);
    }

    // Initialize AOS
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  // 3. IMPORTANT: If not mounted, render a black screen to match the Server's output.
  // This prevents the "Hydration Mismatch" error.
  if (!isMounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Splash Screen logic */}
      <AnimatePresence mode="wait">
        {intro && <Intro show={intro} key="splash" />}
      </AnimatePresence>

      {/* Main Content Layout */}
      <div 
        className="transition-opacity duration-700"
        style={{ 
          opacity: contentVisible ? 1 : 0,
          visibility: contentVisible ? "visible" : "hidden",
          pointerEvents: contentVisible ? "auto" : "none" 
        }}
      >
        <Navbar />
        <ParallaxAtmosphere />
        <Hero />
        <InfiniteMarquee />
        <ServicesGrid />
        <BentoGrid />
        <CapabilityMatrix />
        <AIArchitecture />
        <HoverRevealCards />
        <Linear />
        <VideoFeatureSection />
        <FloatingProjectGrid />
        <UIOptimizer />
        <GravityPortal />
        <ProcessPricing />
        <Linear/>
        <ExtremeFooter />
        
      </div>
      
    </div>
  );
}