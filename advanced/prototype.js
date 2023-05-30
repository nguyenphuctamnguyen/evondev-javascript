// String, Number, Boolean
// String.prototype, Number.prototype
let str = "abc";
str.toUpperCase();

String.prototype.duplicate = function () {
    return this + this;
};
console.log(str.duplicate()); // abcabc

function Girl() {
    this.cook = function () {
        console.log("my girlfriend can cook");
    };
}

Girl.prototype.sing = function () {
    console.log("my girlfriend can sing");
};

Object.prototype.dance = function () {
    console.log("my girlfriend can dance");
};

let ying = new Girl();
ying.cook(); // my girlfriend can cook
ying.sing(); // my girlfriend can sing
ying.dance(); // my girlfriend can dance
