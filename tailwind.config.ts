// tailwind.config.ts
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
        'accent': '#BADD78',
        'accent-light': '#D1F08E',
        'bg-primary': '#191A1D',
        'bg-secondary': '#242528',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A9A9AA', // Użyłem text-secondary jako zamiennik var(--text-light)
        'bg-light': '#2B2B2B',       // Kolor z Twojego SCSS, używany w gradiencie i ramce
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        mono: ["var(--font-secondary)"],
      },
      backgroundImage: {
        // Tłumaczenie 1:1 Twojego gradientu stożkowego
        'radar-soft-gradient': "conic-gradient(from 90deg at 50% 50%, theme('colors.accent') 0%, theme('colors.bg-light') 50%, theme('colors.accent') 100%)",
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
        'spin': 'spin 4s linear infinite', // Animacja z Twojego SCSS
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '200% 50%' },
        },
        spin: { // Definicja animacji z Twojego SCSS
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;