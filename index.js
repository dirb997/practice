const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const restartBtn = document.querySelector('#restartBtn');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;

let paused = true;
let interval;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener('click', () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(actualTime, 75);
    }
});
stopBtn.addEventListener('click', () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(interval);
    }

});
restartBtn.addEventListener('click', () => {
    paused = true;
    clearInterval(interval);

    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;

    timeDisplay.textContent = "00:00:00";

} );

function actualTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60) % 60));
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60) % 60));


    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
    function pad(unit) {
        return (('0') + unit).length > 2 ? unit : '0' + unit;
    }
}