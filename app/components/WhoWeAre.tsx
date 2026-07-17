"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";

export default function ReimaginedAbout() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const capabilityItems = [
    {
      index: "01",
      title: "Customer Focus & Care",
      tagline: "Prioritizing Relationships",
      content: "We place our customers at the heart of everything we do, offering long-term support and building relationships that continue well beyond possession.",
    },
    {
      index: "02",
      title: "Integrity & Transparency",
      tagline: "Honest Dealings",
      content: "Our operations are built on a foundation of absolute transparency and unwavering integrity, ensuring trust at every step of the journey.",
    },
    {
      index: "03",
      title: "Quality & Innovation",
      tagline: "Superior Construction",
      content: "Driven by a relentless pursuit of quality, we employ superior craftsmanship, innovative planning, and top-tier materials in every project.",
    },
    {
      index: "04",
      title: "Collaborative Excellence",
      tagline: "Shared Passion",
      content: "Founded by experienced professionals, we thrive on collaboration, transforming visionary ideas into remarkable realities.",
    },
  ];

  return (
    <section className="py-28 bg-[#080808] text-white min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Architectural Structural Images */}
          <div className="lg:col-span-5 relative h-[580px] w-full flex items-center">
            {/* Primary Background Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[85%] h-[85%] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              <Image
                src="/images/11.jpeg" 
                alt="Development Planning Layout"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </motion.div>

            {/* Asymmetric Overlay Image Corner */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 bottom-0 w-[45%] h-[45%] rounded-2xl overflow-hidden border-2 border-[#080808] shadow-2xl z-20 hidden sm:block"
            >
              <Image
                src="/images/12.jpeg" // Replace with a secondary angle or detail blueprint shot if preferred
                alt="Architectural Blueprint Zoom"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Tech-Style Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -left-4 top-12 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md px-6 py-4 rounded-2xl z-30 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4F757] flex items-center justify-center">
                <Phone className="w-4 h-4 text-black" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">Site Desk Line</p>
                <p className="text-sm font-bold text-white font-mono">+91 8956067433</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Segment Tabs */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4F757] mb-4 block">
              Core Expertise
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none mb-6">
              Engineered With <br />
              <span className="text-zinc-500">Uncompromised Vision.</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed font-light mb-12 max-w-2xl">
              Founded by four experienced real estate professionals with a shared passion for creating exceptional developments, 4Pillars is driven by a relentless pursuit of quality and innovation. Every project is guided by meticulous planning, customer-centric thinking, and a commitment to transforming visionary ideas into remarkable realities.
            </p>

            {/* Tabbed Interactive System Layout */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch min-h-[280px]">
              
              {/* Left Side: Segment Selection Toggles */}
              <div className="flex flex-row md:flex-col justify-start gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 border-b md:border-b-0 border-zinc-800 md:w-64 shrink-0">
                {capabilityItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-left shrink-0 md:w-full ${
                      activeTab === idx
                        ? "bg-zinc-900 border border-zinc-800 shadow-md text-white"
                        : "hover:bg-zinc-900/40 border border-transparent text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold ${activeTab === idx ? "text-[#D4F757]" : "text-zinc-600"}`}>
                      {item.index}
                    </span>
                    <span className="text-sm font-medium tracking-tight">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right Side: Display Pane Container */}
              <div className="flex-1 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <span className="text-xs uppercase font-mono tracking-widest text-[#D4F757] block mb-2">
                        {capabilityItems[activeTab].tagline}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-4 tracking-tight">
                        {capabilityItems[activeTab].title}
                      </h4>
                      <p className="text-zinc-400 text-[15px] leading-relaxed">
                        {capabilityItems[activeTab].content}
                      </p>
                    </div>

                    {/* Bottom Inline Action Trigger */}
                    <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between group cursor-pointer">
                      <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors">
                        Explore Protocols
                      </span>
                      <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:bg-[#D4F757] group-hover:border-transparent transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}