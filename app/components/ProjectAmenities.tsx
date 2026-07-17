"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Maximize, ShieldCheck, Camera, TreePine, Building2, ArrowUpCircle, ParkingCircle, Sparkles } from "lucide-react";
import { useState } from "react";

const amenities = [
  {
    id: "arch",
    icon: Building2,
    title: "Modern Architecture",
    desc: "State-of-the-art structural design maximizing aesthetic appeal, natural light, and functional space for premium retail.",
  },
  {
    id: "frontage",
    icon: Maximize,
    title: "Wide Frontage",
    desc: "Expansive display areas ensuring your brand gets maximum visibility from the high street.",
  },
  {
    id: "parking",
    icon: ParkingCircle,
    title: "Dedicated Parking",
    desc: "Ample hassle-free parking spaces for your customers.",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "24x7 Security",
    desc: "Round-the-clock manned safety and advanced monitoring.",
  },
  {
    id: "landscape",
    icon: TreePine,
    title: "Landscaped Areas",
    desc: "Lush green surroundings creating a serene and premium shopping environment.",
  },
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV Surveillance",
    desc: "Comprehensive 360-degree monitoring across all common areas.",
  },
  {
    id: "elevators",
    icon: ArrowUpCircle,
    title: "High-Speed Elevators",
    desc: "Swift vertical transit ensuring seamless movement between floors.",
  },
];

export default function ProjectAmenities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className=" text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <Sparkles className="w-5 h-5 text-[#D4F757]" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#D4F757]">
              Project Amenities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
          >
            Designed for <br className="hidden md:block" />
            <span className="text-zinc-600">Excellence.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column: List */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-8 lg:py-12">
            {amenities.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="cursor-pointer group flex items-center gap-6 py-2"
                >
                  <div className={`w-1 transition-all duration-500 rounded-full ${isActive ? 'h-12 bg-[#D4F757]' : 'h-0 bg-transparent group-hover:h-6 group-hover:bg-zinc-700'}`} />
                  <div>
                    <h3 className={`text-2xl md:text-4xl font-bold tracking-tight transition-all duration-500 ${isActive ? 'text-white translate-x-2' : 'text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-1'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Visuals */}
          <div className="lg:w-1/2 relative hidden lg:block">
            <div className="sticky top-32 h-[550px] w-full rounded-[3rem] bg-black border border-white/5 overflow-hidden flex items-center justify-center p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              
              {/* Ambient Glow matching primary color */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none transition-opacity duration-1000">
                <div className="w-[500px] h-[500px] bg-[#D4F757] rounded-full blur-[120px]" />
              </div>
              
              {/* Dynamic Animated Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center text-center h-full justify-center w-full"
                >
                  <div className="mb-12 p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 shadow-2xl backdrop-blur-xl relative group">
                    <div className="absolute inset-0 bg-[#D4F757]/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    {(() => {
                      const Icon = amenities[activeIndex].icon;
                      return <Icon className="w-24 h-24 text-[#D4F757] relative z-10" strokeWidth={1} />;
                    })()}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">
                    {amenities[activeIndex].title}
                  </h4>
                  <p className="text-lg text-zinc-400 max-w-sm leading-relaxed font-light">
                    {amenities[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
          
          {/* Mobile Fallback Visual (Shows below list on small screens) */}
          <div className="lg:hidden mt-8 w-full">
             <div className="h-auto w-full rounded-[2rem] bg-black border border-white/5 p-8 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-[300px] h-[300px] bg-[#D4F757] rounded-full blur-[100px]" />
                </div>
                <div className="mb-8 p-6 rounded-[2rem] bg-zinc-900/50 border border-white/5 shadow-2xl backdrop-blur-xl">
                  {(() => {
                    const Icon = amenities[activeIndex].icon;
                    return <Icon className="w-16 h-16 text-[#D4F757]" strokeWidth={1} />;
                  })()}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {amenities[activeIndex].title}
                </h4>
                <p className="text-base text-zinc-400 leading-relaxed font-light">
                  {amenities[activeIndex].desc}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
