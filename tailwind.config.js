const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'white': "#fff",
        'black': '#000',
        'blue-dark': '#005da8',
        'blue-light': '#2ebcfe',
        'blue-darker': '#0e0e4d',
        'orange': '#ef3c39',
        'red': '#ef4444',
      },
      fontFamily: {
        default: ['Open Sans', 'sans-serif'],
      },
      content: {
        'empty': '""',
        'triangle-red': 'url(\'@/assets/images/icons/triangle-red.svg\')'
      },
      skew: {
        ...defaultTheme.skew,
        '20': '20deg'
      },
      spacing: {
        ...defaultTheme.spacing,
        '160': '40rem',
        '140': '35rem',
        '128': '32rem',
        '52': '13rem'
      },

    },
  },
  plugins: [],
}