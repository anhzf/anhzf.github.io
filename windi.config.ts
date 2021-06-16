import { defineConfig } from 'windicss/helpers';
import PluginTypography from 'windicss/plugin/typography';

export default defineConfig({
  safelist: ['prose'],
  plugins: [
    PluginTypography,
  ],
});
