/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6DC5D1",
        secondary: "#FDE49E",
        accent: "#FEB941",
        dark: "#DD761C",
      },
    },
  },
  plugins: [],
}