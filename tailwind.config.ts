import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(14.1px)',
      },
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'custom': 'rgba(255, 255, 255, 0.75)',
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #1565C0, #b92b27)",
        "custom-green-gradient": "linear-gradient(to right, #38ef7d, #11998e)",
        "custom-orange-gradient": "linear-gradient(to right, #f5af19, #f12711)",
        "custom-main-gradient": "linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)",
        'pinned-dark': "linear-gradient(119deg, #4b57c4, #1f85ce 30%, #7d14a6 42%, #860f3c 63%, #12082d 73%)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pointer-animation": {
          "0%": { left: "170px", top: "60px" },
          "25%": { left: "30px", top: "100px" },
          "50%": { left: "205px", top: "165px" },
          "75%": { left: "100px", top: "195px" },
          "100%": { left: "170px", top: "60px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pointer-animation": "pointer-animation 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
