"use client";

import { motion } from "framer-motion";
import { Users, Building, Home, TrendingUp, CircleDollarSign } from "lucide-react";

const stats = [
  { value: "5+ Lakh", label: "Population Catchment", icon: <Users className="w-8 h-8 text-white" /> },
  { value: "3+ Lakh", label: "IT Professionals Nearby", icon: <Building className="w-8 h-8 text-white" /> },
  { value: "1000s", label: "Residential Units", icon: <Home className="w-8 h-8 text-white" /> },
  { value: "High", label: "Capital Appreciation", icon: <TrendingUp className="w-8 h-8 text-white" /> },
  { value: "Assured", label: "Rental Income", icon: <CircleDollarSign className="w-8 h-8 text-white" /> },
];

export default function WhyInvest() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
            Why Invest?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Unmatched <span className="text-gray-500">Potential.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 text-center bg-zinc-900/50 rounded-3xl border border-white/5 hover:bg-zinc-800 transition-colors"
            >
              <div className="mb-4 bg-white/10 p-3 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400 font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
