<script setup>
import UserItem from '../users/UserItem.vue';

import { ref, inject, watch } from 'vue';
// import { useRoute } from 'vue-router';

const teamName = ref('');
const members = ref([]);
const teams = inject('teams');
const users = inject('users');

// const route = useRoute();
// loadTeamMembers(route.params.teamId);

const props = defineProps(['teamId']);
loadTeamMembers(props.teamId);

watch(
  // () => route.params.teamId,
  () => props.teamId,
  (newTeamId) => {
    loadTeamMembers(newTeamId);
  }
);

function loadTeamMembers(teamId) {
  const currentTeam = teams.value.find((team) => team.id === teamId);

  if (!currentTeam) {
    teamName.value = 'Team not found';
    members.value = [];
    console.warn(`Team with ID ${teamId} not found.`);

    return;
  }

  teamName.value = currentTeam.name;
  members.value = users.value.filter((user) =>
    currentTeam.members.includes(user.id)
  );
}
</script>

<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <UserItem
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      />
    </ul>
    <RouterLink to="/teams/t2">Go to Team 2</RouterLink>
  </section>
</template>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
