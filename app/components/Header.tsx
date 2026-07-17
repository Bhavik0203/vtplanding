"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import EnquireModal from "./EnquireModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
          VTP<span className="text-[#D4F757]">Realty</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Properties</a>
          <a href="#infrastructure" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Highlights</a>
          <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 bg-[#D4F757] cursor-pointer text-black text-sm font-bold rounded-full hover:bg-white transition-colors">Enquire</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col gap-4">
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-gray-700">Properties</a>
          <a href="#infrastructure" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-gray-700">Highlights</a>
          <button onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }} className="inline-block cursor-pointer mt-4 text-center w-full px-6 py-3 bg-[#D4F757] text-black text-sm font-bold rounded-full">Enquire Now</button>
        </div>
      )}
      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
