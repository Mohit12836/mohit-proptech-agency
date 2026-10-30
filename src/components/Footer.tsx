"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { Phone, MessageSquare, Mail, MapPin, Heart, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1B2B] border-t border-white/10 text-slate-300 text-xs sm:text-sm pt-16 pb-24">
      <div className="container-fluid space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF7A] to-[#C39A61] flex items-center justify-center text-[#14283F] font-black text-xl shadow-md">
                M
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wider text-white">
                  {AGENCY_CONFIG.name}
                </span>
                <p className="text-[11px] text-[#D4AF7A] font-bold uppercase tracking-wide">
                  PROPTECH & DIGITAL GROWTH
                </p>
              </div>
            </div>

            <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed font-normal">
              India's specialized PropTech partner helping property dealers, brokers, and builders scale with websites, CRM, builder ERP, and autonomous WhatsApp sales closers.
            </p>

            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold bg-[#14283F] p-2.5 rounded-lg border border-white/10">
              <Shield className="w-4 h-4 text-[#34D399] shrink-0" />
              <span>100% Client Code & Data Ownership Guaranteed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-wider font-mono">
              The 8 PropTech Solutions
            </h4>
            <ul className="space-y-2 text-[#CBD5E1] font-medium text-xs">
              <li>01. Real Estate Website Solutions</li>
              <li>02. Real Estate Lead CRM</li>
              <li>03. Builder & Colony ERP Software</li>
              <li>04. Real Estate Mobile Apps</li>
              <li>05. Official WhatsApp AI Bot (WACA)</li>
              <li>06. High-Intent Digital Lead Ads</li>
              <li>07. Luxury Branding & Brochures</li>
              <li>08. Cloud Hosting & Technical Support</li>
            </ul>
          </div>

          {/* Live Portfolios */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-wider font-mono">
              Live Showcase Systems
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://samriddhi-property-broker-cxj1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF7A] transition-colors block font-bold text-xs"
                >
                  Samriddhi Classic Broker Portal →
                </a>
                <span className="text-[11px] text-slate-400">Live production property broker site</span>
              </li>
              <li>
                <a
                  href="https://samriddhi-property-redesign.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#34D399] transition-colors block font-bold text-xs"
                >
                  10-Theme Master Design Engine →
                </a>
                <span className="text-[11px] text-slate-400">10 distinct real estate layouts with live switcher</span>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px] font-bold">DIRECT PHONE:</span>
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="font-black text-white hover:text-[#D4AF7A] text-sm">
                  {AGENCY_CONFIG.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[10px] font-bold">WHATSAPP CONSULTATION:</span>
                <a
                  href={`https://wa.me/${AGENCY_CONFIG.rawPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#34D399] hover:underline text-xs"
                >
                  Chat with Mohit P Jain
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[10px] font-bold">OFFICE & REGION:</span>
                <span className="text-[#CBD5E1] text-xs font-medium">{AGENCY_CONFIG.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div>
            © {new Date().getFullYear()} MOHIT P JAIN • All Rights Reserved. Powered by ViSmart AI.
          </div>
          <div>
            Designed with 60-30-10 Color Architecture for Indian PropTech
          </div>
        </div>
      </div>
    </footer>
  );
}
