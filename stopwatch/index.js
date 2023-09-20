let displayTime = document.getElementById("displayTime");
let [hour, minute, second] = [0, 0, 0];
let timer = null;

function stopwatchStart(){
    second++;
    if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
        } 
    }
    let h = hour > 0 ? (hour < 10 ? "0" + hour :hour) + ":" : "";
    let m = (hour > 0 || minute > 0) ? (minute < 10 ? "0" + minute : minute) + " m :" : "";
    let s = second < 10 ? "0" + second : second;
    displayTime.innerHTML = h + m+  + s+" s";
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatchStart, 1000);
}

function watchPause(){
    clearInterval(timer);
    timer = null; 

    
}

function watchReset(){
    clearInterval(timer);
    [hour, minute, second] = [0, 0, 0];
    displayTime.innerHTML = "00";
}
