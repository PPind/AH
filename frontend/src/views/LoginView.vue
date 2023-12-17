<template>
    <header-x-d></header-x-d>
    <div class="login">
    <div class="main">
        <div class="form">
            <h1 id = "hId">Welcome back to cool site ! :3</h1>
            
            <h1>Log in:</h1>
            
            <label for="email">E-mail:</label>
            <input type="email" v-model ="email" required placeholder="E-mail"><br><br>
            <label for="parool" >Password:</label>
            <input type="password" required placeholder="Password" v-model = "password"><br><br> 
            <div class="container">
                <button @click="LogIn"  class="center">Log in</button>
                <button @click='this.$router.push("/signup")' class="center">Sign up</button>
            </div>
            
        </div>
    </div>
    </div>
    <footer-x-d></footer-x-d>
</template>
  
<script>

import HeaderXD from '@/components/Header.vue'
import FooterXD from '@/components/Footer.vue'

export default {
name: "LoginView", 

components: {HeaderXD, FooterXD},
data: function() {
    return {
email: '',
password: '',
}
},
methods: {


LogIn() {
    var data = {
        email: this.email,
        password: this.password
    };
    // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    //this.$router.push("/");
    location.assign("/");
    })
    .catch((e) => {
        console.log(e);
        console.log("error");
    });
    },
}, 
}
</script>

<style>

.login {
  height: 100vh;
}
.form{
    padding-top: 2%;
    text-align: center;
    font-size: 110%;
    padding-bottom: 4%;
}

#hId{
    
    color: rgb(184, 10, 103);
}

h1{
    font-size: 180%;
}

.main {
    height: 80vh;
}

form{
    padding-bottom: 4%;
}
.container {
display: flex;
justify-content: center;
padding-top: 1%;
}
.container button {
    margin-right: 2%;
}

</style>
