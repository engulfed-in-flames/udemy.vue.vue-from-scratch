<script setup>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const userIsAuthenticated = computed(
  () => store.getters['auth/userIsAuthenticated']
);
</script>

<template>
  <BaseContainer
    v-if="userIsAuthenticated"
    title="Vuex"
  >
    <TheCounter />
    <FavoriteValue />
  </BaseContainer>
  <BaseContainer title="Auth">
    <UserAuth />
  </BaseContainer>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
