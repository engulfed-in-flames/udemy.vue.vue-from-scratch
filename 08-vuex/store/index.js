import { createStore } from 'vuex';

import counterModule from './modules/counter';
import authModule from './modules/auth';

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule,
  },
});

export default store;
