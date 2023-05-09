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

// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
console.log(window.innerWidth); // 714
console.log(window.outerWidth); // 784
console.log(window.innerHeight); // 720
console.log(window.outerHeight); // 840

// 4. selector.getBoundingClientRect(): lấy ra tọa độ, kích thước của selector
console.log(boxed.getBoundingClientRect()); // {x: 0, y: 0, width: 200, height: 200, top: 0, bottom: 0, right: 0,left: 0,}
// left, x: vị trí của khối so với bên trái
// top, y: vị trí của khối so với bên trên
// bottom: chiều cao của khối + top
// right: độ rộng của khổi + left

// Sự khác nhau giữa NodeList và HTMLCollection
const li = document.getElementsByTagName("li");
const li2 = document.querySelectorAll("li");
console.log(li);
console.log(li2);
// Giống: có thể truy cập bằng index, có length, giống mảng nhưng ko hẳn là mảng, ko sử dụng đc pop, shift, push, map, filter
// HTMLCollection: không sử dụng đc forEach
// NodeList: sử dụng đc forEach
