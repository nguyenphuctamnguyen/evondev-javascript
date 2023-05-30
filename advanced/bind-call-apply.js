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
