import { Outfit } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "soft-blue": "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      "very-dark-blue": {
        DEFAULT: "hsl(217, 54%, 11%)",
        card: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
export default config;
