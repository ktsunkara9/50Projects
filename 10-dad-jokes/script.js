const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

getRandomJoke();

jokeBtn.addEventListener('click', getRandomJokes);

// using then
function getRandomJoke() {
    const props = {
        headers: {
            Accept: 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com/', props)
        .then(res => res.json())
        .then(data => {
            jokeEle.innerHTML = data.joke;
        });
}

// using async await with promise
async function getRandomJokes() {
    const props = {
        headers: {
            Accept: 'application/json'
        }
    };
    let res = await fetch('https://icanhazdadjoke.com/', props);
    let data = await res.json();
    jokeEle.innerHTML = data.joke;
}
