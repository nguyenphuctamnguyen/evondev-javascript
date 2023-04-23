// if else

const isRich = false;
const myMoney = 100000;
if (isRich) {
    console.log("I will buy a new car");
} else if (myMoney > 1000) {
    console.log("I will give you some money");
} else {
    console.log("I'm poor");
}

//prompt, alert, confirm

alert("Hello!");
const yourName = prompt("Please input your username", "Mina");
console.log(yourName);
const isYourMoney = confirm("Is this your money?");
console.log(isYourMoney);

// Bài tập: Nhập tuổi và ktra nếu tuổi >= 18 thì được coi rạp, ngược lại ko đc coi

const yourAge = prompt("Please input your age!", "");
let message = "Sorry you can't watch this movie!";

if (Number(yourAge) >= 18) {
    message = "You can watch this movie";
}

alert(message);

// Cho 2 số a, b. Tìm số lớn hơn

const a = 10;
const b = 10;

if (a > b) {
    alert(`Số lớn hơn là số ${a}`);
} else if (b > a) {
    alert(`Số lớn hơn là số ${b}`);
} else {
    alert("Hai số bằng nhau");
}