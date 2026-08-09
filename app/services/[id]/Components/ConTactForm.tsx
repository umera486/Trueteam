"use client";

import { motion } from "framer-motion";
import { Service } from "../types/services"; // Import your type

export default function ContactForm({ service }: { service?: Service }) {
  return (
    <section className="py-24 px-6 bg-[#020202]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
        
        {/* LEFT SIDE: The "Proof" Description (2/5 columns) */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              {service ? `${service.title} Excellence` : "Global Standards"}
            </h3>
            <h2 className="text-5xl font-black uppercase italic leading-none text-white mb-6">
              Full-Proof <br /> Delivery.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {service 
                ? `Our ${service.title} process is built on ${service.stats[0].val} performance standards. We don't just design; we engineer conversion-ready systems.`
                : "We provide end-to-end digital solutions that scale with your ambition."
              }
            </p>
          </div>

          {/* Bullet Points of Service Quality */}
          <ul className="space-y-4">
            {[
              "100/100 Core Web Vitals Performance",
              "Enterprise-Grade Security Protocols",
              "Seamless Framer Motion Integrations",
              "24-Hour Strategy Turnaround"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-white/70">
                <span className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-500 text-[10px]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: The Form (3/5 columns) */}
        <div className="lg:col-span-3 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all placeholder:text-gray-600" />
                <input type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all placeholder:text-gray-600" />
              </div>

              <div className="relative">
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-gray-400 outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                  <option>{service ? service.title : "Select Service"}</option>
                  <option>Growth Strategy</option>
                  <option>Technical Audit</option>
                </select>
              </div>

              <textarea rows={4} placeholder="Project details & goals..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all placeholder:text-gray-600 resize-none" />

              <motion.button 
                whileHover={{ scale: 1.01, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:bg-blue-500 transition-all"
              >
                Launch Strategy Session
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}