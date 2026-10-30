"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck, Zap, Layers, Calculator, PlayCircle } from "lucide-react";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
    "Hi Mohit, I saw your PropTech agency website and want to discuss digital solutions for my real estate business."
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0B1220] via-[#080C14] to-[#080C14]">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>MOHIT P JAIN • REAL ESTATE PROPTECH SPECIALIST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Everything Your Real Estate Business Needs.{" "}
            <span className="gold-gradient-text block mt-1">One Digital Partner.</span>
          </h1>

          {/* Hindi & English Value Proposition */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            हम प्रॉपर्टी कारोबार को डिजिटल बनाते हैं — हाई-कन्वर्जन{" "}
            <span className="text-amber-300 font-semibold">वेबसाइट्स</span>, स्मार्ट{" "}
            <span className="text-amber-300 font-semibold">CRM</span>, बिल्डर{" "}
            <span className="text-amber-300 font-semibold">ERP</span>, मोबाइल ऐप और 24/7{" "}
            <span className="text-emerald-400 font-semibold">AI WhatsApp सेल्स ऑटोमेशन</span>।
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide">
            Designed specifically for Property Dealers, Brokers, Builders & Township Developers.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <a
              href="#quote-builder"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all btn-tactile"
            >
              <Calculator className="w-5 h-5 text-black" />
              <span>Instant Price Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 font-bold text-sm sm:text-base shadow-lg hover:bg-slate-800 transition-all btn-tactile"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-500/20" />
              <span>WhatsApp Mohit Directly</span>
            </a>

            <a
              href="#demos"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              <PlayCircle className="w-4 h-4 text-amber-400" />
              <span>See Software Demos</span>
            </a>
          </div>

          {/* Quick Pillar Bullets */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {AGENCY_CONFIG.heroStats.map((stat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center space-y-1 hover:border-slate-700 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-black text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-200">{stat.label}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">{stat.suffix}</div>
              </div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Code & Database Ownership
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> 3-5 Days Turnaround Time
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-400" /> Zero Monthly Locked Hostage Fees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
