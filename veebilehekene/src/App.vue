<template>
    <div class="wrapper">
        <router-view/>
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
