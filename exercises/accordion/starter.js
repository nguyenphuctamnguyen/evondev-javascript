const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
);

function handleClickAccordion(e) {
    // console.log(e.target);
    const content = e.target.nextElementSibling;
    // scrollHeight: chieu cao cua phan tu bao gom padding
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle("is-active");

    if (!content.classList.contains("is-active")) {
        content.style.height = "0px";
    }

    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-up");
    icon.classList.toggle("fa-angle-down");
}
