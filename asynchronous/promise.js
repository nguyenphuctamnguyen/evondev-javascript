/**
 * status: pending
 * status: resolve
 * status: reject
 */

// new Promise(function(resolve, reject))
// let buyPhone = true;
// let willBuyPhone = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (buyPhone) {
//             resolve("have new phone");
//             console.log("ok");
//         } else {
//             reject("dont have new phone");
//             console.log("not ok");
//         }
//     }, 5000);
// });
// console.log(willBuyPhone);

// .then(onfulfilled, onrejected)
function makePromise(buyPhone) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (buyPhone) {
                resolve("have new phone");
            } else {
                reject("dont have new phone");
            }
        }, 5000);
    });
}
// onfulfilled -> resolve
// onrejected -> reject
let havePhone = makePromise(true);
havePhone
    .then(
        (success) => {
            console.log(success);
            // console.log("im happy");
        }
        // (reason) => console.log(reason)
    )
    // catch
    .catch((error) => {
        console.log(error);
        // console.log("im happy");
    })
    // finally
    .finally(() => {
        console.log("im happy");
    });

// Exercise
new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("run first time");
    }, 3000);
})
    .then((data) => {
        console.log(data);
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve("run second time");
            }, 1000);
        });
    })
    .then((data) => {
        console.log(data);
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve("run third time");
            }, 1000);
        });
    })
    .then((data) => {
        console.log(data);
    });

// Promise.all:
// trả về resolve khi tất cả promise truyền vào đều resolve
// trả về reject khi có 1 promise nào đó reject
function makeTimer(timer = 1000, str) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(str);
        }, timer);
    });
}
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
    console.log(data); // ['first time', 'second time', 'third time']
});

// Promise.race: lấy promise chạy nhanh nhất
const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
    console.log(data); // first time
});

// Promise.allSettled
function isFrontendDev(languages) {
    return new Promise(function (resolve, reject) {
        if (!languages.includes("html")) {
            reject("not fe dev");
        }
        setTimeout(() => {
            resolve("fe dev");
        }, 1000);
    });
}
const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => {
//     console.log(data);
// });
// const devRace = Promise.race([dev1, dev2]).then((data) => {
//     console.log(data);
// });
const devAllSettled = Promise.allSettled([dev1, dev2]).then((data) => {
    console.log(data); // [{status: 'fulfilled', value: 'fe dev'}, {status: 'rejected', reason: 'not fe dev'}]
});
