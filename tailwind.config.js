/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#080C10",
          900: "#0E1318",
          800: "#141C24",
          700: "#1B2430",
          600: "#222D3A",
          500: "#2C3A4A",
        },
        acid: {
          DEFAULT: "#00FFB2",
          dim: "#00CC8E",
          muted: "rgba(0,255,178,0.12)",
        },
        amber: {
          alert: "#FFB800",
          muted: "rgba(255,184,0,0.12)",
        },
        rose: {
          alert: "#FF4B6E",
          muted: "rgba(255,75,110,0.12)",
        },
        sky: {
          accent: "#38BDF8",
          muted: "rgba(56,189,248,0.12)",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.4s ease forwards",
        "pulse-dot": "pulseDot 2s infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(12px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        pulseDot: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.3 } },
      },
    },
  },
  plugins: [],
}