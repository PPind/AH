<template>
    <div class = "päis">
        <header>≽^•⩊•^≼</header>
        <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/contact">Contacts</router-link>
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
    padding-bottom: 0%;
}

nav {
    padding-top: 0.01%;
    padding-bottom: 1%;
}

nav a {
    font-size: 18px;
    color: black;
    padding: 0.05%;
    padding-bottom: 0.05%;
    border-radius: 15px;
}

nav a:link {
    text-decoration: none;
}

nav a:hover {
    background-color: pink;
}
</style>