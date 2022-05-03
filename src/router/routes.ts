import generatedRoutes from 'virtual:generated-pages';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('pages/Index.vue'),
      },
      {
        path: '/links',
        name: 'Links',
        component: () => import('pages/Links.vue'),
      },
      ...generatedRoutes,
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue'),
      },
    ],
  },
  {
    path: '/happyIedMubarak1443',
    component: () => import('pages/creations/HappyIedMubarak1443.vue'),
  },
];

export default routes;
