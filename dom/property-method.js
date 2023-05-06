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
