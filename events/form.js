// 1. keydown: sự kiện xảy ra khi nhấn phím
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.which);
    // e.key: key nhập vào

    if (e.key === "Enter") {
        console.log("You typed Enter!");
    } else {
        console.log(e.key);
    }
});

// 2. keyup: sự kiện xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
    console.log(e.key);
});
