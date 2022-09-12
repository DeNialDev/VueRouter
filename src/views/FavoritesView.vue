<script setup>
import { useFavoritesStore } from '@/store/favorites'
import { storeToRefs } from 'pinia';
import {RouterLink} from 'vue-router'
const useFavorites = useFavoritesStore()
const { favorites } = storeToRefs(useFavorites)
const { remove } = useFavorites
</script>
<template>
    <h1>Favoritos</h1>
    <p v-if="favorites.length === 0">Without favorites</p>
    <ul class="list-group" v-else>
        <li class="list-group-item" v-for="poke in favorites" :key="poke.id">
            <div>{{poke.name}}</div>
            <div>
                <router-link class="btn btn-outline-primary " :to="`/pokemons/${poke.name}`">More information</router-link> <button
                    class="btn btn-danger" @click="remove(poke.id)">Delete</button>
            </div>
        </li>
    </ul>
</template>