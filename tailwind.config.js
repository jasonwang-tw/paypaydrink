// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      main: {
        100: 'var(--color-main-100)',
        900: 'var(--color-main-900)',
      },
      sub: {
        100: 'var(--color-sub)',
      },
      line: {
        100: 'var(--color-line)',
      },
      sup1: {
        100: 'var(--color-sup1-100)',
        500: 'var(--color-sup1-500)',
      },
      sup2: {
        100: 'var(--color-sup2)',
      },
      sup3: {
        100: 'var(--color-sup3)',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
