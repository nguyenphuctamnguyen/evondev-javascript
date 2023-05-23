// Regular expression: biểu thức chính quy
// 1. 2 cách khai báo với regex
const re1 = /hello/;
const re2 = new RegExp("hello");

// regex.test(value) -> true/false
console.log(re1.test("hello world")); // true
console.log(re1.test("world")); // false

// 2. Anchor ^ $
// ^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó
/hi/.test("hi"); // true
/^hi/.test("hi welcome to hi"); // true
/^hi/.test("welcome to hi"); // true
/hi$/.test("welcome to hi"); // true
/hi$/.test("welcome to hello"); // false
