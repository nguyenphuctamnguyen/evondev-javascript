// // selector.classList.add("abc")
// const container = document.querySelector(".container");
// container.classList.add("is-active");

// // selector.classList.remove("abc")
// container.classList.remove("container");

// // selector.classList.contains("abc")
// console.log(container.classList.contains("container")); // false
// console.log(!container.classList.contains("container")); // true
// console.log(container.classList.contains("is-active")); // true

// // selector.classList.toggle("is-active")
// // if (container.classList.contains("is-active")) {
// //     container.classList.remove("is-active");
// // } else {
// //     container.classList.add("is-active");
// // }
// container.classList.toggle("is-active");

// // selector.className: trả ra chuỗi các class của selector
// const title = document.querySelector(".title");
// console.log(title.className); // title heading abc xyz

// menu toggle class
const menu = document.querySelector(".menu");
menu.classList.add(".is-show");
