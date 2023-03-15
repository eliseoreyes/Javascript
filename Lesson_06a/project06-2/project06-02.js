"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Eliceo Reyes
      Date:  March 13, 2023 

      Filename: project06-02.js
*/

window.addEventListener("load", function(){
     
      //let allSelect = document.querySelectorAll('select[class="optionLinks"]');

      let allSelect = document.querySelectorAll('form[name="govLinks"]');

      for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].addEventListener("change", function(ev){
                  window.open((ev.target.value));
            });
      }

});

