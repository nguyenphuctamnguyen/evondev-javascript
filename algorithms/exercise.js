// 1. arrayReplace
// [1,2,3,1,1] -> [5,2,3,5,5]
function arrayReplace(array, elementToReplace, newElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToReplace) {
            array[i] = newElement;
        }
    }
    return array;
}
console.log(arrayReplace([1, 2, 3, 1, 1], 1, 5)); // [5,2,3,5,5]

// 2. Palindrome
// aaBAA -> AABaa -> Palindrome
// aaBAc -> cABaa -> not Palindrome
function isPalindrome(str) {
    const newStr = str.toLowerCase();

    // C1
    // const reverseStr = newStr.split("").reverse().join("");
    // C2
    let reverseStr = "";
    for (let i = newStr.length - 1; i >= 0; i--) {
        reverseStr += newStr[i];
    }

    return newStr === reverseStr;
}
console.log(isPalindrome("aaBAA")); // true
console.log(isPalindrome("cABaa")); // false

// 3. Array Chunking
// [1,2,3,4,5,6,7,8], 3
// [[1,2,3],[4,5,6],[7,8]]
function chunk(array, size) {
    let result = [];
    for (let index = 0; index < array.length - 1; index += size) {
        const element = array[index];
        result.push(array.slice(index, index + size));
    }
    return result;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1,2,3],[4,5,6],[7,8]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1,2],[3,4],[5,6],[7,8]]
