<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const userIsAuthenticated = computed(
  () => store.getters['auth/userIsAuthenticated']
);

function login() {
  store.dispatch('auth/login');
}

function logout() {
  store.dispatch('auth/logout');
}
</script>

<template>
  <button
    v-if="!userIsAuthenticated"
    @click="login"
  >
    Login
  </button>
  <button
    v-else
    @click="logout"
  >
    Logout
  </button>
</template>
