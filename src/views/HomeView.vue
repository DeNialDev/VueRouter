<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import { useDataStore } from "@/store/dataBase";
import FormUrl from '@/components/FormUrl.vue'
const userStore = useUserStore();
const dataStore = useDataStore(); 
const router = useRouter()
dataStore.getUrls();
</script>

<template>
  <h1>HomeView</h1>
  <p>{{ userStore.userData?.email }}</p>
  <FormUrl/>

  <p v-if="dataStore.loadingData" >loadind data...</p>
  <ul v-else >
    <li v-for="item of dataStore.documents" :key="item.id">
      {{ item.id }} - {{ item.name }} - {{ item.short }}
      <br>
      <button @click="dataStore.deleteUrl(item.id)" >Delete</button>
      <button @click="router.push(`/edit/${item.id}`)">Edit</button>
    </li>
  </ul>
</template>
