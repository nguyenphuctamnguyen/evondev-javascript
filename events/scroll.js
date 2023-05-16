// 1. Sự kiện scroll
window.addEventListener(
    "scroll",
    debounceFn(function (e) {
        console.log("scroll");
    }, 25)
);

// 2. Debounce
function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
