/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Eliceo Reyes
      Date: Wednesday, February 1, 2023

      Filename: project02-04.js
 */
 
      //const variables
      const CHICKEN_PRICE = 10.95; 
      const HALIBUT_PRICE = 13.95; 
      const BURGER_PRICE = 9.95;
      const SALMON_PRICE = 18.95;
      const SALAD_PRICE = 7.95;
      const SALES_TAX = 0.07;
  

      document.addEventListener('DOMContentLoaded', function() {
        
         //Event handler...
          document.getElementById('chicken').addEventListener('change', function(){calcTotal()}, false);
          document.getElementById('halibut').addEventListener('change', function(){calcTotal()}, false);
          document.getElementById('burger').addEventListener('change', function(){calcTotal()}, false);
          document.getElementById('salmon').addEventListener('change', function(){calcTotal()}, false);
          document.getElementById('salad').addEventListener('change', function(){calcTotal()}, false);

      });

      // Function to calculate total cost of a purchase.
      function calcTotal(){

         var cost = 0;
         var tax = 0;
         var totalCost = 0;
         
         let buyChicken = document.getElementById('chicken').checked;
         let buyHalibut = document.getElementById('halibut').checked;
         let buyBurger = document.getElementById('burger').checked;
         let buySalmon = document.getElementById('salmon').checked;
         let buySalad = document.getElementById('salad').checked;

         buyChicken ? cost += CHICKEN_PRICE : cost += 0;
         buyHalibut ? cost += HALIBUT_PRICE : cost += 0;
         buyBurger ? cost += BURGER_PRICE : cost += 0;
         buySalmon ? cost += SALMON_PRICE : cost += 0;
         buySalad ? cost += SALAD_PRICE : cost += 0;

          tax = cost * SALES_TAX;
          totalCost = cost + tax;

          document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

          document.getElementById('foodTax').innerHTML = formatCurrency(tax);
    
          document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);
       
      }

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

