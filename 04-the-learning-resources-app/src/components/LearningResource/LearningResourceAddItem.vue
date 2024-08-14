<script setup>
import { inject, ref } from 'vue';

const isInputValid = ref(true);

const title = defineModel('title', { type: String });
const description = defineModel('description', { type: String });
const link = defineModel('link', { type: String });

const addResource = inject('addResource');

function submitForm() {
  const titleValue = title.value?.trim() || '';
  const descriptionValue = description.value?.trim() || '';
  const linkValue = link.value?.trim() || '';

  if (titleValue === '' || descriptionValue === '' || linkValue === '') {
    isInputValid.value = false;
    return;
  }

  const resource = {
    id: new Date().toISOString(),
    title: title.value,
    description: description.value,
    link: link.value,
  };
  addResource(resource);
}

function confirmError() {
  isInputValid.value = true;
}
</script>

<template>
  <BaseDialog
    v-if="!isInputValid"
    @close-dialog="confirmError"
    title="Invalid Input"
  >
    <template #default>
      <p>Please fill out all fields.</p>
    </template>
    <template #actions>
      <BaseButton @click="confirmError">Confirm</BaseButton>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="title"
        />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          v-model="description"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
          type="url"
          name="link"
          id="link"
          v-model="link"
        />
      </div>
      <div>
        <BaseButton type="submit">Add Resource</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
