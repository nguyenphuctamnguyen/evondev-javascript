// 1. Bind
const student = {
    firstName: "Lee",
    lastName: "ChiaoYing",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

const button = document.querySelector(".button");
button.addEventListener("click", student.fullName); // undefined undefined
button.addEventListener("click", student.fullName.bind(student)); // Lee ChiaoYing

// $
const selector = document.querySelector.bind(document);
const selectors = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const button2 = selector(".button"); //<button class="button">Call to action</button>
const button3 = $(".button"); //<button class="button">Call to action</button>
button2.addEventListener("click", student.fullName.bind(student)); // Lee ChiaoYing
button3.addEventListener("click", student.fullName.bind(student)); // Lee ChiaoYing

function log(level, time, message) {
    console.log(`${level} ${time} ${message}`);
}

// function logErrToday(message) {
//     log("Error", "Today", message);
// }

// logErrToday("Server OK!");
// partial function
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");

// 2. Call and Apply
const person = {
    firstName: "Lee",
    lastName: "ChiaoYing",
};
function sayHello(str1, str2) {
    console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}
// function.call(this, arg1, arg2,...)
sayHello.call(person, "Hello", "good morning"); // Hello good morning Lee ChiaoYing

// function.apply(this, [arg1, arg2,...])
sayHello.apply(person, ["Hello", "good morning"]); // Hello good morning Lee ChiaoYing

const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
arr.push.apply(arr, arr2);
console.log(arr); // [1, 2, 3, 2, 3, 4]
