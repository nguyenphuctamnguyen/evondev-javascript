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

// 5. Quantifiers: {n} {n,m} + ? *
// {n}: số lượng nhất định
// {n,m}: số lượng trong khoảng n tới m
// +: lấy 1 hoặc nhiều kí tự thỏa điều kiện
// ?: có thể có hoặc không có kí tự nào đó
// *: không có hoặc là nhiều

// string.match(regex) "abc".match(/\w/) -> []
const str1 = "welcome to 202300000001";
console.log(str1.match(/\d/)[0]); // 2
console.log(str1.match(/\d\d\d\d/)[0]); // 2023
console.log(str1.match(/\d{4}/)[0]); // 2023
console.log(str1.match(/\d{4,6}/)[0]); // 202300
console.log(str1.match(/\d+/)[0]); // 202300000001

const str2 = "color or color?";
console.log(str2.match(/color/g)); // ['color', 'color']

const str3 = "color or colour?";
console.log(str3.match(/colou?r/g)); // ['color', 'colour']

const str4 = "12345";
console.log(str4.match(/\d*/g)); // ['12345', '']
console.log(str4.match(/\d+/g)); // ['12345']
console.log(str4.match(/\d?/g)); // ['1', '2', '3', '4', '5', '']

// flag
// g: global
// i: case insensitive
// m: multiple lines

// 6. Groups ()
/(\d{3})(\w+)/.test("123"); // false
/(\d{3})?(\w+)/.test("123"); // true

// 7. Escaping \ / [ ] ( ) { } ? + * | . ^ $
/\?/.test("?"); // true
/\*/.test("*"); // true

// 8. Boundaries \b \B
// \b
"my name is evondev".match(/\bevondev/g); // ['evondev']
// \B
"my name is evondev".match(/\Bevondev/g); // null
"my name isevondev".match(/\Bevondev/g); // ['evondev']

// 9. string.replace(regex, value)
const str5 = "hello welcome to my hello";
console.log(str5.replace("hello", "hi")); // hi welcome to my hello
str5.replace(/hello/g, "evondev"); // 'evondev welcome to my evondev'

"welcome 123456".match(/\d+/g); // ['123456']
