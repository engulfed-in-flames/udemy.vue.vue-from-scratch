<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const counter = computed(() => store.getters['counter/normalizedCounter']);
</script>

<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>
