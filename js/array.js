const a = "a";
const b = "b";
const c = "c";
const d = "d";

// 2 cách tạo mảng:
// array literal
const students1 = [];
// array constructor
const students = new Array();

// ví dụ 1 mảng
// [0, false, undefined, null, 'su', ['su', false, 100, [...]]]

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

// length: trả về độ dài mảng
console.log(twice.length); //9

// reverse(): đảo ngược giá trị trong mảng
console.log(twice.reverse()); //['Tzuyu', 'Chaeyoung', 'Dahyun', 'Mina', 'Jihyo', 'Sana', 'Momo', 'Jeongyeon', 'Nayeon']

// join: nối các phần tử trong mảng thành chuỗi
console.log(twice.join()); //Tzuyu,Chaeyoung,Dahyun,Mina,Jihyo,Sana,Momo,Jeongyeon,Nayeon
console.log(twice.join("")); //TzuyuChaeyoungDahyunMinaJihyoSanaMomoJeongyeonNayeon
console.log(twice.join("-")); //Tzuyu-Chaeyoung-Dahyun-Mina-Jihyo-Sana-Momo-Jeongyeon-Nayeon

// includes: kiểm tra mảng có chứa phần tử nào đó không
console.log(twice.includes("mina")); //false
console.log(twice.includes("Mina")); //true

// indexOf: trả về vị trí phần tử tìm thấy đầu tiên
console.log(twice.indexOf("Tzuyu")); //0

// lastIndexOf: trả về vị trí phần tử tìm thấy cuối cùng
console.log(twice.lastIndexOf("Tzuyu")); //0

// push: thêm phần tử vào cuối mảng
console.log(twice.push("twice")); //10
console.log(twice); //['Tzuyu', 'Chaeyoung', 'Dahyun', 'Mina', 'Jihyo', 'Sana', 'Momo', 'Jeongyeon', 'Nayeon', 'twice']

// unshift: thêm phần tử vào đầu mảng
console.log(twice.unshift("hi")); //11
console.log(twice); //['hi', 'Tzuyu', 'Chaeyoung', 'Dahyun', 'Mina', 'Jihyo', 'Sana', 'Momo', 'Jeongyeon', 'Nayeon', 'twice']

// pop: xóa phần tử cuối mảng
console.log(twice); //['hi', 'Tzuyu', 'Chaeyoung', 'Dahyun', 'Mina', 'Jihyo', 'Sana', 'Momo', 'Jeongyeon', 'Nayeon', 'twice']
twice.pop();
console.log(twice); //['hi', 'Tzuyu', 'Chaeyoung', 'Dahyun', 'Mina', 'Jihyo', 'Sana', 'Momo', 'Jeongyeon', 'Nayeon']

// shift: xóa phần tử đầu mảng
console.log(twice); //['hi', 'Tzuyu', 'Chaeyoung', 'Dahyun', 'Mina', 'Jihyo', 'Sana', 'Momo', 'Jeongyeon', 'Nayeon']
twice.shift();
console.log(twice); //['Tzuyu', 'Chaeyoung', 'Dahyun', 'Mina', 'Jihyo', 'Sana', 'Momo', 'Jeongyeon', 'Nayeon']
