"use client";

import { motion } from "framer-motion";
import { Building2, Award, History, Users2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: <History className="w-5 h-5" />, value: "40+", label: "Years Legacy" },
  { icon: <Building2 className="w-5 h-5" />, value: "Multiple", label: "Delivered Projects" },
  { icon: <Award className="w-5 h-5" />, value: "Trusted", label: "Pune Developer" },
  { icon: <Users2 className="w-5 h-5" />, value: "Premium", label: "Customer Base" },
];

export default function AboutVTP() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 z-10">
              <Image
                src="/images/11.jpeg"
                alt="VTP Realty Legacy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">VTP Realty</p>
                <p className="text-[#D4F757] font-medium tracking-wide uppercase text-sm">Building Excellence</p>
              </div>
            </div>
            
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-[80px] z-0" />
          </motion.div>

          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
              About VTP Realty
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
              A Legacy of <br />
              <span className="text-gray-500">Trust & Quality.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              For over four decades, VTP Realty has been shaping Pune's skyline with landmark commercial and residential projects. Our commitment to quality, timely delivery, and customer satisfaction makes us the most trusted developer in the region.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#D4F757]">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
