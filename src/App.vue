<script setup>

</script>

<template>
    <h1>App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <button>Logout</button>
    </nav>
    <RouterView/>
</template>