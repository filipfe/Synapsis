/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB200',
        secondary: '#0091D0'
      }
    },
  },
  plugins: [],
}
