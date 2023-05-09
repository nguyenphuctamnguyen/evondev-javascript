function createNotification(title = "Welcome to notification") {
    const template = `
    <div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
        </p>
    </div>
    </div>`;
    document.body.insertAdjacentHTML("afterbegin", template);
}
const randomData = [
    "Welcome Ying thui",
    "Welcome Ying heo",
    "Welcome Ying xau",
    "Welcome Ying map",
];
let lastTitle;

const timer = setInterval(function () {
    const item = document.querySelector(".noti");
    if (item) item.parentNode.removeChild(item);
    // lấy ra random title trong mảng randomData
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    if (lastTitle !== title) {
        createNotification(title);
    }
    lastTitle = title;
}, 8000);
