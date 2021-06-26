import { createApp } from 'vue';
import router from 'src/router';
import App from 'src/App.vue';
import EvaIcon from 'components/EvaIcon.vue';
import BlogLayout from './layouts/BlogLayout.vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import 'highlight.js/styles/stackoverflow-dark.css';

const app = createApp(App);

app.use(router);

app.component('EvaIcon', EvaIcon);
app.component('BlogLayout', BlogLayout);

app.mount('#app');