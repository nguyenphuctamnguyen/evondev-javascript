// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick() {
    console.log("click button");
}

// Lỗi sai khi dùng function
// button.addEventListener("click", handleClick());
// Đúng
// button.addEventListener("click", function () {});
button.addEventListener("click", handleClick);
// event: e
span.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("click span");
});
document.body.addEventListener("click", function () {
    console.log("click body");
});

// bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
