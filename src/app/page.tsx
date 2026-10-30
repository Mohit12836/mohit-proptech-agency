import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SoftwareSimulators from "@/components/SoftwareSimulators";
import QuoteBuilder from "@/components/QuoteBuilder";
import LivePortfolioSection from "@/components/LivePortfolioSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col relative selection:bg-amber-500 selection:text-black">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Hero Section with Live Metrics */}
      <HeroSection />

      {/* The 8 Specialized PropTech Solutions */}
      <ServicesSection />

      {/* Interactive Software Simulators (CRM, ERP, WhatsApp AI) */}
      <SoftwareSimulators />

      {/* Instant Interactive Quote Builder */}
      <QuoteBuilder />

      {/* Live Proven Deployments (Samriddhi Classic & 10-Theme Redesign) */}
      <LivePortfolioSection />

      {/* Comparison: Why Mohit P Jain vs Generic Web Agencies */}
      <WhyChooseUs />

      {/* Direct Consultation & Project Inquiry Form */}
      <ContactSection />

      {/* Comprehensive Agency Footer */}
      <Footer />

      {/* Floating Bottom Quick Action Dock */}
      <FloatingDock />
    </main>
  );
}
