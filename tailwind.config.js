/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray: "#888888",
        blue: "#444DCB",
        succes: "#3A9661",
      }
    },
  },
  plugins: [],
}