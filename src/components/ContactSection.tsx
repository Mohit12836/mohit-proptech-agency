"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { Phone, MessageSquare, Mail, MapPin, Send, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    businessType: "Property Broker",
    serviceNeeded: "Real Estate Website + WhatsApp AI",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Namaste Mohit ji! I want to schedule a PropTech consultation:
👤 Name: ${formData.name}
📱 WhatsApp/Phone: ${formData.phone}
📍 City: ${formData.city}
🏢 Business: ${formData.businessType}
🎯 Needed Solution: ${formData.serviceNeeded}
📝 Notes: ${formData.notes || "Looking for consultation"}`;

    const waUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#14283F] border-t border-white/10 text-white relative">
      <div className="container-fluid space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12786F]/20 border border-[#12786F]/40 text-[#34D399] text-xs font-bold tracking-wider uppercase">
            Direct Founder Access
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Schedule a 15-Minute <span className="text-[#D4AF7A]">PropTech Strategy Session</span>
          </h2>
          <p className="text-[#E2E8F0] text-base sm:text-lg font-normal leading-relaxed">
            अपने प्रॉपर्टी बिजनेस को डिजिटल बनाने के लिए सीधे मोहित पी जैन से बात करें। कोई सेल्स प्रेशर नहीं — सिर्फ व्यावहारिक तकनीकी सलाह।
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct Coordinates (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="luxury-card-navy rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF7A] to-[#C39A61] flex items-center justify-center font-black text-2xl text-[#14283F] shadow-md">
                  M
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{AGENCY_CONFIG.name}</h3>
                  <p className="text-xs font-black text-[#D4AF7A] uppercase tracking-wide">Founder & PropTech Lead Architect</p>
                  <p className="text-xs text-slate-300 font-semibold">Powered by ViSmart AI</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                <a
                  href={`tel:${AGENCY_CONFIG.phone}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-[#14283F] border border-white/10 hover:border-[#C39A61] text-white transition-colors shadow-sm"
                >
                  <Phone className="w-5 h-5 text-[#D4AF7A] shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-300 uppercase font-mono font-bold">Direct Phone Call</div>
                    <div className="font-black text-base text-white">{AGENCY_CONFIG.phone}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${AGENCY_CONFIG.rawPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0E635C] border border-[#12786F] hover:bg-[#12786F] text-white transition-colors shadow-sm"
                >
                  <MessageSquare className="w-5 h-5 text-white shrink-0 fill-white/20" />
                  <div>
                    <div className="text-[10px] text-[#A7F3D0] uppercase font-mono font-bold">Direct WhatsApp</div>
                    <div className="font-black text-base text-white">{AGENCY_CONFIG.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#14283F] border border-white/10 text-white">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-300 uppercase font-mono font-bold">Official Email</div>
                    <div className="font-bold text-white text-xs sm:text-sm">{AGENCY_CONFIG.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#14283F] border border-white/10 text-white">
                  <MapPin className="w-5 h-5 text-rose-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-300 uppercase font-mono font-bold">Service Region</div>
                    <div className="font-bold text-slate-200 text-xs sm:text-sm">{AGENCY_CONFIG.address}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#14283F] border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#34D399] shrink-0" />
                <span>आपका डेटा और प्रोजेक्ट विवरण 100% गोपनीय और सुरक्षित रहेगा।</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (3 cols) */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="luxury-card-navy rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="border-b border-white/10 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-white">Direct Project Inquiry Form</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-normal">
                  फ़ॉर्म भरें और तुरंत WhatsApp पर अपनी प्राथमिकता कन्फर्म करें।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wide">आपका नाम (Full Name) *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="उदा. राहुल शर्मा"
                    className="w-full px-4 py-3 rounded-xl bg-[#14283F] border border-white/15 text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#12786F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wide">WhatsApp नंबर *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#14283F] border border-white/15 text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#12786F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wide">शहर (City / Location) *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="उदा. इंदौर, भोपाल, रायपुर, जयपुर आदि"
                    className="w-full px-4 py-3 rounded-xl bg-[#14283F] border border-white/15 text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#12786F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 uppercase tracking-wide">बिज़नेस का प्रकार (Business Type)</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#14283F] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#12786F]"
                  >
                    <option value="Property Broker">Property Broker / Dealer</option>
                    <option value="Builder / Developer">Builder / Colony Developer</option>
                    <option value="Real Estate Agency">Real Estate Agency (Firm)</option>
                    <option value="Rental & Commercial">Rental / Commercial Agency</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wide">प्राथमिक जरूरत (Primary Solution Needed)</label>
                <select
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#14283F] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#12786F]"
                >
                  <option value="Real Estate Website + WhatsApp AI">01. Real Estate Website Solutions</option>
                  <option value="Lead Management CRM">02. Real Estate Lead CRM</option>
                  <option value="Builder ERP Software">03. Real Estate ERP & Inventory</option>
                  <option value="Mobile App Development">04. Custom Mobile Apps</option>
                  <option value="WhatsApp Cloud API Automation">05. AI & WhatsApp Automation</option>
                  <option value="Digital Ads & Lead Generation">06. Digital Ads & Lead Generation</option>
                  <option value="Complete Agency Turnkey Setup">Full All-in-One Digital Turnkey Setup</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wide">अतिरिक्त जानकारी या सवाल (Optional)</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="आपकी वर्तमान में क्या समस्या है या आप क्या हासिल करना चाहते हैं..."
                  className="w-full px-4 py-3 rounded-xl bg-[#14283F] border border-white/15 text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#12786F]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#12786F] hover:bg-[#0E635C] text-white font-black text-sm sm:text-base shadow-xl shadow-[#12786F]/25 transition-all btn-tactile"
              >
                <Send className="w-5 h-5 text-white" />
                <span>Submit & Connect on WhatsApp Directly</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
