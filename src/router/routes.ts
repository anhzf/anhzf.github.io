import type { RouteRecordRaw } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Index',
    component: () => import('pages/Index.vue'),
  },
  ...generatedRoutes,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
