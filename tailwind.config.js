/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          primary: '#7A735B',
          secondary: '#9A9283',
          background: '#E8E6E3',
        }
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
        'body': ['serif'],
      },
    },
  },
  plugins: [],
}