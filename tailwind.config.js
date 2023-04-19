/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      xl: "1280px",
    },
    extend: {
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        VeryDarkBlue: "  hsl(207, 26%, 17%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: " hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
