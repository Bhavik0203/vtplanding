"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Why invest in these shops?",
    answer: "Located in Pune's fastest-growing IT corridors (Hinjewadi & Mahalunge), these properties offer high capital appreciation, assured footfall from nearby residential catchments, and premium brand visibility."
  },
  {
    question: "What is the expected rental yield?",
    answer: "Commercial spaces in these areas typically command higher rental yields compared to residential properties, making them a lucrative long-term investment."
  },
  {
    question: "Is parking available?",
    answer: "Yes, all our commercial projects come with dedicated and ample parking spaces for both business owners and visiting customers."
  },
  {
    question: "What businesses are suitable?",
    answer: "These spaces are ideal for Restaurants, Cafés, Banks, Pharmacies, Fashion Brands, Furniture Stores, Electronics Stores, and Clinics."
  },
  {
    question: "Are bank loans available?",
    answer: "Yes, our projects are approved by all major nationalized and private banks, offering easy financing options for investors."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4F757] block mb-4">
            FAQ Section
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Frequently Asked <span className="text-gray-500">Questions.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-white/10 rounded-2xl bg-zinc-900/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#D4F757] text-black' : 'bg-white/10 text-white'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
