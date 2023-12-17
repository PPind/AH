<template>
    <div class = "postComp">
        <div class = "post" v-for = "post in sortedPosts" :key="id">
            <h2 v-if = "post.isPinned" class="pinned">PINNED:</h2>
            <div class = "postHeader">
                <p class="date">{{ post.transformedDate }}</p>
            </div>
            <div class="postContent">
                <router-link :to="{name: 'APost', params: {id: post.id}}">
                  <h1 class = "title">{{ post.title }}</h1>
                </router-link>
                <img class="postImage" :src=post.postImage />
                <p>{{ post.body }}</p>
            </div>
            <!--
            <div class = "postDislikes">
                <img class = "dislikesImg" v-on:click="Increase(post.id)" src="../assets/dislike.png"/>
                <p class = "postDislikesP">{{ post.dislikes }}</p>
            </div>
        -->
        </div>


    </div>
</template>

<script>
export default {
name: "Post",
data() {
    return {
      posts: [],
    };
},    
computed: {
    postList(){
        return this.posts.map(post => {
            return {
                ...post,
                //transformedDate : this.ISO8601ToText(post.date)
            }
        })
    },
    sortedPosts() {
    // Sort posts by pinned status (pinned first) and then by date
    return this.postList.slice().sort((a, b) => {
      if (a.isPinned !== b.isPinned) {
        return b.isPinned - a.isPinned; // Pinned posts come first
      }
      // Convert ISO 8601 dates to Date objects for comparison
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Sort by date if not pinned
    });
  },
},
methods: {
    ISO8601ToText(ISOdate) {
      var chunks = ISOdate.split('-');
      var months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      return months[parseInt(chunks[1]) - 1] + " " + chunks[2] + ", " + chunks[0];
    },
    Increase(postID) {
        this.$store.dispatch("IncreaseDislikeAct", postID)
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
},
mounted() {
    this.fetchPosts();
    console.log("mounted");
},

};
</script>

<style>
.post {
    margin: 15px auto;
    border-style: dotted;
    border-color: hotpink;
    border-radius: 15px;
    padding: 20px;
}

.postHeader {
    width: 95%;
    margin: auto;
    padding: 1%;
    display: flex;
    flex-direction: row;
}
.postContent {
    border-radius: 15px;
    background-color: rgb(245, 189, 240);
    display: flex;
    flex-direction: column;
}

.postDislikes{
    display: flex;
    flex-direction: row;
    text-align: left;
    padding: 1%;
}
.title {
    padding-right: 8px;
    font-size: 20px;
}

.post h1::first-letter {
    font-size: 25px;
    color: rgb(174, 47, 111);
}

.userIcon {
    float: left;
    height: 50px;
    width: 50px;
    margin: 5px 5px 5px 0;
    padding-right: 2%;   
}

.userName{
    margin-top: auto;
    margin-bottom: auto;
}

.postImage {
    align-self: center;
    max-width: 60%;
    object-fit: contain;
    margin: 5px 5px 5px 0;
    padding-right: 2%;   
}

.pinned {
    float: left;
    color: rgb(174, 47, 111);
}

.date {
    margin-left: auto;
    padding-left: 4px;
    border-left: 2px solid black;
}

.dislikesImg{
    height:10%;
    width: 10%;
    display: inline;
}

.dislikesImg:hover{
    cursor: pointer;
    opacity: 70%;
}
.postDislikesP{
    margin-top: auto;
    margin-bottom: auto;
    display: inline;
}
</style>