export default {
  nuxtSiteConfig: {
    name: 'PlantUML',
    description: 'My site description',
  },
  app: {
    title: 'PlantUML',
    footer: {
      copyright: 'PlantUML.space by',
      epistle: 'From developer to other developers',
      github: 'Github Repository',
      boosty: 'Donate with Boosty',
      personal: 'Visit Personal Website',
    },
  },
  elements: {
    toggleTheme: {
      title: 'Theme',
      light: 'Switch to Light Mode',
      dark: 'Switch to Dark Mode',
    },
    activity: {
      title: 'Github Repository',
      description: 'Rated Best Over {star} Stars',
    },
    account: {
      singUp: 'Sign Up',
    },
    language: {
      title: 'Language',
      description: 'Select your language',
      select: 'Select {0} Language',
    },
  },
  home: {
    breadcrumb: 'Home',
    hero: {
      title1: 'From Mind to',
      title2: 'Diagram',
      description: 'A collection of PlantUML diagrams showcasing various types, including sequence, class, and use case diagrams. Explore and learn from examples.',
      button: 'Explore Diagrams',
      github: 'Star on Github',
    },
  },
  diagrams: {
    title: 'Diagrams',
    breadcrumb: 'Diagrams',
    activity: {
      breadcrumb: 'Activity',
    },
  },
  themes: {
    title: 'Themes',
    breadcrumb: 'Themes',
  },
  integrations: {
    title: 'Integrations',
    breadcrumb: 'Integrations',
  },
}
