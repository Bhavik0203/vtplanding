"use client";

import { motion } from "framer-motion";
import { Utensils, Building, Pill, Shirt, Sofa, Laptop, Coffee, Stethoscope } from "lucide-react";

const idealBusinesses = [
  { icon: <Utensils />, title: "Restaurants & Cafés" },
  { icon: <Building />, title: "Banks" },
  { icon: <Pill />, title: "Pharmacy" },
  { icon: <Shirt />, title: "Fashion Brands" },
  { icon: <Sofa />, title: "Furniture Stores" },
  { icon: <Laptop />, title: "Electronics Stores" },
  { icon: <Coffee />, title: "Coffee Chains" },
  { icon: <Stethoscope />, title: "Clinics" },
];

export default function IdealFor() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
            Ideal For
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Tailored for <span className="text-gray-500">Top Brands.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {idealBusinesses.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5 hover:bg-zinc-900 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-200 text-center">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
