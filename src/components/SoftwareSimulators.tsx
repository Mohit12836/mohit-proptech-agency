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
    <section id="demos" className="py-24 bg-[#0B1220] border-t border-slate-800 relative overflow-hidden">
      <div className="container-fluid space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            Interactive PropTech Interface Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See the Software in Action <span className="emerald-gradient-text">Before You Invest</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            हम सामान्य बातें नहीं करते — नीचे दिए गए टैब्स पर क्लिक करें और देखें कि आपका CRM, ERP और AI WhatsApp सिस्टम वास्तव में कैसे काम करेगा।
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab("crm")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "crm"
                ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>1. Real Estate CRM Lead Board</span>
          </button>

          <button
            onClick={() => setActiveTab("erp")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "erp"
                ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            }`}
          >
            <Building className="w-4 h-4" />
            <span>2. Builder & Colony ERP Inventory</span>
          </button>

          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "whatsapp"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>3. 24/7 AI WhatsApp Closer</span>
          </button>
        </div>

        {/* SIMULATOR 1: CRM LEAD BOARD */}
        {activeTab === "crm" && (
          <div className="rounded-2xl bg-[#080C14] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">LIVE CRM PREVIEW</span>
                <h3 className="text-xl font-extrabold text-white">Daily Broker Sales Pipeline</h3>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  ● 7 Active Leads
                </span>
                <span className="px-3 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                  Pipeline Value: ₹4.2 Crore
                </span>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {crmColumns.map((col, idx) => (
                <div key={idx} className="rounded-xl bg-slate-900/70 border border-slate-800 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                    <span>{col.title}</span>
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-[10px]">
                      {col.count}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {col.leads.map((lead, lIdx) => (
                      <div
                        key={lIdx}
                        className="rounded-lg bg-[#0F172A] border border-slate-700/60 p-3 space-y-2 hover:border-amber-500/50 transition-colors shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-white">{lead.name}</span>
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
                              lead.score === "Hot"
                                ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                                : lead.score === "Won"
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            }`}
                          >
                            {lead.score}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-300 font-medium leading-tight">
                          {lead.property}
                        </p>

                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                          <span className="font-bold text-amber-400">{lead.budget}</span>
                          <span>{lead.time}</span>
                        </div>

                        <div className="flex items-center gap-1.5 pt-1">
                          <button className="flex-1 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-semibold text-slate-200 flex items-center justify-center gap-1">
                            <Phone className="w-2.5 h-2.5 text-amber-400" /> Call
                          </button>
                          <button className="flex-1 py-1 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/30 text-[10px] font-semibold text-emerald-300 flex items-center justify-center gap-1">
                            <MessageSquare className="w-2.5 h-2.5 text-emerald-400" /> WhatsApp
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
          <div className="rounded-2xl bg-[#080C14] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">LIVE ERP INVENTORY MATRIX</span>
                <h3 className="text-xl font-extrabold text-white">Grand Royal Palms Colony – Phase 1</h3>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500" /> Available (4)
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-2.5 h-2.5 rounded bg-amber-500" /> On Hold (1)
                </span>
                <span className="flex items-center gap-1.5 text-rose-400">
                  <span className="w-2.5 h-2.5 rounded bg-rose-500" /> Booked / Sold (3)
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
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedUnit === idx
                        ? "border-amber-400 ring-2 ring-amber-400/20 bg-slate-900"
                        : "bg-slate-950/80 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white">Unit #{u.id}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          u.status === "Available"
                            ? "bg-emerald-400 shadow-sm shadow-emerald-400"
                            : u.status === "Hold"
                            ? "bg-amber-400"
                            : "bg-rose-500"
                        }`}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400">{u.type} • {u.size}</div>
                    <div className="text-xs font-bold text-amber-300 mt-2">{u.price}</div>
                    <div className="text-[10px] mt-1 text-slate-400 truncate">{u.status}</div>
                  </button>
                ))}
              </div>

              {/* Selected Unit Details Drawer */}
              <div className="rounded-xl bg-[#0F172A] border border-slate-700 p-5 space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Selected Property Record</span>
                  <h4 className="text-lg font-bold text-white">Unit #{currentUnit.id} ({currentUnit.type})</h4>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Total Carpet Area:</span>
                    <span className="font-bold text-white">{currentUnit.size}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Base Selling Price:</span>
                    <span className="font-bold text-amber-400">{currentUnit.price}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Current Status:</span>
                    <span
                      className={`font-black px-2 py-0.5 rounded text-[10px] ${
                        currentUnit.status === "Available"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : currentUnit.status === "Hold"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-rose-500/20 text-rose-400"
                      }`}
                    >
                      {currentUnit.status}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Client / Buyer:</span>
                    <span className="font-medium text-slate-200 text-right">{currentUnit.client}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs transition-colors">
                    Generate Booking Demand Note (PDF)
                  </button>
                  <button className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold">
                    Change Unit Status / Hold Timer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR 3: WHATSAPP AI SALES CLOSER */}
        {activeTab === "whatsapp" && (
          <div className="max-w-2xl mx-auto rounded-3xl bg-[#080C14] border-4 border-slate-800 p-4 sm:p-6 shadow-2xl space-y-4">
            {/* WhatsApp App Header */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#1F2C34] text-white">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm">
                AI
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm">Mohit PropTech AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-emerald-400 font-medium">Official Cloud API • Verified Bot</div>
              </div>
            </div>

            {/* Conversation Flow */}
            <div className="space-y-3 py-2 text-xs leading-relaxed max-h-[360px] overflow-y-auto px-1">
              {/* Buyer Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-[#005C4B] text-white p-3 shadow">
                  <p>Hi, I saw your ad for 3BHK flats near Super Corridor. What is the starting rate?</p>
                  <span className="text-[9px] text-emerald-200 block text-right mt-1">11:02 PM</span>
                </div>
              </div>

              {/* Bot Reply */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-[#202C33] text-slate-100 p-3 shadow space-y-2">
                  <p>
                    🙏 <strong>नमस्ते शर्मा जी!</strong> हमारे प्रीमियम 3 BHK फ्लैट्स ₹54 लाख से शुरू होते हैं।
                  </p>
                  <p>क्या आप तुरंत शिफ्टिंग (Ready-to-Move) या न्यू प्रोजेक्ट खोज रहे हैं?</p>
                  <span className="text-[9px] text-slate-400 block text-right">11:02 PM • Bot (Instant 3s)</span>
                </div>
              </div>

              {/* Buyer Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-[#005C4B] text-white p-3 shadow">
                  <p>Ready to move. Budget is around 60 Lakhs.</p>
                  <span className="text-[9px] text-emerald-200 block text-right mt-1">11:03 PM</span>
                </div>
              </div>

              {/* Bot Action: Brochure + Site Visit */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-[#202C33] text-slate-100 p-3 shadow space-y-2.5">
                  <p>
                    शानदार! आपके बजट में हमारे पास 2 सबसे प्राइम यूनिट्स उपलब्ध हैं।
                  </p>

                  <div className="p-2.5 rounded-lg bg-[#111B21] border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-emerald-400" />
                      <div>
                        <div className="font-bold text-[11px] text-white">Royal_Palms_3BHK_Brochure.pdf</div>
                        <div className="text-[9px] text-slate-400">8.4 MB • Complete Layout & Rates</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold underline cursor-pointer">Sent</span>
                  </div>

                  <p className="font-medium text-amber-300">
                    📍 क्या आप इस शनिवार सुबह 11:00 AM या रविवार शाम 4:00 PM पर साइट विज़िट बुक करना चाहेंगे?
                  </p>

                  <div className="flex gap-2 pt-1">
                    <span className="px-3 py-1 rounded-full bg-[#111B21] border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                      [ शनिवार 11 AM ]
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#111B21] border border-slate-700 text-slate-300 text-[10px]">
                      [ रविवार 4 PM ]
                    </span>
                  </div>

                  <span className="text-[9px] text-slate-400 block text-right">11:03 PM • WACA Webhook Triggered</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-2 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-300">
                ⚡ <strong>नतीजा:</strong> रात 11 बजे जब आप सो रहे होते हैं, तब भी यह AI बॉट आपके ग्राहक को ब्रोशर भेजकर साइट विज़िट पक्की कर देता है।
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
