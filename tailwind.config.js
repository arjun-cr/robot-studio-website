/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        accent: "#38b2ac",
        dark: "#2d3748",
        light: "#edf2f7",
      },
    },
  },
  plugins: [],
};
