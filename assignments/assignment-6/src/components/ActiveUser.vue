<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <li>
        <h2>{{ props.name }}</h2>
        <h3>{{ props.age }}</h3>
    </li>
</template>
