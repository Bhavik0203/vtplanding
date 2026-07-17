"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Eye, Users, Car, TrendingUp, LayoutPanelLeft, Briefcase } from "lucide-react";

const highlights = [
  { icon: <MapPin />, title: "Prime Commercial Address" },
  { icon: <Star />, title: "High Street Retail" },
  { icon: <Eye />, title: "Excellent Visibility" },
  { icon: <Users />, title: "Large Residential Catchment" },
  { icon: <Car />, title: "Ample Parking" },
  { icon: <TrendingUp />, title: "High Rental Yield" },
  { icon: <LayoutPanelLeft />, title: "Premium Frontage" },
  { icon: <Briefcase />, title: "Investment Opportunity" },
];

export default function ProjectHighlights() {
  return (
    <section id="highlights" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
            Project Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Premium Features for <br />
            <span className="text-gray-500">Maximum Growth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:bg-zinc-800 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#D4F757] mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-200">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
