import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import LoginView from '../views/LoginView.vue';
import TableTickets from '../views/chat/TableTickets.vue';
import MessagesView from '@/views/chat/messages/MessagesView.vue';
import useAuth from '../middleware/auth';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
    beforeEnter: (to, from, next) => {
        useAuth()
        next()
      },
  },
  {
    path: '/messages',
    name: 'Message',
    component: TableTickets,
    beforeEnter: (to, from, next) => {
        useAuth()
        next()
      },
  },
  {
      path: '/support-chat-messages/:id',
      name: 'MessagesView',
      component: MessagesView,
      props: true,
      beforeEnter: (to, from, next) => {
        useAuth()
        next()
      },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
