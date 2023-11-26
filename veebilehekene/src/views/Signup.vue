<template>
  <div class="signup">
    <div class="main">
        <div class="tekst">
            <h1 id = "hId">Welcome to CoolSite ! :3</h1>
    
            <a href="uuskasutaja.html">Create a new account</a>
            
            <h1>Log in:</h1>
            <form action="index.html">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="E-mail" required><br><br>
                <label for="parool">Password:</label>
                <input type="password" id="parool" name="parool" placeholder="Password" required><br><br>  
                <input type="submit" value="Log in">
                
            </form> 
            
        </div>
        <div class = "parooliunustus" >
            <a href="maunustasinomaparooli.html">I forgor my silly password :(</a>
        </div>
    </div>
  </div>
</template>

<style>
.tekst{
    text-align: center;
    font-size: 110%;
    padding-top: 2%;
}

#hId{
    
    color: rgb(184, 10, 103);
}

h1{
    font-size: 180%;
}

.parooliunustus{
    text-align: center;
    font-size: 90%;
    padding-top: 3%;
    padding-bottom: 6%;
}
</style>
