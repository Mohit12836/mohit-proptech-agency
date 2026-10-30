"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, Zap, Layers, Calculator, PlayCircle } from "lucide-react";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
    "Hi Mohit, I saw your PropTech agency website and want to discuss digital solutions for my real estate business."
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#141E33] via-[#0F172A] to-[#0F172A]">
      {/* Studio Lighting Grid & Soft Ambiance (Anti-Blackout) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415518_1px,transparent_1px),linear-gradient(to_bottom,#33415518_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[280px] bg-emerald-500/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B] border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>MOHIT P JAIN • REAL ESTATE PROPTECH SPECIALIST</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18]">
            Everything Your Real Estate Business Needs.{" "}
            <span className="champagne-gradient-text block mt-1">One Digital Partner.</span>
          </h1>

          {/* Hindi & English Value Proposition */}
          <p className="text-base sm:text-xl text-[#E2E8F0] max-w-2xl mx-auto leading-relaxed font-medium">
            हम प्रॉपर्टी कारोबार को डिजिटल बनाते हैं — हाई-कन्वर्जन{" "}
            <span className="text-amber-300 font-bold underline decoration-amber-400/40 underline-offset-4">वेबसाइट्स</span>, स्मार्ट{" "}
            <span className="text-amber-300 font-bold underline decoration-amber-400/40 underline-offset-4">CRM</span>, बिल्डर{" "}
            <span className="text-amber-300 font-bold underline decoration-amber-400/40 underline-offset-4">ERP</span>, मोबाइल ऐप और 24/7{" "}
            <span className="text-emerald-300 font-bold underline decoration-emerald-400/40 underline-offset-4">AI WhatsApp सेल्स ऑटोमेशन</span>।
          </p>

          <p className="text-xs sm:text-sm text-slate-300 font-semibold tracking-wide bg-[#1E293B]/70 border border-[#334155] py-1.5 px-4 rounded-lg inline-block">
            Designed specifically for Property Dealers, Brokers, Builders & Township Developers.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-3">
            <a
              href="#quote-builder"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all btn-tactile"
            >
              <Calculator className="w-5 h-5 text-slate-950" />
              <span>Instant Price Calculator</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-600/25 transition-all btn-tactile"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Mohit Directly</span>
            </a>

            <a
              href="#demos"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#1E293B] hover:bg-[#28354D] border border-[#475569] text-white font-bold text-sm transition-all btn-tactile"
            >
              <PlayCircle className="w-4 h-4 text-amber-400" />
              <span>See Software Demos</span>
            </a>
          </div>

          {/* Quick Pillar Bullets (Titanium Studio Cards) */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto">
            {AGENCY_CONFIG.heroStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#1E293B] border border-[#334155] text-center space-y-1 hover:border-amber-400/60 shadow-md transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white">{stat.label}</div>
                <div className="text-[10px] text-slate-300 uppercase font-semibold tracking-wider">{stat.suffix}</div>
              </div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-200">
            <span className="flex items-center gap-1.5 bg-[#1E293B]/60 px-3 py-1 rounded-full border border-[#334155]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Code & Database Ownership
            </span>
            <span className="flex items-center gap-1.5 bg-[#1E293B]/60 px-3 py-1 rounded-full border border-[#334155]">
              <Zap className="w-4 h-4 text-amber-400" /> 3-5 Days Turnaround Time
            </span>
            <span className="flex items-center gap-1.5 bg-[#1E293B]/60 px-3 py-1 rounded-full border border-[#334155]">
              <Layers className="w-4 h-4 text-sky-400" /> Zero Monthly Locked Hostage Fees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
