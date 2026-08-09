"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Code2,
  Smartphone,
  BarChart3,
  Cpu,
  Layers,
  Zap,
  TerminalSquare,
  Search,
  Server,
  Megaphone,
  LifeBuoy,
} from "lucide-react";

// Types directly for portability, or import from your types file
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string; // Dynamic color accent
}

const SERVICES: Service[] = [
  {
    id: "web-engineering",
    title: "High-Scale Web",
    description: "Fintech-grade architecture built for zero-latency performance and global scale.",
    icon: <Code2 />,
    accent: "from-blue-500"
  },
  {
    id: "mobile-ecosystems",
    title: "Mobile Systems",
    description: "Native-level performance for iOS and Android with cinematic UI/UX motion.",
    icon: <Smartphone />,
    accent: "from-cyan-400"
  },
  {
    id: "ai-integration",
    title: "AI & Automation",
    description: "Deploying custom LLMs and automated workflows to force operational efficiency.",
    icon: <Cpu />,
    accent: "from-yellow-500"
  },
  {
    id: "conversion-design",
    title: "Conversion UI",
    description: "Graphic engineering that captures attention in 0.5s and drives customer action.",
    icon: <Zap />,
    accent: "from-yellow-400"
  },
  {
    id: "brand-architecture",
    title: "Brand Systems",
    description: "Defining elite digital identities for companies ready to dominate their niche.",
    icon: <Layers />,
    accent: "from-blue-600"
  },
  {
    id: "data-intelligence",
    title: "Data Strategy",
    description: "Full-funnel analytics to track every click, scroll, and dollar in real-time.",
    icon: <BarChart3 />,
    accent: "from-indigo-500"
  },
  {
    id: "developer-services",
    title: "Developer Services",
    description: "Elite engineering teams embedded directly into your product velocity.",
    icon: <TerminalSquare />,
    accent: "from-blue-500"
  },
  {
    id: "seo-engineering",
    title: "SEO Engineering",
    description: "Technical SEO that ranks pages through server-side precision and schema logic.",
    icon: <Search />,
    accent: "from-yellow-500"
  },
  {
    id: "saas-solutions",
    title: "SaaS Solutions",
    description: "Multi-tenant SaaS platforms built for scale, billing, and retention.",
    icon: <Server />,
    accent: "from-blue-600"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Conversion-engineered campaigns that compound pipeline through every channel.",
    icon: <Megaphone />,
    accent: "from-yellow-400"
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "24/7 infrastructure support with sub-15-minute response SLAs.",
    icon: <LifeBuoy />,
    accent: "from-cyan-500"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-[#020202] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-yellow-500" />
            <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
              Capabilities.Archive
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter font-sans">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">CORE</span> STACK
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ service }: { service: Service }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/services/${service.id}`} className="block group">
      <motion.div
        onMouseMove={handleMouseMove}
        whileHover={{ y: -5 }}
        className="relative h-full rounded-[2rem] border border-white/5 bg-zinc-900/20 p-8 overflow-hidden transition-all duration-500"
      >
        {/* LIGHT LEAK EFFECT (YELLOW/BLUE) */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.1),
                rgba(234, 179, 8, 0.05),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="space-y-6">
            {/* ICON WITH ACCENT BLUR */}
            <div className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} bg-opacity-10 text-white`}>
               <div className={`absolute inset-0 blur-lg opacity-40 bg-gradient-to-br ${service.accent}`} />
               <div className="relative z-10">{service.icon}</div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white uppercase italic font-sans leading-none">
                {service.title}
              </h3>
              <p className="text-zinc-500 font-sans text-sm leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-yellow-500 font-mono text-[9px] font-bold uppercase tracking-widest">
              Protocol: 0x{service.id.slice(0, 2).toUpperCase()}
            </span>
            <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase italic tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
              VIEW STRATEGY <span className="text-blue-500">→</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ServicesGrid;