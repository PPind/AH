<template>
    <footer class = "footer">
        <p><span>&copy;</span> 2023 Group AH!?!</p>
    </footer>
</template>

<script>
export default {
    name: "FooterXD",
    data: function() {
    return {
    }}}
</script>

<style>
footer{
    display: flex;
    flex-direction: column;
    margin: auto;
    float: left;
    align-items: center;
    text-align: center;
}

.footer{
    background-color: rgb(255, 144, 200);
    width: 100%;
    height: 50px;
    padding-left: 30px;
    position: sticky;
    align-items: center;
    text-align: center;
}
</style>