"use client";

import { CheckCircle2, XCircle, ShieldCheck, Zap, HeartHandshake, Code2, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const comparisonItems = [
    {
      feature: "Real Estate Domain Knowledge",
      generic: "Generic knowledge. Confuses super built-up vs carpet area, no idea about registry or RERA.",
      mohit: "Deep PropTech focus. Designed specifically for plots, flats, townships, and broker pipelines."
    },
    {
      feature: "Delivery & Launch Speed",
      generic: "Takes 2-3 months with endless revisions and broken promises.",
      mohit: "Lightning fast: 3 to 5 Days complete production deployment."
    },
    {
      feature: "WhatsApp Automation Risk",
      generic: "Uses illegal unofficial scrapers that get your WhatsApp number permanently banned.",
      mohit: "100% Official Meta WhatsApp Cloud API (WACA) with green-tick eligibility and zero ban risk."
    },
    {
      feature: "Ownership & Control",
      generic: "Traps you with high monthly SaaS fees; if you stop paying, your data is held hostage.",
      mohit: "100% Code & Database ownership. You own your data forever with zero lock-in."
    },
    {
      feature: "Post-Launch Support",
      generic: "Stops picking up your calls once the final payment is made.",
      mohit: "Direct priority phone & WhatsApp support with Mohit P Jain and team."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#E9F0F3] border-t border-[#D5E2E8] text-[#182B3C] relative">
      <div className="container-fluid space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#12786F]/10 border border-[#12786F]/25 text-[#12786F] text-xs font-bold tracking-wider uppercase">
            The PropTech Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182B3C] tracking-tight">
            Why Real Estate Leaders Choose <span className="text-[#12786F]">Mohit P Jain</span>
          </h2>
          <p className="text-[#526475] text-base sm:text-lg font-normal leading-relaxed">
            आम वेब डिजाइनर्स और एक समर्पित रियल एस्टेट टेक्नोलॉजी पार्टनर में क्या अंतर होता है, खुद तुलना करके देखें:
          </p>
        </div>

        {/* Comparison Table (Pure White Structured Table on Ice Blue) */}
        <div className="luxury-card-light rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#182B3C] uppercase font-mono text-xs tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5 w-1/4 font-black">Key Capability</th>
                  <th className="p-4 sm:p-5 w-3/8 text-[#9F1239] font-bold">Generic Web Agency / Freelancer</th>
                  <th className="p-4 sm:p-5 w-3/8 text-[#065F46] bg-[#ECFDF5] border-l-2 border-[#12786F] font-black">
                    Mohit P Jain (ViSmart AI)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="p-4 sm:p-5 font-black text-[#182B3C]">
                      {item.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-[#64748B] font-normal">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item.generic}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#065F46] bg-[#ECFDF5]/60 border-l-2 border-[#12786F] font-bold">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#12786F] shrink-0 mt-0.5" />
                        <span>{item.mohit}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Execution Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="luxury-card-light p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12786F]/15 text-[#12786F] flex items-center justify-center font-black text-base shadow-sm">
              01
            </div>
            <h4 className="font-black text-[#182B3C] text-base">Discovery & Strategy</h4>
            <p className="text-xs sm:text-sm text-[#526475] leading-relaxed font-normal">
              We audit your existing property listings, offline sales workflow, and lead leakage points.
            </p>
          </div>

          <div className="luxury-card-light p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12786F]/15 text-[#12786F] flex items-center justify-center font-black text-base shadow-sm">
              02
            </div>
            <h4 className="font-black text-[#182B3C] text-base">Custom Engineering</h4>
            <p className="text-xs sm:text-sm text-[#526475] leading-relaxed font-normal">
              We configure your brand identity, integrate EMI calculators, build CRM pipelines, and program the AI bot.
            </p>
          </div>

          <div className="luxury-card-light p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12786F]/15 text-[#12786F] flex items-center justify-center font-black text-base shadow-sm">
              03
            </div>
            <h4 className="font-black text-[#182B3C] text-base">Live Deployment</h4>
            <p className="text-xs sm:text-sm text-[#526475] leading-relaxed font-normal">
              Fast cloud deployment on high-speed CDN servers with SSL security, custom domain, and mobile auto-fit testing.
            </p>
          </div>

          <div className="luxury-card-light p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#12786F]/15 text-[#12786F] flex items-center justify-center font-black text-base shadow-sm">
              04
            </div>
            <h4 className="font-black text-[#182B3C] text-base">Staff Handover & Growth</h4>
            <p className="text-xs sm:text-sm text-[#526475] leading-relaxed font-normal">
              Full live demonstration and step-by-step training for your broker office staff to manage leads effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
