"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export default function FloatingDock() {
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.rawPhone}?text=${encodeURIComponent(
    "Hi Mohit, I am interested in building a real estate website / CRM / automation system."
  )}`;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 pointer-events-none px-4">
      <div className="max-w-xl mx-auto pointer-events-auto">
        <div className="rounded-2xl bg-[#1E293B]/95 backdrop-blur-md border border-[#475569] p-3 shadow-2xl flex items-center justify-between gap-3">
          {/* Left: Founder info & pulse */}
          <div className="flex items-center gap-3 pl-1">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-black text-sm shadow-sm">
                M
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1E293B] animate-pulse" />
            </div>
            <div className="hidden xs:block sm:block text-left">
              <div className="text-xs font-black text-white flex items-center gap-1.5">
                <span>{AGENCY_CONFIG.name}</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-bold">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-semibold">PropTech Specialist</p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${AGENCY_CONFIG.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141E33] hover:bg-[#28354D] border border-[#475569] text-white text-xs font-bold transition-all btn-tactile"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-lg shadow-emerald-600/30 transition-all btn-tactile"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 hidden sm:inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
