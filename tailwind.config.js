/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code', 'monospace']
      },
      container: {
        center: true,
        padding: '1.25rem'
      }
    },
  },
  plugins: [],
}
