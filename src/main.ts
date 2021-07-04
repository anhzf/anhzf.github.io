import { ViteSSG } from 'vite-ssg';
import routes from 'src/router/routes';
import App from 'src/App.vue';
import BlogLayout from 'src/layouts/BlogLayout.vue';
import EvaIcon from 'components/EvaIcon.vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import 'highlight.js/styles/stackoverflow-dark.css';

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    app.component('EvaIcon', EvaIcon);
    app.component('BlogLayout', BlogLayout);
  },
);
