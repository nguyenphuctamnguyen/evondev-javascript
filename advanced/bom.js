// Browser Object Model: alert, prompt, confirm, window
// 1. Location
console.log(location);
console.log(window.location);

// setTimeout(() => {
//     location.href = "https://google.com";
// }, 1000);

// http://127.0.0.1:5500/index.html?type=demo&page=2#title
let params = new URLSearchParams(location.search);

console.log(params); // URLSearchParams {size: 2}

console.log(params.get("type")); // demo
console.log(params.get("page")); // 2

console.log(params.has("page")); // true

console.log(params.set("page", 10));
console.log(params.get("page")); // 10

console.log(params.keys()); // URLSearchParams Iterator {}
for (let i of params.keys()) {
    console.log(i); // type page
}
for (let i of params.values()) {
    console.log(i); // demo 10
}

params.delete("page");

// 2. History
console.log(window.history); // History {length: 10, scrollRestoration: 'auto', state: null}
// history.back(); // quay lại trang trước đó
// history.forward(); // tới trang kế tiếp
// history.go(number); // -1: trang trước, -2: trang trước trang trước, 1: trang sau, 2: trang sau trang sau

// 3. Navigator
console.log(navigator.userAgent); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    } else if (
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};
console.log(deviceType()); // desktop
