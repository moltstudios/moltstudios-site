import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0EA5E9', dark: '#0284C7', light: '#38BDF8' },
        accent: { DEFAULT: '#06B6D4', light: '#22D3EE' },
        warm: { DEFAULT: '#F59E0B', light: '#FCD34D' },
      },
    },
  },
  plugins: [],
}
export default config
