function bubbleSort(array) {
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            let num = arr[j];
            let next = arr[j + 1];
            if (num > next) {
                // const temp = arr[j + 1];
                // arr[j + 1] = arr[j];
                // arr[j] = temp;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

const arr = [1, 3, 6, 2, 89, 1000, 2, 6, 7, 99];
console.log(bubbleSort(arr));
