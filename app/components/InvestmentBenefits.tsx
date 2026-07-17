"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Assured Rental Demand",
  "Prime Retail Visibility",
  "High Appreciation Potential",
  "Limited Commercial Inventory",
  "Premium Customer Base"
];

export default function InvestmentBenefits() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4F757]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
                Investment Benefits
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
                Why wait to <span className="text-gray-500">multiply your wealth?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Investing in commercial real estate offers higher returns compared to residential properties. Secure a long-term income stream today.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-4 md:gap-6">
                {benefits.slice(0, 3).map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 md:gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="text-[#D4F757] w-5 h-5 md:w-6 md:h-6 shrink-0" />
                    <span className="text-white font-bold text-base md:text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                {benefits.slice(3, 5).map((benefit, idx) => (
                  <motion.div
                    key={idx + 3}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx + 3) * 0.1 }}
                    className="flex items-center gap-3 md:gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="text-[#D4F757] w-5 h-5 md:w-6 md:h-6 shrink-0" />
                    <span className="text-white font-bold text-base md:text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
