<template>
  <header-x-d></header-x-d>
  <div class="signup">
    <div class="main">
        <div class="tekst">
            <h1 id = "hId">Welcome to cool site ! :3</h1>
            
            <h1>Create a new account:</h1>
              <label for="email">E-mail:</label>
              <input type="email" required v-model ="email" placeholder="E-mail"><br><br>
              <label for="parool" >Password:</label>
              <input type="password" required v-model = "password" placeholder="Password"><br><br>  
              <div v-if="validatePassword">
                {{validatePassword}}
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
              </div>
              <button @click="SignUp" class="SignUp">SignUp</button>
        </div>
    </div>
  </div>
  <footer-x-d></footer-x-d>
</template>

<script>
import HeaderXD from '@/components/Header.vue'
import FooterXD from '@/components/Footer.vue'

export default {
name: "SignupView", 
components: {HeaderXD, FooterXD},
data: function() {
    return {
      email:'',
      password: '',
      validatePassword:'',
      validated:false,
      errors:[],
  }},
  methods: {
   /* Validate password */
    validateForm(){
    
    const errors = []
    const length = this.password.length>= 8 && this.password.length< 15
    const upper = /[A-Z]/.test(this.password)
    const lowers = /[a-z].*[a-z]/.test(this.password)
    const numer = /[0-9]/.test(this.password)
    const startsUpper = /^[A-Z]/.test(this.password)
    const underscore = /_/.test(this.password)
    
    if (!length){
      errors.push( "Password must be between 8 and 15 characters !!!")
    }
    if(!upper){
      errors.push("Password must include at least one uppercase character !!! ")
    }
    if(!lowers){
      errors.push("Password must include  at least two lowercase characters !!! ")
    }
    if(!numer){
      errors.push("Password must include at least one numeric value !!! ")
    }
    if(!startsUpper){
      errors.push("Password must start with an uppercase character !!! ")
    }
    if(!underscore){
      errors.push('Password must contain at least one underscore "_" !!! ')
    }

    if (errors.length === 0){
      this.validatePassword = "" 
      this.validated = true
    }else{
      this.errors = errors
      this.validatePassword = "Your password is not valid !!"   
    }

  },
  submitForm(){
    this.validateForm()
    if (this.errors.length ===0){
      this.validatePassword ="Yippee !! New account successfully made !",
      this.password = "",
      this.email = "",
      this.validated = true
    }
  },
  SignUp() {
    this.validateForm();
    if(this.validated){
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }
  }
    },
}

</script>

<style>
.signup {
  height: 70vh;
}
.tekst{
    text-align: center;
    font-size: 110%;
    padding-top: 2%;
    padding-bottom: 4%;
}

#hId{
    
    color: rgb(184, 10, 103);
}

h1{
    font-size: 180%;
}

form{
    padding-bottom: 4%;
}

ul{
  list-style-type: none;
  margin: 1%;
  padding: 0;
  font-size: 85%;
  color: rgb(154, 9, 45);
}

.submit{
  padding-top:1%;
}

</style>
