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

// Static method
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(a, b) {
        return a.date - b.date;
    }
}
let articles = [
    new Article("HTML", new Date(2023, 1, 1)),
    new Article("CSS", new Date(2023, 0, 1)),
    new Article("JS", new Date(2023, 11, 1)),
];
// articles.sort((a, b) => a.date - b.date);
// className.methodName
articles.sort(Article.compare);
console.log(articles[0].title); // CSS

// Static property
class Item {
    constructor(name) {
        this.name = name;
        this.constructor.count++;
        // this.constructor.propertyName
    }
    static count = 0;
    static getCount() {
        // className.propertyName
        return Item.count;
    }
}
const pen = new Item("pen");
const pencil = new Item("pencil");
console.log(Item.getCount()); // 2

// Super and extends
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walking() {
        console.log(`walking on ${this.legs} legs`);
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    flying() {
        console.log("i can fly");
    }
}
let bird = new Bird(2);
console.log(bird); // Bird {legs: 2}
console.log(bird.walking()); // walking on 2 legs
console.log(bird.flying()); // i can fly
