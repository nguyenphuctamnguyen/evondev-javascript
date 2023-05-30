// Declaration, new, this, method, caution
let student = {
    name: "ying",
    age: 22,
};
// Constructor function Person Student
function Student(name, age) {
    // this = {}
    // add properties to this
    this.name = name;
    this.age = age;

    this.getName = function () {
        return `your name is ${this.name}`;
    };
    // return this
}
let student2 = new Student("su", 22);
console.log(student2); // Student {name: 'su', age: 22}
console.log(student2.getName()); // your name is su

// Prototype
