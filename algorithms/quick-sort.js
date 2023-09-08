function quickSort(arr) {
    const list = [...arr];
    if (list.length < 2) return list;
    const pivot = list[0];
    const smaller = list.filter((item) => item < pivot);
    const bigger = list.filter((item) => item > pivot);
    console.log({ smaller, bigger });
    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

const arr = [1, 3, 6, 2, 89, 1000, 2, 6, 7, 99];
console.log(quickSort(arr));
