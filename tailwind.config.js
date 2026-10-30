/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Master 60-30-10 Luxury PropTech Palette
        navy: {
          900: "#0E1B2B",     // Deep Footer Navy
          800: "#14283F",     // Deep Royal Navy (30% Anchor)
          700: "#1B3554",     // Navy Card on Dark Sections
          600: "#24456D",
        },
        ivory: {
          50: "#FCFCFA",
          100: "#F7F8F6",    // Soft Ivory Canvas (60% Main Light Background)
          200: "#EFF1EC",
        },
        iceBlue: {
          50: "#F4F7F9",
          100: "#E9F0F3",    // Ice Blue Grey (Alternate Light Section Background)
          200: "#D5E2E8",
        },
        emerald: {
          500: "#12786F",    // Premium Emerald (Primary Action Accent)
          600: "#0E635C",
          700: "#0A4A45",
        },
        gold: {
          400: "#D4AF7A",
          500: "#C39A61",    // Muted Gold (Micro-Highlights)
          600: "#A98048",
        },
        charcoal: {
          900: "#182B3C",    // Main Dark Text (AAA Contrast on Light)
          800: "#2D3E4E",
          600: "#526475",    // Secondary Text on Light
          400: "#8B98A5",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "soft-card": "0 4px 20px -2px rgba(20, 40, 63, 0.06), 0 2px 6px -1px rgba(20, 40, 63, 0.04)",
        "soft-card-hover": "0 12px 32px -4px rgba(20, 40, 63, 0.12), 0 4px 12px -2px rgba(20, 40, 63, 0.06)",
        "navy-card": "0 10px 30px -5px rgba(0, 0, 0, 0.4)",
      }
    },
  },
  plugins: [],
};
