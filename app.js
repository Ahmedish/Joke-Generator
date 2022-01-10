const options = {
    method: 'GET',
    headers: {
        "Accept": "application/json",
    }
}

const btn = document.getElementById("jokeButton");

btn.addEventListener("click", function () {
    fetch("https://icanhazdadjoke.com/", options)
        .then(response => {
            return response.json()
        }).then(responseAsJson => {
            document.getElementById("joke").innerHTML = responseAsJson.joke;
        })
})