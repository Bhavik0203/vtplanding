"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

const projects = [
  {
    name: "VTP Monarque",
    location: "Hinjewadi, Pune",
    type: "Premium Retail Spaces",
    image: "/images/vtp1.jpg",
    units: [
      { unit: "Shop 01", area: "920 Sq.Ft.", price: "₹4.00 Cr", details: "Ground Floor | 24 Ft Ceiling" },
      { unit: "Shop 02", area: "1,035 Sq.Ft.", price: "₹4.50 Cr", details: "Ground Floor | 24 Ft Ceiling" }
    ]
  },
  {
    name: "VTP Aethereus High Street",
    location: "Mahalunge, Pune",
    type: "Premium Commercial Retail",
    image: "/images/vtp2.webp",
    units: [
      { unit: "Showroom 14", area: "1,003 Sq.Ft. (Carpet)", price: "₹4.79 Cr", details: "Commercial Block" },
      { unit: "Showroom 03", area: "863 Sq.Ft. (Carpet)", price: "₹3.89 Cr", details: "Upper Ground Floor" },
      { unit: "Showroom 04", area: "918 Sq.Ft. (Carpet)", price: "₹4.08 Cr", details: "Upper Ground Floor" },
      { unit: "Showroom 09", area: "1,021 Sq.Ft. (Carpet)", price: "₹4.57 Cr", details: "Upper Ground Floor" }
    ]
  },
  {
    name: "VTP Sierra Commercial",
    location: "Mahalunge, Pune",
    type: "Premium Retail Shops",
    image: "/images/vtp3.webp",
    units: [
      { unit: "Shop 01", area: "1,030 Sq.Ft. (Carpet)", price: "₹4.89 Cr", details: "Premium Retail" },
      { unit: "Shop 08", area: "529 Sq.Ft. (Carpet)", price: "₹2.53 Cr", details: "Retail / Cafe" },
      { unit: "Shop 10", area: "532 Sq.Ft. (Carpet)", price: "₹2.55 Cr", details: "Retail / Boutique" },
      { unit: "Shop 13", area: "572 Sq.Ft. (Carpet)", price: "₹2.73 Cr", details: "Premium Boutique" },
      { unit: "Shop 14", area: "571 Sq.Ft. (Carpet)", price: "₹2.73 Cr", details: "Retail Outlet" }
    ]
  }
];

export default function FeaturedProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757]">
                Available Inventory
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05]"
            >
              Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Retail Spaces.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-sm leading-relaxed"
          >
            A curated selection of exclusive retail shops and showrooms across Hinjewadi and Mahalunge.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative flex flex-col lg:flex-row w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10"
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-2/5 h-[300px] lg:h-auto overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-8 left-8 z-10">
                  <p className="text-[#D4F757] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
                    {project.location}
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-md">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-300 drop-shadow-md">
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Units Table Section */}
              <div className="w-full lg:w-3/5 p-8 md:p-12">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-xs tracking-widest text-gray-500 uppercase">
                        <th className="pb-4 font-medium">Unit</th>
                        <th className="pb-4 font-medium">Area</th>
                        <th className="pb-4 font-medium hidden sm:table-cell">Details</th>
                        <th className="pb-4 font-medium text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.units.map((unit, uIdx) => (
                        <tr key={uIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200">
                          <td className="py-4 text-sm font-semibold text-white whitespace-nowrap pr-4">{unit.unit}</td>
                          <td className="py-4 text-sm text-gray-300 whitespace-nowrap pr-4">{unit.area}</td>
                          <td className="py-4 text-sm text-gray-400 whitespace-nowrap pr-4 hidden sm:table-cell">{unit.details}</td>
                          <td className="py-4 text-sm font-bold text-[#D4F757] text-right whitespace-nowrap">{unit.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#D4F757] transition-colors">
                    Enquire for {project.name} <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}