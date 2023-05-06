// DOM: Document Object Model
// DOM attribute, DOM node, ...

// Selecting nodes
// document.querySelector('selector'): trả về 1 node nếu tồn tại selector đó, ngược lại trả về null
// selectors: .header, p, body, #heading,...
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector("#spinner2");
console.log(singleNode); // <h1>this is title</h1>
console.log(singleNode2); // <div class="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores fugiat soluta est animi ad nam enim et culpa veritatis?</div>
console.log(singleNode3); // <div id="spinner"></div>
console.log(singleNode4); // null

// document.querySelectorAll('selectors'): trả về 1 NodeList chứa danh sách các node, ngược lại trả về empty
// có thể loop: forEach, for, for of
// giống array có thể loop nhưng ko sử dụng đc các phương thức như push, pop, shift, ..
const multiNodes = document.querySelectorAll(".item");
// for (let i = 0; i < multiNodes.length; i++) {
//     console.log(multiNodes[i]);
// }
// console.log(multiNodes); // NodeList(5) [li.item, li.item, li.item, li.item, li.item]

// document.getElementsByClassName('classNames'): trả về 1 HTMLCollection, nếu không có trả về empty []
const classNode = document.getElementsByClassName("item");
console.log(classNode); // HTMLCollection(5) [li.item, li.item, li.item, li.item, li.item]
