<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData'
import { useFavoritesStore } from '@/store/favorites'
const route = useRoute()
const router = useRouter()
const { loading, data, getData, error } = useGetData()
const useFavorites = useFavoritesStore()
const { add, findPokemon } = useFavorites
const back = () => {
    router.push('/pokemons')
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>


<template>

    <p v-if="loading">Cargando Información...</p>
    <div class="alert alert-danger" v-if="error">{{error}}</div>

    <div v-if="data">

        <img :src="data.sprites?.front_default" alt="">
        <h1>{{$route.params.name.toUpperCase()}}</h1>
        <button :disabled="findPokemon(data.name)" class="btn btn-primary mb-2" @click="add(data)" >Add to favorites</button>

    </div>
    <h1 v-else>No existe el Pokemon</h1>
    <button class="btn btn-outline-primary" @click="back">Back</button>
</template>