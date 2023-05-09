// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
const boxed = document.querySelector(".boxed");
console.log(boxed.offsetWidth); // độ rộng của phần tử: 200
console.log(boxed.offsetHeight); // chiều cao của phần tử: 200
console.log(boxed.offsetLeft); // vị trí của nó so với bên trái: 0
console.log(boxed.offsetTop); // vị trí của nó so với bên trên: 0
console.log(boxed.offsetParent); // lấy ra phần tử cha: body

// 2. clientWidth, clientHeight, clientLeft, clientTop
console.log(boxed.clientWidth); // độ rộng của phần tử trừ border: 190
console.log(boxed.clientHeight); // chiều cao của phần tử trừ border: 190
console.log(boxed.clientLeft); // vị trí của nó so với border bên trái: 5
console.log(boxed.clientTop); // vị trí của nó so với border bên trên: 5
