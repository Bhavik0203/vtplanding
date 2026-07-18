"use client";

import { motion } from "framer-motion";
import { MapPin, Building, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

const dummyProjects = [
  {
    name: "VTP Altair",
    location: "Kharadi, Pune",
    type: "Premium 2, 3 & 4 BHK",
    image: "/images/vtp1.jpg",
    price: "Starting ₹85 Lacs"
  },
  {
    name: "VTP Bellissimo",
    location: "Hinjewadi, Pune",
    type: "Luxury 1, 2 & 3 BHK",
    image: "/images/vtp2.webp",
    price: "Starting ₹60 Lacs"
  },
  {
    name: "VTP Flamante",
    location: "Kharadi, Pune",
    type: "Ultra-Premium 3 & 4 BHK",
    image: "/images/vtp3.webp",
    price: "Starting ₹1.5 Cr"
  }
];

export default function MoreProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757]">
              Similar Properties
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]"
          >
            More Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Like This.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed"
          >
            Explore our curated collection of premium properties offering similar luxury and convenience across top locations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-xs font-bold tracking-widest text-white uppercase">{project.price}</span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md group-hover:text-[#D4F757] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex flex-col gap-2 mt-3">
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 text-[#D4F757]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <Building className="w-4 h-4 text-[#D4F757]" />
                      <span>{project.type}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-zinc-900">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 group-hover:bg-[#D4F757] group-hover:text-black"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
