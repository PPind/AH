function ISO8601ToText(ISOdate) {
    var chunks = ISOdate.split('-');
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[parseInt(chunks[1]) - 1] + " " + chunks[2] + ", " + chunks[0];
}
//fetch('https://ppind.github.io/AH/json/jason.json')
fetch('json/jason.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            var main = document.getElementsByClassName('main')[0];
            var posts = json.posts;
            for (var i = 0; i < posts.length; i++) {
                var post = posts[i];
                var userIcon = post.userIcon;
                var userName = post.user;
                var title = post.title;
                var date = post.date;
                var text = post.text;
                var dislikes = post.dislikes;


                var postDiv = document.createElement('div');
                postDiv.setAttribute('class', 'post');
                var postHeaderDiv = document.createElement('div');
                postHeaderDiv.setAttribute('class', 'postHeader');
                var postContentDiv = document.createElement('div');
                postContentDiv.setAttribute('class', 'postContent');
                var postDislikesDiv = document.createElement('div');
                postDislikesDiv.setAttribute('class', 'postDislikes');

                if (post.isPinned) {
                    var postPinnedDiv = document.createElement('div');
                    postPinnedDiv.setAttribute('class', 'postPinned');
                    postDiv.appendChild(postPinnedDiv);

                    var pinnedH = document.createElement('h1');
                    pinnedH.setAttribute('class', 'pinned title');
                    pinnedH.textContent = 'PINNED: ';
                    postPinnedDiv.appendChild(pinnedH);
                }
                postDiv.appendChild(postHeaderDiv);
                postDiv.appendChild(postContentDiv);
                postDiv.appendChild(postDislikesDiv);

                

                var userIconImg = document.createElement('img');
                userIconImg.setAttribute('class', 'userIcon');
                userIconImg.setAttribute('src', userIcon);
                userIconImg.setAttribute('alt', 'guy');

                var userNameP = document.createElement('p');
                userNameP.setAttribute('class', 'userName');
                userNameP.textContent = userName;

                var dateH = document.createElement('h3');
                dateH.setAttribute('class', 'date');
                dateH.textContent = ISO8601ToText(date);
                postHeaderDiv.appendChild(userIconImg);
                
                postHeaderDiv.appendChild(userNameP);
                postHeaderDiv.appendChild(dateH);

                
                var titleH = document.createElement('h1');
                titleH.setAttribute('class', 'title');
                titleH.textContent = title;
                postContentDiv.appendChild(titleH);

                if (post.postImage.length > 2) {
                    var postImageImg = document.createElement('img');
                    postImageImg.setAttribute('class', 'postImage');
                    postImageImg.setAttribute('src', post.postImage);
                    postImageImg.setAttribute('alt', 'post-image-' + post.id);
                    postContentDiv.appendChild(postImageImg);
                }
                
                var postTextP = document.createElement('p');
                postTextP.setAttribute('class', 'postText');
                postTextP.textContent = text;
                
                postContentDiv.appendChild(postTextP);

                
                var postDislikesImg = document.createElement('img');
                postDislikesImg.setAttribute('class', 'dislikesImg');
                postDislikesImg.setAttribute('src', "vudinad_ja_vidinad/dislike.png");
                postDislikesImg.setAttribute('alt', 'dislikes');

                //postDislikesImg.addEventListener('click', function(event){
                //  post.dislikes++;
                //})

                var postDislikesP = document.createElement('p');
                postDislikesP.setAttribute('class', 'postDislikesP');
                postDislikesP.textContent = dislikes;

                postDislikesDiv.appendChild(postDislikesImg)
                postDislikesDiv.appendChild(postDislikesP);

                if (post.isPinned) {
                    main.insertBefore(postDiv, main.firstChild);
                }
                else {
                    main.appendChild(postDiv);
                }
            }
        })
