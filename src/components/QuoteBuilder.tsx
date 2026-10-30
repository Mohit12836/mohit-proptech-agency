"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

export default function QuoteBuilder() {
  const [businessType, setBusinessType] = useState<string>("Property Broker / Consultant");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Real Estate Website Solutions",
    "AI & Official WhatsApp Automation"
  ]);
  const [timeline, setTimeline] = useState<string>("Standard (3 - 5 Days)");

  const businessTypes = [
    { title: "Property Broker / Consultant", desc: "Local dealer, individual agent, or consultant" },
    { title: "Builder & Developer", desc: "Township, plots colony, or high-rise builder" },
    { title: "Real Estate Agency", desc: "Firm with 5+ sales agents and multiple projects" },
    { title: "Rental & Commercial", desc: "Leasing agency or commercial high-street retail" },
  ];

  const serviceOptions = [
    { id: "Real Estate Website Solutions", name: "Real Estate Website (10 Themes)", baseMin: 18000, baseMax: 35000, category: "Web" },
    { id: "Real Estate Lead Management CRM", name: "Real Estate Lead CRM (Pipeline)", baseMin: 25000, baseMax: 45000, category: "Software" },
    { id: "Real Estate ERP & Inventory Software", name: "Builder ERP & Inventory System", baseMin: 45000, baseMax: 80000, category: "ERP" },
    { id: "Custom Real Estate Mobile Apps", name: "Android / iOS Mobile App", baseMin: 40000, baseMax: 75000, category: "Mobile" },
    { id: "AI & Official WhatsApp Automation", name: "WhatsApp Cloud API + AI Bot", baseMin: 15000, baseMax: 28000, category: "AI" },
    { id: "Real Estate Digital Ads & Lead Generation", name: "Google & Meta Lead Ads Setup", baseMin: 12000, baseMax: 22000, category: "Ads" },
    { id: "Real Estate Branding & Project Creatives", name: "Project Brochures & 3D Creatives", baseMin: 10000, baseMax: 25000, category: "Design" },
    { id: "Tech Integrations & Annual Support", name: "Cloud Hosting & Priority Support", baseMin: 8000, baseMax: 15000, category: "Infra" },
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  // Calculate live estimate
  const activeItems = serviceOptions.filter((s) => selectedServices.includes(s.id));
  const totalMin = activeItems.reduce((acc, curr) => acc + curr.baseMin, 0);
  const totalMax = activeItems.reduce((acc, curr) => acc + curr.baseMax, 0);

  // WhatsApp pre-formatted string
  const waQuoteText = `Namaste Mohit ji! I used your PropTech Quote Calculator on your website:
🏢 Business Type: ${businessType}
📦 Selected Solutions:
${selectedServices.map((s, idx) => `  ${idx + 1}. ${s}`).join("\n")}
⏱ Timeline Preference: ${timeline}
💰 Estimated Budget: ₹${totalMin.toLocaleString("en-IN")} - ₹${totalMax.toLocaleString("en-IN")}

Please confirm availability and share next steps.`;

  const waUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(waQuoteText)}`;

  return (
    <section id="quote-builder" className="py-24 bg-[#080C14] border-t border-slate-800 relative">
      <div className="container-fluid space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Transparent Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Interactive <span className="gold-gradient-text">Smart Quote Builder</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            अपनी जरूरत के हिसाब से सिस्टम कस्टमाइज़ करें। तुरंत अनुमानित बजट देखें और सीधे WhatsApp पर वन-क्लिक प्रपोज़ल प्राप्त करें।
          </p>
        </div>

        {/* Builder Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Selections (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Business Type */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                STEP 1: आपका बिज़नेस मॉडल क्या है?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {businessTypes.map((bt) => (
                  <button
                    key={bt.title}
                    onClick={() => setBusinessType(bt.title)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      businessType === bt.title
                        ? "bg-slate-900 border-amber-400 ring-1 ring-amber-400/40"
                        : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white">{bt.title}</span>
                      {businessType === bt.title && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">{bt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Services Multi-select */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                STEP 2: आपको कौन-सी सर्विसेज चाहिए? (एक या अधिक चुनें)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const isChecked = selectedServices.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={`p-3.5 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${
                        isChecked
                          ? "bg-slate-900/90 border-emerald-500/70 shadow-sm shadow-emerald-500/10"
                          : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          {opt.category}
                        </div>
                        <div className="font-bold text-xs sm:text-sm text-white mt-0.5">
                          {opt.name}
                        </div>
                        <div className="text-[11px] text-amber-400 font-medium mt-1">
                          ₹{opt.baseMin.toLocaleString("en-IN")} – ₹{opt.baseMax.toLocaleString("en-IN")}
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-1 transition-all ${
                          isChecked
                            ? "bg-emerald-500 border-emerald-400 text-black"
                            : "border-slate-700 bg-slate-900"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="space-y-4">
              <label className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                STEP 3: काम कितने दिनों में लाइव चाहिए?
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  "Standard (3 - 5 Days)",
                  "Express Fast Track (48 Hours)",
                  "Enterprise Planned (10 - 15 Days)"
                ].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      timeline === t
                        ? "bg-amber-400 text-black border-amber-400"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate Box */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border-2 border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" /> Customized Quotation
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  Zero Lock-In
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">Estimated Investment:</div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight mt-1">
                  ₹{totalMin.toLocaleString("en-IN")} – ₹{totalMax.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  * अंतिम कीमत आपकी सटीक कस्टम आवश्यकताओं पर निर्भर करेगी।
                </div>
              </div>

              <div className="space-y-2.5 text-xs border-t border-slate-800 pt-4">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Target Business:</span>
                  <span className="font-bold text-white text-right">{businessType}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Total Solutions Selected:</span>
                  <span className="font-bold text-emerald-400">{selectedServices.length} Modules</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Delivery Target:</span>
                  <span className="font-bold text-white">{timeline}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Source Code:</span>
                  <span className="font-bold text-amber-400">100% Client Ownership</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" /> All Packages Include:
                </div>
                <ul className="space-y-1 text-slate-400 text-[11px]">
                  <li>✓ 1-Year Fast Cloud Hosting & SSL</li>
                  <li>✓ Official WhatsApp Cloud API Integration</li>
                  <li>✓ Full Staff Onboarding & Handover Training</li>
                  <li>✓ Direct WhatsApp Priority Support</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-sm shadow-xl shadow-emerald-500/25 transition-all btn-tactile"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Send This Quote to Mohit on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-slate-500">
                सीधे मोहित पी जैन के साथ 15-मिनट स्ट्रैटेजी कॉल फ्री में बुक करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
