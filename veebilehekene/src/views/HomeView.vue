<template>
  <div class="home">

    <aside-x-d class = "aside1"></aside-x-d>

    <div class="main">
      <post></post>
    </div>
    
    
    <aside-x-d class = "aside2"></aside-x-d>

  </div>
</template>

<script>
// @ is an alias to /sr
import Post from '@/components/Post.vue'
import AsideXD from '@/components/Aside.vue'

export default {
name: "Posts",
components: {Post, AsideXD},
data: function() {
return {}},
}
</script>

<style>
.main {
    background-color: rgb(255, 217, 252);
    margin: 10px auto;
    padding: 10px 20px;
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
