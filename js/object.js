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
    fullname: {
        name: "Su Nguyen",
    },
};
student2.hi();

// optional chaining
// console.log(student2.fullname); // undefined
if (student2.fullname) {
    if (student2.fullname.name) {
        console.log(student2.fullname.name); // Su Nguyen
    }
}
// student2.fullname?.name
console.log(student2.fullname?.name); // Su Nguyen

// destructuring object
// const {} = student2;
const { name, age, male, ...rest } = student2;
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
console.log({ name, age, male }); // name: 'Su', age: 23, male: false}
console.log(name, age, male); // Su 23 false
console.log(rest); // {last-name: 'Nguyen', fullname: {…}, hi: ƒ}

// normal function
function whatYourInfo(name, age, school) {
    console.log(name, age, school);
}
whatYourInfo("Mina", 26, "twice"); // Mina 26 twice

// function with object parameter
function whatYourInfo2(obj) {
    console.log(obj.name, obj.age, obj.school);
}
const newObj = {
    name: "Nayeon",
    age: 28,
    school: "twice",
};
whatYourInfo2(newObj); // Nayeon 28 twice

function whatYourInfo3({ name, age, school }) {
    console.log(name, age, school);
}
whatYourInfo3({
    name: "Nayeon",
    age: 28,
    school: "twice",
}); // Nayeon 28 twice
