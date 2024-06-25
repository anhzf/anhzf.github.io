import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetTypography from '@unocss/preset-typography'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

const IGNORED_CUSTOM_ELEMENTS = Object.freeze([
  'amp-auto-ads'
]);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  modules: ['@nuxthq/studio', '@nuxt/content', '@vueuse/nuxt', // '@nuxt/image-edge'
    '@unocss/nuxt', "@nuxt/image"],
  unocss: {
    presets: [
      presetUno(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          sans: 'Inter:400,500,600,700,800,900',
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  },
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