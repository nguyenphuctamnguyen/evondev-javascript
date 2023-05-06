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
