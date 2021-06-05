/* eslint-env node */
/* eslint-disable no-underscore-dangle */
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import EsLintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      src: path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './'),
    },
  },
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
