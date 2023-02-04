/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 300ms linear infinite', 
      },
      screens: {
        's': '375px'
      }
    },
  },
  plugins: [],
}
