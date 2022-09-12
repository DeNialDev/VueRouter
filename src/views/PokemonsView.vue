<script setup>
import {useGetData} from "@/composables/getData"
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
const pokemons = ref([])
const {data, getData} = useGetData()
</script>

<template>
    <h1>Pokemons</h1>
    <ul>
        <li v-for="(pokemon, index) in pokemons" :key="index">
            <router-link :to="`/pokemons/${pokemon.name}`">
                {{pokemon.name}}
            </router-link>


        </li>
    </ul>
</template>