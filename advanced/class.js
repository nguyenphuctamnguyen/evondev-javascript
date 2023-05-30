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
    getName() {
        console.log(this.name);
    }
}
const su = new Person2("su");
su.getName(); // su
