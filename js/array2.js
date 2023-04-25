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

// splice: xóa hoặc thay thế phần tử trong mảng
const members = [
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

// splice(start)
// const members2 = members.splice(0);
// console.log(members2); //['Nayeon', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu']

// splice(start, deleteCount)
// const members3 = members.splice(0, 1);
// console.log(members); //['Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu']

// splice(start, deleteCount, items[])
const members4 = members.splice(0, 1, "twice");
console.log(members); //['twice', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu']
