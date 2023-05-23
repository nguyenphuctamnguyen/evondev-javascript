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

// 3. Ranges []
// [a-z]: các kí tự từ a đến z in thường
// [A-Z]: các kí tự từ A đến Z in hoa
// [0-9]: các số từ 0 đến 9
// [a-z0-9A-Z]: các số từ 0-9 hoặc từ a-z hoặc từ A-Z
/[a-z]/.test("asdf"); // true
/[a-z]/.test("A"); // false

/[A-Z]/.test("A"); // true
/[A-Z]/.test("a"); // false

/[0-9]/.test("1000"); // true
/[0-9]/.test("abc1000abc"); // true

/[a-z0-9A-Z]/.test("123abcAbc"); // true
