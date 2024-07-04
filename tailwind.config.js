/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monument': ['Monument Extended', 'sans-serif'],
      },
      colors: {
        btncl: '#4A36DD'
      }
    },
  },
  plugins: [],
}
