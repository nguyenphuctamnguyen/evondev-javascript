// object literal
const objectLiteral = {};

// object constructor
const objectConstructor = new Object();

const student = {
    name: "Su",
    age: 23,
    male: false,
    "last-name": "Nguyen",
    hi: function () {
        console.log("hello su");
    },
};
// Dot notation (object.key)
console.log(student.name); // Su
// Bracket notation (["key"])
console.log(student["age"]); // 23
console.log(student["last-name"]); // Nguyen

student.age = 22;
console.log(student.age); // 22
student.isDeveloper = true;

delete student.hi;
console.log(student); // {name: 'Su', age: 22, male: false, last-name: 'Nguyen', isDeveloper: true}

for (let key in student) {
    const value = student[key];
    console.log(`${key}: ${value}`);
}

// Object.keys(object): trả về 1 mảng chứa tất cả key của object
const keys = Object.keys(student);
console.log(keys); // ['name', 'age', 'male', 'last-name', 'isDeveloper']

// Object.values(object): trả về 1 mảng chứa tất cả value của object
const values = Object.values(student);
console.log(values); // ['Su', 22, false, 'Nguyen', true]

// Object.entries(object): trả về 1 mảng nested gồm key và value
const entries = Object.entries(student);
console.log(entries); // [['name', 'Su'], ['age', 22], ['male', false],['last-name', 'Nguyen'], ['isDeveloper', true]]

// Object.assign(object, object,...): gộp nhiều object thành 1 object
const a = {
    firstName: "nguyen",
};
const b = {
    lastName: "nguyen",
};
const c = Object.assign(a, b);
console.log(c); // {firstName: 'nguyen', lastName: 'nguyen'}
const d = { ...a, ...b };
console.log(d); // {firstName: 'nguyen', lastName: 'nguyen'}

// Object.freeze(object): ngăn chặn chỉnh sửa key và value của object
const car = {
    brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar); // {brand: 'BMW'}

// Object.seal(object): cho phép chỉnh sửa key value nhưng không được thêm key value mới
const user = {
    userName: "su",
    school: {
        name: "tdt",
        room: {
            name: "it",
        },
    },
};
// const newUser = Object.seal(user);
// newUser.userName = "sumyoui";
// newUser.lastName = "sucute";
// console.log(newUser); // {userName: 'sumyoui'}

// Clone object thường
const newUser = { ...user };
console.log(newUser);

const newUser2 = Object.assign({}, user);
console.log(newUser2);

// Clone object nested
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "tdt2";
console.log(newUser3);

// this keyword: đề cập tới object gần nhất
const student2 = {
    name: "Su",
    age: 23,
    male: false,
    "last-name": "Nguyen",
    hi: function () {
        console.log(`My name is ${this.name} and i'm ${this.age}`); // My name is Su and i'm 23
    },
};
student2.hi();
