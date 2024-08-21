<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// const counter = computed(() => store.state.counter);
const counter = computed(() => store.getters['counter/finalCounter']);

function increment() {
  // store.commit('increment');
  store.dispatch('counter/increment');
}

function increase(number) {
  // store.commit('increase', number);
  store.dispatch('counter/increase', number);
}
</script>

<template>
  <h3>{{ counter }}</h3>
  <button @click="increment">Add One</button>
  <button @click="increase(3)">Add Three</button>
</template>
