"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-03

      Project to retrieve order history from a web server
      Author: Eliceo Reyes
      Date: May 11, 2023   

      Filename: project11-03.js
*/

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");


// Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function() {

   let user = userIDBox.value;
   let pwd = pwdBox.value;

   fetch(`http://localhost/mJS-P3/wworders.pl?id=${user}&pwd=${pwd}`)
   .then(response =>  response.json())
   .then(json => {
      buildOrderTable(json)
   })
   .catch(err => {console.error(err)})
}


// Function to display order history within web tables
function buildOrderTable(obj) {

      if (obj.status === "Orders Not Found") {
            orderResult.innerHTML = "No orders found for this user id and password";
      } else {

            let htmlCode = `<table id="summary">
                              <tr>
                                <th>Name</th>
                                <td>${obj.username}</td>
                              </tr>
                              <tr>
                                <th>Total Charges</th>
                                <td>${obj.totalCharges}</td>
                              </tr>
                            </table>`;

            for (let items of obj.orderHistory) {
                  htmlCode += `<table class="orderList">
                                    <tr>
                                          <th colspan="2">${items.orderDate}</th>
                                          <th colspan="2">${items.orderCost}</th>
                                    </tr>
                                    <tr>
                                          <th>Description</th>
                                          <th>Qty</th>
                                          <th>Price</th>
                                          <th>Total</th>
                                    </tr>`;
                  for (let products of items.products) {
                        htmlCode += `<tr>
                                          <td>${products.description}</td>
                                          <td>${products.qty}</td>
                                          <td>${products.price}</td>
                                          <td>${products.total}</td>
                                    </tr>`;
                  }
                  htmlCode += `</table>`;
            }

            orderResult.innerHTML = htmlCode;
      }
}

