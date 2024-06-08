/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

const FONT_FAMILY = 'Roboto'
const FONT_FAMILY_SERIF = 'Roboto-Slab'

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '500px',
        mg: '900px',
        '3xl': '1920px',
        '4xl': '2560px'
      },
      maxWidth: {
        '8xl': '100rem',
        '9xl': '120rem',
        '10xl': '140rem'
      },
      fontFamily: {
        sans: [`${FONT_FAMILY}`, ...defaultTheme.fontFamily.sans],
        serif: [`${FONT_FAMILY_SERIF}`, ...defaultTheme.fontFamily.serif]
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        h6: '2rem'
      }
    }
  },
  plugins: []
}
