import counterGetters from './getters';
import counterMutations from './mutations';
import counterActions from './actions';

const counterModule = {
  namespaced: true,
  state: {
    counter: 0,
  },
  getters: counterGetters,
  mutations: counterMutations,
  actions: counterActions,
};

export default counterModule;
