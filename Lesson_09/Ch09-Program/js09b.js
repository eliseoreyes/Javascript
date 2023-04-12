"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: Eliceo Reyes
      Date: April 12, 2023  
      
      page 3734

      Filename: js09b.js 
 */

      //Retrieve the text of the query string
      let qString = location.search.slice(1);
      
      //Replace the enconded characters in the query string
      qString = qString.replace(/\+/g, " ");
      qString = decodeURIComponent(qString);
      
      //Split the field=name pairs into separate array items
      let formData = qString.split(/&/g);

      for (let items of formData) {
            let fieldValuePair = items.split(/=/);
            let fieldName = fieldValuePair[0];
            let fieldValue = fieldValuePair[1];

            console.log(items);

            // Create a label containing the field name
            let fieldLabel = document.createElement('label');
            fieldLabel.textContent = fieldName;
            document.getElementById('contactInfo').appendChild(fieldLabel);

            // Create and disabled input box with the field value
            let inputBox = document.createElement('input');
            inputBox.id = fieldName;
            inputBox.name = fieldName;
            inputBox.value = fieldValue;
            inputBox.disabled = true;
            document.getElementById('contactInfo').appendChild(inputBox);      
      }



      

      