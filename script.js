const timer = document.getElementById("stopWatch");
var hr=0;
var min=0;
var sec=0;
var starttime = true;

// Start stopwatch function
function startTimer(){
    if(starttime == true){
        starttime=false;
        timerCycle();
    }
}

// Stop stopwatch function
function stopTimer(){
    if(starttime == false){
        starttime=true;
    }
}

// timer function this function call in starttimer function
function timerCycle(){
    if(starttime == false){
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);
        sec=sec+1;

        if(sec==60)
        {
            min=min+1;
            sec=0;
        }
        if(hr==60)
        {
            hr=hr+1;
            sec=0;
            min=0;
        }

        if(sec<10){
            sec="0"+sec
        }
        if(min<10){
            min="0"+min
        }
        if(hr<10){
            hr="0"+hr
        }
        
        timer.innerHTML=hr+":"+min+":"+sec;

        setTimeout("timerCycle()",1000);
    }

}

// stopwatch reset function
function resetTimer(){
    timer.innerHTML="00:00:00";
    sec=0;
    min=0;
    hr=0;
    starttime=true;
}

