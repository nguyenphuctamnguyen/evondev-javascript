// 1. Viết function so sánh 2 số a, b tìm ra số lớn hơn

function compare(a = 0, b = 0) {
    // if (a > b) {
    //     console.log(`${a} > ${b}`);
    // } else if (a < b) {
    //     console.log(`${b} > ${a}`);
    // } else {
    //     console.log(`${a} = ${b}`);
    // }
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Please enter a valid number");
        return 0;
    }
    return Math.max(a, b);
}
// console.log(compare("aaa"));

// 2. In hoa chữ cái đầu trong ví dụ: mina -> Mina, NAYEON -> Nayeon

function capitalize(a = "") {
    if (a.length === 0) return null;
    a = a.toLowerCase();
    a = a.replace(a.charAt(0), a.charAt(0).toUpperCase());
    return a;
}
// console.log(capitalize("myoUI"));

// 3. Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên

function useCallback(a, b, callback) {
    let max = compare(a, b);
    callback(max);
}

function printMax(number) {
    console.log("Max number is " + number);
}

console.log(useCallback(12, 23, printMax));