const min = document.getElementById("min");
const sec = document.getElementById("sec");
const reset = document.getElementById("reset");
const start = document.getElementById("start");

let s = 1;
let m = 1;
let interval;

const minUpdate = () => {
    setTimeout(() => {
        min.innerHTML = m;
        m++; 
    }, 1000);
};

const startTimer = () => {
    if (start.innerHTML == "Start") { // Timer is paused, we have to start it
        start.innerHTML = "Pause";
        interval = setInterval(() => {
            sec.innerHTML = s;
            s++;
            if (s == 60) {
                s = 0;
                minUpdate();
            }
        }, 1000);
    }
    else { // timer is running, we have to pause it
        start.innerHTML = "Start";
        clearInterval(interval);
    }
};

start.addEventListener("click", startTimer);

const resetTimer = () => {
    clearInterval(interval);
    min.innerHTML = "";
    sec.innerHTML = "";
    s = 1;
    m = 1;
    start.innerHTML = "Start";
};

reset.addEventListener("click", resetTimer);