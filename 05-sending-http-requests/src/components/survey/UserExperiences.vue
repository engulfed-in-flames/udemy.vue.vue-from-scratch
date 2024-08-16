<script setup>
import { onMounted, ref } from 'vue';
import SurveyResult from './SurveyResult.vue';

const FIREBASE_SURVEY_DB_API_URL =
  'https://temp-vue-f1987-default-rtdb.firebaseio.com/surveys.json';

const surveyResults = ref([]);
const isLoading = ref(false);
const errorMessage = ref(null);

onMounted(() => {
  loadExperiences();
});

async function loadExperiences() {
  try {
    errorMessage.value = null;
    isLoading.value = true;

    const response = await fetch(FIREBASE_SURVEY_DB_API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch survey results.');
    }

    const results = [];
    const data = await response.json();
    for (const id in data) {
      results.push({
        id,
        name: data[id].name,
        rating: data[id].rating,
      });
    }

    surveyResults.value = results;
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section>
    <BaseCard>
      <h2>Submitted Experiences</h2>
      <div>
        <BaseButton @click="loadExperiences"
          >Load Submitted Experiences
        </BaseButton>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && errorMessage"> {{ errorMessage }}</p>
      <p v-else-if="!isLoading && surveyResults.length === 0"
        >No stored experiences found. Start adding some survey results first.
      </p>
      <ul v-else-if="!isLoading && surveyResults.length > 0">
        <SurveyResult
          v-for="result in surveyResults"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        />
      </ul>
    </BaseCard>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
