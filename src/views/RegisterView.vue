<script setup>
import { ref } from 'vue'
import { useRouter} from 'vue-router'
import {useUserStore} from '../store/user.js'
const userStore = useUserStore()
const router = useRouter( )
const email = ref('')
const password = ref('')
const handleSubmit = async() => {
    if(!(email.value || password.value))
        return alert('void inputs')
    await userStore.registerUser(email.value, password.value)
    router.push('/')
}

</script>

<template>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Type your email" v-model.trim="email">
        <input type="password" placeholder="Type your password" v-model.trim="password">
        <button type="submit">Create user</button>
    </form>
</template>