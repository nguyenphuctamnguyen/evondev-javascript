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
