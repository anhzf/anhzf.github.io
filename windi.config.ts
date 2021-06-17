import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';
import PluginTypography from 'windicss/plugin/typography';
import PluginLineClamp from 'windicss/plugin/line-clamp';

export default defineConfig({
  safelist: ['prose', 'fill-current'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        blob: 'blob 4s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    PluginTypography,
    PluginLineClamp,
  ],
});
