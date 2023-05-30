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

// 7. Các trường hợp không nên sử dụng arrow function
// event handlers
const input = document.querySelector(".input");
input.addEventListener("keyup", function () {
    console.log(this.value);
});
input.addEventListener("keyup", () => {
    console.log(this.value); // undefined vì arrow function không có this
});

// object
const student = {
    counter: 0,
    increment() {
        return ++this.counter;
    },
};
console.log(student.increment()); // 1

const student2 = {
    counter: 0,
    increment: () => {
        return ++this.counter;
    },
};
console.log(student2.increment()); // NaN vì arrow function không có this

// 8. Đệ quy (recursive)
function countDown(number) {
    console.log(number);
    let other = number - 1;
    if (other > 0) {
        countDown(other);
    }
    // if (condition) stop recursive else run recursive
}
countDown(3); // 3 2 1

// [1, 2, 3, 3, 4, 5, 2, 3, 2, 3, 5, 9999, 1, 2]
const complexArr = [
    [1, 2, 3],
    [3, 4, 5],
    [
        [2, 3],
        [2, 3, 5, [9999]],
        [1, 2],
    ],
];
console.log(complexArr.flat(Infinity)); // [1, 2, 3, 3, 4, 5, 2, 3, 2, 3, 5, 1, 2]
// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] -> a.concat(b)
// [1,2,3].slice()
function flatArray(arr, depth) {
    const result =
        depth > 0
            ? arr.reduce(
                  (a, val) =>
                      a.concat(
                          Array.isArray(val) ? flatArray(val, depth - 1) : val
                      ),
                  []
              )
            : arr.slice();
    return result;
}
console.log(flatArray(complexArr, Infinity)); // [1, 2, 3, 3, 4, 5, 2, 3, 2, 3, 5, 9999, 1, 2]

// 9. Set
const mySet = new Set();

mySet.add(1);
mySet.add(1);
mySet.add("ying");
console.log(mySet); // {1, 'ying'}

mySet.has(1); // true

mySet.delete(1);
console.log(mySet); // {'ying'}

console.log(mySet.size); // 1

mySet.clear();
console.log(mySet.size); // 0

const arr = [1, 2, 3, 4, 1, 1, 1, 3, 3, 3, 5, 5, 7, 8];
// -> [1, 2, 3, 4, 5, 7, 8]
// array to set
const mySet2 = new Set(arr);
console.log(mySet2); // {1, 2, 3, 4, 5, 7, 8}
// set to array
const newArr = Array.from(mySet2);
// const newArr = [...mySet2];
console.log(newArr); // [1, 2, 3, 4, 5, 7, 8]

// cách khác
let result = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!result.includes(element)) {
        result.push(element);
    }
}
console.log(result); // [1, 2, 3, 4, 5, 7, 8]

// for of
for (let item of mySet2) {
    console.log(item); // 1 2 3 4 5 7 8
}

// 10. Debugger in vsc
// for (var z = 1; z < 5; z++) {
//     setTimeout(function () {
//         console.log(z);
//     }, 1000);
// }
