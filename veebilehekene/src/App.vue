<template>
  <div class = "päis">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Signup</router-link>
    </nav>
  </div>
  <router-view/>
  <footer class = "footer"></footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
    background-image: url(vudinad_ja_vidinad/glitter.gif);
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
    flex-direction: row;
    background-color: rgb(255, 144, 200);
    width: 100%;
    height: 70px;
    padding-top: 0.5%;
    position: sticky;

}
header {
    font-size: 40px;
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
    width: 30%;
    padding-top: 1%;
}

nav a {
    font-size: 25px;
    color: black;
    padding: 1%;
    padding-bottom: 1%;
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

    .päis {
        display: flexbox;
        flex-direction: row;
        width: calc(100%-10px);
    }

    header {
        visibility: hidden;
        width: 0px;
    }
    nav a {
        font-size: 18px;
        flex-direction: row;
        padding-top: 10px;
        padding-right: 7px;
    }
    nav {
        display: flex;
        flex-basis: content;
        flex-direction: row;
    }

    .dropdown {
        width: 40px;
        height: 40px;
        right: 0;
        padding-left: 0%;
    }

    .icon {
        width: 40px;
        height: 40px;
    }

    .main {
        display: block;
        box-sizing: border-box;
        width: 95vw;
    }
}

.dropbtn {
    background-color: inherit;
    height: 60px;
    width: 60px;
    color: white;
    border: none;
    border-radius: 50%;
}

.dropdown {
position: relative;
display: inline-block;
}

.dropdown-sisu {
    display: none;
    position: absolute;
    background-color: rgb(255, 144, 200);
    min-width: 160px;
    border-radius: 10%;
    z-index: 1;
    right: 0;
    visibility: hidden;
}

.dropdown-sisu a {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
}

.show {
    visibility: visible;
    display: block;
}
</style>
