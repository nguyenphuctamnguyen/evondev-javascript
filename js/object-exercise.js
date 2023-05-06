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
