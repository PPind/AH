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
                var title = post.title;
                var date = post.date;
                var text = post.text;

                var postDiv = document.createElement('div');
                postDiv.setAttribute('class', 'post');
                var postHeaderDiv = document.createElement('div');
                postHeaderDiv.setAttribute('class', 'postHeader');
                var postContentDiv = document.createElement('div');
                postContentDiv.setAttribute('class', 'postContent');
                postDiv.appendChild(postHeaderDiv);
                postDiv.appendChild(postContentDiv);

                var userIconImg = document.createElement('img');
                userIconImg.setAttribute('class', 'userIcon');
                userIconImg.setAttribute('src', userIcon);
                userIconImg.setAttribute('alt', 'guy');
                var titleH = document.createElement('h1');
                titleH.setAttribute('class', 'title');
                titleH.textContent = title;
                var dateH = document.createElement('h3');
                dateH.setAttribute('class', 'date');
                dateH.textContent = ISO8601ToText(date);
                postHeaderDiv.appendChild(userIconImg);
                if (post.isPinned) {
                    var pinnedH = document.createElement('h1');
                    pinnedH.setAttribute('class', 'pinned title');
                    pinnedH.textContent = 'PINNED: ';
                    postHeaderDiv.appendChild(pinnedH);
                }
                postHeaderDiv.appendChild(titleH);
                postHeaderDiv.appendChild(dateH);
                
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

                if (post.isPinned) {
                    main.insertBefore(postDiv, main.firstChild);
                }
                else {
                    main.appendChild(postDiv);
                }
            }
        })
