// https://icanhazdadjoke.com/
const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWrapper = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";

async function getJoke() {
    const response = await fetch(endpoint, {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    // console.log(data); // {id: 'NCQfqHYgaFd', joke: "I'm glad I know sign language, it's pretty handy.", status: 200}
    return data;
}

async function handleClick() {
    jokeWrapper.classList.add("is-loading");
    const data = await getJoke();
    // console.log(data); // {id: 'NCQfqHYgaFd', joke: "I'm glad I know sign language, it's pretty handy.", status: 200}
    jokeHeading.textContent = data.joke;
    jokeWrapper.classList.remove("is-loading");
}

jokeButton.addEventListener("click", handleClick);
