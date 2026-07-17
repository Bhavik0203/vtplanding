"use client";

import Image from "next/image";
import { useState } from "react";
import EnquireModal from "./EnquireModal";

// Reusable Arrow Icon for the Button
const ArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-black"
  >
    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00371V6H18.0037V17H16.0037V9.41421Z" />
  </svg>
);

export default function HeroContact() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-end py-16 md:py-24 bg-black overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta_v2.png"
          alt="Premium Retail Space CTA Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/90" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Huge Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-white tracking-tighter leading-[1.05] mb-12 md:mb-16">
          Own a Premium Retail <br />
          Space at VTP
        </h1>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* Bottom Bar: Paragraph + Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[#D4F757] font-semibold text-lg tracking-wide uppercase">
              Limited Availability
            </p>
            <p className="text-[16px] md:text-[18px] text-gray-300 font-medium max-w-3xl leading-relaxed">
              Secure your spot in Pune's fastest-growing IT corridors. Call us now at <span className="font-bold text-white">+91 8956067433</span> or click enquire to get a personalized quote.
            </p>
          </div>

          {/* Exact Match "Get A Quote" Button */}
          <button onClick={() => setIsEnquireOpen(true)} className="shrink-0 flex items-center bg-[#E5F750] rounded-full p-1.5 pl-6 group transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg">
            <span className="text-[15px] cursor-pointer font-bold text-black tracking-wide mr-4 uppercase">
              Enquire Now
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors">
              <ArrowUpRight />
            </div>
          </button>

        </div>
      </div>

      <EnquireModal isOpen={isEnquireOpen} onClose={() => setIsEnquireOpen(false)} />
    </section>
  );
}