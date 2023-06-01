let x = 10;
function timesTen(a) {
    return a * 10;
}
let y = timesTen(x);
console.log(y); // 100

//- Global execution context
// the creation phase
/**
 * global object: window
 * this: window
 * x: undefined
 * timesTen: function(){}
 * y: undefined
 */
// the execution phase
/**
 * global object: window
 * this: window
 * x: 10
 * timesTen: function(){}
 * y: timesTen(x) -> 100
 */

//- Function execution context
// the creation phase
/**
 * global object: arguments
 * this: window
 * a: undefined
 */
// the execution phase
/**
 * global object: arguments
 * this: window
 * a: 10
 */
