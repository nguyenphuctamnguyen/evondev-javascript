// document.title: thẻ title của trang web
console.log(document.title); // Javascript
document.title = "Welcome Ying";

// document.head: thẻ head của trang web
console.log(document.head); // <head></head>
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(meta);

// C2
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

// insertBefore
// parentNode.insertBefore(newnode, existingnode)
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// insertAdjacentElement
// document.querySelector("h3").insertAdjacentElement("beforebegin", ul);
