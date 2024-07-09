const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      
      rotate: {
          '210': '210deg',
      },

      fontFamily: {
        sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: ({ colors }) => ({
        background: "#0E0202",
        foreground: "#FBFBFB",
        gray: {
          ...colors.gray,
          800: "#645F6E",
        },
        purple: {
          500: "#6665E9",
        },
        cardBackground: "#0C0C2F",
        tableTop: "#38384C",
        tableBottom: "#1E1A26",
        tableText: "#A5A0B5",
        
      }),
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            }
          ),
        }
      );
    }),
  ],
};
