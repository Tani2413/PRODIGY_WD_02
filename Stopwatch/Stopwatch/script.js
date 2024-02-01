let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let intervalId = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(intervalId);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(intervalId);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateTimerDisplay();
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    updateTimerDisplay();
}

function updateTimerDisplay() {
    let h = formatTimeUnit(hours);
    let m = formatTimeUnit(minutes);
    let s = formatTimeUnit(seconds);
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
}
