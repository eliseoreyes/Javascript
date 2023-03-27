"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Eliceo Reyes
      Date: March 25, 2023

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// Pattern do not accept white spaces at the beginning of the customer name
let pattern = /^[^\s][a-zA-Z\s]+[^\s]$/;

addButton.addEventListener('click', function(){
   if (pattern.test(customerName.value)) {  
         customers.push(customerName.value);
         status.innerHTML = `Customer ${customerName.value} added to the end of the queue`;
         generateCustomerList();
         //Clear customer Name textBox
         customerName.value = ''; 
   }
});

searchButton.addEventListener('click', function(){

   let place = 0;

   if (pattern.test(customerName.value)) {
      if (customers.indexOf(customerName.value) >= 0) {
         place = customers.indexOf(customerName.value) + 1;
      }
   }

   if (place === 0) {
      status.innerHTML = `Customer ${customerName.value} not found in the queue`;
   }else {
      status.innerHTML = `Customer ${customerName.value} found in the ${place}${getPosition(place)} position`;
   }
});

removeButton.addEventListener('click', function(){

   if (pattern.test(customerName.value)) {
      if (customers.indexOf(customerName.value) !== -1) {
         customers.splice(customers.indexOf(customerName.value), 1);
         status.innerHTML = `Customer ${customerName.value} removed from the queue`;
         generateCustomerList();
      }else {
         status.innerHTML = `Customer ${customerName.value}  is not found in the queue`;
      }
   }
});

topButton.addEventListener('click', function(){

   if (customers.length >= 1) {
      let topCustomer = customers.shift();
      customers.slice(1); // Remove topCustomer from customers
      status.innerHTML = `${topCustomer}  from the queue`;
      generateCustomerList();
   }else {
      topButton.disabled = true;
   }
    
});

function getPosition(num){

   let ordinal = '';

   switch (num % 10 ) {
      case 1 : ordinal = 'st';
         break; 
      case 2 : ordinal = 'nd';
         break;
      case 3 : ordinal = 'rd';
      break;
      default : ordinal = 'th';
   }
   return ordinal;
}