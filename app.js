const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const restartButton = document.getElementById("restart");
let time=document.getElementById("time");
let input=document.getElementById("demo");
let countdownInterval;
let remainingTime;


startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
restartButton.addEventListener("click", restartTimer);

function startTimer(){
    const timeInput=time;
    const timePart=timeInput.value.split(":");
    const hour=parseInt(timePart[0]);
    const minute=parseInt(timePart[1]);
    const second=parseInt(timePart[2]);
    if(isNaN(hour) || isNaN(minute) || isNaN(second)){
        alert("Invalid Time Format. Please Enter a valid time format[HH:MM:SS]");
    }
    
    
    remainingTime=hour*3600+minute*60+second;
    
    countdownInterval=setInterval(function(){
        if(remainingTime<=0 ){
            clearInterval(countdownInterval);
            input.innerHTML="Time's UP";
        }else{
            const formattedTime = formatTime(remainingTime);
            input.innerHTML= formattedTime;
            remainingTime--;

        }

    },1000);
}

function stopTimer() {
    clearInterval(countdownInterval);
}

function resetTimer() {
    input.innerHTML= "";
    time.value= "";
    remainingTime=0;
    input.innerHTML=" ";

}

function restartTimer(){
    stopTimer();
    startTimer();
}

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
    return (
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
    );
  }



const button = document.querySelector('button')
let hasFocus = false

button.addEventListener('focus', () => hasFocus = true)

const autofocus = () => {
  if (hasFocus) return
  button.focus()
  setTimeout(autofocus, 1000/60)
}

autofocus()