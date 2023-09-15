/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orangeYellow": "#FFA500",
        "yellow": "#FFD101",
        "gray": "#33343D",
        "primary": "#5B2E4F",
        "secondary": "#F8F1F6",
        "wine": '#B11226'
      }
    },
  },
  plugins: [],
}
