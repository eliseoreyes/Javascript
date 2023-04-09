"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Eliceo Reyes
      Date: April 4, 2023   
355
      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function timer(min, sec){
      this.minutes = min;
      this.seconds = sec;
      this.timerId = null;
}


timer.prototype.runPause = function(timer, minBox, secBox){
  
      if (timer.timerId){
            window.clearInterval(timer.timerId);
            timer.timerId = null;
      }else {  
           timer.timerId =  window.setInterval(countDown, 1000);
      }

      function countDown(){
            if (timer.seconds > 0) {
                  timer.seconds -= 1;
            } else if (timer.minutes > 0) {
                  timer.minutes -= 1;
                  timer.seconds = 59;
            }else {
                  window.clearInterval(timer.timerId);   
                  timer.timerId = null;
            }
      
            minBox.value = timer.minutes;
            secBox.value = timer.seconds;
            
      }
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new timer(minBox.value, secBox.value);

minBox.addEventListener('change', function(){
        myTimer.minutes = minBox.value;
});

secBox.addEventListener('change', function(){
       myTimer.seconds = secBox.value;
});

runPauseTimer.addEventListener('click', function(){
      myTimer.runPause(myTimer,minBox, secBox);
});