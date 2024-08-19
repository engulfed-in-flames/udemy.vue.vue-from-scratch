<script setup>
import UserList from './components/UserList.vue';

import { ref } from 'vue';

const isModalVisible = ref(false);
const isParagraphVisible = ref(true);
const isUsersVisible = ref(true);
const animatedBlock = ref(false);
const enterInterval = ref(null);
const leaveInterval = ref(null);

function showModal() {
  isModalVisible.value = true;
}
function hideModal() {
  isModalVisible.value = false;
}

function animateBlock() {
  animatedBlock.value = !animatedBlock.value;
}

function toggleParagraph() {
  isParagraphVisible.value = !isParagraphVisible.value;
}

function showUsers() {
  isUsersVisible.value = true;
}

function hideUsers() {
  isUsersVisible.value = false;
}

function paragraphBeforeEnter(el) {
  console.log('Before entering');
  el.style.opacity = 0;
  // console.log(el);
}

function paragraphEnterActive(el, done) {
  console.log('Currently entering');
  // console.log(el);

  let round = 1;

  enterInterval.value = setInterval(function () {
    el.style.opacity = round * 0.01;
    round++;

    if (round >= 100) {
      clearInterval(enterInterval.value);
      done();
    }
  }, 20);
}

function paragraphAfterEnter(el) {
  console.log('After entering');
  // console.log(el);
}

function enterCancelled() {
  console.log('Enter cancelled');
  clearInterval(enterInterval.value);
}

function paragraphBeforeLeave(el) {
  console.log('Before Leaving');
  el.style.opacity = 1;
}

function paragraphLeaveActive(el, done) {
  console.log('Currently Leaving');

  let round = 1;

  leaveInterval.value = setInterval(function () {
    el.style.opacity = 1 - round * 0.01;
    round++;

    if (round >= 100) {
      clearInterval(leaveInterval.value);
      done();
    }
  }, 20);
}

function leaveCancelled() {
  // Only available with v-show transitions
  console.log('Leave cancelled');
  clearInterval(leaveInterval.value);
}
</script>

<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <Transition
      :css="false"
      @before-enter="paragraphBeforeEnter"
      @enter="paragraphEnterActive"
      @after-enter="paragraphAfterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="paragraphBeforeLeave"
      @leave="paragraphLeaveActive"
    >
      <p v-if="isParagraphVisible">This is only sometimes visible...</p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <div class="container">
    <!-- In this case, having more than one element is allowed -->
    <Transition name="fade-button" mode="out-in">
      <button v-if="!isUsersVisible" @click="showUsers">Show Users</button>
      <button v-else @click="hideUsers">Hide Users</button>
    </Transition>
  </div>

  <BaseModal @close="hideModal" :open="isModalVisible">
    <p>This is a test modal!</p>
    <button @click="hideModal">Close it!</button>
  </BaseModal>

  <div class="container">
    <button @click="showModal">Show Modal</button>
  </div>

  <div class="container">
    <UserList />
  </div>
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

.animate {
  /* transform: translateX(-150px); */
  /* animation: slide-scale 2s ease-in-out; */
}

/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.fade-button-enter-active,
.fade-button-leave-active {
  transition: opacity 0.3s ease;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  25% {
    transform: translateX(-75px) scale(1.1);
  }

  50% {
    transform: translate(-150px) scale(1);
  }

  75% {
    transform: translateX(-75px) scale(1.1);
  }

  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
