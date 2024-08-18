import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      // alias: '/', // URL doesn't change
      // component: TeamsList,
      meta: { needsAuth: true }, // You can stor custom data
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          // Navigation by name is better than by path for maintainability
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    // {
    //   path: '/teams/:teamId',
    //   component: TeamMembers,
    //   props: true,
    // },
    {
      path: '/:notFound(.*)',
      redirect: '/teams',
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  // You can validate the route or authenticate a user here before navigating globally
  next();
});

export default router;
