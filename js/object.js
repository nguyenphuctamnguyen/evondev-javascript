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

// Object.keys(): trả về 1 mảng chứa tất cả key của object
const keys = Object.keys(student);
console.log(keys); // ['name', 'age', 'male', 'last-name', 'isDeveloper']

// Object.values(object): trả về 1 mảng chứa tất cả value của object
const values = Object.values(student);
console.log(values); // ['Su', 22, false, 'Nguyen', true]
