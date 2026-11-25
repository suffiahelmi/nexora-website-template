import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexora: {
          midnight: "#060913",
          navy: "#0B1021",
          charcoal: "#111827",
          surface: "#161F33",
          border: "#1E293B",
          electric: "#0066FF",
          cyan: "#00D4FF",
          lime: "#CCFF00",
          emerald: "#10B981",
          text: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "nexora-radial":
          "radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.22) 0%, rgba(11, 16, 33, 0) 70%)",
        "nexora-lime-glow":
          "radial-gradient(circle at 80% 20%, rgba(204, 255, 0, 0.12) 0%, rgba(6, 9, 19, 0) 60%)",
        "nexora-card-gradient":
          "linear-gradient(145deg, rgba(22, 31, 51, 0.75) 0%, rgba(11, 16, 33, 0.9) 100%)",
        "nexora-border-gradient":
          "linear-gradient(135deg, rgba(0, 212, 255, 0.4) 0%, rgba(204, 255, 0, 0.25) 50%, rgba(30, 41, 59, 0.2) 100%)",
      },
      boxShadow: {
        "electric-glow": "0 0 30px -5px rgba(0, 102, 255, 0.45)",
        "cyan-glow": "0 0 25px -4px rgba(0, 212, 255, 0.35)",
        "lime-glow": "0 0 25px -4px rgba(204, 255, 0, 0.35)",
        "panel-depth": "0 20px 50px -12px rgba(2, 6, 23, 0.85)",
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
