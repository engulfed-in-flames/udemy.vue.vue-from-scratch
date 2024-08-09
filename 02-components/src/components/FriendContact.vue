<script setup>
import { ref } from 'vue';

const detailsAreVisible = ref(false);

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isFavorite: {
        type: Boolean,
        required: false,
    },
});

// const emit = defineEmits(['toggle-favorite']);
const emits = defineEmits({
    'toggle-favorite': (id) => {
        if (typeof id === 'string' && id.trim().length > 0) {
            return true;
        } else {
            console.warn('ID is missing or invalid!');
            return false;
        }
    },
});

function toggleDetails() {
    detailsAreVisible.value = !detailsAreVisible.value;
}
function toggleFavorite() {
    emits('toggle-favorite', props.id);
}
</script>

<template>
    <li :key="props.id">
        <h2>{{ props.name }} {{ props.isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }}
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ props.phone }}</li>
            <li><strong>Email:</strong> {{ props.email }}</li>
        </ul>
    </li>
</template>
