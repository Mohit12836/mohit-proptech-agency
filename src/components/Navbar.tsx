"use client";

import { useState, useEffect } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "8 Solutions", href: "#solutions" },
    { label: "Software Demos", href: "#demos" },
    { label: "Quote Calculator", href: "#quote-builder" },
    { label: "Live Portfolio", href: "#portfolio" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
    "Hi Mohit, I want to discuss digitalizing my real estate business."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#14283F]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-[#14283F]/85 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="container-fluid flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF7A] to-[#C39A61] flex items-center justify-center text-[#14283F] font-black text-xl shadow-md group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-white">
                {AGENCY_CONFIG.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C39A61]/20 text-[#D4AF7A] border border-[#C39A61]/40 font-bold uppercase tracking-wider">
                PropTech
              </span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium tracking-wide hidden sm:block">
              POWERED BY VISMART AI
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-200 hover:text-[#D4AF7A] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direct Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${AGENCY_CONFIG.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1B3554] border border-white/15 text-white text-xs font-bold hover:border-[#C39A61] hover:text-[#D4AF7A] transition-all btn-tactile"
          >
            <Phone className="w-3.5 h-3.5 text-[#C39A61]" />
            <span>{AGENCY_CONFIG.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12786F] hover:bg-[#0E635C] text-white text-xs font-black shadow-md shadow-[#12786F]/30 transition-all btn-tactile"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#1B3554] border border-white/10 text-white hover:text-[#C39A61]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E1B2B] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-100 hover:text-[#D4AF7A] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${AGENCY_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1B3554] border border-white/15 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#C39A61]" />
              <span>Call: {AGENCY_CONFIG.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#12786F] hover:bg-[#0E635C] text-white font-black text-sm shadow-lg shadow-[#12786F]/30"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
