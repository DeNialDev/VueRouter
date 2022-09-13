<script setup>
    import { ref } from 'vue'
    import {useUserStore} from '../store/user.js'
    const userStore = useUserStore()
    const email = ref('')
    const password = ref('')
    const handleSubmit = async() => {
        if(!(email.value || password.value))
            return alert('void inputs')
        await userStore.loginUser(email.value, password.value)
    }
    
    </script>
    
    <template>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Type your email" v-model.trim="email">
            <input type="password" placeholder="Type your password" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser" >Login</button>
        </form>
    </template>