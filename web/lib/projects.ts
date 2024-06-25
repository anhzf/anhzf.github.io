export const TECHNOLOGIES = {
  nextjs: {
    title: 'Next.js',
    icon: 'https://nextjs.org/static/favicon/favicon-32x32.png',
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
    icon: 'https://www.gstatic.com/devrel-devsite/prod/vc5df62aff689c916c31b2ac1e49a7e8c5ecada1bb13dcdd68aaefb1e1e9b9ec0/firebase/images/favicon.png',
    description: 'Firebase is a platform developed by Google for creating mobile and web applications',
    url: 'https://firebase.google.com/',
  },
  vue: {
    title: 'Vue.js',
    icon: '/assets/icons/vue.svg',
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
};

export const TECHNOLOGY_NAMES = Object.keys(TECHNOLOGIES) as (keyof typeof TECHNOLOGIES)[];