/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'vrg-green': '#2E7D32',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
