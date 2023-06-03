// API: Application Programming Interface
// https://api.github.com/users/nguyenphuctamnguyen
// JSON.parse()

const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");

// fetch
async function displayUser(username) {
    userEl.textContent = "Loading...";
    const promise = await fetch(`${endpoint}/${username}`);
    const data = await promise.json();
    userEl.textContent = `${data.login}`;
    console.log("displayUser ~ data", data);
    // promise
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //         console.log(data.login); // nguyenphuctamnguyen
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
}
function handleError(err) {
    console.log(err);
    userEl.textContent = "No data found";
}
displayUser("nguyenphuctamnguyen").catch(handleError);
