// Thêm xóa sửa node trong Javascript
// 1. document.createElement("tag"): tạo ra element
const div = document.createElement("div");

// 2. selector.appendChild
// document.body: thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);

div.classList.add("container");
div.className = "container wrapper";
div.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda neque vitae quod optio sequi non veritatis labore natus officia.";
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "evondev");

// Bài tập tạo ra html như đã minh họa ở file index.html
const card = document.createElement("div");
card.classList.add("card");

const cardImage = document.createElement("img");
// cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.classList.add("card-image");

card.appendChild(cardImage);

body.appendChild(card);

// 3. document.createTextNode
const text = document.createTextNode("Hello Ying");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);
