/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#62D2A2",
        primary: "#1FAB89",
        secondary: "#9DF3C4",
        accent: "#D7FBE8",
        textColor: "#ffffff",
      }
    },
  },
  plugins: [],
}