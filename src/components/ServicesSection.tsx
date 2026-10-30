"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { 
  Globe, 
  Database, 
  Building, 
  Smartphone, 
  MessageSquare, 
  TrendingUp, 
  Palette, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Clock, 
  Tag
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, any> = {
    "01": Globe,
    "02": Database,
    "03": Building,
    "04": Smartphone,
    "05": MessageSquare,
    "06": TrendingUp,
    "07": Palette,
    "08": Wrench,
  };

  const categories = [
    { id: "all", label: "All 8 Solutions" },
    { id: "web", label: "Websites & Portals" },
    { id: "crm-erp", label: "CRM & ERP Software" },
    { id: "automation", label: "WhatsApp & AI" },
    { id: "marketing", label: "Ads & Marketing" },
    { id: "branding", label: "Branding & 3D" },
  ];

  const filteredServices = activeCategory === "all"
    ? AGENCY_CONFIG.services
    : AGENCY_CONFIG.services.filter(s => {
        if (activeCategory === "crm-erp") return s.category === "crm-erp";
        return s.category === activeCategory;
      });

  return (
    <section id="solutions" className="py-24 bg-[#141E33] border-t border-[#334155] relative">
      <div className="container-fluid space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
            Complete Digital System for Property Businesses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our 8 Specialized <span className="champagne-gradient-text">PropTech Solutions</span>
          </h2>
          <p className="text-[#E2E8F0] text-base sm:text-lg font-medium leading-relaxed">
            आपकी जरूरत के हिसाब से हर सेवा अलग से उपलब्ध है। कोई छिपा हुआ चार्ज नहीं, पूरा सोर्स कोड और डेटाबेस आपका होगा।
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30"
                  : "bg-[#1E293B] text-slate-200 border border-[#475569] hover:border-amber-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid (Titanium Card Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = categoryIcons[service.number] || Globe;
            const waUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-[#1E293B] border border-[#334155] p-6 sm:p-8 flex flex-col justify-between hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10 transition-all group relative overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-13 h-13 p-3 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-400">
                          SOLUTION {service.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-200 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs font-bold text-amber-300 mt-0.5">
                          {service.hindiTitle}
                        </p>
                      </div>
                    </div>

                    {service.badge && (
                      <span className="shrink-0 text-[11px] font-black px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-normal">
                    {service.tagline}
                  </p>

                  {/* Problem vs Solution Comparison Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#141E33] border border-[#334155] text-xs">
                    <div className="space-y-1.5 p-2 rounded-lg bg-[#271822] border border-rose-900/60">
                      <div className="flex items-center gap-1.5 font-black text-rose-400">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>समस्या (The Problem)</span>
                      </div>
                      <p className="text-rose-200 font-medium leading-relaxed">{service.clientProblem}</p>
                    </div>

                    <div className="space-y-1.5 p-2 rounded-lg bg-[#112920] border border-emerald-900/60">
                      <div className="flex items-center gap-1.5 font-black text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>हमारा समाधान (Our Solution)</span>
                      </div>
                      <p className="text-emerald-100 font-medium leading-relaxed">{service.ourSolution}</p>
                    </div>
                  </div>

                  {/* Sub-categories tags */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Included Modules:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.subCategories.map((sub, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-lg bg-[#141E33] border border-[#475569] text-white font-semibold"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Checklist */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Key Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {service.keyFeatures.slice(0, 6).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[#E2E8F0] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA Area */}
                <div className="pt-6 mt-6 border-t border-[#334155] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-300 uppercase font-bold flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-amber-400" /> Investment Range
                    </div>
                    <div className="text-xl font-black text-amber-400 mt-0.5">
                      {service.priceRange.min} – {service.priceRange.max}
                      <span className="text-xs font-semibold text-slate-300 ml-1">
                        ({service.priceRange.billingType})
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium flex items-center gap-1 mt-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> Delivery: {service.timeline}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-lg shadow-emerald-600/30 transition-all btn-tactile"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Inquire for Solution {service.number}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
