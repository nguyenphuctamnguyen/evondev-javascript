// selector.getAttribute("attribute"): lấy ra giá trị của attribute selector
// selector: 1 cái
// attribute: src, href, style, id, class,...
const link = document.querySelector(".link");
console.log(link.getAttribute("href")); // evondev.com

const li = document.querySelectorAll(".item");
// li.getAttribute("class"); // li.getAttribute is not a function
li.forEach((item) => {
    console.log(item.getAttribute("class"));
}); // item item1
// item item2
// item item3
// item item4
// item item5

// selector.setAttribute("attribute", value): set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");

const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target", "_blank"));

// selector.removeAttribute("attribute"): xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");

// selector.hasAttribute("attribute"): kiểm tra selector có attribute nào đó không, nếu có -> true, ngược lại -> false
console.log(p.hasAttribute("class")); // false
console.log(p.hasAttribute("id")); // true
