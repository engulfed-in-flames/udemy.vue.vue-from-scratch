import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      if (typeof payload === 'number') {
        state.counter += payload;
      }
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
  },
};

const authModule = {
  namespaced: true,
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    },
  },
  // The best practice is to use actions to handle asynchronous code
  actions: {
    login(context) {
      context.commit('setAuth', { isAuthenticated: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuthenticated: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
};

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule,
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
