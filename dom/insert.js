// 1. insertAdjacentText("position","text")
// position: beforebegin, afterbegin, beforeend, afterend
const h3 = document.querySelector("h3");
// h3.insertAdjacentElement("beforebegin", "begin");
h3.insertAdjacentHTML("beforebegin", "begin");
h3.insertAdjacentHTML("afterbegin", "afterbegin");
h3.insertAdjacentHTML("beforeend", "beforeend");
h3.insertAdjacentHTML("afterend", "afterend");
