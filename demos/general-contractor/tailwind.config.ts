import type { Config } from "tailwindcss"
const config: Config = {content:["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{colors:{primary:{DEFAULT:'#0F172A',dark:'#020617',light:'#334155'},accent:{DEFAULT:'#F59E0B',light:'#FCD34D'}}}},plugins:[]}
export default config
