// [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59]

function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1; // 15
    while (low <= high) {
        const midIndex = Math.floor((low + high) / 2); // 7
        const midValue = list[midIndex]; // 23
        if (midValue === item) return midIndex;

        if (midValue > item) {
            high = midIndex - 1;
        } else {
            low = midIndex + 1; // 8
        }
    }
    return null;
}

console.log(
    binarySearch(
        [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59],
        37
    )
); //10
