"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { ExternalLink, CheckCircle2, Sparkles, Layout, Smartphone, ArrowRight } from "lucide-react";

export default function LivePortfolioSection() {
  const themeVariants = [
    { num: 1, name: "Luxury Gold", tag: "Premium Broker" },
    { num: 2, name: "Emerald Green", tag: "Township Developer" },
    { num: 3, name: "Modern Minimal", tag: "Modern Consultant" },
    { num: 4, name: "Dark Obsidian", tag: "High-Rise Luxury" },
    { num: 5, name: "Royal Burgundy", tag: "Elite Estates" },
    { num: 6, name: "Slate Blue", tag: "Corporate Agency" },
    { num: 7, name: "High Contrast", tag: "Fast Conversions" },
    { num: 8, name: "Warm Sandstone", tag: "Residential Plots" },
    { num: 9, name: "Midnight Titanium", tag: "Commercial Retail" },
    { num: 10, name: "Clean Executive", tag: "Investor Portal" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0B1220] border-t border-slate-800 relative">
      <div className="container-fluid space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Live Proven Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Our Live <span className="gold-gradient-text">Real Estate Deployments</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            कागज़ी वादों पर नहीं, लाइव रिजल्ट्स पर भरोसा करें। हमारे द्वारा बनाई और डिप्लॉय की गई लाइव वेबसाइट्स को खुद टेस्ट करें।
          </p>
        </div>

        {/* Live Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: Samriddhi Classic */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                  Flagship Real Estate Broker Portal
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  ● 100% Live
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  Samriddhi Properties – Digital Broker Platform
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  A complete, end-to-end commercial real estate broker portal built with modern Next.js, featuring EMI calculator, colony filtering, verified property badges, and 1-tap WhatsApp site visit booking.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Live System Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Real-Time EMI Calculator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Colony / Road Width Filtering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>WhatsApp 1-Click Site Visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>100% Fluid Mobile Auto-Fit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href="https://samriddhi-property-broker-cxj1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm transition-all btn-tactile shadow-lg shadow-amber-400/20"
              >
                <span>Open Live Broker Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project 2: Samriddhi 10-Theme Master Engine */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xl space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                  PropTech Architecture Breakthrough
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                  10 Unique Themes
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  10-Theme Dynamic Real Estate Design Engine
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  हर प्रॉपर्टी डीलर का टेस्ट अलग होता है। हमने एक ऐसा मास्टर सिस्टम तैयार किया है जिसमें 10 अलग-अलग लेआउट्स और थीम्स (Luxury Gold, Emerald, Minimal, Obsidian, आदि) 1-क्लिक में लाइव स्विच हो जाते हैं।
                </p>
              </div>

              {/* Theme Selector Pills */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Test Any of the 10 Designs Live:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-center">
                  {themeVariants.map((v) => (
                    <a
                      key={v.num}
                      href={`https://samriddhi-property-redesign.vercel.app/?design=${v.num}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-white transition-all text-xs"
                    >
                      <div className="font-bold text-amber-400">Design {v.num}</div>
                      <div className="text-[10px] text-slate-400 truncate">{v.name}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href="https://samriddhi-property-redesign.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-sm transition-all btn-tactile shadow-lg shadow-emerald-500/25"
              >
                <span>Open 10-Theme Master Engine Live</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
