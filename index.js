

//fetch('https://ppind.github.io/AH/json/jason.json')
fetch('json/jason.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
        })