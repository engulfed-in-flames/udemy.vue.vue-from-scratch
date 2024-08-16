<script setup>
import { reactive, ref } from 'vue';

const FIREBASE_SURVEY_DB_API_URL =
  'https://temp-vue-f1987-default-rtdb.firebaseio.com/surveys.json';

const surveyData = reactive({
  enteredName: '',
  chosenRating: null,
});
const invalidInput = ref(false);
const errorMessage = ref(null);

async function submitSurvey() {
  if (surveyData.enteredName === '' || !surveyData.chosenRating) {
    invalidInput.value = true;
    return;
  }

  invalidInput.value = false;
  errorMessage.value = null;

  try {
    const response = await fetch(FIREBASE_SURVEY_DB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: surveyData.enteredName,
        rating: surveyData.chosenRating,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit survey result.');
    }

    surveyData.enteredName = '';
    surveyData.chosenRating = null;
  } catch (error) {
    errorMessage.value = error.message;
  }
}
</script>

<template>
  <section>
    <BaseCard>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model.trim="surveyData.enteredName"
          />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="surveyData.chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="surveyData.chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="surveyData.chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="errorMessage"> {{ errorMessage }}</p>
        <div>
          <BaseButton>Submit</BaseButton>
        </div>
      </form>
    </BaseCard>
  </section>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
