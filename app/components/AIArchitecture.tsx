"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Activity, Database } from 'lucide-react';

const SCENARIO_DATA = {
  protocol: "MINDRIFT_EVAL_v1",
  task_id: "AGENT_LOGISTICS_001",
  status: "DELEGATED_REASONING",
  constraints: {
    dietary: ["Vegan", "Strict Nut-Free"],
    party_size: 5,
    logic_priority: "Safety > Rating > Latency",
  },
  golden_path: [
    "QUERY_AVAILABILITY_FIRST",
    "FILTER_BY_RATING_DYNAMICS",
    "CROSS_REFERENCE_ALLERGY_POLICY",
    "EXECUTE_BOOKING_HANDSHAKE",
    "DISPATCH_INVITATION_LOG"
  ]
};

export default function AIArchitecture() {
  const [activeTab, setActiveTab] = useState('logic');

  return (
    <section className="relative min-h-screen bg-[#020202] py-20 px-6 overflow-hidden">
      
      {/* 1. THE VOID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Subtle Blue Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER AREA: YELLOW & BLUE ACCENTS */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12 border-b border-white/5 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full" />
              <span className="text-yellow-500 font-mono text-[9px] uppercase tracking-[0.5em] font-black">
                System.Status // Active
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
              Agentic <span className="text-blue-500">Lab.</span>
            </h1>
          </div>

          {/* TRI-COLOR STATS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full md:w-auto">
            {[
              { label: "Latency", val: "24ms", color: "text-blue-500" },
              { label: "Logic", val: "Deterministic", color: "text-yellow-500" },
              { label: "Safety", val: "Verified", color: "text-blue-500" }
            ].map((stat, i) => (
              <div key={i} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg">
                <span className="block font-mono text-[7px] text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</span>
                <div className={`font-bold text-[10px] font-mono ${stat.color}`}>{stat.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERFACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* SIDEBAR NAVIGATION */}
          <div className="lg:col-span-3 space-y-4">
             <div className="bg-[#080808] border border-white/5 rounded-2xl p-3 shadow-2xl">
                <nav className="space-y-1">
                  {[
                    { id: 'logic', label: 'Logic Mapping', icon: <Cpu size={14}/> },
                    { id: 'json', label: 'Data Schema', icon: <Database size={14}/> },
                    { id: 'safety', label: 'Safety Index', icon: <ShieldAlert size={14}/> }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-200 ${
                        activeTab === tab.id 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                        : 'text-zinc-500 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </nav>
             </div>
          </div>

          {/* VIEWPORT CONTROLLER */}
          <div className="lg:col-span-9 bg-[#080808] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
            
            {/* TERMINAL TOP BAR */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500/20 border border-blue-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                </div>
                <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
                  Session: {SCENARIO_DATA.task_id}
                </div>
            </div>

            <div className="p-8 min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {activeTab === 'logic' && (
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <h3 className="text-yellow-500 font-mono text-[9px] uppercase tracking-widest font-black">Golden_Path</h3>
                        <div className="space-y-1">
                          {SCENARIO_DATA.golden_path.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-2">
                              <span className="text-blue-500 font-mono text-[9px] font-black">0{idx+1}</span>
                              <span className="text-white text-[10px] font-black uppercase tracking-wider">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* RED-ACCENT FAILURE (Exception to 3-colors for warnings) */}
                      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <h3 className="text-blue-500 font-mono text-[9px] uppercase mb-4 font-black">Anomalies_Found</h3>
                        <ul className="space-y-3">
                          {[
                            { t: "Logic Drift", d: "Constraint bypass on API-1.", c: "text-yellow-500" },
                            { t: "State Error", d: "Memory leak in step 04.", c: "text-yellow-500" }
                          ].map((fail, i) => (
                            <li key={i}>
                              <p className={`text-[10px] font-bold uppercase italic ${fail.c}`}>{fail.t}</p>
                              <p className="text-zinc-500 text-[9px]">{fail.d}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'json' && (
                    <div className="bg-black/60 rounded-xl p-6 font-mono text-[11px] border border-white/5">
                      <pre className="text-blue-400 whitespace-pre-wrap">
                        {JSON.stringify(SCENARIO_DATA, null, 2)}
                      </pre>
                    </div>
                  )}

                  {activeTab === 'safety' && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="text-[100px] font-black italic text-white tracking-tighter">
                        98<span className="text-blue-600 text-4xl">.2</span>
                      </div>
                      <p className="text-yellow-500 font-mono text-[9px] uppercase tracking-[0.6em] mt-4 font-black">Safety_Rating</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}