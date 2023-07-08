/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#7C3AED",
        base: {
          text: "#403937",
          label: "#756966",
          border: "#E3E3E3",
        },
      },
      boxShadow: {
        input: "0px 4px 16px rgba(22,22,22,0.1)",
        card: "0px 4px 16px #EAE2FD",
      },
      animation: {
        "right-to-left": "right-to-left 600ms ease-in-out",
        "card-fade-in": "card-fade-in 300ms ease-out",
      },
      keyframes: {
        "right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "card-fade-in": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "75%": { transform: "translateX(-5%)", opacity: 1 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
