console.log(2 + 3); //5
console.log(typeof 10); //number

const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); //5
console.log(parseFloat(number2)); //4.8

console.log(Math.abs(-10)); //10

console.log(Math.floor(4.3)); //4
console.log(Math.ceil(4.3)); //5

console.log(Math.round(4.3)); //4
console.log(Math.round(4.5)); //5

console.log(Math.random()); //random từ 0 -> 1
console.log(Math.ceil(Math.random() * 10)); //random từ 0 -> 10

console.log(Math.max(1, 3, 999, -200)); //999
console.log(Math.min(1, 3, 999, -200)); //999

console.log(Math.pow(3, 2)); //3^2 = 9

console.log((1 / 3).toFixed(2)); // => string

//NaN: not a number
console.log(isNaN("this is a string")); //true
console.log(isNaN("123")); //false
console.log(isNaN(123)); //false

console.log(Number.isNaN("this is a string")); //false
console.log(Number.isNaN("123")); //false
console.log(Number.isNaN(NaN)); //true