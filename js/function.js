function sum(a = 0, b = 0) {
    return a + b;
}

console.log(sum(2, 3)); //5
console.log(sum(1)); //1
console.log(sum()); //0

///////////////

function add(a = 0, b = 0) {
    return a + b;
}

const sum2 = add;

function average(a, b, fn) {
    const total = fn(a, b);
    return total / 2;
}

let result = average(200, 300, sum2);
console.log(result); //250

///////////Anonymous function//////
// khong bi hoisting

const logName = function() {
    console.log("your name");
};
logName();

/////////IIFE function -> immediately invoked function execution

(function() {
    console.log("this is IIFE function");
})();

//////////Scope

let myName = "Mina"; //global scope

function logYourName() {
    let myName2 = "Nayeon"; //function scope
}

if (2 > 1) {
    // let message = "Hello Mina"; //block scope
    const message = "Hello Mina"; //block scope
    var message2 = "Hello Nayeon"; //var ko phai block scope vi bi hoisting
    alert(message);
}
alert(message2);

let aNewName = "Klee"; //global scope
function sayHello() {
    let message3 = "Hi"; //local scope
    console.log(`${message3} ${aNewName}`);
}
sayHello();

//////////Closure
//function con có thể truy xuất scope của function cha

// //parents function
// function sayHello2() {
//     let message4 = "Hi";

//     //inner function
//     function sayHi() {
//         console.log(message4);
//     }
//     return sayHi;
// }
// let hello = sayHello2();
// hello();

function sayHello3(message) {
    return function hiYourName(name) {
        console.log(`${message} ${name}`);
    };
}
let hello = sayHello3("Welcome, ");
hello("Baby"); //Welcome, Baby

function anotherFunction() {
    let otherMessage = "Hello";

    function sayHi() {
        console.log(otherMessage);
    }
    return sayHi;
}
let callFunc = anotherFunction(); //otherMessage is no longer accessible
callFunc();

/////// Arrow function: anonymous function
// ECMAScript

// Normal function: anonymous function
const square = function(x) {
    return x * x;
};
square(5); //25

// Arrow function
const square2 = (x) => {
    return x * x;
};