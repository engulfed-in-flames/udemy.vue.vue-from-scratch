<script setup>
import { ref } from 'vue';

const users = ref(['Max', 'Manu', 'Julie', 'Angela', 'Michael']);
const userModel = defineModel();

function addUser() {
  if (Array.isArray(users.value)) {
    users.value.unshift(userModel.value);
    userModel.value = '';
  }
}
function removeUser(currentUser) {
  if (Array.isArray(users.value)) {
    users.value = users.value.filter((user) => user !== currentUser);
  }
}
</script>

<template>
  <TransitionGroup tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </TransitionGroup>
  <div>
    <input type="text" v-model="userModel" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 0.3s ease-in;
}

.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 0.3s ease-out;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: all 0.8s ease-out;
}
</style>
