// Browser Object Model: alert, prompt, confirm, window
// 1. Location
console.log(location);
console.log(window.location);

// setTimeout(() => {
//     location.href = "https://google.com";
// }, 1000);

// http://127.0.0.1:5500/index.html?type=demo&page=2#title
let params = new URLSearchParams(location.search);

console.log(params); // URLSearchParams {size: 2}

console.log(params.get("type")); // demo
console.log(params.get("page")); // 2

console.log(params.has("page")); // true

console.log(params.set("page", 10));
console.log(params.get("page")); // 10

console.log(params.keys()); // URLSearchParams Iterator {}
for (let i of params.keys()) {
    console.log(i); // type page
}
for (let i of params.values()) {
    console.log(i); // demo 10
}

params.delete("page");
