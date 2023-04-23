const now = new Date(); //in ra ngày giờ hiện tại

console.log(now); //Sat Jun 11 2022 17:47:33 GMT+0700 (Giờ Đông Dương)

// Timezone: GMT+0700 (Giờ Đông Dương)
// Second: 33
// Minute: 47
// Hour: 17
// Year: 2022
// Month: Jun
// Day: 11
// Day of the week: Sat

// Timestamp & Epoch time
// Unix time

// timestamp tính ra kết quả là millisecond
console.log(now.getTime()); //print timestamp 1655625002767
console.log(new Date(0)); //Thu Jan 01 1970 08:00:00 GMT+0800 (Indochina Time)

// new Date() -> in ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
// new Date(date string) ->
// new Date(year, month, day, hour, minute, second, millisecond)

// Các hàm get trong Date
const birthday = new Date(2000, 6, 22);
console.log(birthday);
console.log(birthday.getFullYear()); //2000
console.log(birthday.getMonth()); //6
console.log(birthday.getDate()); //22
console.log(birthday.getDay()); //6 => thứ bảy6 (0:chủ nhật - 6:thứ bảy)
console.log(birthday.getHours()); //0
console.log(birthday.getMinutes()); //0
console.log(birthday.getSeconds()); //0
console.log(birthday.getMilliseconds()); //0
console.log(birthday.getTime());

// Các hàm set trong Date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2001);
birthday.setMonth(8);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday after update: ${birthday}`);

// UTC
console.log(birthday.getUTCFullYear());

//
console.log(now.toDateString()); //Sun Jun 26 2022
console.log(now.toTimeString()); //21:20:20 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString()); //m/dd/yyyy -> 6/26/2022
console.log(now.toLocaleDateString("vi-VI")); // 26/6/2022
console.log(now.toISOString()); //2023-04-23T21:22:21.536Z
