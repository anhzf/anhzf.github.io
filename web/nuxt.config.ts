const IGNORED_CUSTOM_ELEMENTS = Object.freeze([
  'amp-auto-ads'
]);

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    googleAdClient: process.env.GOOGLE_AD_CLIENT,
  },
  app: {
    head: {
      title: 'anhzf Personal Website',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'The Software Developer Site — Project, Blog, Portfolio, and Whatever I want to share 😁',
        },
        {
          name: 'image',
          content: '/favicon.ico',
        },
        {
          name: 'og:image',
          content: '/favicon.ico',
        },
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-FKDR98EN74'
        },
        { src: '/ga.js' },
        {
          async: true,
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_AD_CLIENT}`,
        },
        {
          async: true,
          src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js',
          // @ts-ignore
          'custom-element': 'amp-auto-ads',
        },
      ],
    }
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/global.scss'
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => IGNORED_CUSTOM_ELEMENTS.includes(tag),
    }
  },
  modules: [
    '@nuxthq/studio',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    "@nuxt/image"
  ],
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      }
    },
    highlight: {
      theme: 'monokai',
    }
  },
})