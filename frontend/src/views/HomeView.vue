<template>
  <header-x-d></header-x-d>
  <div class="home">

    <aside-x-d class = "aside1"></aside-x-d>

    <div class="main">
      <button v-if = "authResult" @click="Logout">Logout</button>
      <post></post>
      <button v-on:click="ResetDislikes "> Reset </button>
    </div>
    
    
    <aside-x-d class = "aside2"></aside-x-d>

  </div>
  <footer-x-d></footer-x-d>
</template>

<script>
// @ is an alias to /sr
import Post from '@/components/Post.vue'
import AsideXD from '@/components/Aside.vue'
import HeaderXD from '@/components/Header.vue'
import FooterXD from '@/components/Footer.vue'
import auth from "../auth";

export default {
  name: "HomeView",
  components: {Post, AsideXD, HeaderXD, FooterXD},
  data: function() {

    return {
      authResult: auth.authenticated()
    }},
  methods: {
  ResetDislikes: function() {
      this.$store.dispatch("ResetAct")}
  ,
  Logout() {
        fetch("http://localhost:3000/auth/logout", {
            credentials: 'include', //  Don't forget to specify this if you need cookies
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          //console.log('jwt removed:' + auth.authenticated());
          this.$router.push("/login");
          //location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
      },
    }
  }

</script>

<style>
.main {
    background-color: rgb(255, 217, 252);
    margin: 10px auto;
    padding: 1.5% 1.5%;
    min-width: 350px;
    max-width: 60%;
    border-radius: 15px;
    flex-direction: row;
    display: block;
    flex: 1;
}

.home {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 800px) {
    .aside1, .aside2 {
        display: none;
    }
}

.aside1, .aside2 {
    background: rgb(255, 217, 252);
    flex-basis: calc((100% - 960px) / 2);
    padding: 20px;
    max-width: 200px;
    overflow: hidden;
    border-radius: 15px;
}

</style>
