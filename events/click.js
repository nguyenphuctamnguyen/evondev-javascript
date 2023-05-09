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

// event: e
// span.addEventListener(
//     "click",
//     function (e) {
//         // e.stopPropagation();
//         e.stopImmediatePropagation();
//         console.log("click span");
//     },
//     {
//         capture: true,
//     }
// );
// span.addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log("click span 2");
// });
// document.body.addEventListener("click", function () {
//     console.log("click body");
// });

// bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài

// capturing: nổi bọt
// sự kiện click chạy từ ngoài vào trong

// Sự khác nhau giữa target và currentTarget
button.addEventListener("click", function (e) {
    // event.target: chọn chính xác element mà mình click tới
    console.log(`e.target: ${e.target}`);

    // event.currentTarget: chọn phần tử mà mình click
    console.log(`e.currentTarget: ${e.currentTarget}`);
});
