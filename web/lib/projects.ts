export const TECHNOLOGIES = {
  nextjs: {
    title: 'Next.js',
    icon: 'https://nextjs.org/favicon.ico',
    description: 'The React Framework for Production',
    url: 'https://nextjs.org/',
  },
  react: {
    title: 'React',
    icon: 'https://reactjs.org/favicon.ico',
    description: 'A JavaScript library for building user interfaces',
    url: 'https://reactjs.org/',
  },
  tailwindcss: {
    title: 'Tailwind CSS',
    icon: 'https://tailwindcss.com/favicons/favicon.ico?v=3',
    description: 'A utility-first CSS framework for rapidly building custom designs',
    url: 'https://tailwindcss.com/',
  },
  nuxtjs: {
    title: 'Nuxt.js',
    icon: '/assets/icons/nuxt.svg',
    description: 'The Intuitive Vue Framework',
    url: 'https://nuxtjs.org/',
  },
  quasar: {
    title: 'Quasar',
    icon: 'https://raw.githubusercontent.com/quasarframework/quasar-art/master/dist/32/logo.png',
    description: 'Developer-oriented, front-end framework with VueJS components for best-in-class high-performance, responsive websites, PWA, SSR, Mobile and Desktop apps, all from the same codebase. Sensible people choose Vue. Productive people choose Quasar. Be both.',
    url: 'https://quasar.dev/',
  },
  firebase: {
    title: 'Firebase',
    icon: '/assets/icons/firebase.svg',
    description: 'Firebase is a platform developed by Google for creating mobile and web applications',
    url: 'https://firebase.google.com/',
  },
  vue: {
    title: 'Vue.js',
    icon: 'https://vuejs.org/logo.svg',
    description: 'The Progressive JavaScript Framework',
    url: 'https://vuejs.org/',
  },
  laravel: {
    title: 'Laravel',
    icon: 'https://laravel.com/img/favicon/favicon-32x32.png',
    description: 'The PHP Framework For Web Artisans',
    url: 'https://laravel.com/',
  },
  directus: {
    title: 'Directus',
    icon: 'https://directus.io/favicon.ico',
    description: 'Open-Source Data Platform',
    url: 'https://directus.io/',
  },
  capacitor: {
    title: 'Capacitor',
    icon: 'https://capacitorjs.com/apple-icon-180x180.png',
    description: 'Build cross-platform Native Progressive Web Apps for iOS, Android, and the Web with web technology',
    url: 'https://capacitorjs.com/',
  },
  unocss: {
    title: 'UnoCSS',
    icon: 'https://unocss.dev/favicon.svg',
    description: 'UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.',
    url: 'https://unocss.dev/',
  },
  'gh-actions': {
    title: 'GitHub Actions',
    icon: 'https://github.githubassets.com/assets/actions-icon-actions-61925a4b8822.svg',
    description: 'Automate your workflow from idea to production',
    url: 'https://github.com/features/actions',
  },
  pwa: {
    title: 'Progressive Web App',
    icon: 'https://raw.githubusercontent.com/webmaxru/progressive-web-apps-logo/master/pwalogo.svg',
    description: 'Progressive Web Apps are user experiences that have the reach of the web, and are reliable, fast, and engaging.',
    url: 'https://web.dev/progressive-web-apps/',
  },
  vuetify: {
    title: 'Vuetify',
    icon: 'https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg',
    description: 'Material Design Component Framework',
    url: 'https://vuetifyjs.com/',
  },
  mui: {
    title: 'Material-UI',
    icon: 'https://mui.com/static/favicon.ico',
    description: 'React components for faster and easier web development. Build your own design system, or start with Material Design.',
    url: 'https://mui.com/',
  },
  contentful: {
    title: 'Contentful',
    icon: 'https://www.contentful.com/android-chrome-192x192.png',
    description: 'Contentful is a content platform to create, manage and distribute content to any platform.',
    url: 'https://www.contentful.com/',
  },
  kotlin: {
    title: 'Kotlin',
    icon: 'https://kotlinlang.org/assets/images/favicon.svg?v2',
    description: 'It\'s concise, safe, interoperable with Java and other languages, and provides many ways to reuse code between multiple platforms for productive programming.',
    url: 'https://kotlinlang.org/'
  },
};

export const TECHNOLOGY_NAMES = Object.keys(TECHNOLOGIES) as (keyof typeof TECHNOLOGIES)[];