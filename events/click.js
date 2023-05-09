// addEventListener
const button = document.querySelector(".button");
function handleClick() {
    console.log("click me");
}
// Lỗi sai khi dùng function
// button.addEventListener("click", handleClick());
// Đúng
button.addEventListener("click", function () {});
button.addEventListener("click", handleClick);
