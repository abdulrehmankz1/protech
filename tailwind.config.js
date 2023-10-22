/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '100px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1500px'
      },
    },
  },
  plugins: [],
}