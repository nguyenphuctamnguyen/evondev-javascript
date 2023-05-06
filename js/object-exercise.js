// 1. Viết function kiểm tra value có phải object không
function isObject(value) {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}
console.log(isObject({})); // true
console.log(isObject([])); // false
console.log(isObject(null)); // false

// 2. Viết function trả về key value
// {a: 1, b: 2} -> [["a", 1], ["b", 2]]
function objectToArray(obj) {
    if (!isObject(obj)) return;

    // return Object.entries(obj);

    // const value = Object.keys(obj).map((key) => [key, obj[key]]);
    // return value;

    let result = [];
    for (let key in obj) {
        // hasOwnProperty(key) -> nếu object chứa key trả về true, ngược lại trả về false
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}
console.log(objectToArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]

// 3. ({ a: 1, b: 2 }, "b") => {a: 1}
function without(obj, ...key) {
    const newObj = { ...obj };
    key.forEach((item) => {
        delete newObj[item];
    });
    return newObj;
}
console.log(without({ a: 1, b: 2 }, "b")); // {a: 1}
console.log(without({ a: 1, b: 2 }, "a")); // {b: 2}
console.log(without({ a: 1, b: 2 }, "a", "b")); // {}

// 4. { a: 1, b: 2 }, { a: 1, b: 2 } -> true
// 4. { a: 1, b: 2 }, { a: 1, b: 2, c: 3 } -> false
function isEqualObj(obj1, obj2) {
    // check keys length
    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);
    if (objkey1.length !== objkey2.length) return false;

    // check values
    const result = objkey1.every((key) => obj1[key] === obj2[key]);
    return result;
}
console.log(isEqualObj({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(isEqualObj({ a: 1, b: 2 }, { a: 1 })); // false
console.log(isEqualObj({ a: 1, b: 2 }, { a: 1, b: 5 })); // false
