import { createSSRApp } from 'vue';
import { createHead } from '@vueuse/head';
import router from 'src/router';
import App from 'src/App.vue';
import EvaIcon from 'components/EvaIcon.vue';
import BlogLayout from './layouts/BlogLayout.vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import 'highlight.js/styles/stackoverflow-dark.css';

export const createApp = () => {
  const app = createSSRApp(App);
  const head = createHead();

  app.use(router);
  app.use(head);

  app.component('EvaIcon', EvaIcon);
  app.component('BlogLayout', BlogLayout);

  return {
    app, router,
  };
};

createApp().app.mount('#app');
