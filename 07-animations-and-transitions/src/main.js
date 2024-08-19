import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import Users from './pages/Users.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Users,
    },
    {
      path: '/goals',
      component: CourseGoals,
    },
  ],
});

const app = createApp(App).use(router).component('BaseModal', BaseModal);

router.isReady().then(function () {
  app.mount('#app');
});
