<script setup>
import LearningResourceList from './LearningResourceList.vue';
import LearningResourceAddItem from './LearningResourceAddItem.vue';

import { computed, markRaw, provide, ref } from 'vue';

const storedResources = ref([
  {
    id: 'vue',
    title: 'Vue.js - Official Guide',
    description: 'The official Vue.js documentation.',
    link: 'https://v3.vuejs.org/',
  },
  {
    id: 'google',
    title: 'Google',
    description: 'Learn to google...',
    link: 'https://google.com',
  },
]);

const selectedTab = ref(markRaw(LearningResourceList));

const isListSelected = computed(() => {
  return selectedTab.value === LearningResourceList ? null : 'flat';
});

const isAddItemSelected = computed(() => {
  return selectedTab.value === LearningResourceAddItem ? null : 'flat';
});

function setSelectedTab(tab) {
  selectedTab.value = markRaw(tab);
}

function addResource(resource) {
  storedResources.value.unshift(resource);
  selectedTab.value = markRaw(LearningResourceList);
}

function removeResource(resourceID) {
  storedResources.value = storedResources.value.filter(
    (resource) => resource.id !== resourceID
  );
  // const resourceIndex = storedResources.value.findIndex(
  //   (resource) => resource.id === resourceID
  // );
  // storedResources.value.splice(resourceIndex, 1);
}

provide('storedResources', storedResources);
provide('addResource', addResource);
provide('removeResource', removeResource);
</script>

<template>
  <BaseCard>
    <BaseButton
      :mode="isListSelected"
      @click="setSelectedTab(LearningResourceList)"
      >Stored Resources
    </BaseButton>
    <BaseButton
      :mode="isAddItemSelected"
      @click="setSelectedTab(LearningResourceAddItem)"
      >Add Resource
    </BaseButton>
  </BaseCard>
  <KeepAlive>
    <component :is="selectedTab" />
  </KeepAlive>
</template>
