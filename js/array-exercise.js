// 1. Đảo ngược 1 chuỗi. Vd: "My name is Su" -> "Su is name My"
function reverseString(str) {
    if (!str) return null;

    // const arr = str.split(" "); // ['My', 'name', 'is', 'Su']
    // const reverseArr = arr.reverse(); // ['Su', 'is', 'name', 'My']
    // return reverseArr.join(" "); // Su is name My

    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Su")); // Su is name My
