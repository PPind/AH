<template>
  <header-x-d></header-x-d>
  <div class="signup">
    <div class="main">
        <div class="tekst">
            <h1 id = "hId">Welcome to CoolSite ! :3</h1>
            
            <h1>Create a new account:</h1>
            <form @submit.prevent ="submitForm">
                <label for="email">E-mail:</label>
                <input type="email" v-model ="email" required><br><br>
                <label for="parool">Password:</label>
                <input type="password" required v-model = "password"><br><br>  
                <div v-if="validatePassword">
                  {{validatePassword}}
                    <ul>
                      <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </div>
                <div class="submit">
                    <button>Sign up </button>
                </div>  
            </form> 
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
      errors:[],
  }},
  methods: {
   /* Validate password */
    validateForm(){
    
    const errors = []
    const length = this.password.length>= 8 && this.password.length<= 15
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

    if (errors == []){
      this.validatePassword = ""
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
      this.email = ""
    }
  }
}
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
