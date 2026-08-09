import { Service } from "../types/services";

export const SERVICES_DATA: Service[] = [
  {
    id: "web-engineering", // Matches the Grid ID
    title: "High-Scale Web",
    description: "Fintech-grade architecture built for zero-latency performance.",
    longDesc: "We build high-velocity interfaces that grab attention in 0.5s and guide your customers to the checkout using Next.js 16 and Turbopack.",
    icon: "✦",
    bgImage: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8",
    stats: [
      { label: "Performance", val: "100/100" },
      { label: "Architecture", val: "Server-Side" },
      { label: "Latency", val: "0.02ms" },
      { label: "Stability", val: "99.9%" }
    ]
  },
  {
    id: "mobile-ecosystems", // Matches the Grid ID
    title: "Mobile Systems",
    description: "Native-level performance for iOS and Android with cinematic UI.",
    longDesc: "Expertly crafted mobile applications using React Native and Expo, optimized for the highest possible frame rates and smooth user interactions.",
    icon: "⚙︎",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    stats: [
      { label: "Platform", val: "iOS/Android" },
      { label: "Frame Rate", val: "120 FPS" },
      { label: "Engine", val: "Native" },
      { label: "Deploy", val: "App Store" }
    ]
  },
  {
    id: "ai-integration", // Matches the Grid ID
    title: "AI & Automation",
    description: "Deploying custom LLMs to force operational efficiency.",
    longDesc: "Integrating advanced AI models into your existing workflow to automate repetitive tasks and provide intelligent insights for your business.",
    icon: "◈",
    bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    stats: [
      { label: "Model", val: "Custom LLM" },
      { label: "Efficiency", val: "+85%" },
      { label: "API", val: "Vector" },
      { label: "Processing", val: "Real-time" }
    ]
  },
  {
    id: "conversion-design", // Matches the Grid ID
    title: "Conversion UI",
    description: "Graphic engineering that captures attention in 0.5s.",
    longDesc: "Our design philosophy is rooted in psychological triggers and visual hierarchy, ensuring users stay engaged from the first millisecond.",
    icon: "⚡",
    bgImage: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    stats: [
      { label: "Hook Rate", val: "88%" },
      { label: "Contrast", val: "WCAG AA" },
      { label: "Retention", val: "+40%" },
      { label: "Motion", val: "Framer" }
    ]
  },
  {
    id: "brand-architecture", // Matches the Grid ID
    title: "Brand Systems",
    description: "Defining elite digital identities for global domination.",
    longDesc: "Comprehensive brand guidelines and visual assets that position your company as a market leader in the digital space.",
    icon: "❖",
    bgImage: "https://images.unsplash.com/photo-1614850523296-e8c041df43a6",
    stats: [
      { label: "Identity", val: "Unified" },
      { label: "Scalability", val: "Global" },
      { label: "Format", val: "SVG/Vector" },
      { label: "Assets", val: "Premium" }
    ]
  },
  {
    id: "data-intelligence", // Matches the Grid ID
    title: "Data Strategy",
    description: "Full-funnel analytics to track every click in real-time.",
    longDesc: "We implement advanced tracking systems that turn raw user data into actionable business intelligence and growth strategies.",
    icon: "📈",
    bgImage: "https://images.unsplash.com/photo-1551288049-bbda4833effb",
    stats: [
      { label: "Tracking", val: "Events" },
      { label: "Accuracy", val: "99.9%" },
      { label: "Funnel", val: "Optimized" },
      { label: "ROI", val: "Measured" }
    ]
  },
  {
    id: "developer-services",
    title: "Developer Services",
    description: "Elite engineering teams embedded directly into your product velocity.",
    longDesc: "We deploy senior full-stack engineers directly into your workflow — bridging Next.js, Node, and edge runtimes with type-safe architecture. From codebase audits to greenfield product launches, our developers ship production-grade systems with zero hand-holding.",
    icon: "⟦⟧",
    bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    stats: [
      { label: "Stack", val: "Full-Stack" },
      { label: "Seniority", val: "10+ yrs" },
      { label: "Onboarding", val: "48 hrs" },
      { label: "Delivery", val: "Continuous" }
    ]
  },
  {
    id: "seo-engineering",
    title: "SEO Engineering",
    description: "Technical SEO that ranks pages through server-side precision and schema logic.",
    longDesc: "We engineer search dominance through server-side rendering, structured data schemas, Core Web Vitals optimization, and semantic HTML architecture. Every page is a tactical asset designed to capture organic intent and convert it into pipeline.",
    icon: "⌖",
    bgImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    stats: [
      { label: "Vitals", val: "100/100" },
      { label: "Schema", val: "JSON-LD" },
      { label: "Crawl", val: "Optimized" },
      { label: "Growth", val: "+312%" }
    ]
  },
  {
    id: "saas-solutions",
    title: "SaaS Solutions",
    description: "Multi-tenant SaaS platforms built for scale, billing, and retention.",
    longDesc: "We architect subscription-ready SaaS products with multi-tenant isolation, Stripe billing flows, role-based access control, and real-time dashboards. From MVP to Series A, we build the infrastructure that compound revenue requires.",
    icon: "◇",
    bgImage: "https://images.unsplash.com/photo-1551288049-bbda4833effb",
    stats: [
      { label: "Tenancy", val: "Multi-Tenant" },
      { label: "Billing", val: "Stripe-Ready" },
      { label: "Auth", val: "RBAC" },
      { label: "Scale", val: "Edge" }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Conversion-engineered campaigns that compound pipeline through every channel.",
    longDesc: "We deploy data-driven marketing systems across paid, organic, and lifecycle channels. With full-funnel attribution and creative testing engines, we turn ad spend into measurable revenue — not vanity metrics. Every campaign is a calculated investment.",
    icon: "◉",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab8276cd6",
    stats: [
      { label: "ROAS", val: "4.8x" },
      { label: "Channels", val: "Omnichannel" },
      { label: "Attribution", val: "Full-Funnel" },
      { label: "Testing", val: "Continuous" }
    ]
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "24/7 infrastructure support with sub-15-minute response SLAs.",
    longDesc: "We provide enterprise-grade technical support for production systems — monitoring, incident response, performance triage, and proactive optimization. Our support engineers don't just close tickets; they eliminate the root causes that create them.",
    icon: "▲",
    bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    stats: [
      { label: "Response", val: "<15 min" },
      { label: "Uptime", val: "99.99%" },
      { label: "Monitoring", val: "24/7" },
      { label: "Coverage", val: "Global" }
    ]
  }
];