"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, Zap, Layers, Calculator, PlayCircle } from "lucide-react";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
    "Hi Mohit, I saw your PropTech agency website and want to discuss digital solutions for my real estate business."
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#14283F] text-white">
      {/* Refined Radial Lighting (Subtle Blue Ambiance - No Rainbow or Neon) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,75,120,0.45)_0%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#1B3E68]/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3554] border border-[#C39A61]/35 text-[#D4AF7A] text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C39A61]" />
            <span>MOHIT P JAIN • REAL ESTATE PROPTECH SPECIALIST</span>
            <span className="w-2 h-2 rounded-full bg-[#12786F] animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18]">
            Everything Your Real Estate Business Needs.{" "}
            <span className="text-[#D4AF7A] block mt-1">One Digital Partner.</span>
          </h1>

          {/* Hindi & English Value Proposition */}
          <p className="text-base sm:text-xl text-[#E2E8F0] max-w-2xl mx-auto leading-relaxed font-normal">
            हम प्रॉपर्टी कारोबार को डिजिटल बनाते हैं — हाई-कन्वर्जन{" "}
            <span className="text-[#D4AF7A] font-semibold">वेबसाइट्स</span>, स्मार्ट{" "}
            <span className="text-[#D4AF7A] font-semibold">CRM</span>, बिल्डर{" "}
            <span className="text-[#D4AF7A] font-semibold">ERP</span>, मोबाइल ऐप और 24/7{" "}
            <span className="text-[#34D399] font-semibold">AI WhatsApp सेल्स ऑटोमेशन</span>।
          </p>

          <p className="text-xs sm:text-sm text-slate-300 font-semibold tracking-wide bg-[#1B3554]/70 border border-white/10 py-1.5 px-4 rounded-lg inline-block">
            Designed specifically for Property Dealers, Brokers, Builders & Township Developers.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-3">
            <a
              href="#quote-builder"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#12786F] hover:bg-[#0E635C] text-white font-black text-sm sm:text-base shadow-xl shadow-[#12786F]/25 transition-all btn-tactile"
            >
              <Calculator className="w-5 h-5 text-white" />
              <span>Instant Price Calculator</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1B3554] hover:bg-[#23456D] border border-white/20 text-white font-extrabold text-sm sm:text-base shadow-md transition-all btn-tactile"
            >
              <MessageSquare className="w-5 h-5 fill-white/20 text-[#34D399]" />
              <span>WhatsApp Mohit Directly</span>
            </a>

            <a
              href="#demos"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#14283F] hover:bg-[#1B3554] border border-white/10 text-slate-200 hover:text-white font-bold text-sm transition-all btn-tactile"
            >
              <PlayCircle className="w-4 h-4 text-[#D4AF7A]" />
              <span>See Software Demos</span>
            </a>
          </div>

          {/* Quick Pillar Bullets (Structured Navy Cards) */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto">
            {AGENCY_CONFIG.heroStats.map((stat, i) => (
              <div
                key={i}
                className="luxury-card-navy p-4 rounded-xl text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#D4AF7A]">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white">{stat.label}</div>
                <div className="text-[10px] text-slate-300 uppercase font-semibold tracking-wider">{stat.suffix}</div>
              </div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-200">
            <span className="flex items-center gap-1.5 bg-[#1B3554]/60 px-3 py-1 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#34D399]" /> 100% Code & Database Ownership
            </span>
            <span className="flex items-center gap-1.5 bg-[#1B3554]/60 px-3 py-1 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-[#D4AF7A]" /> 3-5 Days Turnaround Time
            </span>
            <span className="flex items-center gap-1.5 bg-[#1B3554]/60 px-3 py-1 rounded-full border border-white/10">
              <Layers className="w-4 h-4 text-sky-400" /> Zero Monthly Locked Hostage Fees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
