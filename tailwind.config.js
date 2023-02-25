const windmill = require('@windmill/react-ui/config')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = windmill({
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'login-back': "url('/images/login_dash.jpg')",
      }
    },
    fontFamily: {
      sans: ['montserrat', ...defaultTheme.fontFamily.sans],
    },

   
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
      bluegray: colors.blueGray,
      rose: colors.rose,
      indigo: colors.indigo,
      primary: '#33c5f4'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide')
  ],
})
