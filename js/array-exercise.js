// 1. Đảo ngược 1 chuỗi. Vd: "My name is Su" -> "Su is name My"
function reverseString(str) {
    if (!str) return null;

    // const arr = str.split(" "); // ['My', 'name', 'is', 'Su']
    // const reverseArr = arr.reverse(); // ['Su', 'is', 'name', 'My']
    // return reverseArr.join(" "); // Su is name My

    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Su")); // Su is name My

// 2. Đảo ngược 1 chuỗi bao gồm các kí tự. Vd: "My name is Su" -> "uS si eman yM"
function reverseString2(str) {
    if (!str) return null;

    // const arr = str.split(" "); // ['My', 'name', 'is', 'Su']
    // const reverseArr = arr.reverse(); // ['Su', 'is', 'name', 'My']
    // const newReverseArr = reverseArr.map((item) =>
    //     item.split("").reverse().join("")
    // );
    // return newReverseArr.join(" "); // uS si eman yM

    return (arrStr = str
        .split(" ")
        .map((item) => item.split("").reverse().join(""))
        .reverse()
        .join(" "));
}
console.log(reverseString2("My name is Su")); // uS si eman yM
