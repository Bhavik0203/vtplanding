"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Advanced gradient overlay: darker at bottom and left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
        <Image
          src="/images/banner_new.png"
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated Content Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
          
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-[80px] font-bold text-white tracking-tighter leading-[1.05] mb-6"
          >
            Premium Retail <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Spaces.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-4xl leading-relaxed font-light"
          >
            Discover exclusive ground-floor shops and showrooms at VTP Monarque, Aethereus, and Sierra. Located in the heart of Pune's largest IT Hubs - Hinjewadi & Mahalunge. High footfall, double-height ceilings, and premium frontage for your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#D4F757] text-black text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-full"
            >
              View Properties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full"
            >
              Enquire Now
            </button>
          </motion.div>
        </div>
      </div>


      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}