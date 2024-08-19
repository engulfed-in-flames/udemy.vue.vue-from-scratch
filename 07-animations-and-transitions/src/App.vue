<script setup>
import { ref } from 'vue';
</script>

<template>
  <!-- 
   <Transition name="route">
    <RouterView />
  </Transition> 
  -->
  <RouterView v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </Transition>
  </RouterView>
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.route-enter-active {
  animation: fade-route 0.25s ease-out;
}

.route-leave-active {
  animation: fade-route 0.25s ease-in reverse;
}

@keyframes fade-route {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
