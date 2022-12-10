var min = 0;
var sec = 0;
var miliSec = 0;

var interval;

var displayMin = document.getElementById('displayMin');
var displaySec = document.getElementById('displaySec');
var displayMiliSec = document.getElementById('displayMiliSec');

function timer() {
    miliSec++;
    if (miliSec == 10) {
        miliSec = 0;
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
    }
    displayMiliSec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}
function startTimer() {
    interval = setInterval(function () {
        timer();
    }, 100);
}
function pauseTimer() {
    clearInterval(interval);
}
function resetTimer() {
    pauseTimer();
    min = 0;
    sec = 0;
    miliSec = 0;
    displayMiliSec.innerHTML = miliSec;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
}