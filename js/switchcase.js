const fruit = "lemon";

switch (fruit) {
    case "apple":
        console.log("You like to eat apple");
        break;
    case "watermelon":
    case "lemon":
        console.log("You like to eat lemon and watermelon");
        break;
    default:
        console.log("You like to eat orange");
        break;
}

//////////////////////////////

const number = "500";
switch (Number(number)) {
    case 500:
        console.log("500");
        break;

    default:
        break;
}

//Ternary operator

const yourAge = 12;
let message = "";

if (yourAge >= 18) {
    message = "You are an adult";
} else {
    message = "You are a child";
}
console.log(message);

// condition ? true : false

let message2 = yourAge >= 18 ? "You are an adult" : "You are a child";
console.log(message2);

let message3 =
    yourAge >= 18 ?
    "You are an adult" :
    yourAge <= 10 ?
    "You are a child" :
    "You are a young boy";

console.log(message3);