<script setup>
import { useGetData } from "@/composables/getData"
import { RouterLink } from 'vue-router';
const { loading, data, getData } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")

</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando información</p>
    <div v-if="data">
        <ul>
            <li v-for="(pokemon, index) in data.results" :key="index">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    {{pokemon.name}}
                </router-link>


            </li>
        </ul>
    </div>

</template>