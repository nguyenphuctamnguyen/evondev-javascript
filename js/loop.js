const numbers = [1, 2, 3, 4, 5];

// 1. Sao chép mảng dùng vòng lặp for
let copyArr = [];
for (let i = 0; i < numbers.length; i++) {
    copyArr.push(numbers[i]);
}
console.log(copyArr); // [1, 2, 3, 4, 5]

// 2. Đảo ngược từ "i love" -> "evol i"
let str = "i love";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
}
console.log(reverseStr); // evol i

// while (condition) {
//     body code
// }
let number = 1;
while (number < 10) {
    console.log("number is " + number);
    number += 1;
}

// do while
// do {
//     body code
// } while (condition);
let number2 = 1;
do {
    number2++;
    console.log("number is " + number2);
} while (number2 < 10);

// for of
// for (const value of object) {
//     body code
// }
let a = [];
for (let value of numbers) {
    value += 10;
    a.push(value);
}
console.log(a); // [11, 12, 13, 14, 15]

for (let c of "sucute") {
    console.log(c);
}
