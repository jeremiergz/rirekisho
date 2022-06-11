const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#17365c',
        'primary-dark': '#007ac1',
        secondary: '#31859a',
        'secondary-dark': '#67daff',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        title: ["'Baloo Bhaina 2', cursive"],
      },
      fontSize: {
        '2xs': ['10px', '14px'],
      },
    },
    screens: {
      xs: '320px',
      '2xs': '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};
