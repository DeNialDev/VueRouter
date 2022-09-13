<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import {useDataStore} from "@/store/dataBase"
const route = useRoute();
const url = ref('')
const dataStore = useDataStore()
const handleSubmit = () => {
  console.log("editar");
  dataStore.editUrl(route.params.id, url.value)
};
onMounted( async  () => {
    url.value = await dataStore.readUrl(route.params.id)
});
</script>

<template>
  <h1>Edit {{ route.params.id }}</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Type new url" v-model="url" >
    <button type="submit">Edit</button>
  </form>
</template>
