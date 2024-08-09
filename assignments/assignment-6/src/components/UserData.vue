<script setup>
import { reactive } from 'vue';

const userInfo = reactive({
    id: null,
    name: null,
    age: null,
});

const emits = defineEmits(['add-user']);

function submitData() {
    emits('add-user', userInfo);
}
</script>
<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="userInfo.name" />
        </div>
        <div>
            <label for="age">Age</label>
            <input type="number" name="age" id="age" v-model="userInfo.age" />
        </div>
        <button>Submit</button>
    </form>
</template>
