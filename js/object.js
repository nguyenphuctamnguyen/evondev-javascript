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
