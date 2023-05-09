// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
const boxed = document.querySelector(".boxed");
console.log(boxed.offsetWidth); // độ rộng của phần tử: 200
console.log(boxed.offsetHeight); // chiều cao của phần tử: 200
console.log(boxed.offsetLeft); // vị trí của nó so với bên trái: 0
console.log(boxed.offsetTop); // vị trí của nó so với bên trên: 0
console.log(boxed.offsetParent); // lấy ra phần tử cha: body
