import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b2242",
        mist: "#f7f3ef",
        line: "rgba(11, 34, 66, 0.1)"
      },
      boxShadow: {
        glass: "0 24px 60px rgba(81, 100, 148, 0.14)",
        float: "0 20px 40px rgba(11, 34, 66, 0.08)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.36) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.36) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
