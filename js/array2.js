const twice = [
    "Nayeon",
    "Jeongyeon",
    "Momo",
    "Sana",
    "Jihyo",
    "Mina",
    "Dahyun",
    "Chaeyoung",
    "Tzuyu",
];

// slice(): tạo ra 1 mảng copy của mảng ban đầu
const twice2 = twice.slice();
console.log(twice2); //['Nayeon', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu']

// slice(start): start -> vị trí index trong mảng
const twice3 = twice.slice(1);
console.log(twice3); //['Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu']

// slice(start, end): sao chép từ index start -> end - 1
const twice4 = twice.slice(1, 3);
console.log(twice4); //['Jeongyeon', 'Momo']

const twice6 = twice.slice(-1);
const twice7 = twice.slice(-3);
console.log(twice6); //['Tzuyu']
console.log(twice7); //['Dahyun', 'Chaeyoung', 'Tzuyu']
