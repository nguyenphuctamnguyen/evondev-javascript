// By value vs. By references
// By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true

// By references -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

// JSON: Javascript Object Notation
// JSON.stringify(value) -> convert giá trị sang dưới dạng JSON string
/**
 * {
 *      "key": value,
 *      "key": value,
 *      "key": value,
 *      "key": value,
 * }
 */
// .toString()
// [1,2,3].toString() -> "1,2,3"

// JSON.stringify([1,2,3]) -> "[1,2,3]"
// JSON.parse("[1,2,3]") -> [1,2,3]
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));

const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // true

// 2 cách clone:
const students = ["a", "b", "c", "d", "e"];
// students.pop();
// console.log(students); // ['a', 'b', 'c', 'd']

// 1) sử dụng phương thức slice()
const sliceStudents = students.slice();
console.log(sliceStudents); // ['a', 'b', 'c', 'd', 'e']

// 2) spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents); // ['a', 'b', 'c', 'd', 'e']

// 2 cách gộp mảng:
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

// 1) concat
// array1.concat(array2, array3, arrayN)
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray); // [1, 2, 3, 4, 5, 6]

// 2) spread operator [...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2); // [1, 2, 3, 4, 5, 6]

// Destructuring array
const twice = [
    "Nayeon",
    "Jeongyeon",
    "Momo",
    "Sana",
    "Jihyo",
    "Mina",
    "Dahyun",
    "Chaeyoung",
    "Tzuyu",
];
const a = twice[0]; // Nayeon
const b = twice[1]; // Jeongyeon
const c = twice[2]; // Momo
console.log(a, b, c); // Nayeon Jeongyeon Momo

// const [indexName, indexName, indexName] = twice;
const [x, y, z] = twice;
console.log(x, y, z); // Nayeon Jeongyeon Momo
