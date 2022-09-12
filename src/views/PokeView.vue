<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData'
const route = useRoute()
const router = useRouter()
const { loading, data, getData } = useGetData()
const back = () => {
    router.push('/pokemons')
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>


<template>
    <p v-if="loading">Cargando Información...</p>
    <div v-if="data">
        <h1>Poke name: {{$route.params.name}}</h1>
        <img :src="data.sprites?.front_default" alt="">


    </div>
    <h1 v-else>No existe el Pokemon</h1>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>