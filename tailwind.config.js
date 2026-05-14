/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem'
      }
    },
  },
  plugins: [],
}
