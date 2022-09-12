<script setup>
import { useGetData } from "@/composables/getData"
import { RouterLink } from 'vue-router';
const { loading, data, getData, error } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")

</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando información</p>
    <div class="alert alert-danger" v-if="error">{{error}}</div>

    <div v-if="data">
        <ul class="list-group">
            <li class="list-group-item" v-for="(pokemon, index) in data.results" :key="index">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    {{pokemon.name}}
                </router-link>
            </li>
        </ul>
        <div class="mt-2">
            <button class="btn btn-success me-2" :disabled="!data.previous"
                @click="getData(data.previous)">Previous</button>
            <button class="btn btn-primary" :disabled="!data.next" @click="getData(data.next)">Next</button>

        </div>

    </div>

</template>