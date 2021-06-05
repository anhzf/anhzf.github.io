import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Index',
    component: () => import('pages/Index.vue'),
  },
];

export default routes;
