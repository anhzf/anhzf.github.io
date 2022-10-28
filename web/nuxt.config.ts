import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetTypography from '@unocss/preset-typography'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
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
          name: 'og:description',
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
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          'data-ad-client': process.env.GOOGLE_DATA_AD_CLIENT,
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
    '~/assets/global.sass'
  ],
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/image-edge'
  ],
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
