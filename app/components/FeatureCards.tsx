"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ActionButton = ({ text, primary }: { text: string; primary?: boolean }) => (
  <button className={`flex w-fit items-center rounded-full p-2 pl-6 group transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl backdrop-blur-md border ${
    primary 
      ? "bg-[#D4F757] border-[#D4F757] text-black hover:bg-white hover:border-white" 
      : "bg-white/10 border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
  }`}>
    <span className="text-sm font-bold tracking-wider uppercase mr-4">
      {text}
    </span>
    <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
      primary ? "bg-black text-[#D4F757] group-hover:bg-black group-hover:text-white" : "bg-white text-black group-hover:bg-black group-hover:text-white"
    }`}>
      <ArrowUpRight className="w-5 h-5" />
    </div>
  </button>
);

export default function FeatureCards() {
  return (
    <section className="relative w-full py-24 bg-[#0a0a0a]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Team / Work With Us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 aspect-[4/3] md:aspect-auto md:min-h-[400px] p-8 md:p-12 flex flex-col justify-between"
        >
          {/* Subtle Abstract Background */}
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-[400px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
              Let's build <br />
              <span className="text-gray-500">something</span><br />
              together.
            </h2>
          </div>

          {/* Button */}
          <div className="relative z-10 mt-12 md:mt-0">
            <ActionButton text="Work With Us" />
          </div>
        </motion.div>

        {/* Card 2: Architecture / Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative overflow-hidden rounded-[2.5rem] bg-[#D4F757] aspect-[4/3] md:aspect-auto md:min-h-[400px] p-8 md:p-12 flex flex-col justify-between"
        >
          {/* Subtle Abstract Background */}
          <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-[400px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.1]">
              Unlock the <br />
              <span className="text-black/50">door to your</span><br />
              future.
            </h2>
          </div>

          {/* Button */}
          <div className="relative z-10 mt-12 md:mt-0">
            <ActionButton text="View Projects" primary />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
