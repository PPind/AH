<template>
    <div class = "post">
        <h2 v-if = "post.isPinned" class="pinned">PINNED:</h2>   
        <div class = "postHeader">
            <img class = "userIcon" :src = "post.userIcon"/>
            <p class = "userName">{{ post.user }}</p>
            <p class="date">{{ post.transformedDate }}</p>
        </div>
        <div class="postContent">
                <h1 class = "title">{{ post.title }}</h1>
            <img class="postImage" :src=post.postImage />
            <p>{{ post.text }}</p>
        </div>
        
        <div class = "postDislikes">
            <img class = "dislikesImg" v-on:click="Increase(post.id)" src="../../../frontend/src/assets/dislike.png"/>
            <p class = "postDislikesP">{{ post.dislikes }}</p>
        </div>
    </div>
    <div class="nupud">
        <button @click="updatePost" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
    </div>
</template>

<script>
    export default {
        name: "Post",
        computed: {
            post(){
                for (let el of this.$store.state.postList) {
                    console.log("el.id: " + el.id);
                    console.log("this.id: " + this.$route.params.id);
                    if (el.id == this.$route.params.id) {
                        console.log('ISOdate:', el.date);
                        return {...el, transformedDate: this.ISO8601ToText(el.date)}
                    }
                }
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
            }
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
                        this.$router.push("/api/allposts");
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
                    this.$router.push("/api/allposts");
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

button {
    width: 10vw;
}
</style>