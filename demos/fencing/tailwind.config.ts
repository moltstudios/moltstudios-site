import type { Config } from "tailwindcss"
const config: Config = {content:["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{colors:{primary:{DEFAULT:'#7C3AED',dark:'#6D28D9',light:'#8B5CF6'},accent:{DEFAULT:'#F59E0B',light:'#FCD34D'}}}},plugins:[]}
export default config
