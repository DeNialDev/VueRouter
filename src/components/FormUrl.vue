<script setup>
import { useDataStore } from "@/store/dataBase";
import { ref } from "vue";
const dataStore = useDataStore();

const url = ref("");

const handleSubmit = () => {
    dataStore.addUrl(url.value)
};
</script>

<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" placeholder="type url" v-model="url" />
    <button type="submit">Add url</button>
  </form>
</template>
