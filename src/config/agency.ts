export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  category: "web" | "crm-erp" | "mobile" | "automation" | "marketing" | "branding" | "support";
  badge: string;
  clientProblem: string;
  ourSolution: string;
  keyFeatures: string[];
  deliverables: string[];
  priceRange: {
    min: string;
    max: string;
    billingType: "One-time" | "Monthly" | "Project Based";
  };
  timeline: string;
  popular?: boolean;
  whatsappMessage: string;
  subCategories: string[];
}

export const AGENCY_CONFIG = {
  name: "MOHIT P JAIN",
  brandSubtitle: "REAL ESTATE TECHNOLOGY • SOFTWARE • AUTOMATION • DIGITAL GROWTH",
  agencyCompany: "VISMART AI PROPTECH SOLUTIONS",
  phone: "+91 6263879076",
  rawPhone: "916263879076",
  email: "mohit@vismart.ai",
  address: "Madhya Pradesh, India (Serving Pan-India Real Estate Clients)",
  founderBio: "PropTech Architect & Automation Consultant helping real estate brokers, developers, and builders scale from unorganized manual operations to automated, high-converting digital businesses.",
  heroStats: [
    { label: "Website Variations", value: "10+", suffix: "Themes" },
    { label: "Client Conversion", value: "3.8x", suffix: "Faster" },
    { label: "Deployment Speed", value: "3 - 5", suffix: "Days" },
    { label: "Lead Response Time", value: "< 15", suffix: "Seconds" },
  ],
  targetAudiences: [
    { title: "Property Dealers & Brokers", desc: "Digitalize local inventory, stop commission leakage, and close buyers via WhatsApp." },
    { title: "Builders & Developers", desc: "Launch dedicated township & project landing pages with live inventory and 3D walk-throughs." },
    { title: "Real Estate Consultancies", desc: "Multi-agent CRM, lead routing, automated follow-ups, and executive analytics." },
    { title: "Rental & Commercial Agencies", desc: "Dynamic listing portals with lease tracking, tenant inquiries, and document verification." }
  ],
  livePortfolios: [
    {
      id: "samriddhi-classic",
      title: "Samriddhi Properties (Flagship Broker Portal)",
      tag: "Live Production Broker Site",
      url: "https://samriddhi-property-broker-cxj1.vercel.app/",
      category: "Full Broker Portal",
      highlights: ["Luxury Dark UI", "Real Estate EMI Calculator", "WhatsApp 1-Click Site Visit", "City/Colony Filtering", "Live Contact & Direct Calling"],
      description: "A complete, commercially live real estate broker portal built with modern Next.js and high-contrast luxury UI."
    },
    {
      id: "samriddhi-10themes",
      title: "Samriddhi 10-Theme Master Engine",
      tag: "10 Distinct Real Estate Layouts",
      url: "https://samriddhi-property-redesign.vercel.app/",
      category: "Multi-Theme PropTech System",
      highlights: ["10 Independent Layouts", "Luxury Gold, Emerald, Minimal & Corporate", "Instant Theme Switcher Dock", "URL Parameter Routing (?design=1..10)", "15 Fully Integrated Sections"],
      description: "An industry-first 10-variation design engine allowing property dealers to choose their exact preferred brand identity."
    }
  ],
  services: [
    {
      id: "website-solutions",
      number: "01",
      title: "Real Estate Website Solutions",
      hindiTitle: "प्रॉपर्टी ब्रोकर व बिल्डर वेबसाइट सॉल्यूशंस",
      tagline: "High-converting, mobile-first websites designed to build instant trust and generate verified property inquiries.",
      category: "web",
      badge: "High Demand",
      clientProblem: "Generic web designers don't understand real estate. Regular websites look like boring blogs with no EMI calculators, poor mobile speed, and no direct WhatsApp site visit booking.",
      ourSolution: "Custom engineered PropTech websites built specifically for property dealers, complete with high-res property galleries, map integration, filterable plots/flats, and 1-tap WhatsApp lead capture.",
      keyFeatures: [
        "Broker & Personal Consultant Websites",
        "Township & Project Showcase Pages",
        "Commercial & High-Street Retail Portals",
        "Rental & Lease Listing Portals",
        "Interactive EMI & Stamp Duty Calculators",
        "1-Click WhatsApp Site Visit Booking",
        "100% Fluid Auto-Fit Mobile & Desktop Design",
        "Fast CDN Cloud Hosting with SSL"
      ],
      subCategories: [
        "Property Broker Website",
        "Builder & Developer Project Site",
        "Property Listing Portal",
        "Commercial Property Website",
        "Rental Property Website",
        "Personal Broker Portfolio"
      ],
      deliverables: ["Full Responsive Website Source Code", "Admin Panel to Add/Edit Properties", "Domain & Cloudflare SSL Setup", "Google Maps & WhatsApp Integration", "1 Year Cloud Hosting & Maintenance Support"],
      priceRange: { min: "₹18,000", max: "₹45,000", billingType: "One-time" },
      timeline: "3 - 5 Days",
      popular: true,
      whatsappMessage: "Hi Mohit, I want to discuss building a modern Real Estate Website for my business."
    },
    {
      id: "real-estate-crm",
      number: "02",
      title: "Real Estate Lead Management CRM",
      hindiTitle: "रियल एस्टेट लीड मैनेजमेंट व सेल्स CRM",
      tagline: "Never lose a high-value property buyer. Track leads from 99acres, MagicBricks, Meta Ads, and walk-ins in one smart pipeline.",
      category: "crm-erp",
      badge: "Sales Booster",
      clientProblem: "Leads get lost in WhatsApp chats and Excel sheets. Agents forget to follow up, and brokers have zero visibility into deal pipeline.",
      ourSolution: "A purpose-built real estate CRM with Kanban pipeline stages (New Lead -> Site Visit -> Negotiation -> Token -> Closed) and automated follow-up reminders.",
      keyFeatures: [
        "Unified Multi-Channel Lead Ingestion",
        "Visual Kanban Pipeline Stages",
        "Lead Scoring (Hot, Warm, Cold)",
        "Call Recording & Agent Follow-up Logs",
        "Automated WhatsApp & SMS Reminders",
        "Agent Performance & Commission Leaderboard",
        "Direct Click-to-Call & WhatsApp Chat",
        "Executive Revenue & Conversion Analytics"
      ],
      subCategories: [
        "Lead Management & Tracking",
        "Customer Database & History",
        "Automated Follow-up Scheduler",
        "Sales Pipeline Kanban Board",
        "Agent Activity & Access Roles",
        "Customer Inquiry Status"
      ],
      deliverables: ["Custom CRM Deployment", "Agent Mobile/Web Access", "WhatsApp Webhook Integration", "Lead Import from Excel/CSV", "Staff Training & Onboarding"],
      priceRange: { min: "₹25,000", max: "₹65,000", billingType: "Project Based" },
      timeline: "5 - 7 Days",
      popular: true,
      whatsappMessage: "Hi Mohit, I want to implement a Real Estate CRM to track my property leads and sales pipeline."
    },
    {
      id: "real-estate-erp",
      number: "03",
      title: "Real Estate ERP & Inventory Software",
      hindiTitle: "रियल एस्टेट ERP व इन्वेंट्री मैनेजमेंट सॉफ्टवेयर",
      tagline: "End-to-end ERP for builders, colony developers, and large broker agencies to manage units, payments, and commissions.",
      category: "crm-erp",
      badge: "Enterprise Grade",
      clientProblem: "Double booking of plots/flats, messy payment installment records, delayed NOCs, and confusion over agent commission payouts.",
      ourSolution: "A centralized cloud ERP system managing real-time unit status (Available / Hold / Booked / Sold), payment milestone schedules, demand letters, and commission ledger.",
      keyFeatures: [
        "Interactive Master Layout & Unit Inventory Matrix",
        "Live Plot / Flat Booking with Hold Timers",
        "Payment Milestone Schedule & Installment Demands",
        "Automated Payment Receipts & Invoices",
        "Broker & Channel Partner Commission Engine",
        "Document Vault (Registry, NOC, Agreements)",
        "Builder Daily Cashflow & Collection Reports",
        "Role-Based Access Control for Staff"
      ],
      subCategories: [
        "Property & Plot Inventory Grid",
        "Colony / Project Management",
        "Booking & Token Management",
        "Payment & Installment Tracking",
        "Commission & Channel Partner Ledger",
        "Employee & Staff Attendance/Roles"
      ],
      deliverables: ["Cloud ERP Platform Setup", "Colony Master Layout Digitization", "Automated Invoice & Receipt Templates", "Full Data Security & Database Backups", "Comprehensive Staff Training"],
      priceRange: { min: "₹45,000", max: "₹1,20,000", billingType: "Project Based" },
      timeline: "7 - 14 Days",
      popular: false,
      whatsappMessage: "Hi Mohit, I want an ERP software to manage my builder project inventory, bookings, and payments."
    },
    {
      id: "mobile-apps",
      number: "04",
      title: "Custom Real Estate Mobile Apps",
      hindiTitle: "कस्टम रियल एस्टेट मोबाइल ऐप्स (Android & iOS)",
      tagline: "High-speed native apps for buyers to explore properties, and for agents to manage leads on the go.",
      category: "mobile",
      badge: "Mobile First",
      clientProblem: "Desktop websites don't send instant push notifications when a new high-value property is listed or when a price drops.",
      ourSolution: "Sleek, fluid iOS & Android apps with push notifications, GPS property search, virtual site visits, and instant broker chat.",
      keyFeatures: [
        "Property Buyer App with Filters & Favorites",
        "Agent On-Field Lead Collection App",
        "Builder Real-Time Inventory App",
        "GPS & Map-Based Colony Navigation",
        "Instant Push Notifications for New Projects",
        "Direct In-App Calling & Secure Messaging",
        "Offline-Capable Lead Capture Mode",
        "Fast App Store & Play Store Publishing"
      ],
      subCategories: [
        "Property Buyer App",
        "Broker & Agent Companion App",
        "Builder Executive App",
        "Property Listing Community App",
        "Customer Self-Service Dashboard"
      ],
      deliverables: ["Android APK & iOS App Build", "Google Play Store / Apple App Store Submission", "Push Notification Dashboard Setup", "Admin Web Panel for App Content", "6 Months Maintenance Guarantee"],
      priceRange: { min: "₹40,000", max: "₹95,000", billingType: "Project Based" },
      timeline: "10 - 15 Days",
      popular: false,
      whatsappMessage: "Hi Mohit, I am interested in building a dedicated Real Estate Mobile App."
    },
    {
      id: "whatsapp-automation",
      number: "05",
      title: "AI & Official WhatsApp Cloud API Automation",
      hindiTitle: "AI व ऑफिशियल WhatsApp Cloud API ऑटोमेशन",
      tagline: "Turn your WhatsApp into a 24/7 autonomous sales employee that captures leads, shares brochures, and books site visits.",
      category: "automation",
      badge: "Highest ROI",
      clientProblem: "Buyers message on WhatsApp at 11 PM or on Sundays. If you reply 3 hours late, the buyer has already contacted 3 other brokers.",
      ourSolution: "Official Meta WhatsApp Cloud API (WACA) integration with AI chatbot that answers within 5 seconds, identifies buyer budget, sends project brochures, and books site visit.",
      keyFeatures: [
        "Meta Green-Tick Eligible Cloud API Integration",
        "Instant 24/7 AI Lead Qualification Bot",
        "Automatic PDF Brochure & Rate Card Delivery",
        "Interactive Buttons & List Pickers in WhatsApp",
        "Automated Drip Follow-ups (Day 1, Day 3, Day 7)",
        "Zero Risk of Number Banning (Official Cloud API)",
        "Automatic Google Sheets & CRM Lead Sync",
        "Bulk Verified Broadcasts for New Project Launches"
      ],
      subCategories: [
        "WhatsApp Business Cloud API Setup",
        "AI Property Chatbot & Assistant",
        "Automated Lead Ingestion",
        "Automated Follow-up Sequences",
        "Property Recommendation Engine",
        "Site Visit Booking Bot"
      ],
      deliverables: ["Meta Business Manager Verification Support", "Official WACA Setup on Business Number", "Custom Interactive Chatbot Flow", "Brochure Auto-Sender Engine", "Broadcast Campaign Manager"],
      priceRange: { min: "₹15,000", max: "₹38,000", billingType: "One-time" },
      timeline: "2 - 4 Days",
      popular: true,
      whatsappMessage: "Hi Mohit, I want to automate my Real Estate WhatsApp with an AI chatbot and official Cloud API."
    },
    {
      id: "digital-marketing",
      number: "06",
      title: "Real Estate Digital Ads & Lead Generation",
      hindiTitle: "रियल एस्टेट डिजिटल ऐड्स व हाई-कन्वर्जन लीड जनरेशन",
      tagline: "Stop wasting money on junk leads. Get high-intent property buyers ready to visit your site this weekend.",
      category: "marketing",
      badge: "Immediate Leads",
      clientProblem: "Most digital marketing agencies run generic Facebook ads that bring 'wrong numbers' or tire-kickers with zero buying budget.",
      ourSolution: "Hyper-local geo-targeted Meta & Google Search ad campaigns with budget qualification questions that filter out non-serious inquiries before they reach you.",
      keyFeatures: [
        "High-Intent Google Search Ads (Keywords: 'Plots in [City]', '3BHK Flat near me')",
        "Meta (Facebook & Instagram) Video & Carousel Ads",
        "Hyper-Local Geo-Fencing (5-10 km radius targeting)",
        "Multi-Step Lead Forms with Budget Validation",
        "High-Speed Landing Page Creation",
        "Google Business Profile (GBP) Local SEO Ranking",
        "Instant SMS/WhatsApp Notification on New Lead",
        "Weekly Cost-Per-Lead (CPL) Optimization Report"
      ],
      subCategories: [
        "Google Business Profile Optimization",
        "Local Real Estate SEO",
        "Google Search Ads Management",
        "Meta (Facebook/Instagram) Lead Ads",
        "High-Converting Landing Pages",
        "Targeted Lead Generation Campaigns"
      ],
      deliverables: ["Ad Creatives & Copywriting", "Audience Targeting & Geo-Fencing Setup", "Custom Landing Page", "Ad Account Optimization & Monitoring", "Transparent Lead Tracking Sheet"],
      priceRange: { min: "₹12,000", max: "₹30,000", billingType: "Monthly" },
      timeline: "Live in 48 Hours",
      popular: true,
      whatsappMessage: "Hi Mohit, I need high-intent property buyer leads through Google and Meta Ads."
    },
    {
      id: "branding-creatives",
      number: "07",
      title: "Real Estate Branding & Project Creatives",
      hindiTitle: "प्रॉपर्टी ब्रांडिंग, डिजिटल ब्रोशर्स व 3D क्रिएटिव्स",
      tagline: "Make your real estate project look like an elite landmark with high-end luxury branding and visual presentation.",
      category: "branding",
      badge: "Luxury Aesthetic",
      clientProblem: "Amateur phone photos and cheap banners destroy buyer trust and make premium properties look ordinary.",
      ourSolution: "World-class visual identity, architectural project brochures, social media marketing kits, and cinematic video editing.",
      keyFeatures: [
        "Elite Real Estate Brand Identity & Logo",
        "High-End Digital Project PDF Brochures",
        "Colony Entrance & Hoarding Designs",
        "Social Media Post & Reel Marketing Kits",
        "Property Walkthrough Video Editing & Color Grading",
        "Drone Video Integration & Map Overlays",
        "Floor Plan & Master Layout Enhancement",
        "Ready-to-Print Sales Deck for Broker Offices"
      ],
      subCategories: [
        "Property Posters & Hoardings",
        "Project Brochures & Sales Decks",
        "Social Media Creatives & Reels",
        "Property Video Editing",
        "Drone Video Map Overlays",
        "Logo & Brand Identity"
      ],
      deliverables: ["Print-Ready PDF Master Brochure", "30 Social Media Ready Creatives", "Reels & Video Walkthrough Files", "Colony Hoarding & Banner Templates", "Source Files (Figma / Vector)"],
      priceRange: { min: "₹10,000", max: "₹35,000", billingType: "Project Based" },
      timeline: "3 - 5 Days",
      popular: false,
      whatsappMessage: "Hi Mohit, I want premium branding, brochures, and creatives for my real estate project."
    },
    {
      id: "business-integrations",
      number: "08",
      title: "Tech Integrations, Hosting & Annual Support",
      hindiTitle: "बिज़नेस इंटीग्रेशन्स, क्लाउड होस्टिंग व 24/7 टेक सपोर्ट",
      tagline: "Worry-free technology backbone so you focus 100% on site visits and closing deals.",
      category: "support",
      badge: "Zero Downtime",
      clientProblem: "Websites crash, domain expires, emails bounce, and who do you call when your technical system stops working?",
      ourSolution: "Complete managed technical infrastructure: fast cloud servers, automated backups, Google Workspace emails, and dedicated phone/WhatsApp support.",
      keyFeatures: [
        "Razorpay / Cashfree Payment Gateway Setup",
        "Automated Real-Time Google Sheets Sync",
        "Custom Domain & Professional Google Workspace Email",
        "High-Speed Vercel / AWS Cloud Hosting & CDN",
        "Automated Daily Database Backups",
        "Instant Security Patching & Cloudflare DDOS Shield",
        "Dedicated Emergency Tech Support on Call/WhatsApp",
        "Monthly Health & Speed Optimization Audits"
      ],
      subCategories: [
        "Payment Gateway Setup",
        "Google Sheets & Webhook Integrations",
        "API & Portal Integrations",
        "Cloud Hosting & Fast CDN",
        "Domain & Business Email (@yourcompany.com)",
        "Annual Maintenance & Technical Support"
      ],
      deliverables: ["Full Architecture Setup", "Admin Credentials & DNS Configuration", "Payment Webhook Live Testing", "Security Certificate SSL", "Direct Priority Support SLA"],
      priceRange: { min: "₹8,000", max: "₹25,000", billingType: "Project Based" },
      timeline: "1 - 2 Days",
      popular: false,
      whatsappMessage: "Hi Mohit, I need technical integration, cloud hosting, and tech support for my real estate setup."
    }
  ]
};
