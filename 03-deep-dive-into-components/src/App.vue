<script setup>
import BaseCard from './components/Base/BaseCard.vue';
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

import { ref, shallowRef } from 'vue';

const activeUser = ref({
  name: 'Maximilian Schwarzmüller',
  description: 'Site owner and admin',
  role: 'admin',
});

const selectedComponent = shallowRef(ActiveGoals);

function setSelectedComponent(component) {
  selectedComponent.value = component;
}
</script>

<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :fullName="activeUser.name"
      :infoText="activeUser.description"
      :role="activeUser.role"
    />

    <CourseGoals>
      <template #default="slotProps">
        <h2> {{ slotProps['item'] }}</h2>
        <p></p>
      </template>
    </CourseGoals>

    <BaseCard>
      <button @click="setSelectedComponent(ActiveGoals)"
        >Show Active Goals</button
      >
      <button @click="setSelectedComponent(ManageGoals)"
        >Show Manage Goals</button
      >
      <!-- 
    <ActiveGoals v-if="selectedComponent === 'ActiveGoals'" />
    <ManageGoals v-if="selectedComponent === 'ManageGoals'" />
     -->
      <KeepAlive>
        <component :is="selectedComponent" />
      </KeepAlive>
    </BaseCard>
  </div>
</template>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
