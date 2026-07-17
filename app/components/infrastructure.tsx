"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, TrendingUp, Users, Target, ArrowRight } from "lucide-react";
import Image from "next/image";

const infraData = [
  {
    id: "01",
    title: "Prime Location",
    tagline: "Hinjewadi & Mahalunge",
    description: "Situated in the heart of Pune's largest IT hubs, ensuring unparalleled connectivity and accessibility.",
    image: "/images/highlight_location.png",
    icon: <MapPin className="w-5 h-5 text-black" />,
  },
  {
    id: "02",
    title: "High Footfall",
    tagline: "Guaranteed Visibility",
    description: "Surrounded by premium residential developments and major IT parks, guaranteeing high daily footfall for your business.",
    image: "/images/highlight_footfall.png",
    icon: <Users className="w-5 h-5 text-black" />,
  },
  {
    id: "03",
    title: "Capital Appreciation",
    tagline: "Strong ROI",
    description: "Excellent appreciation potential with high rental demand from established brands and businesses.",
    image: "/images/highlight_roi.png",
    icon: <TrendingUp className="w-5 h-5 text-black" />,
  },
  {
    id: "04",
    title: "Premium Ecosystem",
    tagline: "Ideal for Top Brands",
    description: "Perfect for restaurants, banks, showrooms, and retail stores with double-height ceilings and premium frontage.",
    image: "/images/highlight_ecosystem.png",
    icon: <Target className="w-5 h-5 text-black" />,
  },
];

export default function Infrastructure() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="infrastructure" className= "py-6 bg-[#060606] text-white min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        {/* Upper Header Layout */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4F757]">
                Investment Highlights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
              Why Invest <br />
              <span className="text-zinc-500">With Us?</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg max-w-sm leading-relaxed">
            Discover the advantages of owning a premium commercial space in Pune's most sought-after locations.
          </p>
        </div>

        {/* Dynamic Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Minimal Interactive Selector Rows */}
          <div className="lg:col-span-6 flex flex-col justify-center divide-y divide-zinc-900">
            {infraData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group relative py-6 md:py-8 cursor-pointer transition-all duration-300 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="flex items-start gap-6">
                      {/* Numeric Badge marker */}
                      <span className={`text-xs font-mono font-bold mt-1.5 transition-colors duration-300 ${isActive ? "text-[#D4F757]" : "text-zinc-700 group-hover:text-zinc-500"}`}>
                        {item.id}
                      </span>
                      
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                          {item.title}
                        </h3>
                        
                        {/* Expandable Meta details on active block state */}
                        <div className={`grid transition-all duration-300 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                          <div className="overflow-hidden">
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Minimalist Floating Action Trigger Arrow */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                      isActive 
                        ? "bg-[#D4F757] border-transparent text-black transform rotate-45" 
                        : "border-zinc-800 text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-400"
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Visual Window Portal */}
          <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-auto h-full rounded-[2.5rem] overflow-hidden border border-zinc-900 bg-zinc-950 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={infraData[activeIndex].image}
                  alt={infraData[activeIndex].title}
                  fill
                  className="object-cover brightness-[0.75]"
                  priority
                />
                
                {/* Visual Depth Gradient Shield */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Embedded floating details badge within the image layout window */}
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-10">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#D4F757] uppercase block mb-1">
                      {infraData[activeIndex].tagline}
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      System Operational
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                    {infraData[activeIndex].icon}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}