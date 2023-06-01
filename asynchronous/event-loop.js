// single thread
function task(message) {
    let number = 100000;
    while (number > 0) {
        number--;
    }
    console.log(message);
}
// console.log("Start");
// task("Loading");
// console.log("End");

// main
// Call stack
/**
 * Start ->
 * task ->
 * End
 */

// Callbacks
console.log("Start");
// Start ->
setTimeout(() => {
    task("Loading");
}, 2000);
// Rời khỏi call stack và chạy qua web api -> Callback queue -> khi call stack empty -> chạy xong -> rời khỏi call stack
console.log("End"); // chạy xong -> rời khỏi call stack

// Web APIs: setTimeout, fetch request
