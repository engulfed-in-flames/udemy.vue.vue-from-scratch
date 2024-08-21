export default {
  increment(state) {
    state.counter++;
  },
  increase(state, payload) {
    if (typeof payload === 'number') {
      state.counter += payload;
    }
  },
};
