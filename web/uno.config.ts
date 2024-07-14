import {
  defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup,
} from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter Tight:400,500,600,700,800,900',
        serif: 'Cabin:400',
      },
      timeouts: false,
    }),
    presetForms(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});