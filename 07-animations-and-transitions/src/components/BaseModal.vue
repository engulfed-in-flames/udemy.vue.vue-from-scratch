<script setup>
const props = defineProps(['open']);
const emit = defineEmits(['close']);

function closeDialog() {
  emit('close');
}
</script>

<template>
  <div class="backdrop" v-if="open" @click="closeDialog"></div>
  <Transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </Transition>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

/* 
.modal-enter-from {}
.modal-enter-to {}
.modal-leave-from {}
.modal-leave-to {} 
.modal-leave-active {}
*/
.modal-enter-active {
  animation: open-modal 0.3s ease-out;
}

.modal-leave-active {
  animation: open-modal 0.3s ease-in reverse;
}

@keyframes open-modal {
  from {
    opacity: 0;
    transform: translateY(-25px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
