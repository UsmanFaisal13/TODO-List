import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        DM_Sans: ['var(--font-dm-sans)'],
        Darker_Grotesque: ['var(--font-darker-grotesque)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
