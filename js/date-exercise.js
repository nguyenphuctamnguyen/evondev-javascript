const now = new Date();
console.log(now);
// 1. Viết chương trình nhập năm sinh in ra số tuổi

// const yourBirthYear = prompt("Nhập năm sinh ", "");
// const yourAge = now.getFullYear() - yourBirthYear;
// console.log(yourAge);

function getAge(year = 2000) {
    if (typeof year !== "number") return 0;
    const now = new Date();
    const currentYear = now.getFullYear();
    return currentYear - year;
}
const yourAge = getAge(2000);
console.log(`Năm nay bạn ${yourAge} tuổi`);

// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian

// const timeOut = function () {
//     const timeLeft = parseInt(prompt("Nhập thời gian còn lại", "")) * 1000;
//     setTimeout(function () {
//         alert("Hết thời gian làm bài");
//     }, timeLeft);
// };
// timeOut();

function countdown(minutes = 1) {
    let seconds = minutes * 60;
    let counter = 0;
    const timer = setInterval(function () {
        counter += 1;
        // console.log(counter);
        if (counter === seconds) {
            clearInterval(timer);
            console.log("Your time is out!");
        }
    }, 1000);
}
countdown(1);
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại. Ví dụ: bạn đang chat với A, sau đó A offline và sau đó vài phút thì hiển thị A vừa online '3 phút trước', '3 ngày trước', '2 tháng trước', '30 giây trước', '1 năm trước'

function timeSince(date) {
    //current time - date
    const now = new Date();
    const yourDate = new Date(date);

    const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); // in ra số giây
    // console.log(seconds);

    // 1 năm = 365 * 24 * 60 * 60 = 31536000
    // 1 tháng = 31 * 24 * 60 * 60 = 2678400
    // 1 tuần = 7 * 24 * 60 * 60 = 604800
    // 1 ngày = 1 * 24 * 60 * 60 = 86400
    // 1 giờ = 60 * 60 = 3600
    // 1 phút = 1 * 60 = 60

    let timer = seconds / 31536000;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} năm trước`);
        return;
    }
    timer = seconds / 2678400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tháng trước`);
        return;
    }
    timer = seconds / 604800;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tuần trước`);
        return;
    }
    timer = seconds / 86400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} ngày trước`);
        return;
    }
    timer = seconds / 3600;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} giờ trước`);
        return;
    }
    timer = seconds / 60;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} phút trước`);
        return;
    }
    if (timer > 1) {
        console.log(`${Math.floor(timer)} giây trước`);
    }
    return;
}
timeSince("Mon Apr 24 2023 05:20:38 GMT+0700 (Indochina Time)");
