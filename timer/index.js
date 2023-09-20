let displayTime = document.getElementById("displayTime");
let [hour, minute, second] = [5, 15, 60];
let timer = null;

function timerStart(){
    second--;
    if(second <= 0){
        second = 60;
        minute--;
        if(minute <=0){
            minute = 59;
            hour--;
            if (hour < 0) {
                hour = 0;
            }
        } 
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function startshow(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(timerStart, 1000);
}

function pauseshow() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    [hour, minute, second] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}
function setCustomTime() {
    let hourInput = document.getElementById("hourInput").value;
    let minuteInput = document.getElementById("minuteInput").value;
    let secondInput = document.getElementById("secondInput").value;


   

    [hour, minute, second] = [parseInt(hourInput), parseInt(minuteInput), parseInt(secondInput)];

    displayTime.innerHTML = `${hourInput.toString().padStart(2, '0')}:${minuteInput.toString().padStart(2, '0')}:${secondInput.toString().padStart(2, '0')}`;
}