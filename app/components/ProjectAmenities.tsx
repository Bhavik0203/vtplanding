"use client";

import { motion } from "framer-motion";
import { Maximize, ShieldCheck, Camera, TreePine, Building2, ArrowUpCircle, ParkingCircle, Sparkles } from "lucide-react";

const amenities = [
  {
    id: "arch",
    icon: <Building2 className="w-10 h-10" />,
    title: "Modern Architecture",
    desc: "State-of-the-art structural design maximizing aesthetic appeal, natural light, and functional space for premium retail.",
    span: "md:col-span-2 md:row-span-2",
    theme: "dark"
  },
  {
    id: "frontage",
    icon: <Maximize className="w-6 h-6" />,
    title: "Wide Frontage",
    desc: "Expansive display areas ensuring your brand gets maximum visibility from the high street.",
    span: "md:col-span-2 md:row-span-1",
    theme: "light"
  },
  {
    id: "parking",
    icon: <ParkingCircle className="w-7 h-7" />,
    title: "Dedicated Parking",
    desc: "Ample hassle-free parking spaces.",
    span: "md:col-span-1 md:row-span-1",
    theme: "dark"
  },
  {
    id: "security",
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "24x7 Security",
    desc: "Round-the-clock manned safety.",
    span: "md:col-span-1 md:row-span-1",
    theme: "dark"
  },
  {
    id: "landscape",
    icon: <TreePine className="w-8 h-8" />,
    title: "Landscaped Areas",
    desc: "Lush green surroundings creating a serene and premium shopping environment.",
    span: "md:col-span-2 md:row-span-1",
    theme: "dark"
  },
  {
    id: "cctv",
    icon: <Camera className="w-7 h-7" />,
    title: "CCTV Surveillance",
    desc: "Comprehensive monitoring.",
    span: "md:col-span-1 md:row-span-1",
    theme: "dark"
  },
  {
    id: "elevators",
    icon: <ArrowUpCircle className="w-7 h-7" />,
    title: "High-Speed Elevators",
    desc: "Swift vertical transit.",
    span: "md:col-span-1 md:row-span-1",
    theme: "dark"
  },
];

export default function ProjectAmenities() {
  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4F757]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Sparkles className="w-4 h-4 text-[#D4F757]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757]">
                Project Amenities
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight"
            >
              Designed for <br />
              <span className="text-zinc-500">Excellence.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
          {amenities.map((item, idx) => {
            const isLight = item.theme === "light";
            const isLarge = item.id === "arch";
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 ${item.span} ${
                  isLight 
                    ? "bg-[#D4F757] text-black" 
                    : "bg-zinc-900/80 backdrop-blur-xl border border-white/5 hover:border-white/20 text-white"
                }`}
              >
                {/* Decorative background element for large cards */}
                {isLarge && (
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors duration-500" />
                )}

                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    isLight ? "bg-black/10 text-black" : "bg-white/5 text-[#D4F757]"
                  }`}>
                    {item.icon}
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`font-bold mb-2 ${
                      isLarge ? "text-3xl md:text-4xl" : "text-xl"
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      isLight ? "text-black/70 font-medium" : "text-zinc-400"
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
