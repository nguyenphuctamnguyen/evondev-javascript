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

// sort: sắp xếp các phần tử trong mảng
const random = [1, 9999, 10, 5, 09];
console.log(random.sort()); // [1, 10, 5, 9, 9999]

// sort(function(a, b))
//function(callback)

// value > 0 -> sắp xếp tăng dần
// value < 0 -> sắp xếp giảm dần
// value = 0 -> giữ nguyên

const random2 = random.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
});
console.log(random2); // [1, 5, 9, 10, 9999]

const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3); // [1, 5, 9, 10, 9999]

const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4); // [9999, 10, 9, 5, 1]

const random5 = random.sort((a, b) => (a > b ? 0 : 1));
console.log(random5); // [1, 9999, 10, 5, 9]

// find: trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const numbers = [1, 9999, 100000, 5, 09];

// tìm phần tử đầu tiên lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
console.log(findYourNumber); // 9999
// nếu không tìm thấy thì trả ra kết quả là undefined

// findIndex: trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findYourNumberIndex = numbers.findIndex((element) => element > 10);
console.log(findYourNumberIndex); // 1
// nếu không tìm thấy thì trả ra kết quả là -1

// map: duyệt qua từng phần tử và trả ra 1 mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// trả ra mảng mới mà các giá trị trong mảng cũ nhân 2
const listNumberDouble = listNumber.map(function (value, index, array) {
    return value * 2;
});
console.log(listNumberDouble); // [2, 4, 6, 8, 10]

// forEach:
const listNumberTriple = listNumber.forEach((value, index, array) => {
    return value * 3;
});
console.log(listNumberTriple); // undefined

// Sự khác nhau giữa map và forEach:
// map: có return, trả ra 1 mảng mới
// forEach: không có return, không trả ra 1 mảng mới, không dừng
