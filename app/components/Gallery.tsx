"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

const galleryImages = [
  { src: "/images/vtp1.jpg", alt: "Exterior Image", category: "Exterior" },
  { src: "/images/vtp2.webp", alt: "Commercial Street View", category: "Street View" },
  { src: "/images/vtp3.webp", alt: "Master Plan", category: "Master Plan" },
  { src: "/images/banner_new.png", alt: "Floor Plan", category: "Floor Plan" },
];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Visualise <span className="text-gray-500">Your Success.</span>
            </h2>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-white/10 hover:bg-white hover:text-black transition-colors rounded-full text-sm font-bold uppercase tracking-wider">
            Request Brochure
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-[#D4F757] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {img.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {img.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
