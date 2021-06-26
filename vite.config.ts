/* eslint-env node */
/* eslint-disable no-underscore-dangle */
import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages';
import WindiCSS from 'vite-plugin-windicss';
import EsLintPlugin from 'vite-plugin-eslint';
import MarkdownItPluginHighlightJs from 'markdown-it-highlightjs';

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
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperComponent: 'BlogLayout',
      wrapperClasses: 'prose',
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
      },
      markdownItSetup(md) {
        md.use(MarkdownItPluginHighlightJs, {});
      },
    }),
    Pages({
      pagesDir: [
        { baseRoute: 'blogs', dir: 'src/pages/blogs' },
      ],
      extensions: ['md'],
      importMode: 'async',
      // extendRoute(route, parent) {
      //   return {
      //     ...route,
      //     // component:
      //   }
      // }
    }),
    WindiCSS(),
    EsLintPlugin({
      fix: true,
      include: [
        'src/**/*.ts',
        'src/**/*.vue',
      ],
    }),
  ],
});
