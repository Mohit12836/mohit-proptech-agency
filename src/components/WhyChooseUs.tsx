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
    <section id="why-us" className="py-24 bg-[#141E33] border-t border-[#334155] relative">
      <div className="container-fluid space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
            The PropTech Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Real Estate Leaders Choose <span className="champagne-gradient-text">Mohit P Jain</span>
          </h2>
          <p className="text-[#E2E8F0] text-base sm:text-lg font-medium leading-relaxed">
            आम वेब डिजाइनर्स और एक समर्पित रियल एस्टेट टेक्नोलॉजी पार्टनर में क्या अंतर होता है, खुद तुलना करके देखें:
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-[#334155] bg-[#1E293B] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#141E33] border-b border-[#334155] text-slate-200 uppercase font-mono text-xs tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5 w-1/4 font-black">Key Capability</th>
                  <th className="p-4 sm:p-5 w-3/8 text-rose-300 font-bold">Generic Web Agency / Freelancer</th>
                  <th className="p-4 sm:p-5 w-3/8 text-amber-300 bg-amber-400/10 border-l border-amber-400/30 font-black">
                    Mohit P Jain (ViSmart AI)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#334155]">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#28354D] transition-colors">
                    <td className="p-4 sm:p-5 font-black text-white">
                      {item.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-300 font-medium">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item.generic}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-white bg-amber-400/5 border-l border-amber-400/30 font-bold">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
          <div className="p-6 rounded-2xl bg-[#1E293B] border border-[#334155] space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              01
            </div>
            <h4 className="font-black text-white text-base">Discovery & Strategy</h4>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-medium">
              We audit your existing property listings, offline sales workflow, and lead leakage points.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E293B] border border-[#334155] space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              02
            </div>
            <h4 className="font-black text-white text-base">Custom Engineering</h4>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-medium">
              We configure your brand identity, integrate EMI calculators, build CRM pipelines, and program the AI bot.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E293B] border border-[#334155] space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              03
            </div>
            <h4 className="font-black text-white text-base">Live Deployment</h4>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-medium">
              Fast cloud deployment on high-speed CDN servers with SSL security, custom domain, and mobile auto-fit testing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E293B] border border-[#334155] space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              04
            </div>
            <h4 className="font-black text-white text-base">Staff Handover & Growth</h4>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-medium">
              Full live demonstration and step-by-step training for your broker office staff to manage leads effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
