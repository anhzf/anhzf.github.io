import { createApp } from 'vue';
import router from 'src/router';
import App from './App.vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
