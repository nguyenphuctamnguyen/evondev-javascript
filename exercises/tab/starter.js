const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));

function handleTabClick(event) {
    // console.log(event.target);

    // Xóa hết tất cả class active ở các tab-item
    [...tabItems].forEach((item) => item.classList.remove("active"));

    // Sau đó add class active vào tab hiện tại
    event.target.classList.add("active");

    const tabNumber = event.target.dataset.tab;
    console.log(tabNumber);

    [...tabContents].forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("data-tab") === tabNumber) {
            item.classList.add("active");
        }
    });
    // [...tabContents][tabNumber - 1].classList.add("active");
}

// window.addEventListener("load", function () {
//     const tabs = document.querySelectorAll(".tab-item");
//     const tabsContent = document.querySelectorAll(".tab-content");

//     function handleChangeTab(e) {
//         const tabId = e.target.dataset.tab;
//         tabs.forEach((el) => el.classList.remove("active"));
//         e.target.classList.add("active");
//         tabsContent.forEach((el) => {
//             el.classList.remove("active");
//             if (el.getAttribute("data-tab") === tabId) {
//                 el.classList.add("active");
//             }
//         });
//     }

//     tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
// });
