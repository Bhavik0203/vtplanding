"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section id="about" className="py-24 bg-zinc-50 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500 mb-4 block"
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Beyond Land. <br />
              Building Legacies.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 mb-6"
            >
              At 4Pillars Developers, we specialize in curating premium villa plots in high-growth corridors. We understand that purchasing land is the first step in crafting your dream home or securing a generational asset.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8"
            >
              Every parcel we develop comes with clear titles, robust infrastructure, and strategic location advantages, ensuring your investment appreciates with time.
            </motion.p>
          </div>

          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-3/4 h-4/5 bg-gray-200 z-10"
            >
              <Image
                src="/philosophy-1.jpg"
                alt="Luxury Villa Construction"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-gray-300 z-20 border-8 border-zinc-50"
            >
              <Image
                src="/philosophy-2.jpg"
                alt="Developed Plot Infrastructure"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}