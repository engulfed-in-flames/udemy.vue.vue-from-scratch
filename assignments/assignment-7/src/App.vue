<script setup>
import { reactive, ref } from 'vue';

const showGoals = ref(false);
const courseGoal1 = ref('Finish the course and learn Vue!');
const courseGoal2 = ref({ goal: 'Master Vue and build amazing apps!' });
const courseGoal3 = reactive({ goal: "Understand Vue's composition API" });

function toggleGoal() {
  showGoals.value = !showGoals.value;
}
</script>

<template>
  <h2>My Course Goals</h2>
  <p>My goals for this course are:</p>
  <button @click="toggleGoal">
    {{ showGoals ? 'Hide Goals' : 'Show Goals' }}
  </button>
  <div v-if="showGoals">
    <h3>{{ courseGoal1 }}</h3>
    <h3>{{ courseGoal2.goal }}</h3>
    <h3>{{ courseGoal3.goal }}</h3>
  </div>
</template>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
