// [1,2,3,4,5]
// index = 2
// value = 3
function linearSearch(arr, value) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) index = i;
    }
    return index;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));
