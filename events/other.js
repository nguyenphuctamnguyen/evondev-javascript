// document.addEventListener("DOMContentLoaded", function () {
//     console.log("loaded");
// });
const button = document.querySelector(".button");

// removeEventListener
function handleMouseMove(e) {
    console.log(e.clientX);
}

document.addEventListener("mousemove", handleMouseMove);

button.addEventListener("click", function () {
    document.removeEventListener("mousemove", handleMouseMove);
});
