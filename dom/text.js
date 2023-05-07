// textContent
const spinner = document.querySelector("#spinner");
console.log(spinner.textContent); // Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
// asperiores fugiat hello world
// soluta est animi ad nam enim et culpa veritatis?

// Thay đổi text content
// spinner.textContent = "Hello new content";
// console.log(spinner.textContent); // Hello new content

// innerText
console.log(spinner.innerText); // Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores fugiat soluta est animi ad nam enim et culpa veritatis?

// innerHTML: lấy ra nội dung của selector bao gồm cả HTML
console.log(spinner.innerHTML); // Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
// asperiores fugiat <strong class="demo" style="display: none;">hello world</strong>
// soluta est animi ad nam enim et culpa veritatis?
spinner.innerHTML = `<div class="demo"> Hello html</div>`;
console.log(spinner.innerHTML); // <div class="demo"> Hello html</div>
