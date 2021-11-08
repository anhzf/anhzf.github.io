import { ViteSSG } from 'vite-ssg';
import routes from 'src/router/routes';
import App from 'src/App.vue';
import BlogLayout from 'src/layouts/BlogLayout.vue';
import EvaIcon from 'components/EvaIcon.vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import 'animate.css';

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to) {
      return {
        el: to.hash || '#main',
        top: 64,
        behavior: 'smooth',
      };
    },
  },
  ({ app }) => {
    app.component('EvaIcon', EvaIcon);
    app.component('BlogLayout', BlogLayout);
  },
);
