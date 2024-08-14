<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>
