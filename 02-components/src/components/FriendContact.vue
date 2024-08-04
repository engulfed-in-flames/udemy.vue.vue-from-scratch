<script setup>
import { ref } from "vue";

const detailsAreVisible = ref(false);
const friend = {
    id: "manuel",
    name: "Manuel Lorenz",
    phone: "01234 5678 991",
    email: "manuel@example.com",
};

function toggleDetails() {
    detailsAreVisible.value = !detailsAreVisible.value;
}
</script>

<template>
    <li>
        <h2>
            {{ friend.name }}
        </h2>
        <button @click="toggleDetails">{{
            detailsAreVisible ? "Hide" : "Show"
        }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>
