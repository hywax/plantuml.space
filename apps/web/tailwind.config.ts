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
        background: 'rgb(var(--ui-background) / <alpha-value>)',
        foreground: 'rgb(var(--ui-foreground) / <alpha-value>)',
        mantis: {
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
