const button = document.querySelector(".change");
const colors = ["#ffa400", "#00aefd", "#07a787", "#2979ff", "#e74c3c"];

button.addEventListener("click", handleChangeColor);

function handleChangeColor() {
    // document.body.setAttribute("style", "background-color:red");
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
}
