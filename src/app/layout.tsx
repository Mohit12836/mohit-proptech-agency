import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOHIT P JAIN | Real Estate Technology, CRM, ERP & Automation Specialist",
  description: "Official PropTech Agency of Mohit P Jain (Powered by ViSmart AI). We build high-converting real estate websites, CRM, builder ERP, mobile apps, and 24/7 AI WhatsApp sales automation for property dealers & developers.",
  keywords: [
    "Mohit P Jain",
    "Real Estate Website Developer",
    "Property Broker CRM",
    "Builder ERP Software",
    "Real Estate Mobile App",
    "WhatsApp Cloud API Real Estate Bot",
    "PropTech India",
    "Property Dealer Marketing"
  ],
  authors: [{ name: "Mohit P Jain", url: "https://mohitpjain.com" }],
  openGraph: {
    title: "MOHIT P JAIN - Real Estate Technology & Software Specialist",
    description: "Digitalize your property business with high-converting websites, CRM, ERP, and AI WhatsApp Automation. Direct Call: +91 6263879076",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080C14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-agency-bg text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
