// 1. Sự kiện scroll
window.addEventListener(
    "scroll",
    debounceFn(function (e) {
        console.log("scroll");
    }, 25)
);

// 2. Debounce: là kĩ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoảng thời gian đợi, mọi tác động sẽ bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước
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

// 3. window.pageXOffset: khoảng các scroll của window theo chiều dọc
// window.pageYOffset: khoảng các scroll của window theo chiều ngang

// 4. scrollHeight: trả về chiều cao của element bao gồm padding, nhưng không có border
// scrollWidth: trả về chiều rộng của element bao gồm padding, nhưng không có border
// scrollTop
// scrollLeft
const boxed = document.querySelector(".boxed");
boxed.addEventListener("scroll", function () {
    console.log(boxed.scrollTop);
    console.log(boxed.scrollLeft);
});
// scroll(x, y)

// 5. offsetWidth và scrollWidth
// boxed.offsetWidth -> 200
// boxed.scrollWidth -> 600
