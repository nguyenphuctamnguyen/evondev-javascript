window.addEventListener("load", function () {
    const song = document.querySelector("#song");
    const playerImage = document.querySelector(".player-image");

    const playBtn = document.querySelector(".player-play");
    const prevBtn = document.querySelector(".player-prev");
    const nextBtn = document.querySelector(".player-next");

    const playerDuration = document.querySelector(".player-duration");
    const remaining = document.querySelector(".player-remaining");
    const progressBar = document.querySelector("#progress-bar");

    const list = ["holo.mp3", "summer.mp3", "home.mp3", "spark.mp3"];
    let songIndex = 0;
    let playing = true;

    playBtn.addEventListener("click", handleMusicPlay);

    function handleMusicPlay() {
        if (playing) {
            song.play();
            playerImage.classList.add("is-playing");
            playBtn.classList.add("fa-pause");
            playing = false;
        } else {
            song.pause();
            playerImage.classList.remove("is-playing");
            playBtn.classList.remove("fa-pause");

            playing = true;
        }
    }

    nextBtn.addEventListener("click", function () {
        handleChangeMusic(1);
    });
    prevBtn.addEventListener("click", function () {
        handleChangeMusic(-1);
    });
    song.addEventListener("ended", function () {
        handleChangeMusic(1);
    });

    function handleChangeMusic(dir) {
        if (dir === 1) {
            songIndex++;
            if (songIndex > list.length - 1) {
                songIndex = 0;
            }
        } else if (dir === -1) {
            songIndex--;
            if (songIndex < 0) {
                songIndex = list.length - 1;
            }
        }
        song.setAttribute("src", `./files/${list[songIndex]}`);
        playing = true;
        handleMusicPlay();
    }

    song.addEventListener("ended", function () {
        handleChangeMusic(1);
    });
    // song.duration -> fulltime of song
    function displayTimer(params) {
        // const duration = song.duration;
        // const currentTime = song.currentTime;
        const { duration, currentTime } = song;
        progressBar.max = duration;
        progressBar.value = currentTime;
        remaining.textContent = formatTimer(currentTime);
        if (!duration) {
            playerDuration.textContent = "0:00";
        } else {
            playerDuration.textContent = formatTimer(duration);
        }
    }
    function formatTimer(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    progressBar.addEventListener("change", handleDragProgressBar);

    function handleDragProgressBar(params) {
        song.currentTime = progressBar.value;
    }

    displayTimer();
    const timer = setInterval(displayTimer, 500);
});
