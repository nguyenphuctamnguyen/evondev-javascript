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
