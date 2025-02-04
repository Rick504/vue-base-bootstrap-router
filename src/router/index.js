import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routesConfig = [
  {
    prefix: '/carros',
    routes: [
      {
        path: 'bmw',
        name: 'bwm',
        component: () => import('../views/carros/Bmw.vue'),
      },
      {
        path: 'bmw-black',
        name: 'bmw-black',
        component: () => import('../views/carros/BmwBlack.vue'),
      },
    ],
  },
  {
    prefix: '/motos',
    routes: [
      {
        path: 'cg-160',
        name: 'cg-160',
        component: () => import('../views/motos/Cg160.vue'),
      },
      {
        path: 'biz-125',
        name: 'biz-125',
        component: () => import('../views/motos/Biz125.vue'),
      },
    ],
  },
];

const routes = [
  { path: '/', name: 'home', component: HomeView },
  ...routesConfig.flatMap((group) =>
    group.routes.map((route) => ({
      path: `${group.prefix}/${route.path}`,
      name: route.name,
      component: route.component,
    }))
  ),
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
