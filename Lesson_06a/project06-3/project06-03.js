"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Eliceo Reyes
      Date: March 13, 2023

      Filename: project06-03.js
*/

let useShip = document.getElementById('useShip');

useShip.addEventListener('click', copyShippingToBilling);

function copyShippingToBilling(){

      let nodeListShip = document.getElementById('shipping').childNodes;
      let nodeListBill = document.getElementById('billing').childNodes;

      // If useShip == checked, copy shipping adddress to billing address
      if (useShip.checked) {
            //Retrieve all nodes from shipping element
            for (let x = 0; x < nodeListShip.length; x++) {
                  //Retrieve all nodes from billing element
                  for (let i = 0; i < nodeListBill.length; i++) {
                        // Filter only the text and select types
                        if ((nodeListShip[x].type == "text" && nodeListBill[i].type == "text") || (nodeListShip[x].type == "select-one" && nodeListBill[i].type == "select-one")){
                              //In order to match the elements to assign the values, the name portion [Bill, Ship] of each element is removed
                              if (nodeListShip[x].name.substring(0,nodeListShip[x].name.length-4) == nodeListBill[i].name.substring(0,nodeListBill[i].name.length-4)) {
                                    // Assign values from shipping elements to billing elements
                                    document.getElementById(nodeListBill[i].name).value = document.getElementById(nodeListShip[x].name).value; 
                              }
                        }
                  }
            }
      } else {
            for (let i = 0; i < nodeListBill.length; i++) {
                  if (nodeListBill[i].type == "text"){
                        document.getElementById(nodeListBill[i].name).value  = '';                       
                  }
            }
      }
}

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById('errorBox');

for (let x = 0; x < formElements.length; x++) {
      formElements[x].addEventListener('invalid', showValidationError);
}

function showValidationError(ev){
      ev.preventDefault();
      errorBox.textContent = "Complete all highlighted fields";
}


       