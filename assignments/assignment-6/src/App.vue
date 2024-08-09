<script setup>
import { ref } from 'vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

const activeUsers = ref([]);

function addUser(userInfo) {
    const newUserInfo = {
        id: new Date().toISOString(),
        ...userInfo,
    };

    activeUsers.value.push(newUserInfo);
}
</script>

<template>
    <header class="container">
        <h1 class="title">User Information</h1>
    </header>
    <main class="container">
        <div class="flex-box">
            <div class="flex-item">
                <ul class="user-list">
                    <ActiveUser
                        v-for="activeUser in activeUsers"
                        :key="activeUser.id"
                        :id="activeUser.id"
                        :name="activeUser.name"
                        :age="activeUser.age"
                    />
                </ul>
            </div>
            <div class="flex-item">
                <UserData @add-user="addUser" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    margin: 2rem auto;
    padding: 1rem 6rem;
}

.title {
    text-align: center;
}

.flex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.flex-item {
    flex: 1;
}

.user-list {
}
</style>
