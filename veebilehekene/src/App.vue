<template>
    <div class="wrapper">
        <div class = "päis">
            <header>≽^•⩊•^≼</header>
            <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/signup">Signup</router-link>
            </nav>
        </div>
        <router-view/>
        <footer class = "footer"></footer>
    </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
    margin: 0;
    padding: 0;
}
body {
    background-image: url(assets/glitter.gif);
    box-sizing: border-box;
}
.wrapper{
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    justify-content: space-between;
}

.wrapper > *{
    padding: 10px;
    padding-bottom: 0px;
    margin: 10px;
    flex: 1 100%;
    border-radius: 15px;
}

.päis {
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 144, 200);
    width: 100%;
    height: 80px;
    padding-top: 0.25%;
    position: sticky;

}
header {
    font-size: 25px;
    margin: auto;
    float: left;
    text-align: left;
    display: inline;
}
footer{
    margin: auto;
    float: left;
    display: inline;
}

.footer{
    display: flex;
    background-color: rgb(255, 144, 200);
    width: 100%;
    height: 50px;
    padding-top: 1%;
    padding-left: 30px;
    position: sticky;
}
.icon {
    height: 60px;
    width: 60px;
    margin: 5px 5px 5px 0;
    float: center;
    padding-right: 2%;
    display: inline;
}
.main {
    background-color: rgb(255, 217, 252);
    margin: 30px auto;
    padding: 10px 20px;
    min-width: 350px;
    max-width: 60%;
    border-radius: 15px;
}
nav {
    padding-top: 0.01%;
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

@media (max-width: 800px) {
    body {
        flex-flow: column wrap;
        box-sizing: border-box;
        width: 100vw;
    }

    .main {
        display: block;
        box-sizing: border-box;
        width: 95vw;
    }
}
</style>
