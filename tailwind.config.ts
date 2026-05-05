import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16202f",
        ledger: "#eef0e6",
        brass: "#b68b45",
        signal: "#0f766e",
        slateblue: "#40556f",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 70px rgba(22, 32, 47, 0.13)",
      },
      backgroundImage: {
        "ledger-grid":
          "linear-gradient(rgba(22,32,47,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,32,47,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
