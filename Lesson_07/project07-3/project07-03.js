"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Eliceo Reyes
      Date: March 25, 2023  

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countDown, 1000);

function countDown(){

      let now = new Date();

      let newYear = new Date("January 1, 2024");

      let nextYear = now.getFullYear() + 1;

      newYear.setFullYear(nextYear);

      // Perform the calculations to determine the days, hours, minutes, and seconds left until the New Year:
      let daysLeft = (newYear - now ) / (1000 * 60 * 60 * 24); 
      let hrsLeft  = (daysLeft % 1 ) * 24;
      let minsLeft = (hrsLeft % 1 ) * 60;
      let secsLeft = (minsLeft % 1 ) * 60;

      // Display the results in the web page clock:
      daysLeftBox.innerHTML = Math.floor(daysLeft);
      hrsLeftBox.innerHTML = Math.floor(hrsLeft);
      minsLeftBox.innerHTML = Math.floor(minsLeft);
      secsLeftBox.innerHTML = Math.floor(secsLeft);
      
      currentTime.innerHTML = now.toLocaleString();
}