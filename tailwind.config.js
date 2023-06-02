/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      },
      spacing: {
        'big': '48rem',
      },
    },
  },
  plugins: [],
}

