<script setup>
import BaseCard from './Base/BaseCard.vue';
import BaseBadge from './Base/BaseBadge.vue';

const props = defineProps(['fullName', 'infoText', 'role']);
</script>

<template>
  <section>
    <BaseCard>
      <template #header>
        <h3>{{ props.fullName }}</h3>
        <BaseBadge
          :type="props.role"
          :caption="props.role.toUpperCase()"
        />
      </template>
      <template #default>
        <p>{{ props.infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>
