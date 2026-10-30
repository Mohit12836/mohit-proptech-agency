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
        // Royal Executive Titanium & Champagne Studio Palette
        titanium: {
          base: "#0F172A",     // Soft deep slate-navy (never pitch black)
          depth: "#141E33",    // Subtle section depth
          card: "#1E293B",     // Elevated card background
          cardHover: "#28354D",// Hover elevation
          border: "#334155",   // Visible crisp border
          borderLight: "#475569",
        },
        champagne: {
          50: "#FFFDF5",
          100: "#FEF9E7",
          200: "#FDF0C5",
          300: "#FBE49E",
          400: "#F7D065",     // 24K Accent
          500: "#D4AF37",     // Primary Champagne Gold
          600: "#B89222",
          700: "#916F13",
        },
        emeraldTrust: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          900: "#064E3B",
        },
        readability: {
          heading: "#F8FAFC",  // Crystal Pearl (highest contrast)
          body: "#E2E8F0",     // Crisp Silver Slate (super readable, never muddy)
          subtext: "#CBD5E1",  // Crisp secondary
          muted: "#94A3B8",    // Supporting meta tags
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "shimmer": "shimmer 2.5s infinite linear",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 5s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        }
      }
    },
  },
  plugins: [],
};
