function wait(timer) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, timer);
    });
}

// function expression
async function run() {
    console.log("starting");
    await wait(2000);
    console.log("running");
    await wait(1000);
    console.log("ending");
}
// run();

// arrow function
const fn = async () => {};

const student = {
    fullname: async function () {},
    async calcAge() {},
    yearly: async () => {},
};

function makeTimer(timer = 1000, str) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(str);
        }, timer);
    });
}
async function allTimer() {
    const timer1 = makeTimer(1000, "first time");
    const timer2 = makeTimer(2000, "second time");
    const [a, b] = await Promise.all([timer1, timer2]);
    console.log(a, b);
    // console.log(timer1);
    // console.log(timer2);

    // const timer3 = makeTimer(3000, "third time");
}
// allTimer();

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
function handleError(err) {
    console.log(err);
}
async function go() {
    // try {
    const dev1 = await isFrontendDev(["css"]);
    console.log(dev1);
    // } catch (error) {
    //     console.log(error);
    // }

    return dev1;
}
// console.log(go());
go()
    // .then()
    .catch(handleError);
