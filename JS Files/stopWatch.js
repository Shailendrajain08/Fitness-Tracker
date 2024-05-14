const resetButton = document.getElementsByClassName("reset")[0];
const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0]


let isPlay = false
let minCounter = 0;
let min;
let secCounter = 0;
let sec;
let msecCounter = 0;
let centiSec;
let isReset = false

function toggleButton() {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

function play() {
    if (!isPlay && !isReset) {
        playButton.innerHTML = 'Pause';
        min = setInterval(() => {
            minute.innerText = `${++minCounter} :`;
        }, 60 * 1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0
            }
            second.innerText = `${++secCounter} :`
        }, 1000);
        centiSec = setInterval(() => {
            if (msecCounter === 100) {
                msecCounter = 0;
            }
            centiSecond.innerText = `${++msecCounter}`
        }, 10);
        isPlay = true
    } else {
        playButton.innerHTML = 'Play'
        clearInterval(min)
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false
        isReset = false
    }
    toggleButton();
}

function reset() {
    isReset = true
    play()
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    minute.innerHTML = '0 :'
    second.innerHTML = '0 :'
    centiSecond.innerHTML = '0'
}

function lap() {
    const li = document.createElement("li")
    const number = document.createElement("span")
    const timeStamp = document.createElement("span")

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "timestamp");

    timeStamp.innerHTML = ` ${minCounter} : ${secCounter} : ${msecCounter}`

    li.append(number, timeStamp);
    laps.append(li)
}

function clearAll () {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.clearList.add("hidden")
}


playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
lapButton.addEventListener("click", lap)
clearButton.addEventListener("click", clearAll)