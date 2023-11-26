<template>
    <div class = "päis">
        <header>≽^•⩊•^≼</header>
        <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "HeaderXD",
    data: function() {
    return {
    }}}
</script>

<style>
.päis {
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 144, 200);
    width: 100%;
    height: 90px;
    position: sticky;

}
header {
    font-size: 25px;
    margin: auto;
    float: left;
    text-align: left;
    display: inline;
}
</style>