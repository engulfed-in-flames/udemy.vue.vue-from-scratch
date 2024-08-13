<script setup>
import ErrorAlert from './ErrorAlert.vue';

import { ref } from 'vue';

const input = ref(null);
const showError = ref(false);

function setGoal() {
  const enteredValue = input.value.value;
  if (enteredValue === '') {
    showError.value = true;
  } else {
    showError.value = false;
  }
}

function confirmError() {
  showError.value = false;
}
</script>

<template>
  <h2>Manage Goals</h2>
  <input
    type="text"
    ref="input"
  />
  <button @click="setGoal">Set Goal</button>
  <Teleport to="body">
    <ErrorAlert v-if="showError">
      <p>Input is empty</p>
      <button @click="confirmError">Okay</button>
    </ErrorAlert>
  </Teleport>
</template>
