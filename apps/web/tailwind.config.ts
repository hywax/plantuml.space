import type { Config } from 'tailwindcss'
// @ts-expect-error no declared types at this time
import primeui from 'tailwindcss-primeui'

export default <Partial<Config>>{
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  plugins: [primeui],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1920px',
    },
  },
}
