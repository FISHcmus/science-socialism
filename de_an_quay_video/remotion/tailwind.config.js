/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ds: {
          darkest: "#F7F3EE",
          dark: "#EDE8E0",
          bronze: "#92400E",
          "warm-gold": "#B45309",
          gold: "#D97706",
          "light-gold": "#FEF3C7",
          white: "#111827",
          body: "#374151",
          muted: "#6B7280",
          "vn-red": "#B91C1C",
        },
      },
      fontFamily: {
        sans: ["'Be Vietnam Pro'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
