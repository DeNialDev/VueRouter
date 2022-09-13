<script setup>
import { useUserStore } from "./store/user.js";
const userStore = useUserStore();
</script>

<template>
  <h1>App</h1>
  <nav v-if="!userStore.loadingUser">
    <router-link to="/" v-if="userStore.userData">Home</router-link>
    <router-link to="/register" v-if="!userStore.userData"
      >Register</router-link
    >
    <router-link to="/login" v-if="!userStore.userData">Login</router-link>
    <button @click="userStore.logOut" v-if="userStore.userData">Logout</button>
  </nav>
  <div v-else>loading user</div>
  <RouterView />
</template>
