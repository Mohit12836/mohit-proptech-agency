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
    <section id="portfolio" className="py-24 bg-[#F7F8F6] border-t border-[#E5E7EB] text-[#182B3C] relative">
      <div className="container-fluid space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12786F]/10 border border-[#12786F]/25 text-[#12786F] text-xs font-bold tracking-wider uppercase">
            Live Proven Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182B3C] tracking-tight">
            Explore Our Live <span className="text-[#12786F]">Real Estate Deployments</span>
          </h2>
          <p className="text-[#526475] text-base sm:text-lg font-normal leading-relaxed">
            कागज़ी वादों पर नहीं, लाइव रिजल्ट्स पर भरोसा करें। हमारे द्वारा बनाई और डिप्लॉय की गई लाइव वेबसाइट्स को खुद टेस्ट करें।
          </p>
        </div>

        {/* Live Case Studies Cards (Pure White Luxury Cards on Ivory) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: Samriddhi Classic */}
          <div className="luxury-card-light rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#C39A61] uppercase">
                  Flagship Real Estate Broker Portal
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#12786F]/15 text-[#12786F] border border-[#12786F]/25 font-black">
                  ● 100% Live
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#182B3C]">
                  Samriddhi Properties – Digital Broker Platform
                </h3>
                <p className="text-sm sm:text-base text-[#526475] mt-2 leading-relaxed font-normal">
                  A complete, end-to-end commercial real estate broker portal built with modern Next.js, featuring EMI calculator, colony filtering, verified property badges, and 1-tap WhatsApp site visit booking.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-[#182B3C] uppercase tracking-wider">
                  Live System Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>Real-Time EMI Calculator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>Colony / Road Width Filtering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>WhatsApp 1-Click Site Visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0" />
                    <span>100% Fluid Mobile Auto-Fit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <a
                href="https://samriddhi-property-broker-cxj1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#14283F] hover:bg-[#1B3554] text-white font-black text-sm transition-all btn-tactile shadow-md"
              >
                <span>Open Live Broker Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project 2: Samriddhi 10-Theme Master Engine */}
          <div className="luxury-card-light rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#12786F] uppercase">
                  PropTech Architecture Breakthrough
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#C39A61]/15 text-[#C39A61] border border-[#C39A61]/25 font-black">
                  10 Unique Themes
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#182B3C]">
                  10-Theme Dynamic Real Estate Design Engine
                </h3>
                <p className="text-sm sm:text-base text-[#526475] mt-2 leading-relaxed font-normal">
                  हर प्रॉपर्टी डीलर का टेस्ट अलग होता है। हमने एक ऐसा मास्टर सिस्टम तैयार किया है जिसमें 10 अलग-अलग लेआउट्स और थीम्स (Luxury Gold, Emerald, Minimal, Obsidian, आदि) 1-क्लिक में लाइव स्विच हो जाते हैं।
                </p>
              </div>

              {/* Theme Selector Pills */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#182B3C] uppercase tracking-wider">
                  Test Any of the 10 Designs Live:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                  {themeVariants.map((v) => (
                    <a
                      key={v.num}
                      href={`https://samriddhi-property-redesign.vercel.app/?design=${v.num}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#12786F] hover:bg-white text-[#182B3C] transition-all text-xs font-bold"
                    >
                      <div className="text-[#12786F] font-black">Design {v.num}</div>
                      <div className="text-[10px] text-[#526475] truncate mt-0.5">{v.name}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <a
                href="https://samriddhi-property-redesign.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#12786F] hover:bg-[#0E635C] text-white font-black text-sm transition-all btn-tactile shadow-md shadow-[#12786F]/20"
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
