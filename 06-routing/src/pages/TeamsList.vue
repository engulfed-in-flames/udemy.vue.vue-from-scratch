<script setup>
import TeamsItem from '../components/teams/TeamsItem.vue';

import { inject } from 'vue';

const teams = inject('teams');
</script>

<template>
  <RouterView />
  <ul>
    <TeamsItem
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
