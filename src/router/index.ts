import { createRouter, createWebHistory } from 'vue-router';
import routes from 'src/router/routes';

export default createRouter({
  history: createWebHistory(),
  routes,
});
