/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: "#0a0a0a",
        obsidian: "#111111",
        ember: "#c8922a",
        gold: "#e8b84b",
        cream: "#f5ead6",
        smoke: "#2a2a2a",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200, 146, 42, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(200, 146, 42, 0)" },
        },
      },
    },
  },
  plugins: [],
};
