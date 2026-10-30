"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { 
  Database, 
  Building, 
  MessageSquare, 
  Phone, 
  CheckCircle, 
  Clock, 
  FileText, 
  Send, 
  Calendar, 
  MapPin, 
  DollarSign, 
  UserCheck, 
  Flame, 
  Check, 
  ArrowRight 
} from "lucide-react";

export default function SoftwareSimulators() {
  const [activeTab, setActiveTab] = useState<"crm" | "erp" | "whatsapp">("crm");
  const [selectedUnit, setSelectedUnit] = useState<number>(3);

  // CRM Demo Data
  const crmColumns = [
    {
      title: "New Inquiries",
      count: 3,
      leads: [
        { name: "Rahul Verma", property: "3 BHK Flat, Ring Road", budget: "₹65 Lakh", score: "Hot", time: "10m ago" },
        { name: "Sunil Agrawal", property: "Commercial Shop 400sqft", budget: "₹45 Lakh", score: "Warm", time: "1h ago" },
      ]
    },
    {
      title: "Site Visit Scheduled",
      count: 2,
      leads: [
        { name: "Dr. Ananya Joshi", property: "Luxury Villa, Scheme 140", budget: "₹1.4 Cr", score: "Hot", time: "Tomorrow 11 AM" },
        { name: "Vikas Patel", property: "Plot 1500 sqft, Super Corridor", budget: "₹38 Lakh", score: "Warm", time: "Sunday 4 PM" },
      ]
    },
    {
      title: "Negotiation Stage",
      count: 1,
      leads: [
        { name: "Maheshwari Traders", property: "Warehouse 5000 sqft", budget: "₹85 Lakh", score: "Hot", time: "Offer Under Review" },
      ]
    },
    {
      title: "Deal Closed (Token Paid)",
      count: 1,
      leads: [
        { name: "Prateek Saxena", property: "Row House, Elite Enclave", budget: "₹72 Lakh", score: "Won", time: "Token ₹2L Paid" },
      ]
    }
  ];

  // ERP Unit Inventory Data
  const erpUnits = [
    { id: 101, type: "Plot", size: "1,000 sqft", status: "Available", price: "₹28,00,000", client: "—" },
    { id: 102, type: "Plot", size: "1,200 sqft", status: "Booked", price: "₹33,60,000", client: "Amit Chouhan (Token ₹1.5L)" },
    { id: 103, type: "Plot", size: "1,500 sqft", status: "Available", price: "₹42,00,000", client: "—" },
    { id: 104, type: "Plot", size: "1,200 sqft", status: "Hold", price: "₹33,60,000", client: "Held for Dr. Mathur (24h timer)" },
    { id: 105, type: "Flat 2BHK", size: "1,050 sqft", status: "Booked", price: "₹38,00,000", client: "Rajesh Soni (Bank Loan In-Process)" },
    { id: 106, type: "Flat 3BHK", size: "1,450 sqft", status: "Available", price: "₹52,00,000", client: "—" },
    { id: 107, type: "Flat 3BHK", size: "1,600 sqft", status: "Available", price: "₹58,00,000", client: "—" },
    { id: 108, type: "Commercial", size: "450 sqft", status: "Booked", price: "₹45,00,000", client: "Gupta Medical (Registry Due)" },
  ];

  const currentUnit = erpUnits[selectedUnit];

  return (
    <section id="demos" className="py-24 bg-[#14283F] border-t border-white/10 text-white relative overflow-hidden">
      {/* Subtle Blue Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#12786F]/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-fluid relative z-10 space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12786F]/20 border border-[#12786F]/40 text-[#34D399] text-xs font-bold tracking-wider uppercase">
            Interactive PropTech Interface Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See the Software in Action <span className="text-[#34D399]">Before You Invest</span>
          </h2>
          <p className="text-[#E2E8F0] text-base sm:text-lg font-normal leading-relaxed">
            हम सामान्य बातें नहीं करते — नीचे दिए गए टैब्स पर क्लिक करें और देखें कि आपका CRM, ERP और AI WhatsApp सिस्टम वास्तव में कैसे काम करेगा।
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab("crm")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "crm"
                ? "bg-[#12786F] text-white shadow-lg shadow-[#12786F]/30"
                : "bg-[#1B3554] border border-white/10 text-slate-200 hover:text-white"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>1. Real Estate CRM Lead Board</span>
          </button>

          <button
            onClick={() => setActiveTab("erp")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "erp"
                ? "bg-[#12786F] text-white shadow-lg shadow-[#12786F]/30"
                : "bg-[#1B3554] border border-white/10 text-slate-200 hover:text-white"
            }`}
          >
            <Building className="w-4 h-4" />
            <span>2. Builder & Colony ERP Inventory</span>
          </button>

          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "whatsapp"
                ? "bg-[#12786F] text-white shadow-lg shadow-[#12786F]/30"
                : "bg-[#1B3554] border border-white/10 text-slate-200 hover:text-white"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>3. 24/7 AI WhatsApp Closer</span>
          </button>
        </div>

        {/* SIMULATOR 1: CRM LEAD BOARD */}
        {activeTab === "crm" && (
          <div className="rounded-2xl bg-[#0E1B2B] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#D4AF7A] font-bold uppercase">LIVE CRM PREVIEW</span>
                <h3 className="text-xl font-black text-white">Daily Broker Sales Pipeline</h3>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-[#12786F]/25 text-[#34D399] border border-[#12786F]/40 font-bold">
                  ● 7 Active Leads
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#C39A61]/20 text-[#D4AF7A] border border-[#C39A61]/40 font-bold">
                  Pipeline Value: ₹4.2 Crore
                </span>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {crmColumns.map((col, idx) => (
                <div key={idx} className="rounded-xl bg-[#14283F] border border-white/10 p-4 space-y-3 shadow-md">
                  <div className="flex items-center justify-between text-xs font-black text-white">
                    <span>{col.title}</span>
                    <span className="w-6 h-6 rounded-full bg-[#1B3554] text-[#D4AF7A] flex items-center justify-center text-xs font-bold border border-white/10">
                      {col.count}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {col.leads.map((lead, lIdx) => (
                      <div
                        key={lIdx}
                        className="rounded-xl bg-[#1B3554] border border-white/10 p-3.5 space-y-2 hover:border-[#12786F] transition-colors shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-xs text-white">{lead.name}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${
                              lead.score === "Hot"
                                ? "bg-rose-500 text-white"
                                : lead.score === "Won"
                                ? "bg-emerald-600 text-white"
                                : "bg-[#C39A61] text-[#14283F]"
                            }`}
                          >
                            {lead.score}
                          </span>
                        </div>

                        <p className="text-xs text-[#E2E8F0] font-semibold leading-tight">
                          {lead.property}
                        </p>

                        <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/10">
                          <span className="font-black text-[#D4AF7A]">{lead.budget}</span>
                          <span className="font-medium text-slate-300">{lead.time}</span>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button className="flex-1 py-1.5 rounded-lg bg-[#14283F] hover:bg-[#23456D] border border-white/10 text-xs font-bold text-white flex items-center justify-center gap-1 transition-colors">
                            <Phone className="w-3 h-3 text-[#D4AF7A]" /> Call
                          </button>
                          <button className="flex-1 py-1.5 rounded-lg bg-[#12786F] hover:bg-[#0E635C] text-xs font-black text-white flex items-center justify-center gap-1 shadow-sm transition-colors">
                            <MessageSquare className="w-3 h-3 fill-white" /> WhatsApp
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SIMULATOR 2: BUILDER ERP INVENTORY */}
        {activeTab === "erp" && (
          <div className="rounded-2xl bg-[#0E1B2B] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#D4AF7A] font-bold uppercase">LIVE ERP INVENTORY MATRIX</span>
                <h3 className="text-xl font-black text-white">Grand Royal Palms Colony – Phase 1</h3>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
                <span className="flex items-center gap-2 text-emerald-300 bg-[#1B3554] px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#12786F]" /> Available (4)
                </span>
                <span className="flex items-center gap-2 text-[#D4AF7A] bg-[#1B3554] px-3 py-1 rounded-full border border-[#C39A61]/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C39A61]" /> On Hold (1)
                </span>
                <span className="flex items-center gap-2 text-rose-300 bg-[#1B3554] px-3 py-1 rounded-full border border-rose-500/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Booked / Sold (3)
                </span>
              </div>
            </div>

            {/* Matrix & Detail Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Units Grid */}
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {erpUnits.map((u, idx) => (
                  <button
                    key={u.id}
                    onClick={() => setSelectedUnit(idx)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedUnit === idx
                        ? "border-[#12786F] ring-2 ring-[#12786F]/40 bg-[#1B3554]"
                        : "bg-[#14283F] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-sm text-white">Unit #{u.id}</span>
                      <span
                        className={`w-3 h-3 rounded-full ${
                          u.status === "Available"
                            ? "bg-[#12786F]"
                            : u.status === "Hold"
                            ? "bg-[#C39A61]"
                            : "bg-rose-500"
                        }`}
                      />
                    </div>
                    <div className="text-xs text-slate-300 font-medium">{u.type} • {u.size}</div>
                    <div className="text-sm font-black text-[#D4AF7A] mt-2">{u.price}</div>
                    <div className="text-xs mt-1 font-bold text-white truncate">{u.status}</div>
                  </button>
                ))}
              </div>

              {/* Selected Unit Details Drawer */}
              <div className="rounded-xl bg-[#14283F] border border-white/15 p-5 space-y-4 shadow-lg">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-xs font-mono uppercase text-[#D4AF7A] font-bold">Selected Property Record</span>
                  <h4 className="text-lg font-black text-white">Unit #{currentUnit.id} ({currentUnit.type})</h4>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Total Carpet Area:</span>
                    <span className="font-black text-white">{currentUnit.size}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Base Selling Price:</span>
                    <span className="font-black text-[#D4AF7A]">{currentUnit.price}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Current Status:</span>
                    <span
                      className={`font-black px-2.5 py-0.5 rounded text-xs ${
                        currentUnit.status === "Available"
                          ? "bg-[#12786F] text-white"
                          : currentUnit.status === "Hold"
                          ? "bg-[#C39A61] text-[#14283F]"
                          : "bg-rose-600 text-white"
                      }`}
                    >
                      {currentUnit.status}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Client / Buyer:</span>
                    <span className="font-bold text-white text-right">{currentUnit.client}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button className="w-full py-3 rounded-xl bg-[#12786F] hover:bg-[#0E635C] text-white font-black text-xs transition-colors shadow-md">
                    Generate Booking Demand Note (PDF)
                  </button>
                  <button className="w-full py-2.5 rounded-xl bg-[#1B3554] hover:bg-[#23456D] border border-white/15 text-white text-xs font-bold transition-colors">
                    Change Unit Status / Hold Timer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR 3: WHATSAPP AI SALES CLOSER */}
        {activeTab === "whatsapp" && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-[#0E1B2B] border-4 border-[#1B3554] p-4 sm:p-6 shadow-2xl space-y-4">
            {/* WhatsApp App Header */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#14283F] text-white border border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#12786F] flex items-center justify-center font-black text-sm">
                AI
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm text-white">Mohit PropTech AI Assistant</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                </div>
                <div className="text-xs text-[#34D399] font-bold">Official Cloud API • Verified Business Bot</div>
              </div>
            </div>

            {/* Conversation Flow */}
            <div className="space-y-3.5 py-3 text-xs sm:text-sm leading-relaxed max-h-[380px] overflow-y-auto px-1">
              {/* Buyer Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-[#0E635C] text-white p-3.5 shadow-md">
                  <p className="font-medium">Hi, I saw your ad for 3BHK flats near Super Corridor. What is the starting rate?</p>
                  <span className="text-[10px] text-emerald-200 block text-right mt-1 font-mono">11:02 PM</span>
                </div>
              </div>

              {/* Bot Reply */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-[#1B3554] border border-white/10 text-white p-3.5 shadow-md space-y-2">
                  <p className="font-medium">
                    🙏 <strong className="text-[#D4AF7A]">नमस्ते शर्मा जी!</strong> हमारे प्रीमियम 3 BHK फ्लैट्स ₹54 लाख से शुरू होते हैं।
                  </p>
                  <p className="font-medium">क्या आप तुरंत शिफ्टिंग (Ready-to-Move) या न्यू प्रोजेक्ट खोज रहे हैं?</p>
                  <span className="text-[10px] text-slate-300 block text-right font-mono">11:02 PM • Bot (Instant 3s)</span>
                </div>
              </div>

              {/* Buyer Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-[#0E635C] text-white p-3.5 shadow-md">
                  <p className="font-medium">Ready to move. Budget is around 60 Lakhs.</p>
                  <span className="text-[10px] text-emerald-200 block text-right mt-1 font-mono">11:03 PM</span>
                </div>
              </div>

              {/* Bot Action: Brochure + Site Visit */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-[#1B3554] border border-white/10 text-white p-3.5 shadow-md space-y-3">
                  <p className="font-medium">
                    शानदार! आपके बजट में हमारे पास 2 सबसे प्राइम यूनिट्स उपलब्ध हैं।
                  </p>

                  <div className="p-3 rounded-xl bg-[#0E1B2B] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-6 h-6 text-[#34D399]" />
                      <div>
                        <div className="font-black text-xs text-white">Royal_Palms_3BHK_Brochure.pdf</div>
                        <div className="text-[10px] text-slate-300">8.4 MB • Complete Layout & Rates</div>
                      </div>
                    </div>
                    <span className="text-xs text-[#34D399] font-black underline cursor-pointer">Sent</span>
                  </div>

                  <p className="font-bold text-[#D4AF7A]">
                    📍 क्या आप इस शनिवार सुबह 11:00 AM या रविवार शाम 4:00 PM पर साइट विज़िट बुक करना चाहेंगे?
                  </p>

                  <div className="flex gap-2.5 pt-1">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#12786F] text-white text-xs font-black shadow-sm">
                      [ शनिवार 11 AM ]
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#14283F] border border-white/15 text-slate-200 text-xs font-semibold">
                      [ रविवार 4 PM ]
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-300 block text-right font-mono">11:03 PM • WACA Webhook Triggered</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-2 border-t border-white/10 text-center">
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                ⚡ <strong>नतीजा:</strong> रात 11 बजे जब आप सो रहे होते हैं, तब भी यह AI बॉट आपके ग्राहक को ब्रोशर भेजकर साइट विज़िट पक्की कर देता है।
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
