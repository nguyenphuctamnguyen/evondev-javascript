// 1. Cho 1 mảng gồm nhiều giá trị [1,1000,false,null,'sucute','',undefined,'javascript',[1,2,3]]. Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefined false "" NaN
const arr = [
    1,
    1000,
    false,
    null,
    "sucute",
    "",
    undefined,
    "javascript",
    [1, 2, 3],
];
const filterFalsy = arr.filter(Boolean);
console.log(filterFalsy); // [1, 1000, 'sucute', 'javascript', [1, 2, 3]]

// 2. Cho 1 mảng phức tạp [[1,2,3,[false,null]],[1,5,6,['javascript']],[888,666,[90]]]. Và kết quả mong muốn là [1,2,3,false,null,1,5,6,'javascript',888,666,90]
const complexArr = [
    [1, 2, 3, [false, null]],
    [1, 5, 6, ["javascript"]],
    [888, 666, [90]],
];
// flatten array
// flat(number)
const result = complexArr.flat(2);
console.log(result); // [1, 2, 3, false, null, 1, 5, 6, 'javascript', 888, 666, 90]

// 3. Đảo ngược số nguyên. Vd: 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number) {
    const value =
        parseInt(number.toString().split("").reverse().join("")) *
        Math.sign(number);
    console.log(value);
}
reverseNumber(-1234); // -4321
reverseNumber(1234); // 4321

// 4. Viết chương trình fizzBuzz với input là số nguyên, và cho chạy từ 1 tới số nguyên đó rồi kiểm tra nếu số chia hết cho 2 thì in ra "Fizz", nếu số chia hết cho 3 thì in ra "Buzz", nếu số chia hết cho 2 và 3 thì in ra "FizzBuzz"
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Buzz");
        } else if (i % 2 === 0) {
            console.log("Fizz");
        }
    }
}
fizzBuzz(15);
