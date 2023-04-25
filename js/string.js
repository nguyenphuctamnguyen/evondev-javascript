// String(Chuỗi)
"Hello world";
"My name is Evondev";
`I am frontend developer`;
// double quotes, single quote, backticks (template literal)

const name = "Anh Tuan";
const job = "Designer";
console.log(name); // Anh Tuan
console.log(typeof name); // string

const newStr = "My name is Evondev and I am Frontend Developer";
const newStr2 = "My name is " + name + " and I am " + job;
console.log(newStr2); // My name is Anh Tuan and I am Designer

// ${variable}
const newStr3 = `My name is ${name} and I am ${job}`;
console.log(newStr3); // My name is Anh Tuan and I am Designer

// .length
console.log(newStr3.length); // 37
// My name is Anh Tuan and I am Designer -> 0-36 -> length: 37

// index là vị trí của từng kí tự trong chuỗi,(bao gồm cả khoảng trắng)
const myStr = "Frontend Developer";
console.log(myStr.split(" ")); // ['Frontend', 'Developer']
console.log(myStr.split("")); // ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
console.log(myStr.split("/")); // ['Frontend Developer']

console.log(myStr.toLowerCase()); // frontend developer
console.log(myStr.toUpperCase()); // FRONTEND DEVELOPER

console.log(myStr.startsWith("Frontend")); // true
console.log(myStr.endsWith("Developer")); // true

console.log(myStr.includes("end")); // true
console.log(myStr.includes("abc")); // false

const myStr2 = "Frontend Developer D";

console.log(myStr2.indexOf("D")); // 9
console.log(myStr2.lastIndexOf("D")); // 19

console.log(myStr2.replace("Developer", "Designer")); // Frontend Designer D
console.log(myStr2.repeat(5)); // Frontend Developer DFrontend Developer DFrontend Developer DFrontend Developer DFrontend Developer D

// slice(start, end);
console.log(myStr2.slice(0, 8)); // Frontend
console.log(myStr2.slice(0)); // Frontend Developer D
console.log(myStr2.slice(-5)); // per D
console.log(myStr2.slice(9999)); //

const myStr3 = "    Frontend Developer D    ";

console.log(myStr3.trim()); // remove space left and right -> Frontend Developer D
console.log(myStr3.trimStart()); // remove space left -> Frontend Developer D    ]
console.log(myStr3.trimEnd()); // remove space right ->     Frontend Developer D

const myStr4 = "Frontend";

console.log(myStr4.charAt(1)); // r

// substr -> Lấy ra 1 phần của chuỗi(string)
// substr(index, length) -> index: vị trí, length: số lượng kí tự bạn muốn lấy
console.log(myStr4.substr(1, 5)); // ronte

// substring -> Lấy ra các kí tự của chuỗi(string)
// substring(start index, end index);
console.log(myStr4.substring(1, 5)); // ront

const myStr5 = "    Frontend Developer D     ";
// Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ `Developer D` thành chữ `Developer and Designer`, sau đó repeat 2 lần;
console.log(
    `Result of myStr5: ${myStr5
        .trim()
        .replace("Developer D", "Developer and Designer")
        .toUpperCase()
        .repeat(2)}`
);
// Result of myStr5: FRONTEND DEVELOPER AND DESIGNERFRONTEND DEVELOPER AND DESIGNER
