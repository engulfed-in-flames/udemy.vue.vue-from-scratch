<script setup>
import BaseCard from './Base/BaseCard.vue';

import { ref } from 'vue';

const goals = ref(['Finish the course', 'Learn Vue']);
</script>

<template>
  <BaseCard>
    <ul>
      <li
        v-for="goal in goals"
        :key="goal"
      >
        <slot :item="goal"></slot>
      </li>
    </ul>
  </BaseCard>
</template>
