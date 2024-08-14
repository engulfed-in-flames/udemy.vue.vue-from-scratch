<script setup>
import { inject } from 'vue';

const props = defineProps({
  resource: Object,
});

const removeResource = inject('removeResource');
</script>

<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ props.resource.title }}</h3>
        <BaseButton
          @click="removeResource(props.resource.id)"
          mode="flat"
          >Delete
        </BaseButton>
      </header>
      <p>{{ props.resource.description }}</p>
      <nav>
        <a :href="props.resource.link">View Resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
