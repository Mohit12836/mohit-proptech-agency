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
    <section id="solutions" className="py-24 bg-[#F7F8F6] border-t border-[#E5E7EB] text-[#182B3C] relative">
      <div className="container-fluid space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12786F]/10 border border-[#12786F]/25 text-[#12786F] text-xs font-bold tracking-wider uppercase">
            Complete Digital System for Property Businesses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182B3C] tracking-tight">
            Our 8 Specialized <span className="text-[#12786F]">PropTech Solutions</span>
          </h2>
          <p className="text-[#526475] text-base sm:text-lg font-normal leading-relaxed">
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
                  ? "bg-[#12786F] text-white shadow-md shadow-[#12786F]/20"
                  : "bg-white text-[#182B3C] border border-[#CBD5E1] hover:border-[#12786F] hover:bg-[#F8FAFC]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid (Pure White Luxury Cards on Ivory Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = categoryIcons[service.number] || Globe;
            const waUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <div
                key={service.id}
                className="luxury-card-light rounded-2xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-13 h-13 p-3 rounded-xl bg-[#12786F]/10 border border-[#12786F]/20 flex items-center justify-center text-[#12786F] group-hover:scale-105 group-hover:bg-[#12786F] group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#C39A61]">
                          SOLUTION {service.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#182B3C] group-hover:text-[#12786F] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs font-bold text-[#C39A61] mt-0.5">
                          {service.hindiTitle}
                        </p>
                      </div>
                    </div>

                    {service.badge && (
                      <span className="shrink-0 text-[11px] font-bold px-3 py-1 rounded-full bg-[#12786F]/10 text-[#12786F] border border-[#12786F]/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-[#526475] leading-relaxed font-normal">
                    {service.tagline}
                  </p>

                  {/* Problem vs Solution Comparison Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <div className="space-y-1.5 p-2.5 rounded-lg bg-[#FFF1F2] border border-[#FECDD3]">
                      <div className="flex items-center gap-1.5 font-bold text-[#9F1239]">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>समस्या (The Problem)</span>
                      </div>
                      <p className="text-[#881337] leading-relaxed">{service.clientProblem}</p>
                    </div>

                    <div className="space-y-1.5 p-2.5 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0]">
                      <div className="flex items-center gap-1.5 font-bold text-[#065F46]">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>हमारा समाधान (Our Solution)</span>
                      </div>
                      <p className="text-[#047857] leading-relaxed">{service.ourSolution}</p>
                    </div>
                  </div>

                  {/* Sub-categories tags */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#182B3C] uppercase tracking-wider">
                      Included Modules:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.subCategories.map((sub, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] text-[#334155] font-semibold"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Checklist */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-[#182B3C] uppercase tracking-wider">
                      Key Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {service.keyFeatures.slice(0, 6).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[#334155] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA Area */}
                <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-[#526475] uppercase font-bold flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#C39A61]" /> Investment Range
                    </div>
                    <div className="text-xl font-black text-[#182B3C] mt-0.5">
                      {service.priceRange.min} – {service.priceRange.max}
                      <span className="text-xs font-semibold text-[#526475] ml-1">
                        ({service.priceRange.billingType})
                      </span>
                    </div>
                    <div className="text-xs text-[#526475] font-medium flex items-center gap-1 mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#12786F]" /> Delivery: {service.timeline}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#12786F] hover:bg-[#0E635C] text-white font-black text-xs shadow-md shadow-[#12786F]/20 transition-all btn-tactile"
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
