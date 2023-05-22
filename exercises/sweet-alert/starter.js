window.addEventListener("load", function (e) {
    function renderSweetAlert() {
        const template = `<div class="sweet-alert">
        <i class="fa fa-check sweet-icon"></i>
        <p class="sweet-text">Ying can't live without me</p>
        </div>`;
        document.body.insertAdjacentHTML("beforeend", template);
    }

    const button = document.querySelector(".button");
    button.addEventListener("click", function () {
        renderSweetAlert();
        const sweetItem = document.querySelector(".sweet-alert");
        if (sweetItem) {
            setTimeout(function () {
                sweetItem.parentElement.removeChild(sweetItem);
            }, 2000);
        }
    });
});
