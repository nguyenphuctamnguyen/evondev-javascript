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

// 3. keypress: sự kiện xảy ra khi nhấn phím
// keypress sẽ ignore các phím như delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc
input.addEventListener("keypress", function (e) {
    console.log(e.key);
    if (e.key === "Home") {
        console.log("keypress");
    }
});

// Thứ tự ưu tiên keydown -> keypress -> keyup

// 4. change: sự kiện xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
input.addEventListener("change", function (e) {
    console.log("change");
});

// 5. focus
input.addEventListener("focus", function (e) {
    console.log("focus");
});

// 6. blur
input.addEventListener("blur", function (e) {
    console.log("blur");
});

// 7. submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // this, e.target
    // console.log(this);
    // console.log(e.target);
    // this.elements
    console.log(this.elements);
    console.log(this.elements["username"].value);
    const username = this.elements["username"].value;
    const gender = this.elements["gender"].value;
    const hobby = this.elements["hobby"].value;
    console.log({ username, gender, hobby });
});
