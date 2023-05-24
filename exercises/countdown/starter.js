window.addEventListener("load", function () {
    const daysText = document.querySelector(".days");
    const hoursText = document.querySelector(".hours");
    const minutesText = document.querySelector(".minutes");
    const secondsText = document.querySelector(".seconds");

    function countdown(date) {
        const endDate = new Date(date).getTime();
        let currentDate = new Date().getTime();

        if (isNaN(endDate) || endDate - currentDate <= 0) return;
        setInterval(calculate, 1000);

        function calculate() {
            let days, hours, minutes, seconds;
            // Wed May 29 2023 08:10:03 GMT+0700 (Indochina Time) // 1685322603000
            const now = new Date();
            // convert to timestamp
            const startDate = now.getTime(); // 1684890719881

            // remaining time calculate to seconds
            let remainingTime = parseInt((endDate - startDate) / 1000);
            if (remainingTime > 0) {
                // 1 day = 24 * 60 * 60
                days = parseInt(remainingTime / 86400);
                remainingTime = remainingTime % 86400;
                // 1 hour = 60 * 60
                hours = parseInt(remainingTime / 3600);
                remainingTime = remainingTime % 3600;
                // 1 minute = 60
                minutes = parseInt(remainingTime / 60);
                remainingTime = remainingTime % 60;
                // 1 second = 1
                seconds = parseInt(remainingTime);

                daysText.textContent = `0${days}`.slice(-2);
                hoursText.textContent = `0${hours}`.slice(-2);
                minutesText.textContent = `0${minutes}`.slice(-2);
                secondsText.textContent = `0${seconds}`.slice(-2);
            } else {
                return;
            }
        }
    }
    countdown("Wed May 29 2023 08:10:03 GMT+0700 (Indochina Time)");
});
