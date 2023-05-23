window.addEventListener("load", function () {
    const passwordInput = document.querySelector(".input");
    passwordInput.addEventListener("input", function (e) {
        const value = e.target.value;
        const checkItems = e.target.parentNode.querySelector(".check-item");
        const checkLengthClass =
            e.target.parentNode.querySelector(".check-length");
        const checkUpperClass =
            e.target.parentNode.querySelector(".check-upper");
        const checkNumberClass =
            e.target.parentNode.querySelector(".check-number");
        const checkSpecialClass =
            e.target.parentNode.querySelector(".check-special");

        if (!value) {
            [...checkItems].forEach((item) => {
                item.classList.remove("active");
                item.classList.remove("inactive");
            });
            return;
        }

        if (value.length < 8) {
            checkLengthClass.classList.add("inactive");
            checkLengthClass.classList.remove("active");
        } else {
            checkLengthClass.classList.add("active");
            checkLengthClass.classList.remove("inactive");
        }

        // if (!/[A-Z]/.test(value)) {
        //     checkUpperClass.classList.add("inactive");
        //     checkUpperClass.classList.remove("active");
        // } else {
        //     checkUpperClass.classList.add("active");
        //     checkUpperClass.classList.remove("inactive");
        // }

        // if (!/[0-9]/.test(value)) {
        //     checkNumberClass.classList.add("inactive");
        //     checkNumberClass.classList.remove("active");
        // } else {
        //     checkNumberClass.classList.add("active");
        //     checkNumberClass.classList.remove("inactive");
        // }

        // if (!/[$@%^&*(){}[!\]]/.test(value)) {
        //     checkSpecialClass.classList.add("inactive");
        //     checkSpecialClass.classList.remove("active");
        // } else {
        //     checkSpecialClass.classList.add("active");
        //     checkSpecialClass.classList.remove("inactive");
        // }

        passwordInputValidation(checkUpperClass, value, /[A-Z]/);
        passwordInputValidation(checkNumberClass, value, /[0-9]/);
        passwordInputValidation(checkSpecialClass, value, /[$@%^&*(){}[!\]]/);
    });

    function passwordInputValidation(selector, value, regex) {
        if (!regex.test(value)) {
            selector.classList.add("inactive");
            selector.classList.remove("active");
        } else {
            selector.classList.add("active");
            selector.classList.remove("inactive");
        }
    }
});
