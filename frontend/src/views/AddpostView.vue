<template>
    <HeaderXD></HeaderXD>
    <div class="main">
      <h3>Add a Post</h3>
      <div class="addpost">
      <div class="addpost-form">
        <label for="title">Title: </label>
        <input name="title" type="text" id="title" required v-model="post.title" />
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" class="addpostinput" required v-model="post.body" />
      </div>
      <button @click="addPost" class="addPost">Add Post</button>
    </div>
    </div>
    <FooterXD></FooterXD>
  </template>
  
  <script>
    import HeaderXD from '@/components/Header.vue'
    import FooterXD from '@/components/Footer.vue'
    import auth from '../auth';

  export default {
    name: "AboutView",
    components: { HeaderXD, FooterXD},
    data: function() {

        return {
            authResult: auth.authenticated(),
            post: {
                title: "",
                body: "",
        },
        }
    },
    methods: {
      addPost() {
        if (!this.authResult) {
            this.$router.push("/login");
        }
        var data = {
          title: this.post.title,
          body: this.post.body,
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => {
          console.log(response.data);
          // redirect to /allposts view
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
      },
    },
  };
  </script>

<style>


.addpost-container {
  display: flex;
  flex-direction: column; /* Changed to column */
  justify-content: center;
  height: 80vh;
  padding-top: 1%;
  margin-left: 2%;
}

.addpost-form {
  display: flex;
  flex-direction: column; /* Changed to column */
  align-items: center;
  padding: 5vh;
  padding-bottom: 5vh;
}

#addpost input {
    width: 40vw;
    padding: 1%;
}

#addPost {
    margin-right: 2%;
}

.lingike {
    padding-bottom:5%
}

.ruleImg {
    height: 60px;
    width: auto;
}
</style>