import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        surface: "#111116",
        surface_hover: "#1a1a21",
        border_col: "#2A2A35",
        accent_flame: "#FF5A00",
        accent_flow: "#00D2FF",
        text_primary: "#EDEDF0",
        text_secondary: "#A0A0B0"
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
