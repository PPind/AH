<template>
    <div class = "postComp">
        <div class = "post" v-for = "post in postList" :key="id">
            <div class = "postHeader">
                <img class = "userIcon" :src = "post.userIcon"/>
                <p class = "userName">{{ post.user }}</p>
                <p class="date">{{ post.transformedDate }}</p>
            </div>
            <div class="postContent">
                <h1 class = "title">{{ post.title }}</h1>
                <img class="postImage" :src="post.postImage"/>
                <p>{{ post.text }}</p>
            </div>
            
            <div class = "postDislikes">
                <img class = "dislikesImg" src="../assets/dislike.png"/>
                <p class = "postDislikesP">{{ post.dislikes }}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
name: "Post",
computed: {
    postList(){
    return this.$store.state.postList.map(post => {
        return {
            ...post,
            transformedDate : this.ISO8601ToText(post.date)
        }
    })
}
}, 
methods: {
    ISO8601ToText(ISOdate) {
      var chunks = ISOdate.split('-');
      var months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      return months[parseInt(chunks[1]) - 1] + " " + chunks[2] + ", " + chunks[0];
    }
}
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

.postPinned{
    float: left;
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
    color: rgb(174, 47, 111);
    margin:0;
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