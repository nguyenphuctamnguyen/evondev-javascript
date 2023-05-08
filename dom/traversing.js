// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentElement);

// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove()

// 2. nextElementSibling vs previousElementSibling
const nextSpan = span.nextElementSibling;
console.log(nextSpan);

const preLink = span.previousElementSibling;
console.log(preLink);

// 3. childNodes: trả về 1 mảng hết các node bên trong bao gồm textNode vs children: trả về các node không bao gồm textNodes
console.log(span.childNodes); // [text, strong, text]
console.log(span.children); // [strong]

// 4. firstChild vs firstElementChild
console.log(span.firstChild); // #text
console.log(span.firstElementChild); // <strong>

// 5. lastChild vs lastElementChild
console.log(span.lastChild); // #text
console.log(span.lastElementChild); // strong.strong

// 6. nextSibling vs previousSibling
console.log(span.nextSibling); // #text
console.log(span.previousSibling); // #text
