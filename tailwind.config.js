/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          main: '#182953',
          darker: '#3F3BAA',
          surface: '#DFDEFF'
        },
        secondary: {
          main: '#6DC7FF',
          hover: '#5BA6D4',
          pressed: '#366380',
          surface: '#E2F4FF'
        },
        netral: {
          50: '#FFFFFF',
          100: '#F4F5F6',
          200: '#E5E7EB',
          300: '#D3D6DA',
          400: '#A0A8B0',
          500: '#707784',
          600: '#515966',
          700: '#3B4453',
          800: '#232B39',
          900: '#101623'
        },
        error: {
          main: '#FF3366',
          hover: '#D42B55',
          pressed: '#801933',
          surface: '#FFD6E0',
          border: '#FF7799'
        },
        warning: {
          main: '#FF950A',
          hover: '#D47C08',
          pressed: '#AA7200',
          surface: '#FFEACE',
          border: '#FFB85C'
        },
        success: {
          main: '#2FC29E',
          hover: '#22AA89',
          pressed: '#156653',
          surface: '#D4F5ED',
          border: '#70DDC3'
        },
        info: {
          main: '#0065FF',
          hover: '#0054D4',
          pressed: '#0043AA',
          surface: '#CCE0FF',
          border: '#2A7FFF'
        },
        'vtd-primary': colors.sky, // Light mode Datepicker color
        'vtd-secondary': colors.gray // Dark mode Datepicker color
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
