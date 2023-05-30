// ES6
// Constructor/prototype way
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    console.log(this.name);
};

const ying = new Person("ying");
ying.getName(); // ying

// Class
class Person2 {
    constructor(name) {
        this.name = name;
    }
    // getName() {
    //     return this.name;
    // }
    get name() {
        return this._name;
    }
    // setName(newName) {
    //     this.name = newName;
    // }
    set name(newName) {
        return (this._name = newName);
    }
}
const su = new Person2("su");
// console.log(su.getName()); // su

// su.setName("nguyen");
// console.log(su.getName()); // nguyen

console.log(su.name); // su
su.name = "nguyen";
console.log(su.name); // nguyen

// Class expression
let Student = class {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        return (this._name = newName);
    }
};
const mina = new Student("mina");
console.log(mina.name); // mina

function company(aClass) {
    return new aClass();
}
let hello = company(
    class {
        sayHello() {
            console.log("Hello");
        }
    }
);
hello.sayHello(); // Hello
