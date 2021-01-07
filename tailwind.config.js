// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      mainColor: {
        100: '#336699',
        900: '#070150',
      },
      subColor: {
        100: '#F39519',
      },
      line: {
        100: '#CECCCC',
      },
      support1: {
        100: '#57C4E5',
        500: '#4197B1',
      },
      support2: {
        100: '#D9E9FE',
      },
      support3: {
        100: '#AFC8E9',
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
