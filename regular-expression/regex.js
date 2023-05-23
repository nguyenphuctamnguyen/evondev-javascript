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

// phủ định
/[^a-z]/.test("a"); // true

// 4. Meta characters
// \d: khớp với số, tương đương với [0-9]
/\d/.test("1234"); // true
// \D: ngược lại với \d tương đương với [^0-9]
/\D/.test("1234"); // false

// \w: khớp với các kí tự, số và dấu gạch dưới ([a-z0-9A-Z])
/\w/.test("_"); // true
// \W: ngược lại với \w ([^a-z0-9A-Z])
/\W/.test("_"); // false

// \s: khớp với các kí tự khoảng trắng: spaces, tab, newline
/\s/.test(" "); // true
// \S: ngược lại với \s: các kí tự không phải khoảng trắng
/\S/.test(" "); // false

// \n: newline
// \t: tab
// .: khớp với tất cả trừ newline
// [^]: all
