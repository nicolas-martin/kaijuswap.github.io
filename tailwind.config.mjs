import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "3xs": "350px",
      "2xs": "400px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // Cyberpunk/Neon-noir palette
        "midnight-navy": "#0A0F24",
        "deep-cerulean": "#112240", 
        "neon-cyan": "#00E5FF",
        "hot-pink": "#FF2D95",
        "electric-magenta": "#FF6F61",
        
        // Custom theme overrides
        primary: "#00E5FF", // Neon Cyan
        secondary: "#FF2D95", // Hot Pink
        accent: "#FF6F61", // Electric Magenta
        neutral: "#112240", // Deep Cerulean
        "base-100": "#0A0F24", // Midnight Navy
        "base-200": "#112240", // Deep Cerulean
        "base-300": "#1a2b4a",
        "base-content": "#e2e8f0", // Off-white
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        cyberpunk: ["Orbitron", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'cyberpunk-gradient': 'linear-gradient(180deg, #112240 0%, #0A0F24 100%)',
        'neon-glow': 'radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, transparent 70%)',
        'pink-glow': 'radial-gradient(circle, rgba(255, 45, 149, 0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.3), 0 0 60px rgba(0, 229, 255, 0.1)',
        'neon-pink': '0 0 20px rgba(255, 45, 149, 0.5), 0 0 40px rgba(255, 45, 149, 0.3), 0 0 60px rgba(255, 45, 149, 0.1)',
        'neon-magenta': '0 0 20px rgba(255, 111, 97, 0.5), 0 0 40px rgba(255, 111, 97, 0.3)',
        'cyberpunk': 'inset 0 1px 0 rgba(0, 229, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite alternate",
        "rain-drop": "rainDrop 1s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        neonPulse: {
          "0%": { 
            textShadow: "0 0 5px rgba(0, 229, 255, 0.5), 0 0 10px rgba(0, 229, 255, 0.5), 0 0 15px rgba(0, 229, 255, 0.5)",
            boxShadow: "0 0 5px rgba(0, 229, 255, 0.3)"
          },
          "100%": { 
            textShadow: "0 0 10px rgba(0, 229, 255, 0.8), 0 0 20px rgba(0, 229, 255, 0.8), 0 0 30px rgba(0, 229, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 229, 255, 0.5)"
          }
        },
        rainDrop: {
          "0%": { transform: "translateY(-100vh) translateX(0)", opacity: "0.7" },
          "100%": { transform: "translateY(100vh) translateX(50px)", opacity: "0" }
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 229, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.6), 0 0 30px rgba(0, 229, 255, 0.4)" }
        }
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        cyberpunk: {
          "primary": "#00E5FF",
          "secondary": "#FF2D95", 
          "accent": "#FF6F61",
          "neutral": "#112240",
          "base-100": "#0A0F24",
          "base-200": "#112240", 
          "base-300": "#1a2b4a",
          "base-content": "#e2e8f0",
          "info": "#00E5FF",
          "success": "#00FF88",
          "warning": "#FFD700",
          "error": "#FF2D95",
        },
      },
    ],
  },
};