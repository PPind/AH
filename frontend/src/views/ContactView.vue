<template>
    <header-x-d></header-x-d>
    <div class="main">
        <div class="container">
                <button @click='this.$router.push("/login")'  class="center">Log in</button>
                <button @click='this.$router.push("/signup")' class="center">Sign up</button>
            </div>
        <h1>rulez:</h1>
        <p class="rule">1. no cheezer</p>
        <h1>Contacts</h1>
    </div>
    <footer-x-d></footer-x-d>
</template>
  
  
<script>

import HeaderXD from '@/components/Header.vue'
import FooterXD from '@/components/Footer.vue'
export default {
name: "AboutView",
components: { HeaderXD, FooterXD},
}
</script>

<style>

.container {
display: flex;
justify-content: center;
padding-top: 1%;
margin-left: 2%;
}
.container button {
    margin-right: 2%;
}
</style>