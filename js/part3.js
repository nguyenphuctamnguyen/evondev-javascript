// Number(value)

console.log(Number("4.5")); //4.5
console.log(Number("4")); //4
console.log(Number("string")); //NaN
console.log(Number(undefined)); //NaN
console.log(Number(NaN)); //NaN
console.log(Number(null)); //0
console.log(Number("")); //0
console.log(Number(false)); //0
console.log(Number(true)); //1

// String(value)

console.log(String(4.5)); //"4.5"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String(NaN)); //"NaN"
console.log(String(false)); //"false"
console.log(String(true)); //"true"

// Boolean(value)

console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(false)); //false
console.log(Boolean("abc")); //true

// Type coercion

console.log(10 + 10); //20
console.log(10 + "10"); //1010
console.log("10" + 10); //1010
console.log("10" - 10); //0
console.log(null + ""); //"null"
console.log(null + undefined); //NaN
console.log("" - 1); //-1
console.log(false - true); //-1
console.log(null + 10); //10

// Toán tử so sánh

console.log(5 > 7); //false
console.log(50 > 7); //true
console.log(5 >= 5); //true
console.log(5 <= 5); //true

// Toán tử logic cơ bản

console.log(5 > 3 && 8 > 3); //true
console.log(5 > 7 && 8 > 3); //false
console.log(5 > 7 || 8 > 3); //true
console.log(!true); //false
console.log(!false); //true

// Boolean &&
// false && true -> false
// true && false -> false
// false && false -> false
// true && true -> true

// Boolean ||
// false || true -> true
// true || false -> true
// true || true -> true
// false || false -> false

// == vs ===
console.log(10 == "10"); //true
console.log(true == 1); //true
console.log(1 == "01"); //true
console.log(null == ""); //false
console.log(10 === "10"); //false
console.log(10 !== "10"); //true
console.log(true == "true"); //false