// 1. Sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
console.log(i, j); // 2 1

let a = 1;
let b = ++a;
console.log(a, b); // 2 2

// 2. Lưu ý khi return function
function total(x, y) {
    return; // undefined
    x + y;
}

// 3. 2 cách chuyển đổi dữ liệu mới
const str = "123";
// sang number
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str);
// sang boolean
console.log(!!str); // true
console.log(!!""); // false

// 4. arguments
function number(a, b, c) {
    // console.log(arguments); // Arguments(3) [1, 2, 3]
    // console.log(arguments[2]); // 3
    // console.log(typeof arguments); // object
    if (!arguments.length) console.log("plz insert your arguments");
    // convert to array
    const args = Array.from(arguments);
    const args2 = [...arguments];
    return a + b + c;
}
number(1, 2, 3);
number(); // plz insert your arguments

// 5. closure in loop
for (var z = 1; z < 5; z++) {
    setTimeout(function () {
        console.log(z); // 4 lần 5
    }, 1000);
}
// var -> hoisting
// scope của var sau mỗi vòng lặp không thay đổi

for (let z = 1; z < 5; z++) {
    setTimeout(function () {
        console.log(z); // 1 2 3 4
    }, 1000);
}
// let -> not hoisting
// scope của let thay đổi sau mỗi vòng lặp

// 6. Sự khác nhau giữa localStorage và sessionStorage
// localStorage.getItem("abc") // vẫn còn khi đóng trình duyệt
// sessionStorage.getItem("abc") // mất khi đóng trình duyệt
