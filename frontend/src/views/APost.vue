<template>
    <header-x-d></header-x-d>
    <div class="home">
  
      <aside-x-d class = "aside1"></aside-x-d>
  
      <div class="main">
        <h2 v-if = "post.isPinned" class="pinned">PINNED:</h2>
            <div class="postContent">
                <h1 class = "title">{{ post.title }}</h1>
                
                <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
            </div>
            <div class="nupud">
                <button @click="updatePost" class="updatePost">Update Post</button>
                <button @click="deletePost" class="deletePost">Delete Post</button>
            </div>
      </div>
      
      
      <aside-x-d class = "aside2"></aside-x-d>
  
    </div>
    <footer-x-d></footer-x-d>
  </template>
  
  <script>
  // @ is an alias to /sr
  import OnePost from '@/components/OnePost.vue'
  import AsideXD from '@/components/Aside.vue'
  import HeaderXD from '@/components/Header.vue'
  import FooterXD from '@/components/Footer.vue'
  
  export default {
    name: "APost",
    components: {OnePost, AsideXD, HeaderXD, FooterXD},
    data() {
            return {
                post: {
                title: "",
                body: "",
                date: "",
                
            },
            };
        }, 
        
        methods: {
            ISO8601ToText(ISOdate) {
                var chunks = ISOdate.split('-');
                var months = [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ];
                return months[parseInt(chunks[1]) - 1] + " " + chunks[2] + ", " + chunks[0];
            },
            fetchAPost(id) {
            // fetch one post with the specied id (id)
                fetch(`http://localhost:3000/api/posts/${id}`)
                    .then((response) => response.json())
                    .then((data) => (this.post = data))
                    .catch((err) => console.log(err.message));
            },
            updatePost() {
            // using Fetch - put method - updates a specific post based on the passed id and the specified body
                fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                    method: "PUT",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.post),
            })
                .then((response) => {
                console.log(response.data);
                //this.$router.push("/apost/" + this.post.id);
                // We are using the router instance of this element to navigate to a different URL location
                this.$router.push("/");
                })
                .catch((e) => {
                console.log(e);
                });
            },
            deletePost() {
            // using Fetch - delete method - delets a specific post based on the passed id
                fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                    .then((response) => {
                    console.log(response.data);
                    // We are using the router instance of this element to navigate to a different URL location
                    this.$router.push("/");
                    })
                    .catch((e) => {
                    console.log(e);
                    });
            },
        },
        mounted() {
            // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
            // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their 
            // position in the URL. The captured values are populated in the req.params object, with the name 
            // of the route parameter specified in the path as their respective keys
            this.fetchAPost(this.$route.params.id);
        },
        };
  </script>
  
  <style>
  .main {
      background-color: rgb(255, 217, 252);
      margin: 10px auto;
      padding: 10px 20px;
      min-width: 350px;
      max-width: 60%;
      border-radius: 15px;
      flex-direction: row;
      display: block;
      flex: 1;
  }
  
  .home {
    display: flex;
    justify-content: space-between;
  }
  
  @media (max-width: 800px) {
      .aside1, .aside2 {
          display: none;
      }
  }
  
  .aside1, .aside2 {
      background: rgb(255, 217, 252);
      flex-basis: calc((100% - 960px) / 2);
      padding: 20px;
      max-width: 200px;
      overflow: hidden;
      border-radius: 15px;
  }
  .postContent {
    border-radius: 15px;
    background-color: rgb(245, 189, 240);
    display: flex;
    flex-direction: column;
    margin-bottom:2%;
}
#body{
  margin:2%;
}
  </style>