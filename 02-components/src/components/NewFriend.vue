<script setup>
import { reactive } from 'vue';

const contact = reactive({
    enteredName: '',
    enteredPhone: '',
    enteredEmail: '',
});

const emits = defineEmits(['add-contact']);

function submitData() {
    emits('add-contact', contact);
}
</script>

<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                v-model="contact.enteredName"
            />
        </div>
        <div>
            <label for="phone">Phone</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                v-model="contact.enteredPhone"
            />
        </div>
        <div>
            <label for="email">E-mail</label>
            <input
                type="email"
                name="email"
                id="email"
                v-model="contact.enteredEmail"
            />
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>
