export default defineAppConfig({
  ui: {
    primary: 'mantis',
    gray: 'neutral',
    icons: {
      dynamic: true,
    },
    variables: {
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)',
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: 'var(--color-gray-200)',
      },
      header: {
        height: '4rem',
      },
      footer: {
        height: '4rem',
      },
    },
  },
})
