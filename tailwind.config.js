/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#ECFEFF',
        'secondary-light': '#FFC5E6',
      },
    },
  },
  plugins: [require('daisyui')],
};
