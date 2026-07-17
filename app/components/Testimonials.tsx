"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Investor <span className="text-gray-500">Feedback.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-3xl border border-white/5 relative"
          >
            <Quote className="text-white/10 w-16 h-16 absolute top-6 right-6" />
            <p className="text-gray-300 text-lg mb-6 relative z-10 leading-relaxed font-light">
              "Investing in VTP Commercial spaces was the best decision for our retail brand. The visibility and footfall are unmatched in Hinjewadi."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10" />
              <div>
                <h4 className="font-bold text-white">Rahul Deshmukh</h4>
                <p className="text-xs text-gray-500">Retail Business Owner</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 p-8 rounded-3xl border border-white/5 relative"
          >
            <Quote className="text-white/10 w-16 h-16 absolute top-6 right-6" />
            <p className="text-gray-300 text-lg mb-6 relative z-10 leading-relaxed font-light">
              "The capital appreciation we've seen in just two years is remarkable. Highly recommend for any serious investor."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4F757]/20" />
              <div>
                <h4 className="font-bold text-white">Priya Sharma</h4>
                <p className="text-xs text-gray-500">Property Investor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
