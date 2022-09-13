<script setup>
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
</script>

<template>
  <h1>HomeView</h1>
  <p>{{userStore.userData?.email}}</p>
</template>
