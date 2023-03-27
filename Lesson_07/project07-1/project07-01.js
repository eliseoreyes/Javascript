"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Eliceo Reyes
      Date: March 25, 2023

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
      
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   e.preventDefault();

   let regex1 = /[A-Z]/;

   let regex2 = /[0-9]/;

   let regex3 = /[#?!$%]/

   // Test password //$Password01

   if (!/.{8,}/.test(pwd)) {
      feedback.innerHTML = 'Your password must be at least 8 characters';  
   }else if (!regex1.test(pwd)){
      feedback.innerHTML = 'Your password must include an uppercase letter.';  
   }else if (!regex2.test(pwd)) {
      feedback.innerHTML = 'Your password must include a number';
   }else if (!regex3.test(pwd)) {
      feedback.innerHTML = 'Your password must include one of the following: !$#%';
   }else {
      signupForm.submit();
   }

}
);