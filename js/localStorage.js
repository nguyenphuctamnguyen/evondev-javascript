// 1. localStorage.setItem("key", "value")
localStorage.setItem("name", "ying");

// 2. localStorage.getItem("key")
console.log(localStorage.getItem("name"));

// 3. localStorage.removeItem("key")
// localStorage.removeItem("name");

// 4. localStorage.clear()
// localStorage.clear();

let arr = [1, 2, 3, 4, 5];
localStorage.setItem("list", JSON.stringify(arr));

const newArr = localStorage.getItem("list");
console.log(typeof newArr); // string
const newArr2 = JSON.parse(localStorage.getItem("list"));
console.log(typeof newArr2); // object
console.log(newArr2); // [1, 2, 3, 4, 5]
