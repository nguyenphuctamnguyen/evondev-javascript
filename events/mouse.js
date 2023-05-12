const button = document.querySelector(".button");

// mousemove, , ,
button.addEventListener("mousemove", function () {
    // console.log("mousemove");
});

// mouseover: nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó
button.addEventListener("mouseover", function () {
    // console.log("mouseover");
});

// mouseenter: nó sẽ chạy khi rê chuột vào phần tử
button.addEventListener("mouseenter", function () {
    console.log("mouseenter");
});

// mouseleave: nó sẽ chạy khi rê chuột vào phần tử rồi rê ra ngoài
button.addEventListener("mouseleave", function () {
    console.log("mouseleave");
});
