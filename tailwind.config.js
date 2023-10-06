/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Amiko", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ff4444",
        primaryHover: "#ffaaaa",
        secondary: "#ff0000",
      },
    },
  },
  plugins: [],
};
