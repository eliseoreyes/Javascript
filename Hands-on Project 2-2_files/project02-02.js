/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Eliceo Reyes
      Date: Wednesday, February 1, 2023.

      Filename: project02-02.js
 */
 

function verifyForm(){
      
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;

      (name  && email  && phone  ) ? alert("Thank you!") : alert('Please fill in all fields');

}

document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('submit');
      btn.addEventListener('click', verifyForm());
});
