<script setup>
import ResourceItem from './LearningResourceItem.vue';

import { inject } from 'vue';

const resources = inject('storedResources');
</script>
<template>
  <ul>
    <ResourceItem
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
