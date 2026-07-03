import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        dark: "hsl(var(--dark))",
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        heading: ["Bebas Neue", "cursive"],
        display: ["Barlow", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-up-delay-1": "fade-up 0.6s 0.1s ease-out forwards",
        "fade-up-delay-2": "fade-up 0.6s 0.2s ease-out forwards",
        "fade-up-delay-3": "fade-up 0.6s 0.3s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
