"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  "Hinjewadi IT Park",
  "Baner",
  "Balewadi High Street",
  "Mumbai-Bangalore Highway",
  "Schools & Hospitals Nearby"
];

export default function LocationAdvantages() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
              Location Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
              Strategically <br />
              <span className="text-gray-500">Positioned.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
              Located at the intersection of Pune's most dynamic neighborhoods, ensuring your business stays at the center of growth.
            </p>
            <div className="flex flex-col gap-4">
              {locations.map((loc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D4F757] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-white font-semibold text-lg">{loc}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 hidden md:block">
            {/* Visual map placeholder or graphic */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              <MapPin className="w-32 h-32 text-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
