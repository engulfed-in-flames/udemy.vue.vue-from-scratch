import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state: {
    counter: 0,
    isAuthenticated: false,
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
    setAuth(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    },
  },
  // The best practice is to use actions to handle asynchronous code
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
    login(context) {
      console.log('A');
      context.commit('setAuth', { isAuthenticated: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuthenticated: false });
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
    userIsAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
