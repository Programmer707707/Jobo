/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts}",],
  theme: {
    extend: {
      colors:{
        'blue': '#2a68ff',
        'greyish': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}

