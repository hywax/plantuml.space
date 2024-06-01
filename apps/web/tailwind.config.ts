import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'electric-violet': {
          50: '#f4f2ff',
          100: '#eae8ff',
          200: '#d7d4ff',
          300: '#bab1ff',
          400: '#9785ff',
          500: '#6c47ff',
          600: '#6430f7',
          700: '#561ee3',
          800: '#4818bf',
          900: '#3c169c',
          950: '#230b6a',
        },
        'mantis': {
          50: '#f6faf3',
          100: '#e9f5e3',
          200: '#d3eac8',
          300: '#afd89d',
          400: '#82bd69',
          500: '#61a146',
          600: '#4c8435',
          700: '#3d692c',
          800: '#345427',
          900: '#2b4522',
          950: '#13250e',
        },
      },
    },
  },
}
