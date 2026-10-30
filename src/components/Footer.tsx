"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { Phone, MessageSquare, Mail, MapPin, Heart, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080E] border-t border-slate-800 text-slate-400 text-xs pt-16 pb-24">
      <div className="container-fluid space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-black font-black text-lg">
                M
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wider text-white">
                  {AGENCY_CONFIG.name}
                </span>
                <p className="text-[10px] text-amber-400/90 font-medium">
                  PROPTECH & DIGITAL GROWTH
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              India's specialized PropTech partner helping property dealers, brokers, and builders scale with websites, CRM, builder ERP, and autonomous WhatsApp sales closers.
            </p>

            <div className="flex items-center gap-2 text-slate-300 text-[11px]">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Client Code & Data Ownership Guaranteed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              The 8 PropTech Solutions
            </h4>
            <ul className="space-y-1.5 text-slate-400">
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
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Live Showcase Systems
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://samriddhi-property-broker-cxj1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400 transition-colors block font-medium"
                >
                  Samriddhi Classic Broker Portal →
                </a>
                <span className="text-[10px] text-slate-500">Live production property broker site</span>
              </li>
              <li>
                <a
                  href="https://samriddhi-property-redesign.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors block font-medium"
                >
                  10-Theme Master Design Engine →
                </a>
                <span className="text-[10px] text-slate-500">10 distinct real estate layouts with live switcher</span>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2 text-slate-300">
              <div>
                <span className="text-slate-500 block text-[10px]">DIRECT PHONE:</span>
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="font-bold text-white hover:text-amber-400">
                  {AGENCY_CONFIG.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px]">WHATSAPP CONSULTATION:</span>
                <a
                  href={`https://wa.me/${AGENCY_CONFIG.rawPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:underline"
                >
                  Chat with Mohit P Jain
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px]">OFFICE & REGION:</span>
                <span className="text-slate-400">{AGENCY_CONFIG.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} MOHIT P JAIN • All Rights Reserved. Powered by ViSmart AI.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with surgical precision for Indian Real Estate</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
