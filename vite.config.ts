import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import EsLintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    WindiCSS(),
    EsLintPlugin({
      fix: true,
      exclude: [
        'node_modules',
        '**/*.css',
      ],
    }),
  ],
});
