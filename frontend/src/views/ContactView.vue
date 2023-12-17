<template>
    <header-x-d></header-x-d>
    <div class="main">
        <div class="container">
                <button @click='this.$router.push("/login")'  class="center">Log in</button>
                <button @click='this.$router.push("/signup")' class="center">Sign up</button>
            </div>
        <h1>rulez:</h1>
        <p class="rule">1. no cheezer</p>
        <img class="ruleImg" src="..\assets\cheezer.jpg" alt = "cheezer">
        <br>
        <img class="ruleImg" src="..\assets\haterz.webp" alt = "HATERS DO NOT EVER INTERACT">
        <br>
        <h1>Contacts</h1>
        <p>AH !?!?!?</p>
        <p>Marlene Ibrus, Karl Kristofer Haljand, Pärl Pind </p>
        <div class="lingike">
        <a href="https://github.com/PPind/AH">Github</a>
        </div>
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

.lingike {
    padding-bottom:5%
}

.ruleImg {
    height: 60px;
    width: auto;
}
</style>